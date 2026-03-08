'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3">
      <header
        className={`
          mx-auto max-w-7xl rounded-2xl px-5 md:px-8 py-3
          backdrop-blur-xl border border-white/[0.08]
          transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-[#06091F]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/[0.12]'
            : 'bg-[#06091F]/40 shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
          }
        `}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative h-9 w-9 mr-2.5 rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-accent/40 transition-all duration-300">
              <Image
                src="/retro-brawl-logo.webp"
                alt="Retro Brawl APK Logo"
                width={36}
                height={36}
                className="object-contain"
                priority={true}
                fetchPriority="high"
              />
            </div>
            <span className="text-accent text-lg md:text-xl font-bold tracking-tight group-hover:text-white transition-colors duration-300">
              Retro Brawl APK
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/download-retro-brawl-apk', label: 'Download' },
              { href: '/retro-brawl-for-pc', label: 'For PC' },
              { href: '/retro-brawl-for-ios', label: 'For iOS' },
              { href: '/retro-brawl-apk-about-us', label: 'About Us' },
              { href: '/blog', label: 'Blog' },
              { href: '/retro-brawl-apk-contact-us', label: 'Contact Us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <MobileNavigation />
        </div>
      </header>
    </div>
  );
} 