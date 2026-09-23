import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { T } from "@/components/i18n/text"
import { HelpCircle, Package, Truck, CreditCard, MapPin, Shield } from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/faq'),
  title: "FAQ - DTC | Frequently Asked Questions",
  description: "Find answers to common questions about DTC: shipping, driver registration, pricing, tracking, payments, and more.",
}

const faqCategories = [
  { id: "shipping", icon: Package, count: 5 },
  { id: "drivers", icon: Truck, count: 5 },
  { id: "pricing", icon: CreditCard, count: 5 },
  { id: "tracking", icon: MapPin, count: 4 },
  { id: "safety", icon: Shield, count: 5 },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary mb-6">
                <HelpCircle className="h-4 w-4" />
                <span className="text-sm font-medium"><T k="Faq.hero.badge" /></span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="Faq.hero.title" />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <T k="Faq.hero.sub" />
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category) => (
                <div key={category.id} className="mb-12 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      <T k={`Faq.categories.${category.id}.title`} />
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {Array.from({ length: category.count }, (_, i) => i + 1).map((n) => (
                      <AccordionItem key={`${category.id}-${n}`} value={`${category.id}-${n}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium text-foreground"><T k={`Faq.categories.${category.id}.q${n}.q`} /></span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed"><T k={`Faq.categories.${category.id}.q${n}.a`} /></p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="Faq.cta.title" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <T k="Faq.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact"><T k="Faq.cta.contact" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link href="/download"><T k="Faq.cta.download" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
