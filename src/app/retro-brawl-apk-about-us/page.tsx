import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About Retro Brawl APK - Brawl Stars Rebirth',
  description: 'Learn about Retro Brawl APK, a rebirth of Brawl Stars. Online battles, unique brawlers, exclusive skins. Free entertainment game with regular updates.',
  keywords: ['Retro Brawl about', 'about us', 'Retro Brawl APK', 'Brawl Stars rebirth', 'entertainment game', 'Retro Brawl history'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: "https://retrobrawlapk.com/retro-brawl-apk-about-us" },
  openGraph: {
    title: 'About Retro Brawl APK - Brawl Stars Rebirth',
    description: 'Retro Brawl - A rebirth of Brawl Stars. Online battles, unique brawlers, exclusive content. Free entertainment game.',
    url: "https://retrobrawlapk.com/retro-brawl-apk-about-us",
    siteName: "Retro Brawl APK",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://retrobrawlapk.com/retro-brawl-logo.webp", width: 1200, height: 630, alt: "About Retro Brawl APK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Retro Brawl APK - Brawl Stars Rebirth',
    description: 'Retro Brawl - A rebirth of Brawl Stars. Online battles, unique brawlers, exclusive content.',
    images: ["https://retrobrawlapk.com/retro-brawl-logo.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About <span className="text-[#FFA500]">Retro Brawl APK</span></h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">The team behind the most popular Brawl Stars private server — trusted by millions of players worldwide.</p>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 flex justify-center">
                <Link href="/">
                  <Image 
                    src="/feature/og-image.webp" 
                    alt="Retro Brawl APK Logo" 
                    width={220}
                    height={220}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </Link>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Welcome to <Link href="/" className="text-blue-400 underline hover:text-blue-300 font-semibold">retrobrawlapk.com</Link> — the official home of <strong className="text-white">Retro Brawl APK</strong>. We&apos;re a passionate team of Brawl Stars enthusiasts who built the ultimate fan-made MOD to give every player access to the full game experience — <strong className="text-white">unlimited gems, all 80+ brawlers unlocked, exclusive skins, custom maps, and real-time online battles</strong> — completely free.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Retro Brawl is a free entertainment game — not an earning platform. We create this for the love of the community. Every brawler, every skin, every gem is yours from the moment you <Link href="/download-retro-brawl-apk" className="text-blue-400 underline hover:text-blue-300 font-semibold">download Retro Brawl APK</Link>. No paywalls, no hidden charges, no catch.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { number: '20M+', label: 'Downloads', color: '#FFA500' },
              { number: '80+', label: 'Brawlers Unlocked', color: '#4ade80' },
              { number: '4.7+', label: 'User Rating', color: '#60a5fa' },
              { number: 'Monthly', label: 'Content Updates', color: '#a855f7' },
            ].map((stat, i) => (
              <div key={i} className="bg-secondary rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-default">
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* What We Do Section */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFA500]">What We Do</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              At <strong className="text-white">retrobrawlapk.com</strong>, we develop, maintain, and distribute <strong className="text-white">Retro Brawl APK</strong> — a fan-made MOD of Brawl Stars that runs on dedicated private servers. Our work includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Server Development', desc: 'Building and maintaining high-performance private servers that deliver smooth, lag-free online battles for millions of concurrent players.' },
                { title: 'Content Creation', desc: 'Designing exclusive brawlers, skins, maps, and game modes that go beyond what the official game offers.' },
                { title: 'Monthly Updates', desc: 'Releasing new content every month — including the latest brawlers, balance changes, seasonal events, and community-requested features.' },
                { title: 'Community Support', desc: 'Providing download guides, installation help, bug fixes, and responsive support to our global player base.' },
              ].map((item, i) => (
                <div key={i} className="bg-[#0A1029] rounded-lg p-5 border-l-4 border-[#FFA500]">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Mission</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center max-w-3xl mx-auto">
              To provide the <strong>best Brawl Stars private server experience</strong> in the world — where every player has instant access to all brawlers, unlimited resources, and exclusive content, without spending a single cent. We believe great gaming should be free and accessible to everyone.
            </p>
          </div>

          {/* Our Values */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FFA500] text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '👥', title: 'Community First', desc: 'Every decision we make starts with our players. From feature requests to bug reports, your voice shapes Retro Brawl. We listen, we act, we deliver.', color: '#FFA500' },
                { icon: '🔄', title: 'Regular Updates', desc: 'We commit to monthly content drops — new brawlers, skins, maps, and balance patches to keep the game fresh, competitive, and exciting.', color: '#4ade80' },
                { icon: '🛡️', title: 'Safety & Privacy', desc: 'Retro Brawl runs on isolated private servers. Your main Supercell account is never at risk. We collect minimal data and respect your privacy.', color: '#60a5fa' },
                { icon: '🔍', title: 'Transparency', desc: 'We\'re upfront about what Retro Brawl is — a fan-made MOD and entertainment game. No misleading claims, no hidden agendas. Honest gaming for honest players.', color: '#a855f7' },
              ].map((value, i) => (
                <div key={i} className="bg-[#0A1029] rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl transition-transform duration-300 group-hover:scale-125">{value.icon}</span>
                    <h3 className="text-xl font-bold" style={{ color: value.color }}>{value.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Aim Section */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFA500] text-center">Our Aim</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-4">
              We aim to be the <strong className="text-white">#1 destination for Brawl Stars MOD content</strong> — delivering a premium gaming experience that rivals the official game while keeping everything completely free.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              Our goal is to continuously improve Retro Brawl APK with the latest brawlers, skins, and features while maintaining server stability, ensuring player safety, and building the most helpful gaming resource at <Link href="/" className="text-blue-400 underline hover:text-blue-300 font-semibold">retrobrawlapk.com</Link>. For any questions, visit our <Link href="/retro-brawl-apk-contact-us" className="text-blue-400 underline hover:text-blue-300 font-semibold">contact us page</Link>.
            </p>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions or Feedback?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We love hearing from our community! Whether it&apos;s a feature request, bug report, or just to say hi — our team typically responds within 24–48 hours.
            </p>
            <Link 
              href="/retro-brawl-apk-contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://retrobrawlapk.com" }, { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://retrobrawlapk.com/retro-brawl-apk-about-us" }] }) }} />
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Retro Brawl APK",
              "alternateName": "Retro Brawl",
              "url": "https://retrobrawlapk.com",
              "logo": "https://retrobrawlapk.com/retro-brawl-logo.webp",
              "description": "Retro Brawl APK is a rebirth of Brawl Stars — a free entertainment game with online battles, unique brawlers, exclusive skins, and regular updates."
            },
            "about": {
              "@type": "Thing",
              "name": "Entertainment Game",
              "description": "Brawl Stars rebirth - online battles, unique brawlers, exclusive content"
            },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://retrobrawlapk.com/retro-brawl-apk-about-us" }
          })
        }}
      />
    </div>
  );
} 