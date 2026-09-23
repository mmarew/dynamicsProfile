import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL, SITE_NAME, canonical } from '@/lib/seo'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DTC - Dynamics Transport Commission | Freight Marketplace Ethiopia & Djibouti',
    template: '%s',
  },
  description: 'Move goods across Ethiopia and Djibouti with verified truck drivers. DTC connects shippers with drivers through competitive bidding. Real-time GPS tracking, secure payments.',
  ...canonical('/'),
  keywords: ['freight', 'logistics', 'Ethiopia', 'Djibouti', 'truck', 'shipping', 'cargo', 'transport', 'marketplace', 'freight connector', 'digital transport cargo'],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: 'DTC - Move goods. Move fast. Move smart.',
    description: 'Freight transportation marketplace connecting shippers with verified truck drivers across Ethiopia and Djibouti.',
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'DTC - Dynamics Transport Commission | Freight Marketplace Ethiopia & Djibouti',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTC - Dynamics Transport Commission',
    description: 'Move goods across Ethiopia and Djibouti with verified truck drivers.',
    images: ['/opengraph-image'],
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        ) : null}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        ) : null}
        <Analytics />
      </body>
    </html>
  )
}
