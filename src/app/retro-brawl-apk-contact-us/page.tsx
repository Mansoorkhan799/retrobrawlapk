import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Retro Brawl APK | Get Help & Support',
  description: 'Contact Retro Brawl APK support team for help with the app, content, privacy policy, and more. We are here to assist you.',
  keywords: 'contact retro brawl, retro brawl support, retro brawl email, customer support, help retro brawl',
  openGraph: {
    title: 'Contact Us - Retro Brawl APK',
    description: 'Get in touch with Retro Brawl APK support team for any queries or assistance.',
    url: 'https://retrobrawlapk.com/retro-brawl-apk-contact-us',
    siteName: 'Retro Brawl APK',
    type: 'website',
    images: [{ url: 'https://retrobrawlapk.com/feature/og-image.webp', width: 1200, height: 630, alt: 'Retro Brawl APK' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Retro Brawl APK',
    description: 'Get in touch with Retro Brawl APK support team for any queries or assistance.',
    images: ['https://retrobrawlapk.com/feature/twitter-card.webp'],
  },
  alternates: {
    canonical: 'https://retrobrawlapk.com/retro-brawl-apk-contact-us',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact <span className="text-[#FFA500]">Retro Brawl</span> Support</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Have a question, issue, or suggestion? Our support team is here to help you get the most out of Retro Brawl APK.</p>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Whether you need help downloading or installing <Link href="/download-retro-brawl-apk" className="text-accent hover:underline font-semibold">Retro Brawl APK</Link>, want to report a bug, have a feature suggestion, or have questions about our <Link href="/privacy" className="text-accent hover:underline font-semibold">privacy policy</Link> — we&apos;re ready to assist. Our team typically responds within <strong className="text-white">24–48 hours</strong>.
              </p>

              {/* Email Contact Section */}
              <div className="bg-[#0A1029] rounded-xl p-8 border border-[#FFA500]/30">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white">Email Us</h2>
                <p className="text-center mb-2 text-gray-400">Send us your questions, bug reports, or suggestions</p>
                <p className="text-center text-accent font-semibold mb-2 text-lg">support@retrobrawlapk.com</p>
                <p className="text-center text-gray-500 text-sm mb-6">Average response time: 24–48 hours</p>
                <div className="text-center">
                  <a 
                    href="mailto:support@retrobrawlapk.com" 
                    className="inline-flex items-center justify-center bg-accent hover:bg-[#e6ac00] text-primary font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Common Support Topics */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFA500] text-center">Common Support Topics</h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">Here are the most common reasons players reach out. Include relevant details in your email so we can help you faster.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '📥', title: 'Download Issues', desc: 'APK not downloading, slow download speeds, file corruption errors, or broken download links.', color: '#FFA500' },
                { icon: '⚙️', title: 'Installation Help', desc: 'Problems enabling unknown sources, installation failures, "App not installed" errors, or device compatibility questions.', color: '#4ade80' },
                { icon: '🐛', title: 'Bug Reports', desc: 'Game crashes, connection errors, brawlers not loading correctly, visual glitches, or server issues.', color: '#60a5fa' },
                { icon: '💡', title: 'Feature & Content Suggestions', desc: 'Ideas for new brawlers, skins, maps, game modes, or quality-of-life improvements you\'d like to see.', color: '#a855f7' },
                { icon: '🔐', title: 'Account & Privacy Questions', desc: 'Questions about data collection, privacy policy, account safety, or DMCA-related inquiries.', color: '#f97316' },
                { icon: '📱', title: 'Platform Availability', desc: 'Questions about iOS support, PC compatibility, or running Retro Brawl on different devices and emulators.', color: '#ec4899' },
              ].map((topic, i) => (
                <div key={i} className="bg-[#0A1029] rounded-lg p-5 border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default group" style={{ borderLeftColor: topic.color }}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl transition-transform duration-300 group-hover:scale-125">{topic.icon}</span>
                    <h3 className="text-lg font-bold" style={{ color: topic.color }}>{topic.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm pl-9">{topic.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips for Faster Response */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#FFA500] text-center">Tips for a Faster Response</h2>
            <div className="max-w-2xl mx-auto space-y-3">
              {[
                'Include your device model and Android version',
                'Describe the issue step-by-step — what you did, what happened, what you expected',
                'Attach a screenshot or screen recording if possible',
                'Mention which Retro Brawl version you\'re using (check in-game settings)',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#4ade80] font-bold mt-0.5">✓</span>
                  <p className="text-gray-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Download & Install Guide</h3>
              <p className="text-gray-400 mb-4">Step-by-step instructions to get Retro Brawl running</p>
              <Link href="/download-retro-brawl-apk" className="text-accent hover:underline font-semibold">
                Download Guide →
              </Link>
            </div>

            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Privacy Policy</h3>
              <p className="text-gray-400 mb-4">How we handle your data and protect your privacy</p>
              <Link href="/privacy" className="text-accent hover:underline font-semibold">
                Read Policy →
              </Link>
            </div>

            <div className="bg-secondary rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-[#0A1029] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">About Retro Brawl</h3>
              <p className="text-gray-400 mb-4">Learn about our team, mission, and what drives us</p>
              <Link href="/retro-brawl-apk-about-us" className="text-accent hover:underline font-semibold">
                About Us →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://retrobrawlapk.com" }, { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://retrobrawlapk.com/retro-brawl-apk-contact-us" }] }) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Retro Brawl APK",
              "url": "https://retrobrawlapk.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@retrobrawlapk.com",
                "contactType": "Customer Support",
                "availableLanguage": ["English"]
              }
            }
          })
        }}
      />
    </div>
  );
} 