import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {  ArrowRight, FileText, Building2, Truck, Package } from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/blog/addis-djibouti-shipping-guide-2026'),
  title: "Addis Ababa to Djibouti Shipping Guide 2026 | Costs & Documents | DTC",
  description:
    "Full 2026 guide to shipping cargo from Addis Ababa to Djibouti Port: documentation, truck types & rates, transit times, customs, and insurance. Free to post loads now.",
  openGraph: {
    title: "Addis Ababa to Djibouti Shipping Guide 2026 | DTC",
    description:
      "Complete 2026 shipping guide for the Addis Ababa–Djibouti corridor — documentation, truck rates, transit times, and customs tips.",
    type: "article",
    locale: "en_US",
    siteName: "DTC - Dynamics Transport Commission",
  },
}

const faqs = [
  {
    question: "How long does it take to ship from Addis Ababa to Djibouti?",
    answer:
      "Road freight typically takes 2–3 days, while the Addis Ababa–Djibouti railway (Addis–Djibouti Standard Gauge) moves containers in about 12 hours. Road is more flexible for door-to-door and non-container cargo.",
  },
  {
    question: "What documents do I need to clear cargo in Djibouti?",
    answer:
      "You need a full customs declaration, commercial invoice, packing list, and for many shipments a Certificate of Origin. Regularly clearing agents handle the process for you; DTC matches you with verified drivers once loaded.",
  },
  {
    question: "What is the current Djibouti corridor rate?",
    answer:
      "Rates fluctuate with diesel prices and season. Trucks typically charge roughly 3,000–7,000 ETB per quintal depending on vehicle class. Post your load on DTC and get competing bids from verified drivers — rates are agreed with the driver, never set by us.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Ship Cargo from Addis Ababa to Djibouti in 5 Steps",
  step: [
    { "@type": "HowToStep", position: 1, name: "Prepare documentation" },
    { "@type": "HowToStep", position: 2, name: "Post your load on DTC" },
    { "@type": "HowToStep", position: 3, name: "Receive and compare driver bids" },
    { "@type": "HowToStep", position: 4, name: "Book, track, and confirm delivery" },
  ],
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <main className="flex-1">
        <header className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm text-muted-foreground mb-4">
                <Link href="/blog" className="hover:text-primary">Blog</Link>
                <span className="mx-2">/</span>
                Route Guide
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                How to Ship Cargo from Addis Ababa to Djibouti (2026 Guide)
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <time dateTime="2026-01-15">January 15, 2026</time>
                <span>·</span>
                <span>9 min read</span>
              </div>
            </div>
          </div>
        </header>

        <article className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The Addis Ababa–Djibouti corridor is the artery of Ethiopia's trade, carrying roughly 95% of the country's imports and exports. Here's everything you need to ship cargo on it in 2026 — without surprises.
            </p>

            {/* 1. Documentation */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Step 1 — Prepare Your Documentation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Before any truck rolls, your cargo needs to clear customs. Have these ready:
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  { icon: FileText, title: "Customs declaration", text: "Filed by your licensed clearing agent against the cargo value and HS code." },
                  { icon: Building2, title: "Commercial invoice", text: "Details goods, quantity, value, and the buyer/seller. Keep a copy in the truck." },
                  { icon: Package, title: "Packing list", text: "Weight, dimensions, and contents of each package — used for physical inspection and truck matching." },
                  { icon: Truck, title: "Transit document", text: "For containers moving onward to Djibouti Port, confirm the transit declaration (bond) so cargo doesn't sit at the border." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. Truck types */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Step 2 — Choose Your Truck Type
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The right vehicle keeps your per-quintal cost low and matches the cargo. Rates quoted per quintal (100 kg).
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Light Truck", cap: "up to 35 q", note: "Small batches, quick Kadis transfers" },
                  { name: "Medium Truck", cap: "up to 100 q", note: "Bulk cargo, regional distribution" },
                  { name: "Heavy / Extra Heavy", cap: "125–250 q", note: "Heavy bulk or single 20ft container" },
                  { name: "Container Truck", cap: "251–400 q", note: "2×20ft or single 40ft ISO container" },
                ].map((v) => (
                  <div key={v.name} className="bg-card border border-border rounded-xl p-5">
                    <div className="font-semibold text-foreground">{v.name}</div>
                    <div className="text-sm text-accent font-medium mb-2">{v.cap}</div>
                    <div className="text-xs text-muted-foreground">{v.note}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Post + bid */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Step 3 — Post Your Load &amp; Get Bids
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Post your shipment on the DTC app or website with pickup, destination, weight, and vehicle type. Verified drivers bid on your load — you compare quotes, ratings, and vehicles, then pick the best offer. No platform commission; you pay the driver directly only on delivery.
              </p>
            </section>

            {/* Costs */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                What It Costs
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Rates below are typical per-quintal ranges after a competitive bid — posted rates are agreed with the driver, never set by DTC.
              </p>
              <div className="overflow-hidden rounded-xl border border-border">
                {[
                  { cat: "Light / Medium truck (≤100 q)", rate: "contact for quote" },
                  { cat: "Heavy truck (125–175 q)", rate: "contact for quote" },
                  { cat: "Extra heavy (176–250 q)", rate: "contact for quote" },
                  { cat: "Single 20ft container", rate: "contact for quote" },
                  { cat: "40ft / 2×20ft container", rate: "contact for quote" },
                ].map((row) => (
                  <div key={row.cat} className="flex items-center justify-between gap-4 px-5 py-3.5 odd:bg-muted/30">
                    <span className="text-sm font-medium text-foreground">{row.cat}</span>
                    <span className="text-sm text-accent">{row.rate}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Post a load now to receive exact bids — free during launch, no hidden fees.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.question} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                Post Your Load Free
              </h2>
              <p className="text-primary-foreground/80 text-sm mb-6">
                Getting started on the corridor takes 2 minutes. Post a load and compare verified driver bids — pay only on delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/for-shippers">
                    Post a Load <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/download">Download the App</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}