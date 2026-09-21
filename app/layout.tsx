import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"),
  title: 'DTC - Dynamics Transport Commission | Freight Marketplace Ethiopia & Djibouti',
  description: 'Move goods across Ethiopia and Djibouti with verified truck drivers. DTC connects shippers with drivers through competitive bidding. Real-time GPS tracking, secure payments.',
  keywords: ['freight', 'logistics', 'Ethiopia', 'Djibouti', 'truck', 'shipping', 'cargo', 'transport', 'marketplace', 'freight connector', 'digital transport cargo'],
  authors: [{ name: 'Dynamics Transport Commission' }],
  icons: {
    icon: [
      { url: '/app-icon-driver.png', type: 'image/png' },
      { url: '/app-icon-shipper.png', type: 'image/png' },
    ],
    apple: '/app-icon-driver.png',
  },
  openGraph: {
    title: 'DTC - Move goods. Move fast. Move smart.',
    description: 'Freight transportation marketplace connecting shippers with verified truck drivers across Ethiopia and Djibouti.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DTC - Dynamics Transport Commission',
    images: [
      {
        url: '/app-icon-driver.png',
        width: 480,
        height: 480,
        alt: 'Dynamics Driver app icon',
      },
      {
        url: '/app-icon-shipper.png',
        width: 480,
        height: 480,
        alt: 'Dynamics Shipper app icon',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'DTC - Dynamics Transport Commission',
    description: 'Move goods across Ethiopia and Djibouti with verified truck drivers.',
    images: ['/app-icon-driver.png', '/app-icon-shipper.png'],
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
        <Analytics />
      </body>
    </html>
  )
}
