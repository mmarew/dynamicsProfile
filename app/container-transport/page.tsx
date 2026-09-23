import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
import { containerTransportData } from "@/lib/corridors"
import { canonical, siteUrl } from "@/lib/seo"
import { ArrowRight, CheckCircle, Truck, Package, MapPin } from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/container-transport'),
  title: containerTransportData.metaTitle,
  description: containerTransportData.metaDescription,
  openGraph: {
    title: containerTransportData.metaTitle,
    description: containerTransportData.metaDescription,
    type: "website",
    locale: "en_US",
    siteName: "DTC - Dynamics Transport Commission",
  },
}

const containerVehicles = [
  {
    k: "v1",
    capacity: "300 quintals",
    icon: "20FT",
  },
  {
    k: "v2",
    capacity: "400 quintals",
    icon: "2×20",
  },
  {
    k: "v3",
    capacity: "400 quintals",
    icon: "40FT",
  },
  {
    k: "v4",
    capacity: "350 quintals",
    icon: "LB",
  },
]

const containerFaqs = [
  {
    question: "What container sizes can DTC move?",
    answer: "We move 20ft, 2×20ft, and 40ft ISO containers with purpose-built container trucks. Choose the right configuration when you post your load and drivers with the correct chassis will bid.",
  },
  {
    question: "Do you handle cross-border container moves to Djibouti?",
    answer: "Yes. Containers move from Addis Ababa, Modjo Dry Port, and Dire Dawa to Djibouti Port. Customs clearance is handled by your clearing agent; DTC matches you with verified drivers for the haul.",
  },
  {
    question: "How do I book a container truck?",
    answer: "Post a load from the app or website with your pickup, destination, container size, and cargo weight. Verified container drivers bid on it and you pick the best offer.",
  },
]

export default function ContainerTransportPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: containerTransportData.metaTitle,
    serviceType: "Container transport",
    description: containerTransportData.metaDescription,
    url: siteUrl("/container-transport"),
    provider: {
      "@type": "Organization",
      name: "DTC - Dynamics Route Tech",
      telephone: "+251983222221",
      url: siteUrl("/"),
    },
    areaServed: { "@type": "Country", name: "Ethiopia" },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: containerFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent mb-6">
                  <Truck className="h-4 w-4" />
                  <span className="text-sm font-medium">20ft · 2×20ft · 40ft</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  {containerTransportData.h1}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {containerTransportData.intro}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
                    <Link href="/for-shippers">
                      <T k="ContainerTransport.hero.cta" />
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/download"><T k="ContainerTransport.hero.download" /></Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-foreground"><T k="ContainerTransport.hero.capacityTitle" /></h2>
                  <Package className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-4">
                  {containerVehicles.map((v) => (
                    <div key={v.k} className="flex items-start gap-3 bg-muted rounded-xl p-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent text-xs font-bold">
                        {v.icon}
                      </span>
                      <div>
                        <div className="font-semibold text-foreground text-sm"><T k={`ContainerTransport.vehicles.${v.k}.name`} /></div>
                        <div className="text-xs text-muted-foreground"><T k={`ContainerTransport.vehicles.${v.k}.bestFor`} /></div>
                        <div className="text-xs text-accent font-medium mt-1">{v.capacity}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corridors */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ContainerTransport.routes.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ContainerTransport.routes.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Addis Ababa → Djibouti Port", href: "/addis-to-djibouti" },
                { name: "Modjo Dry Port → Addis Ababa", href: "/modjo-dry-port" },
                { name: "Dire Dawa → Djibouti Port", href: "/dire-dawa-to-djibouti" },
                { name: "Kality Warehouse ↔ City", href: "/kality-warehouse" },
              ].map((route) => (
                <Link
                  key={route.name}
                  href={route.href}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
                >
                  <MapPin className="h-5 w-5 text-accent mb-3" />
                  <div className="font-semibold text-foreground mb-2">{route.name}</div>
                  <span className="text-sm text-accent group-hover:underline inline-flex items-center gap-1">
                    <T k="ContainerTransport.routes.view" /> <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ContainerTransport.how.title" />
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(["s1", "s2", "s3", "s4"] as const).map((key, i) => (
                <div key={key} className="bg-card border border-border rounded-xl p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent font-bold mb-4">
                    {i + 1}
                  </span>
                  <div className="font-semibold text-foreground mb-1"><T k={`ContainerTransport.how.${key}.title`} /></div>
                  <div className="text-sm text-muted-foreground"><T k={`ContainerTransport.how.${key}.desc`} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ContainerTransport.faq.title" />
              </h2>
            </div>
            <div className="space-y-4">
              {(["f1", "f2", "f3"] as const).map((key) => (
                <div key={key} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <T k={`ContainerTransport.faq.${key}.q`} />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed"><T k={`ContainerTransport.faq.${key}.a`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="ContainerTransport.cta.title" />
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              <T k="ContainerTransport.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/for-shippers"><T k="ContainerTransport.cta.post" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/for-drivers"><T k="ContainerTransport.cta.drive" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
    </div>
  )
}