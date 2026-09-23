import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { T } from "@/components/i18n/text"

const footerNavigation = {
  platform: [
    { key: "shippers", href: "/for-shippers" },
    { key: "drivers", href: "/for-drivers" },
    { key: "queueOrgs", href: "/for-queue-orgs" },
    { key: "associations", href: "/for-associations" },
    { key: "pricing", href: "/pricing" },
    { key: "download", href: "/download" },
  ],
  company: [
    { key: "about", href: "/about" },
    { key: "howItWorks", href: "/how-it-works" },
    { key: "services", href: "/services" },
    { key: "contact", href: "/contact" },
  ],
  resources: [
    { key: "safety", href: "/safety" },
    { key: "faq", href: "/faq" },
    { key: "terms", href: "/terms" },
    { key: "privacy", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-secondary">
                <Image
                  src="/app-icon-driver.png"
                  alt="DTC logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                DTC
              </span>
            </Link>
            <T
              k="Footer.tagline"
              as="p"
              className="text-primary-foreground/80 mb-6 max-w-sm"
            />
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span><T k="Footer.address" /></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:support@dynamicstransport.com" className="hover:text-secondary transition-colors">
                  support@dynamicstransport.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+251983222221" className="hover:text-secondary transition-colors">
                  +251 983 222 221
                </a>
                <span className="text-primary-foreground/60"><T k="Footer.callCenter" /></span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <T k="Footer.columns.platform" as="h3" className="font-semibold mb-4" />
            <ul className="space-y-3">
              {footerNavigation.platform.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <T k={`Footer.nav.platform.${item.key}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <T k="Footer.columns.company" as="h3" className="font-semibold mb-4" />
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <T k={`Footer.nav.company.${item.key}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <T k="Footer.columns.resources" as="h3" className="font-semibold mb-4" />
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    <T k={`Footer.nav.resources.${item.key}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()}{" "}<T k="Footer.bottom.rights" />
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              <T k="Footer.bottom.terms" />
            </Link>
            <Link href="/privacy" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
              <T k="Footer.bottom.privacy" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
