import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://retrobrawlapk.com';
  
  // Define page type
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  // Main pages with high priority
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/feature/og-image.webp',
          title: 'Retro Brawl APK Hero',
          caption: 'Retro Brawl APK - Brawl Stars Private Server with Unlimited Gems'
        },
        {
          loc: '/retro-brawl-logo.webp',
          title: 'Retro Brawl APK Logo',
          caption: 'The official logo of Retro Brawl APK gaming platform'
        }
      ]
    },
    {
      url: '/download-retro-brawl-apk',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/feature/og-image.webp',
          title: 'Download Retro Brawl APK',
          caption: 'Download Retro Brawl APK for Android'
        }
      ]
    },
    {
      url: '/retro-brawl-for-ios',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/retro-brawl-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/feature/og-image.webp',
          title: 'Retro Brawl APK for PC',
          caption: 'Play Retro Brawl APK on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/dmca',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.5
    },
    {
      url: '/retro-brawl-apk-about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/feature/og-image.webp',
          title: 'About Retro Brawl APK',
          caption: 'Learn about Retro Brawl APK gaming platform'
        }
      ]
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/feature/og-image.webp',
          title: 'Retro Brawl APK Blog',
          caption: 'Guides and tutorials for Retro Brawl APK gaming platform'
        }
      ]
    },
    {
      url: '/retro-brawl-apk-contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    }
  ];

  // Blog posts
  const blogPosts: PageType[] = [
    { url: '/blog/retro-brawl-crashing-not-opening-how-to-fix', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/top-5-fan-made-retro-brawl-maps-2025', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/retro-brawl-apk-2026-whats-new-why-everyones-playing', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/retro-brawl-2026-soundtrack-why-gamers-cant-stop-listening', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/10-must-know-features-hidden-tricks-retro-brawl-2026', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/retro-brawl-apk-vs-retro-brawl-biggest-differences', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/colette-brawl-stars-vs-retro-brawl-apk', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/edgar-brawl-stars-unlock-guide-retro-brawl-apk-benefits', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/brawl-stars-2026-unlock-premium-gems-retro-brawl-edition', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/retro-brawl-2026-soundtrack-music-powers-every-battle', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/retro-brawl-apk-download-old-version', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/download-retro-brawl-mod-menu-v50-221', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/comparison-retro-brawl-brawl-stars', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/retro-brawl-apk-vs-nulls-brawl-vs-retro-brawl-comparison', lastMod: new Date().toISOString(), changeFreq: 'monthly', priority: 0.8 },
  ];

  const allPages = [...mainPages, ...blogPosts];
  
  // Generate XML with mobile and image extensions
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 