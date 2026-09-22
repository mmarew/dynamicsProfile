export const SITE_NAME = "DTC - Dynamics Route Tech"
export const SITE_NAME_SHORT = "DTC"
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dynamicsroute.tech"
export const SITE_TAGLINE = "Move goods. Move fast. Move smart."
export const CONTACT_PHONE = "+251 983 222 221"
export const CONTACT_EMAIL = "info@dynamicsroute.tech"

export function siteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  return new URL(clean, SITE_URL).toString()
}

export function canonical(path = "/"): { alternates: { canonical: string } } {
  return { alternates: { canonical: siteUrl(path) } }
}

export const openGraphDefaults = () => ({
  type: "website" as const,
  locale: "en_US",
  siteName: SITE_NAME,
})

export const twitterDefaults = () => ({
  card: "summary" as const,
})

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Freight matching platform connecting shippers with verified truck drivers across Ethiopia and Djibouti. Competitive bidding, GPS tracking, and queue management.",
    url: siteUrl("/"),
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    image: siteUrl("/app-icon-driver.png"),
    priceRange: "$$",
    areaServed: ["Ethiopia", "Djibouti"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    sameAs: [],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Freight matching and transport",
          serviceType: "Freight forwarding",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Truck queue management system",
          serviceType: "Loading queue digitization",
        },
      },
    ],
  }
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrl("/"),
    logo: siteUrl("/app-icon-driver.png"),
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE,
      contactType: "customer service",
      areaServed: "ET",
      availableLanguage: ["English", "Amharic"],
    },
  }
}