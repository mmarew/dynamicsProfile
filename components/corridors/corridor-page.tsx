import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/seo/json-ld"
import { SeoText } from "@/components/seo/seo-text"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  
  CheckCircle,
  Phone,
  ArrowRight,
  Truck,
  Package,
  Route,
} from "lucide-react"

export type CorridorVehicle = {
  name: string
  capacity: string
  bestFor: string
  icon: string
}

export type CorridorFaq = {
  question: string
  answer: string
}

export type CorridorData = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  distance: string
  transitTime: string
  endpoints: { from: string; to: string }
  corridorName: string
  vehicles: CorridorVehicle[]
  priceNote: string
  priceRows: { route: string; typical: string }[]
  howItWorks: { title: string; description: string }[]
  faqs: CorridorFaq[]
  internalLinks: { label: string; href: string }[]
}

export function CorridorPage({ data }: { data: CorridorData }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.metaTitle,
    serviceType: "Freight transport",
    description: data.metaDescription,
    url: `https://dynamicsroute.tech${data.slug}`,
    provider: {
      "@type": "Organization",
      name: "DTC - Dynamics Route Tech",
      telephone: "+251983222221",
      url: "https://dynamicsroute.tech",
    },
    areaServed: { "@type": "Country", name: "Ethiopia" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ETB",
      description: "Post your load for free. Pay only upon delivery.",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
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
                  <Route className="h-4 w-4" />
                  <span className="text-sm font-medium">{data.corridorName}</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  {data.h1}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{data.intro}</p>
                <SeoText tag="h2">
                  Transport and logistics on the {data.corridorName} route — {data.distance},
                  typical transit {data.transitTime}. Book a verified truck for truck freight, cargo,
                  and container transport between {data.endpoints.from} and {data.endpoints.to}.
                </SeoText>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
                    <Link href="/for-shippers">
                      Post a Load
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/download">Download Shipper App</Link>
                  </Button>
                </div>
              </div>

              {/* Route summary card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-foreground">{data.endpoints.from}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="font-semibold text-foreground">{data.endpoints.to}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-xs font-medium text-muted-foreground mb-1">Distance</div>
                    <div className="font-bold text-foreground">{data.distance}</div>
                  </div>
                  <div className="bg-muted rounded-xl p-4">
                    <div className="text-xs font-medium text-muted-foreground mb-1">Typical Transit</div>
                    <div className="font-bold text-foreground">{data.transitTime}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Routes run daily. Post a load and verified drivers bid on it — you pick the best offer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicles */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Vehicle Types on This Route
              </h2>
              <p className="text-lg text-muted-foreground">
                Match your cargo to the right truck. 1 quintal = 100 kg.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.vehicles.map((vehicle) => (
                <div key={vehicle.name} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-center h-20 mb-5 bg-primary/5 rounded-xl">
                    <div className="relative">
                      <Image
                        src="/app-icon-driver.png"
                        alt={`${vehicle.name} for ${data.corridorName}`}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-xl"
                      />
                      <span className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded">
                        {vehicle.icon}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{vehicle.name}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                    {vehicle.capacity}
                  </span>
                  <p className="text-sm text-muted-foreground flex items-start gap-1.5">
                    <Truck className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    {vehicle.bestFor}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/services">Compare All Vehicle Types</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing guide */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Pricing Guide
              </h2>
              <p className="text-lg text-muted-foreground">{data.priceNote}</p>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-4 px-6 py-4 bg-primary text-primary-foreground">
                <span className="font-semibold text-sm">Route Segment</span>
                <span className="font-semibold text-sm text-right">Typical Range</span>
              </div>
              <div className="divide-y divide-border">
                {data.priceRows.map((row) => (
                  <div key={row.route} className="grid grid-cols-2 gap-4 px-6 py-4">
                    <span className="text-sm text-foreground">{row.route}</span>
                    <span className="text-sm text-muted-foreground text-right">{row.typical}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Rates vary by cargo weight, vehicle type, and season. Post a load to receive exact bids from verified drivers free.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/for-shippers">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                How It Works
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {data.howItWorks.map((step, i) => (
                <div key={step.title} className="bg-card border border-border rounded-xl p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent font-bold mb-4">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq) => (
                <div key={faq.question} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Package className="h-5 w-5 text-accent" />
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {data.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
              >
                <Phone className="h-3.5 w-3.5" />
                {`Call ${"+251 983 222 221"}`}
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Move Cargo on the {data.corridorName} Route
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Post a load now and get bids from verified drivers within minutes. Pay only when your cargo is delivered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/for-shippers">
                  Post a Load
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/download">Download the App</Link>
              </Button>
            </div>
            <p className="text-primary-foreground/70 text-sm mt-6 flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Free during launch — no commission until the trial ends.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
    </div>
  )
}