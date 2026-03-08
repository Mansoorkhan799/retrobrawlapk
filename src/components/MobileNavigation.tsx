'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    } else if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
    return () => {
      if (typeof document !== 'undefined') document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <div className="md:hidden">
        <button 
          className="flex items-center text-accent p-1"
          aria-label="Open menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    );
  }

  const menuOverlay = isOpen ? (
    <div
      className="fixed inset-0 z-[9999] flex flex-col bg-[#06091F] overflow-y-auto"
      style={{ isolation: 'isolate' }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex justify-between items-center p-4 border-b border-white/[0.08] flex-shrink-0">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/retro-brawl-logo.webp"
              alt="Retro Brawl APK Logo"
              fill
              sizes="(max-width: 768px) 32px, 40px"
              className="object-contain"
              priority={true}
            />
          </div>
          <span className="text-accent text-xl font-bold">Retro Brawl APK</span>
        </Link>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-accent p-1"
          aria-label="Close menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <nav className="flex flex-col p-4 gap-1 flex-1">
        <Link 
          href="/" 
          className="text-white hover:text-accent py-3 text-lg font-medium transition-colors border-b border-white/[0.06]"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/download-retro-brawl-apk" 
          className="text-white hover:text-accent py-3 text-lg font-medium transition-colors border-b border-white/[0.06]"
          onClick={() => setIsOpen(false)}
        >
          Download
        </Link>
        <Link 
          href="/retro-brawl-for-pc" 
          className="text-white hover:text-accent py-3 text-lg font-medium transition-colors border-b border-white/[0.06]"
          onClick={() => setIsOpen(false)}
        >
          For PC
        </Link>
        <Link 
          href="/retro-brawl-for-ios" 
          className="text-white hover:text-accent py-3 text-lg font-medium transition-colors border-b border-white/[0.06]"
          onClick={() => setIsOpen(false)}
        >
          For iOS
        </Link>
        <Link 
          href="/retro-brawl-apk-about-us" 
          className="text-white hover:text-accent py-3 text-lg font-medium transition-colors border-b border-white/[0.06]"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </Link>
        <Link 
          href="/blog" 
          className="text-white hover:text-accent py-3 text-lg font-medium transition-colors border-b border-white/[0.06]"
          onClick={() => setIsOpen(false)}
        >
          Blog
        </Link>
        <Link 
          href="/retro-brawl-apk-contact-us" 
          className="text-white hover:text-accent py-3 text-lg font-medium transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </nav>
    </div>
  ) : null;

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-accent p-1"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {mounted && typeof document !== 'undefined' && createPortal(menuOverlay, document.body)}
    </div>
  );
}