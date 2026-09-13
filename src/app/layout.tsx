import type { Metadata } from 'next';
import './styles/globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theweddingunit.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'The Wedding Unit Photography | Chennai Wedding Photography', template: '%s | The Wedding Unit Photography' },
  description: 'The Wedding Unit Photography in Chennai â€” cinematic wedding photography, cinematography, intimate portraits and curated highlight films.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'The Wedding Unit Photography',
    description: 'Cinematic wedding photography and films in Chennai, Tamil Nadu.',
    url: '/',
    siteName: 'The Wedding Unit Photography',
    type: 'website',
    images: [{ url: '/assets/Photos/01.jpg', width: 4479, height: 2520, alt: 'The Wedding Unit Photography' }]
  },
  twitter: { card: 'summary_large_image', title: 'The Wedding Unit Photography', description: 'Cinematic wedding photography and films in Chennai, Tamil Nadu.', images: ['/assets/Photos/01.jpg'] },
  icons: { icon: '/assets/branding/logo.png' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}


