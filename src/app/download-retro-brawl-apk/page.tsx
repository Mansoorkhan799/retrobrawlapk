import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const DOWNLOAD_URL = 'https://dl.retrobrawlapk.com/file/Magicbrawlapk/retrobrawl-by-magicbrawlapk.net.apk';

export const metadata: Metadata = {
  title: 'Download Retro Brawl APK Free for Android | Version 12.98',
  description: 'Download Retro Brawl APK free for Android. Brawl Stars rebirth with online battles, unique brawlers, exclusive skins. Version 12.98 — free entertainment game.',
  keywords: [
    'Download Retro Brawl',
    'Retro Brawl APK download',
    'Retro Brawl Android',
    'Brawl Stars rebirth',
    'Retro Brawl latest version',
    'Download Retro Brawl v12.98',
    'Brawl Stars private server'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: "https://retrobrawlapk.com/download-retro-brawl-apk" },
  openGraph: {
    title: 'Download Retro Brawl APK Free for Android | v12.98',
    description: 'Retro Brawl - Brawl Stars rebirth. Online battles, unique brawlers, exclusive skins. Free entertainment game. Download now!',
    url: "https://retrobrawlapk.com/download-retro-brawl-apk",
    siteName: "Retro Brawl APK",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://retrobrawlapk.com/feature/og-image.webp", width: 1200, height: 630, alt: "Download Retro Brawl APK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Download Retro Brawl APK Free for Android | v12.98',
    description: 'Retro Brawl - Brawl Stars rebirth. Online battles, unique brawlers, exclusive skins. Free entertainment game.',
    images: ["https://retrobrawlapk.com/feature/og-image.webp"],
  },
};

export default function DownloadPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Retro Brawl APK",
    "operatingSystem": "Android",
    "applicationCategory": "GameApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    "softwareVersion": "12.98",
    "datePublished": "2026-01-03",
    "description": "Retro Brawl is a rebirth of Brawl Stars. Online battles, all characters, unique brawlers, skins, and exclusive content. Free entertainment game with regular updates.",
    "image": "https://retrobrawlapk.com/feature/og-image.webp",
    "author": { "@type": "Organization", "name": "Retro Brawl APK", "url": "https://retrobrawlapk.com" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://retrobrawlapk.com" }, { "@type": "ListItem", "position": 2, "name": "Download", "item": "https://retrobrawlapk.com/download-retro-brawl-apk" }] }) }} />
      
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Download </span>
            <span className="text-[#FFA500]">Retro Brawl</span>
            <span className="text-white"> APK</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">Version 12.98 — Free for Android</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-4">
            <Link href="/" className="text-blue-400 underline font-semibold hover:text-blue-300">Retro Brawl APK</Link> is the ultimate Brawl Stars MOD built on private servers — giving you <strong className="text-white">unlimited gems</strong>, <strong className="text-white">all 80+ brawlers unlocked</strong> from day one, <strong className="text-white">exclusive skins</strong> you won&apos;t find anywhere else, <strong className="text-white">custom maps</strong>, and real-time <strong className="text-white">online battles</strong> with players worldwide.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            No paywalls, no grinding, no Brawl Pass required. Everything premium is yours the moment you install — completely free. Trusted by <strong className="text-white">20 million+ players</strong> and updated monthly with new brawlers, skins, and game modes.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 my-6">
          <a 
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center px-12 py-6 text-white font-bold text-xl rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all duration-300 group shadow-2xl hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-105 animate-pulse-glow"
          >
            <span className="mr-4">DOWNLOAD NOW</span>
            <div className="bg-[#f97316] rounded-full p-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
          </a>
          <span className="bg-[#0A1029] text-[#4ade80] px-6 py-2 rounded-full text-sm font-semibold">Free Entertainment Game — No Real Money Required</span>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
            <Image src="/feature/og-image.webp" alt="Retro Brawl APK Logo" width={320} height={320} className="object-contain drop-shadow-2xl rounded-2xl" priority fetchPriority="high" quality={75} sizes="320px" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ['App Name', 'Retro Brawl APK'],
                  ['Version', 'v12.98 (Latest)'],
                  ['Size', '363 MB'],
                  ['Category', 'Entertainment, Action, Multiplayer'],
                  ['Required Android', '7.0 and above'],
                  ['Last Updated', '2026'],
                  ['Total Downloads', '20,000,000+'],
                  ['Rating', '4.7+ ⭐'],
                  ['Price', 'Free'],
                ].map(([label, value], i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-[#0a1029]/50' : 'bg-[#06091F]/50'} transition-colors duration-200 hover:bg-[#0a1029]`}>
                    <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                    <td className="py-4 px-6 text-left text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]">
            <span className="text-lg">DOWNLOAD NOW</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
          </a>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">How to Download & Install Retro Brawl</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { step: 1, color: '#FFA500', title: 'Download APK', desc: 'Click the download button above to get the Retro Brawl APK file. Wait for the download to complete.' },
              { step: 2, color: '#4ade80', title: 'Enable Unknown Sources', desc: 'Go to your device Settings → Security and enable Install from unknown sources or Install unknown apps for your browser.' },
              { step: 3, color: '#60a5fa', title: 'Install APK', desc: 'Open the downloaded file, tap Install, and wait for the installation to complete.' },
              { step: 4, color: '#f97316', title: 'Start Playing', desc: "Open Retro Brawl and enjoy online battles, unique brawlers, and exclusive content. It's a free entertainment game — no real money involved." },
            ].map(({ step, color, title, desc }) => (
              <div key={step} className="bg-[#0A1029] rounded-lg p-6 border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 cursor-default group" style={{ borderLeftColor: color }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white transition-transform group-hover:scale-110" style={{ backgroundColor: color }}>{step}</span>
                  <h3 className="text-xl font-bold" style={{ color }}>Step {step}: {title}</h3>
                </div>
                <p className="text-gray-300 pl-11">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Why Download Retro Brawl APK?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { emoji: '💎', title: 'Unlimited Gems', desc: 'Get infinite gems instantly — unlock every skin, Brawl Pass tier, and premium item without spending a cent or grinding for weeks.' },
            { emoji: '🎮', title: '80+ Brawlers Unlocked', desc: 'Every brawler is yours from the start — including exclusives like FUMEY, RT, Maisie, and Hank. All maxed out at Power Level 11.' },
            { emoji: '⚔️', title: 'Real-Time Online Battles', desc: 'Fight real players worldwide in 3v3, 5v5, Solo Showdown, Duo Showdown, Gem Grab, Brawl Ball, and more competitive modes.' },
            { emoji: '✨', title: 'Exclusive Skins & Cosmetics', desc: 'Access hundreds of skins — including rare, limited-edition, and custom skins not available in the official game or other mods.' },
            { emoji: '🗺️', title: 'Custom Maps & Game Modes', desc: 'Play on community-built custom maps and enjoy exclusive game modes like 5v5 battles that you won\'t find anywhere else.' },
            { emoji: '🔄', title: 'Monthly Updates', desc: 'New brawlers, skins, maps, and features added every month. Stay ahead with the latest content before anyone else.' },
            { emoji: '🆓', title: '100% Free — No In-App Purchases', desc: 'Everything premium is free forever. No paywalls, no loot boxes, no surprise charges. Pure entertainment from start to finish.' },
            { emoji: '🛡️', title: 'Safe Private Servers', desc: 'Runs on dedicated private servers separate from the official game. Your main Supercell account stays completely safe.' },
            { emoji: '🌟', title: 'Brawl Stars Rebirth', desc: 'The definitive Brawl Stars experience reborn — combining nostalgic gameplay with cutting-edge modded features and content.' },
          ].map((item, i) => (
            <div key={i} className="bg-secondary px-8 py-8 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FFA500]/10 hover:border hover:border-[#FFA500]/30 cursor-default group">
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-125">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500] text-center">What You Get After Downloading</h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">The moment you install Retro Brawl APK v12.98, all of this is instantly unlocked — no grinding, no waiting, no purchases.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '💎', title: 'Unlimited Gems & Gold', desc: 'Spend freely on any item in the shop. Your gem and gold balance never runs out.' },
              { icon: '🦸', title: 'All 80+ Brawlers at Max Level', desc: 'Every brawler unlocked at Power Level 11 with all Star Powers, Gadgets, and Gears ready to use.' },
              { icon: '👗', title: 'Every Skin in the Game', desc: 'Hundreds of skins including True Gold, True Silver, Brawl Pass exclusives, and custom Retro Brawl originals.' },
              { icon: '🏆', title: 'Full Brawl Pass (All Seasons)', desc: 'Every Brawl Pass tier from every season — unlocked and completed. Claim all rewards instantly.' },
              { icon: '🗺️', title: 'Custom Maps & Exclusive Modes', desc: 'Play on unique community maps and enjoy 5v5 battles, custom challenges, and modes not in the official game.' },
              { icon: '👥', title: 'Multiplayer & Friend Battles', desc: 'Create private rooms, invite friends, and battle together in real-time online matches.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 cursor-default group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 pl-9">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-4 pt-2 px-4 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">← Back to Home</Link>
      </div>
    </>
  );
}
