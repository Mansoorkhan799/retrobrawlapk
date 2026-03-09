import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer - Retro Brawl APK | Fan-Made Brawl Stars MOD',
  description: 'Legal disclaimer for Retro Brawl APK. Retro Brawl is a fan-made MOD (private server) of Brawl Stars and is not affiliated with Supercell Oy.',
  keywords: ['Retro Brawl disclaimer', 'retro brawl legal', 'brawl stars private server disclaimer', 'retro brawl not affiliated supercell'],
  openGraph: {
    title: 'Disclaimer - Retro Brawl APK',
    description: 'Legal disclaimer for Retro Brawl APK — a fan-made Brawl Stars private server not affiliated with Supercell.',
    url: 'https://retrobrawlapk.com/disclaimer',
    siteName: 'Retro Brawl APK',
    type: 'website',
    images: [{ url: 'https://retrobrawlapk.com/feature/og-image.webp', width: 1200, height: 630, alt: 'Retro Brawl APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - Retro Brawl APK',
    description: 'Legal disclaimer for Retro Brawl APK — a fan-made Brawl Stars private server not affiliated with Supercell.',
    images: ['https://retrobrawlapk.com/feature/twitter-card.webp'],
  },
  alternates: { canonical: 'https://retrobrawlapk.com/disclaimer' },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Disclaimer</h1>
            <p className="text-lg text-gray-400">Important legal information about Retro Brawl APK and this website</p>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Warning Banner */}
              <div className="bg-[#0A1029] border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-accent mb-2">Important Notice</h3>
                    <p className="text-accent mb-0">
                      Please read this disclaimer carefully. By using this website, you agree to the terms outlined below.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  The information provided on <a href="https://retrobrawlapk.com" className="text-blue-400 underline hover:text-blue-300 font-semibold" target="_blank" rel="noopener noreferrer">retrobrawlapk.com</a> about <Link href="/" className="text-blue-400 underline hover:text-blue-300 font-semibold">Retro Brawl APK</Link> is for <strong>general informational and entertainment purposes only</strong>.
                </p>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-accent">
                  <h2 className="text-2xl font-bold mb-4 text-white">Not Affiliated with Supercell</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">Retro Brawl APK is a fan-made MOD</strong> (private server) of Brawl Stars. It is <strong>not</strong> developed, endorsed, sponsored, or affiliated with <strong className="text-white">Supercell Oy</strong> in any way.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">&bull;</span>
                      <span>&quot;Brawl Stars&quot; is a registered trademark of Supercell Oy. All game characters, assets, and related content are the intellectual property of Supercell.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">&bull;</span>
                      <span>Retro Brawl runs on independent private servers and is completely separate from the official Brawl Stars game.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">&bull;</span>
                      <span>This website provides guides, download links, and informational content for entertainment purposes.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-[#FFA500]">
                  <h2 className="text-2xl font-bold mb-4 text-[#FFA500]">Free to Play — No Real Money</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    Retro Brawl APK is a <strong className="text-white">100% free</strong> game. There are no in-app purchases, no real-money transactions, no deposits, and no withdrawals. All gems, coins, brawlers, and skins are provided for free within the private server.
                  </p>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-red-500/40">
                  <h2 className="text-2xl font-bold mb-4 text-red-400">Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    We are <strong>not responsible</strong> for any issues that may arise from downloading or using third-party APK files, including but not limited to data loss, device issues, or account-related matters on official platforms. Use Retro Brawl APK at your own risk and always download from the official source at <a href="https://retrobrawlapk.com" className="text-blue-400 underline hover:text-blue-300">retrobrawlapk.com</a>.
                  </p>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-blue-500/40">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">User Responsibility</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    By using this website and downloading Retro Brawl APK, you acknowledge and agree that:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">&#10003;</span>
                      <span>You understand this is a fan-made MOD and not the official Brawl Stars app</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">&#10003;</span>
                      <span>You use the app at your own risk and discretion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">&#10003;</span>
                      <span>You are responsible for verifying whether modified apps comply with your local regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">&#10003;</span>
                      <span>You will not hold this website liable for any consequences arising from your use of the app</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-accent">
                  <h2 className="text-2xl font-bold mb-4 text-white">Trademarks &amp; Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    All app names, logos, characters, and trademarks mentioned on this website — including &quot;Brawl Stars&quot; — belong to their respective owners, primarily Supercell Oy. We use these references solely for identification and informational purposes and do not claim any ownership, affiliation, or endorsement.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-secondary rounded-xl border-2 border-accent">
                <h2 className="text-2xl font-bold mb-4 text-white">Questions?</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Disclaimer, please feel free to contact us.
                </p>
                <Link 
                  href="/retro-brawl-apk-contact-us" 
                  className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://retrobrawlapk.com" }, { "@type": "ListItem", "position": 2, "name": "Disclaimer", "item": "https://retrobrawlapk.com/disclaimer" }] }) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Disclaimer - Retro Brawl APK",
            "description": "Legal disclaimer for Retro Brawl APK — a fan-made Brawl Stars private server not affiliated with Supercell Oy.",
            "url": "https://retrobrawlapk.com/disclaimer"
          })
        }}
      />
    </div>
  );
} 