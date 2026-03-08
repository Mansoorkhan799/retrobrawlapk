import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - Retro Brawl APK',
  description: 'The page you are looking for does not exist. Return to Retro Brawl APK homepage.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
          Brawler Not Found!
        </h2>
        <p className="text-lg mb-10 text-gray-300 max-w-lg mx-auto">
          Looks like this page has been knocked out of the arena. The page you&apos;re looking for might have been moved, renamed, or doesn&apos;t exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Return to Homepage
          </Link>
          <Link
            href="/download-retro-brawl-apk"
            className="bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border border-gray-700 hover:border-accent"
          >
            Download APK
          </Link>
        </div>

        <div className="bg-secondary rounded-2xl p-8 border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <Link href="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0A1029] transition-colors group">
              <span className="text-accent text-xl">&#127968;</span>
              <div>
                <span className="text-white font-semibold group-hover:text-accent transition-colors block">Home</span>
                <span className="text-gray-400 text-sm">Retro Brawl overview</span>
              </div>
            </Link>
            <Link href="/download-retro-brawl-apk" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0A1029] transition-colors group">
              <span className="text-accent text-xl">&#128229;</span>
              <div>
                <span className="text-white font-semibold group-hover:text-accent transition-colors block">Download APK</span>
                <span className="text-gray-400 text-sm">Get the latest version</span>
              </div>
            </Link>
            <Link href="/blog" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0A1029] transition-colors group">
              <span className="text-accent text-xl">&#128221;</span>
              <div>
                <span className="text-white font-semibold group-hover:text-accent transition-colors block">Blog</span>
                <span className="text-gray-400 text-sm">Guides, tips & news</span>
              </div>
            </Link>
            <Link href="/retro-brawl-apk-about-us" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0A1029] transition-colors group">
              <span className="text-accent text-xl">&#9432;</span>
              <div>
                <span className="text-white font-semibold group-hover:text-accent transition-colors block">About Us</span>
                <span className="text-gray-400 text-sm">Learn about Retro Brawl</span>
              </div>
            </Link>
            <Link href="/retro-brawl-for-pc" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0A1029] transition-colors group">
              <span className="text-accent text-xl">&#128187;</span>
              <div>
                <span className="text-white font-semibold group-hover:text-accent transition-colors block">Retro Brawl for PC</span>
                <span className="text-gray-400 text-sm">Play on desktop</span>
              </div>
            </Link>
            <Link href="/retro-brawl-apk-contact-us" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0A1029] transition-colors group">
              <span className="text-accent text-xl">&#128231;</span>
              <div>
                <span className="text-white font-semibold group-hover:text-accent transition-colors block">Contact Us</span>
                <span className="text-gray-400 text-sm">Get in touch</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
