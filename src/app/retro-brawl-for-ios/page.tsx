import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TabSwitcher from '@/components/TabSwitcher';

export const metadata: Metadata = {
  title: 'Retro Brawl for iOS | Download IPA - iPhone & iPad',
  description: 'Download Retro Brawl IPA for iOS. Play Brawl Stars rebirth on iPhone and iPad with unlimited gems, all brawlers unlocked. Install via AltStore or Sideloadly - no jailbreak.',
  keywords: [
    'Retro Brawl iOS',
    'Retro Brawl for iPhone',
    'Retro Brawl IPA',
    'Retro Brawl iPad',
    'Brawl Stars iOS',
    'Retro Brawl AltStore',
    'Retro Brawl Sideloadly',
    'Retro Brawl download iOS'
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://retrobrawlapk.com/retro-brawl-for-ios' },
  openGraph: {
    title: 'Retro Brawl for iOS | Download IPA - iPhone & iPad',
    description: 'Play Retro Brawl on iPhone and iPad with unlimited gems, all brawlers unlocked. Install via AltStore or Sideloadly.',
    url: 'https://retrobrawlapk.com/retro-brawl-for-ios',
    siteName: 'Retro Brawl APK',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://retrobrawlapk.com/feature/og-image.webp', width: 1200, height: 630, alt: 'Retro Brawl for iOS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retro Brawl for iOS | Download IPA - iPhone & iPad',
    description: 'Play Retro Brawl on iPhone and iPad with unlimited gems, all brawlers unlocked. Install via AltStore or Sideloadly.',
    images: ['https://retrobrawlapk.com/feature/twitter-card.webp'],
  },
};

export default function RetroBrawlForIOSPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Retro Brawl for iOS | Download IPA - iPhone & iPad',
    description: 'Complete guide to download and install Retro Brawl on iOS devices. Play Brawl Stars rebirth on iPhone and iPad with unlimited gems and all brawlers unlocked.',
    image: 'https://retrobrawlapk.com/retro-brawl-logo.webp',
    author: { '@type': 'Organization', name: 'Retro Brawl APK', url: 'https://retrobrawlapk.com' },
    publisher: { '@type': 'Organization', name: 'Retro Brawl APK', logo: { '@type': 'ImageObject', url: 'https://retrobrawlapk.com/retro-brawl-logo.webp' } },
    datePublished: '2026-03-06',
    dateModified: '2026-03-06',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://retrobrawlapk.com/retro-brawl-for-ios' },
    about: { '@type': 'SoftwareApplication', name: 'Retro Brawl APK', operatingSystem: 'iOS 10.0+', applicationCategory: 'GameApplication' },
    articleSection: 'Gaming',
    keywords: 'Retro Brawl iOS, Retro Brawl IPA, AltStore, Sideloadly, iPhone',
    inLanguage: 'en-US',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://retrobrawlapk.com" }, { "@type": "ListItem", "position": 2, "name": "Retro Brawl for iOS", "item": "https://retrobrawlapk.com/retro-brawl-for-ios" }] }) }} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#FFA500]">Retro Brawl for iOS</span>
            <br />
            <span className="text-white">iPhone & iPad</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Download IPA — Unlimited Gems, All Brawlers Unlocked
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Bring the full <Link href="/" className="text-blue-400 underline hover:text-blue-300 font-semibold">Retro Brawl</Link> experience to your iPhone or iPad — all 80+ brawlers unlocked, unlimited gems and coins, exclusive skins, and 20+ game modes ready from the first launch. No jailbreak needed. Install using AltStore, Sideloadly, or Scarlet in under 5 minutes and start dominating in Gem Grab, Showdown, Brawl Ball, and more — completely free.
          </p>
        </div>

        <div className="flex justify-center mt-8 mb-8">
          <a
            href="https://dl.retrobrawlapk.com/file/Magicbrawlapk/retrobrawl-by-magicbrawlapk.net.ipa"
            className="inline-flex items-center px-8 py-4 font-bold rounded-full border-2 border-[#0ea5e9] text-white hover:bg-[#0ea5e9]/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] animate-pulse-glow"
          >
            <span className="mr-2">Get Retro Brawl IPA</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </a>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative transition-transform duration-300 hover:scale-110" style={{ width: '280px', height: '280px', maxWidth: '100%' }}>
            <Image src="/feature/og-image.webp" alt="Retro Brawl for iOS - iPhone and iPad" width={280} height={280} className="object-contain drop-shadow-2xl rounded-2xl" priority />
          </div>
        </div>
      </section>

      {/* Download Info */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ['App Name', 'Retro Brawl IPA'],
                ['Platform', 'iOS (iPhone, iPad)'],
                ['Version', 'v12.98'],
                ['Requires', 'iOS 10.0+'],
                ['Device', 'iPhone 6S or later'],
                ['Price', 'Free'],
              ].map(([label, value], i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-[#0a1029]/50' : 'bg-[#06091F]/50'} transition-colors duration-200 hover:bg-[#0a1029]`}>
                  <td className="py-4 px-6 font-medium text-white">{label}</td>
                  <td className="py-4 px-6 text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What is IPA */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What is an IPA File?</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            An IPA (iOS App Store Package) file is Apple&apos;s equivalent of an APK on Android — it&apos;s the installer format used to distribute apps on iPhone, iPad, and iPod Touch. While most apps come through the App Store, IPA files let you &quot;sideload&quot; apps that aren&apos;t listed there, including private-server games like Retro Brawl.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Retro Brawl IPA contains the complete game with every feature pre-unlocked: all brawlers, unlimited gems and coins, exclusive skins, and access to every game mode. Unlike the official Brawl Stars app, there&apos;s nothing locked behind paywalls or progression gates.
          </p>
          <p className="text-gray-300 leading-relaxed">
            To install an IPA, you need a sideloading tool like <strong>AltStore</strong>, <strong>Sideloadly</strong>, or <strong>Scarlet</strong>. These tools sign the app with your Apple ID so iOS allows it to run — no jailbreak or system modification required. Your device stays secure and your warranty is unaffected.
          </p>
        </div>
      </section>

      {/* How to Install via AltStore */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">How to Install Retro Brawl IPA on iPhone</h2>
          <p className="text-gray-300 mb-6">The entire process takes about 5 minutes. No jailbreak, no technical expertise required — just follow each step carefully.</p>
          <div className="space-y-6">
            {[
              { step: 1, color: '#FFA500', title: 'Install AltServer on Your Computer', desc: "Visit altstore.io and download AltServer for your Windows PC or Mac. On Windows, you'll also need iTunes and iCloud installed (desktop versions, not Microsoft Store). On Mac, AltServer works out of the box." },
              { step: 2, color: '#4ade80', title: 'Connect Your iPhone via USB', desc: 'Plug your iPhone or iPad into your computer with a Lightning or USB-C cable. Make sure to tap "Trust This Computer" on your device when prompted. This one-time step allows AltServer to communicate with your iPhone.' },
              { step: 3, color: '#60a5fa', title: 'Install AltStore on Your iPhone', desc: 'Open AltServer on your computer, click the AltServer icon in the system tray (Windows) or menu bar (Mac), select "Install AltStore," and choose your iPhone. Enter your Apple ID when prompted — this is used to sign the app and is stored locally on your device only.' },
              { step: 4, color: '#a855f7', title: 'Download the Retro Brawl IPA', desc: <>Open Safari on your iPhone and visit <a href="https://dl.retrobrawlapk.com/file/Magicbrawlapk/retrobrawl-by-magicbrawlapk.net.ipa" className="text-blue-400 underline hover:text-blue-300">retrobrawlapk.com</a> to download the IPA file. Alternatively, download it on your computer and transfer it to your iPhone via AirDrop or Files app.</> },
              { step: 5, color: '#f97316', title: 'Sideload via AltStore', desc: 'Open AltStore on your iPhone, tap the "My Apps" tab, then tap the "+" button in the top-left corner. Browse to the Retro Brawl IPA file you downloaded and select it. AltStore will sign and install the app — this usually takes 1-2 minutes.' },
              { step: 6, color: '#4ade80', title: 'Trust the Developer Profile', desc: 'Go to Settings > General > VPN & Device Management (or "Profiles & Device Management" on older iOS). Find your Apple ID profile listed under "Developer App," tap it, and select "Trust." This tells iOS to allow the sideloaded app to run.' },
              { step: 7, color: '#0ea5e9', title: 'Launch & Start Brawling', desc: 'Open Retro Brawl from your home screen. Create your account and you\'re in — every brawler unlocked, unlimited gems and coins, exclusive skins, and all 20+ game modes available from the start. Enjoy!' },
            ].map(({ step, color, title, desc }) => (
              <div key={step} className="bg-[#0A1029] rounded-lg p-6 border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-default" style={{ borderLeftColor: color }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold text-white transition-transform group-hover:scale-110" style={{ backgroundColor: color }}>{step}</span>
                  <h3 className="text-lg font-bold" style={{ color }}>Step {step}: {title}</h3>
                </div>
                <p className="text-gray-300 pl-11">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sideloadly vs Scarlet */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Installation Tools: Sideloadly vs Scarlet</h2>
          <p className="text-gray-300 mb-6">Don&apos;t want to use AltStore? Here are two alternative tools for installing Retro Brawl IPA on iOS. Switch tabs to compare:</p>
          <TabSwitcher tabs={[
            { id: 'sideloadly', label: 'Sideloadly', content: (
              <div className="bg-[#0A1029] p-6 rounded-xl border border-[#0ea5e9]/30">
                <h3 className="text-xl font-bold text-[#0ea5e9] mb-3">Sideloadly — Power User Choice</h3>
                <p className="text-gray-300 mb-2">A desktop-based sideloading tool that gives you the most control over the installation process. Sideloadly supports the latest iOS versions (including iOS 17+), lets you customize app signing options, and works with both free and paid Apple Developer accounts. Connect your iPhone via USB, select the Retro Brawl IPA, and Sideloadly handles the signing and installation automatically.</p>
                <p className="text-sm text-gray-400 mb-4">Best for: Users who want maximum reliability and control. Works on Windows and macOS.</p>
                <p className="text-sm text-gray-300">Download from sideloadly.io. Requires iTunes (Windows) or Xcode command-line tools (Mac).</p>
              </div>
            )},
            { id: 'scarlet', label: 'Scarlet', content: (
              <div className="bg-[#0A1029] p-6 rounded-xl border border-[#a855f7]/30">
                <h3 className="text-xl font-bold text-[#a855f7] mb-3">Scarlet — No Computer Needed</h3>
                <p className="text-gray-300 mb-2">The easiest option if you don&apos;t have access to a PC or Mac. Scarlet runs entirely on your iPhone — just open the Scarlet app, import the Retro Brawl IPA, and install. No USB cables, no desktop software, no complicated setup. Scarlet signs apps using enterprise certificates, so installation is quick and painless.</p>
                <p className="text-sm text-gray-400 mb-4">Best for: Beginners and users without a computer. Setup takes under 2 minutes.</p>
                <p className="text-sm text-gray-300">Note: Enterprise certificates may occasionally be revoked by Apple, requiring you to reinstall Scarlet. This is normal and your game progress is not affected.</p>
              </div>
            )},
          ]} />
        </div>
      </section>

      {/* iOS Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Minimum iOS Requirements</h2>
          <div className="overflow-x-auto max-w-2xl">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-white font-medium">OS Version</td><td className="py-3 px-6 text-gray-300">iOS 10.0+</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-white font-medium">Device</td><td className="py-3 px-6 text-gray-300">iPhone 6S or later</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-white font-medium">Storage</td><td className="py-3 px-6 text-gray-300">200MB free space</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-white font-medium">Processor</td><td className="py-3 px-6 text-gray-300">A9 chip or better</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Features for iOS */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Key Features on iOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { color: '#FFA500', title: 'Buttery-Smooth 60 FPS', desc: 'Optimized for A9 chips and above, Retro Brawl runs at a locked 60 FPS on iPhone 6S and later. No lag spikes during 10-player Showdown finals, no frame drops when Supers collide — just pure, fluid gameplay that keeps up with your reflexes.' },
              { color: '#4ade80', title: 'MFi & Bluetooth Gamepad Support', desc: 'Connect a PS5 DualSense, Xbox controller, or any MFi-certified gamepad via Bluetooth for a console-quality experience. Map movement, attack, and Super to physical buttons for faster reaction times and more precise aim.' },
              { color: '#60a5fa', title: 'iOS-Native Touch Controls', desc: 'Retro Brawl leverages iOS\'s low-latency touch pipeline for instant responsiveness. Every joystick drag, every aim swipe, every Super tap registers immediately — giving you the split-second edge that wins close fights in Gem Grab and Knockout.' },
              { color: '#a855f7', title: 'Progress Backup & Restore', desc: 'Your brawler progress, trophy count, and unlocked content stay safe. Switch between iPhone and iPad seamlessly without losing anything. Start a match on your iPhone during commute, then continue grinding on your iPad at home.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#0A1029] p-6 rounded-lg border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-default" style={{ borderLeftColor: item.color }}>
                <h3 className="text-xl font-bold mb-3 transition-transform group-hover:translate-x-1" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Do I need to jailbreak my iPhone to install Retro Brawl?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">Absolutely not. Retro Brawl IPA can be installed using AltStore, Sideloadly, or Scarlet — all of which work on stock, non-jailbroken iOS devices. These tools use Apple&apos;s legitimate app-signing mechanism (your Apple ID) to authorize the app, so your device&apos;s security remains completely intact.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Will sideloading Retro Brawl void my Apple warranty?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">No. Sideloading installs an app — it doesn&apos;t modify any system files, change your iOS version, or alter your device&apos;s firmware. Apple&apos;s warranty covers hardware defects and iOS software issues, neither of which are affected by installing a sideloaded app. If you ever want to remove Retro Brawl, simply delete it like any other app.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Can I use a PS5, Xbox, or Bluetooth controller?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">Yes! Retro Brawl fully supports Bluetooth gamepads on iOS. Connect a PS5 DualSense, Xbox Wireless Controller, or any MFi-certified controller through your iPhone&apos;s Bluetooth settings. Once paired, Retro Brawl automatically detects the controller and maps movement, attack, and Super abilities to the physical buttons.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Why does Retro Brawl say &quot;Untrusted Developer&quot; when I try to open it?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">This is a standard iOS security prompt for sideloaded apps. To fix it: go to <strong>Settings &gt; General &gt; VPN &amp; Device Management</strong> (or &quot;Profiles &amp; Device Management&quot; on older iOS versions), find your Apple ID profile, tap it, and select <strong>&quot;Trust&quot;</strong>. After this one-time step, Retro Brawl will open normally every time.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Does Retro Brawl work on iPad?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">Yes! Retro Brawl runs beautifully on iPad. The larger screen gives you a significant advantage — you can see more of the map, spot enemies earlier, and aim with greater precision. The installation process is identical to iPhone: use AltStore, Sideloadly, or Scarlet to install the IPA file. iPad Air 2 and later models are supported.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                How do I update Retro Brawl on iOS?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">When a new version releases, download the latest IPA from retrobrawlapk.com and reinstall it using the same sideloading tool you used initially (AltStore, Sideloadly, or Scarlet). Your game progress and account data are preserved during updates — you won&apos;t lose any brawlers, trophies, or skins.</div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Why does AltStore ask for my Apple ID?
                <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" /></svg></span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">AltStore uses your Apple ID to sign sideloaded apps through Apple&apos;s free developer provisioning system. This is the same mechanism Xcode uses when developers test apps on their own devices. Your credentials are sent directly to Apple&apos;s servers — AltStore does not store or transmit your password to any third party. For extra security, you can create a dedicated Apple ID just for sideloading.</div>
            </details>
          </div>
        </div>
      </section>

      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </>
  );
}
