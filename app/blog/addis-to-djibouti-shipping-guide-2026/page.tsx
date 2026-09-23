import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
import { ArrowRight, FileText, Building2, Truck, Package } from "lucide-react"

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

const docOrders = [
  { k: "d1", icon: FileText },
  { k: "d2", icon: Building2 },
  { k: "d3", icon: Package },
  { k: "d4", icon: Truck },
] as const

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
                <Link href="/blog" className="hover:text-primary"><T k="BlogPost.crumb" /></Link>
                <span className="mx-2"><T k="BlogPost.crumbSep" /></span>
                <T k="BlogPost.routeGuide" />
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="BlogPost.title" />
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <time dateTime="2026-01-15"><T k="BlogPost.date" /></time>
                <span>·</span>
                <span><T k="BlogPost.readTime" /></span>
              </div>
            </div>
          </div>
        </header>

        <article className="py-14 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              <T k="BlogPost.intro" />
            </p>

            {/* 1. Documentation */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="BlogPost.doc.title" />
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <T k="BlogPost.doc.sub" />
              </p>
              <ul className="mt-5 space-y-4">
                {docOrders.map((item) => (
                  <li key={item.k} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1"><T k={`BlogPost.doc.${item.k}.title`} /></div>
                      <div className="text-sm text-muted-foreground leading-relaxed"><T k={`BlogPost.doc.${item.k}.text`} /></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. Truck types */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="BlogPost.trucks.title" />
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <T k="BlogPost.trucks.sub" />
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { k: "t1", cap: "up to 35 q" },
                  { k: "t2", cap: "up to 100 q" },
                  { k: "t3", cap: "125–250 q" },
                  { k: "t4", cap: "251–400 q" },
                ].map((v) => (
                  <div key={v.k} className="bg-card border border-border rounded-xl p-5">
                    <div className="font-semibold text-foreground"><T k={`BlogPost.trucks.${v.k}.name`} /></div>
                    <div className="text-sm text-accent font-medium mb-2">{v.cap}</div>
                    <div className="text-xs text-muted-foreground"><T k={`BlogPost.trucks.${v.k}.note`} /></div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Post + bid */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="BlogPost.post.title" />
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <T k="BlogPost.post.text" />
              </p>
            </section>

            {/* Costs */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="BlogPost.costs.title" />
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <T k="BlogPost.costs.sub" />
              </p>
              <div className="overflow-hidden rounded-xl border border-border">
                {(["c1", "c2", "c3", "c4", "c5"] as const).map((row) => (
                  <div key={row} className="flex items-center justify-between gap-4 px-5 py-3.5 odd:bg-muted/30">
                    <span className="text-sm font-medium text-foreground"><T k={`BlogPost.costs.${row}.cat`} /></span>
                    <span className="text-sm text-accent"><T k={`BlogPost.costs.${row}.rate`} /></span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <T k="BlogPost.costs.footnote" />
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="BlogPost.faq.title" />
              </h2>
              <div className="space-y-4">
                {(["f1", "f2", "f3"] as const).map((key) => (
                  <div key={key} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2"><T k={`BlogPost.faq.${key}.q`} /></h3>
                    <p className="text-sm text-muted-foreground leading-relaxed"><T k={`BlogPost.faq.${key}.a`} /></p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="BlogPost.cta.title" />
              </h2>
              <p className="text-primary-foreground/80 text-sm mb-6">
                <T k="BlogPost.cta.sub" />
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/for-shippers">
                    <T k="BlogPost.cta.post" /> <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/download"><T k="BlogPost.cta.download" /></Link>
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