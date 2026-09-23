import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { T } from "@/components/i18n/text";
import { canonical } from "@/lib/seo";
import {
  Package,
  Star,
  MapPin,
  Bell,
  Wallet,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  ...canonical('/download'),
  title:
    "Download DTC App - Freight Connector & Digital Transport Cargo App | Driver & Shipper Apps",
  description:
    "Download the DTC freight connector app. The leading digital transport cargo marketplace connecting shippers with verified truck drivers across Ethiopia and Djibouti. Track cargo, find loads, and manage freight in real-time.",
  keywords: [
    "freight connector",
    "digital transport",
    "digital transport cargo",
    "freight app",
    "cargo app",
    "freight marketplace",
    "truck load app",
    "cargo transport app",
    "logistics app Ethiopia",
    "freight forwarding app",
    "shipper app",
    "truck driver app",
    "load matching app",
    "transport cargo app Ethiopia",
    "online freight booking",
  ],
  openGraph: {
    title: "Download DTC Freight Connector App - Digital Transport Cargo App",
    description:
      "Connect shippers with verified truck drivers. Post cargo, find loads, and track freight in real-time across Ethiopia and Djibouti.",
    type: "website",
    locale: "en_US",
    url: "/download",
    siteName: "DTC - Dynamics Transport Commission",
    images: [
      {
        url: "/app-icon-driver.png",
        width: 480,
        height: 480,
        alt: "Dynamics Driver app icon",
      },
      {
        url: "/app-icon-shipper.png",
        width: 480,
        height: 480,
        alt: "Dynamics Shipper app icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Download DTC Freight Connector App",
    description:
      "The digital transport cargo app for shippers and drivers across Ethiopia and Djibouti.",
    images: ["/app-icon-driver.png", "/app-icon-shipper.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const apps = [
  {
    block: "driver",
    title: "Dynamics Driver",
    subtitle: "For truck drivers",
    description:
      "Find loads near you, receive instant notifications, submit competitive bids, and grow your trucking business from anywhere in Ethiopia and Djibouti.",
    link: "https://play.google.com/store/apps/details?id=com.driverloadnow",
    icon: "/app-icon-driver.png",
    features: [
      { icon: MapPin, key: "f1", text: "Find loads near your location" },
      { icon: Bell, key: "f2", text: "Instant load notifications" },
      { icon: Wallet, key: "f3", text: "Fair pay for every trip" },
    ],
  },
  {
    block: "shipper",
    title: "Dynamics Shipper",
    subtitle: "For shippers & businesses",
    description:
      "Post shipments, receive competitive bids from verified drivers, track your cargo in real-time, and manage all your transportation needs on the go.",
    link: "https://play.google.com/store/apps/details?id=com.shipperloadnow",
    icon: "/app-icon-shipper.png",
    features: [
      { icon: Package, key: "f1", text: "Post shipments in minutes" },
      { icon: Star, key: "f2", text: "Compare bids from drivers" },
      { icon: MapPin, key: "f3", text: "Live GPS cargo tracking" },
    ],
  },
];

function GooglePlayBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:bg-foreground/90 transition-colors"
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
      </svg>
      <div className="text-left">
        <div className="text-xs opacity-70"><T k="Download.play.top" /></div>
        <div className="text-sm font-semibold"><T k="Download.play.bottom" /></div>
      </div>
    </a>
  );
}

export default function DownloadPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Dynamics Driver",
        operatingSystem: "Android",
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Freight connector app for truck drivers. Find loads, receive instant notifications, and submit bids across Ethiopia and Djibouti.",
        url: "https://play.google.com/store/apps/details?id=com.driverloadnow",
        image: "/app-icon-driver.png",
      },
      {
        "@type": "SoftwareApplication",
        name: "Dynamics Shipper",
        operatingSystem: "Android",
        applicationCategory: "BusinessApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Digital transport cargo app for shippers. Post shipments, compare bids from verified drivers, and track freight in real-time.",
        url: "https://play.google.com/store/apps/details?id=com.shipperloadnow",
        image: "/app-icon-shipper.png",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src="/app-icon-driver.png"
                    alt="DTC app icon"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <T k="Download.hero.title" />
              </h1>
              <p className="text-muted-foreground text-lg">
                <T k="Download.hero.sub" />
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {apps.map((app) => (
                <div
                  key={app.block}
                  className="flex flex-col bg-card border border-border/60 rounded-3xl p-8 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl">
                      <Image
                        src={app.icon}
                        alt={`${app.title} app icon`}
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">
                        <T k={`Download.apps.${app.block}.title`} />
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        <T k={`Download.apps.${app.block}.subtitle`} />
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    <T k={`Download.apps.${app.block}.desc`} />
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {app.features.map((feature) => (
                      <li
                        key={feature.key}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                          <feature.icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-foreground">
                          <T k={`Download.apps.${app.block}.${feature.key}`} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <GooglePlayBadge href={app.link} />
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto mt-14 rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-10 text-primary-foreground">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <CheckCircle className="h-8 w-8 text-secondary shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-lg mb-1">
                    <T k="Download.both.title" />
                  </p>
                  <p className="text-primary-foreground/80">
                    <T k="Download.both.sub" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
