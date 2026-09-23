import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
import { 
  Gavel, 
  Percent, 
  CreditCard, 
  CheckCircle,
  HelpCircle,
  Users,
  Smartphone
} from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/pricing'),
  title: "Pricing - DTC | Free During Launch & Transparent Pricing",
  description: "Understand DTC's pricing model. Free for drivers during launch, no hidden fees, competitive bidding for shippers, and optional driver subscription plans.",
}

const forShippers = [
  { k: "f1" },
  { k: "f2" },
  { k: "f3" },
  { k: "f4" },
]

const subscriptionPlans = [
  {
    k: "p1",
    price: "FREE",
    priceValue: 0,
    hasSavings: true,
    featureKeys: ["1", "2", "3", "4", "5"],
    highlight: true,
  },
  {
    k: "p2",
    price: "700 ETB",
    priceValue: 700,
    hasSavings: false,
    featureKeys: ["1", "2", "3", "4", "5"],
    highlight: false,
  },
  {
    k: "p3",
    price: "1,800 ETB",
    priceValue: 1800,
    hasSavings: true,
    featureKeys: ["1", "2", "3", "4", "5", "6"],
    highlight: false,
  },
  {
    k: "p4",
    price: "6,000 ETB",
    priceValue: 6000,
    hasSavings: true,
    featureKeys: ["1", "2", "3", "4", "5", "6", "7"],
    highlight: false,
  },
]

const paymentMethods = [
  { k: "m1", icon: CreditCard },
  { k: "m2", icon: CreditCard },
  { k: "m3", icon: Smartphone },
]

const faqs = [
  { k: "q1" },
  { k: "q2" },
  { k: "q3" },
  { k: "q4" },
  { k: "q5" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="Pricing.hero.title" />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <T k="Pricing.hero.sub" />
              </p>
            </div>
          </div>
        </section>

        {/* Transparency Strip */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="text-sm font-semibold text-accent mb-2"><T k="Pricing.strip.launchLabel" /></div>
                <div className="text-foreground">
                  <span className="font-bold"><T k="Pricing.strip.launchFree" /></span> <T k="Pricing.strip.launchText" />
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="text-sm font-semibold text-accent mb-2"><T k="Pricing.strip.afterLabel" /></div>
                <div className="text-foreground">
                  <T k="Pricing.strip.afterText" />
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="text-sm font-semibold text-accent mb-2"><T k="Pricing.strip.shippersLabel" /></div>
                <div className="text-foreground">
                  <T k="Pricing.strip.shippersText" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Pricing Works */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* For Shippers */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Users className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                    <T k="Pricing.shippers.title" />
                  </h2>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Gavel className="h-5 w-5 text-secondary" />
                    <h3 className="font-semibold text-foreground"><T k="Pricing.shippers.bidTitle" /></h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    <T k="Pricing.shippers.bidDesc" />
                  </p>
                </div>

                <ul className="space-y-3">
                  {forShippers.map((item) => (
                    <li key={item.k} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground"><T k={`Pricing.shippers.${item.k}.title`} /></span>
                        <p className="text-sm text-muted-foreground"><T k={`Pricing.shippers.${item.k}.desc`} /></p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/for-shippers"><T k="Pricing.shippers.cta" /></Link>
                  </Button>
                </div>
              </div>

              {/* For Drivers */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-primary text-primary-foreground">
                    <Image
                      src="/app-icon-driver.png"
                      alt=""
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                    <T k="Pricing.drivers.title" />
                  </h2>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Percent className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground"><T k="Pricing.drivers.freeTitle" /></h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    <T k="Pricing.drivers.freeDesc" />
                  </p>
                </div>

                <div className="bg-card rounded-xl p-4 mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3"><T k="Pricing.drivers.example" /></h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"><T k="Pricing.drivers.cost" /></span>
                      <span className="font-medium text-foreground">45,000 ETB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground"><T k="Pricing.drivers.commission" /></span>
                      <span className="font-bold text-accent">0 ETB (free now)</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-medium text-foreground"><T k="Pricing.drivers.receives" /></span>
                      <span className="font-bold text-accent">45,000 ETB</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  <T k="Pricing.drivers.trial" />
                </p>

                <div className="mt-8">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/for-drivers"><T k="Pricing.drivers.cta" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="Pricing.plans.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="Pricing.plans.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.k}
                  className={`rounded-2xl p-6 ${
                    plan.highlight
                      ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2'
                      : 'bg-card border border-border'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-4">
                      <T k="Pricing.plans.newDrivers" />
                    </span>
                  )}
                  <h3 className={`text-xl font-semibold mb-1 ${plan.highlight ? '' : 'text-foreground'}`}>
                    <T k={`Pricing.plans.${plan.k}.name`} />
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    <T k={`Pricing.plans.${plan.k}.duration`} />
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                      {plan.price}
                    </span>
                    {plan.hasSavings && (
                      <p className={`text-sm mt-1 ${plan.highlight ? 'text-secondary' : 'text-accent'}`}>
                        <T k={`Pricing.plans.${plan.k}.savings`} />
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.featureKeys.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${plan.highlight ? 'text-secondary' : 'text-accent'}`} />
                        <span className={plan.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}>
                          <T k={`Pricing.plans.features.${feature}`} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className={`text-xs ${plan.highlight ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                    <T k={`Pricing.plans.${plan.k}.note`} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="Pricing.payment.title" />
                </h2>
                <p className="text-lg text-muted-foreground">
                  <T k="Pricing.payment.sub" />
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {paymentMethods.map((method) => (
                  <div key={method.k} className="bg-card border border-border rounded-xl p-6 text-center">
                    <method.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2"><T k={`Pricing.payment.${method.k}.name`} /></h3>
                    <p className="text-sm text-muted-foreground"><T k={`Pricing.payment.${method.k}.desc`} /></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="Pricing.faq.title" />
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.k} className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2"><T k={`Pricing.faq.${faq.k}.q`} /></h3>
                        <p className="text-muted-foreground text-sm"><T k={`Pricing.faq.${faq.k}.a`} /></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="Pricing.cta.title" />
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              <T k="Pricing.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/for-shippers"><T k="Pricing.cta.ship" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/for-drivers"><T k="Pricing.cta.drive" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
