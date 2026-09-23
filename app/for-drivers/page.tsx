import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
import { 
  Users, 
  Wallet, 
  Calendar, 
  Star, 
  Headphones,
  Smartphone,
  FileCheck,
  CheckCircle,
  Bell,
  CreditCard,
  
  Truck
} from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/for-drivers'),
  title: "For Drivers - DTC | Grow Your Trucking Business",
  description: "Join DTC and get access to quality loads, fair pricing, and steady income. Register your vehicle, get verified, and start earning. Free trial for new drivers.",
}

const benefits = [
  { icon: Truck, key: "b1" },
  { icon: Users, key: "b2" },
  { icon: Wallet, key: "b3" },
  { icon: Calendar, key: "b4" },
  { icon: Star, key: "b5" },
  { icon: Headphones, key: "b6" },
]

const registrationSteps = [
  { step: 1, icon: Smartphone, key: "s1" },
  { step: 2, icon: FileCheck, key: "s2" },
  { step: 3, icon: Truck, key: "s3" },
  { step: 4, icon: CheckCircle, key: "s4" },
  { step: 5, icon: CreditCard, key: "s5" },
  { step: 6, icon: Bell, key: "s6" },
]

const requiredDocs = [
  { key: "d1", required: true },
  { key: "d2", required: true },
  { key: "d3", required: true },
  { key: "d4", required: false },
  { key: "d5", required: false },
  { key: "d6", required: false },
]

const subscriptionPlans = [
  { key: "p1", highlight: true, price: "FREE", priceNote: "(700 ETB value)" },
  { key: "p2", highlight: false, price: "700 ETB", priceNote: "" },
  { key: "p3", highlight: false, price: "1,800 ETB", priceNote: "(save 300 ETB)" },
  { key: "p4", highlight: false, price: "6,000 ETB", priceNote: "(save 2,400 ETB)" },
]

const driverStats = [
  { key: "st1" },
  { key: "st2" },
  { key: "st3" },
  { key: "st4" },
]

export default function ForDriversPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary mb-6">
<Image
                  src="/app-icon-driver.png"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 rounded"
                />
                <span className="text-sm font-medium"><T k="ForDrivers.hero.badge" /></span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="ForDrivers.hero.title" />
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  <T k="ForDrivers.hero.sub" />
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                    <Link href="/download"><T k="ForDrivers.hero.start" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    <Link href="/how-it-works"><T k="ForDrivers.hero.how" /></Link>
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span><T k="ForDrivers.hero.trial" /></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span><T k="ForDrivers.hero.noFees" /></span>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {driverStats.map((stat) => (
                  <div key={stat.key} className="bg-card border border-border rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}><T k={`ForDrivers.hero.stats.${stat.key}.head`} /></div>
                    <div className="text-muted-foreground"><T k={`ForDrivers.hero.stats.${stat.key}.label`} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ForDrivers.benefits.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ForDrivers.benefits.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.key}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`ForDrivers.benefits.${benefit.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`ForDrivers.benefits.${benefit.key}.desc`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Register */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ForDrivers.register.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ForDrivers.register.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {registrationSteps.map((item) => (
                <div key={item.step} className="bg-card border border-border rounded-xl p-6 relative">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-border" style={{ fontFamily: 'var(--font-display)' }}>
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`ForDrivers.register.${item.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`ForDrivers.register.${item.key}.desc`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="ForDrivers.docs.title" />
                </h2>
                <p className="text-lg text-muted-foreground">
                  <T k="ForDrivers.docs.sub" />
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocs.map((doc) => (
                  <div
                    key={doc.key}
                    className={`flex items-start gap-4 p-4 rounded-xl border ${
                      doc.required ? 'bg-card border-border' : 'bg-muted/50 border-transparent'
                    }`}
                  >
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 ${
                      doc.required ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      <FileCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-foreground"><T k={`ForDrivers.docs.${doc.key}.name`} /></h3>
                        {doc.required ? (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"><T k="ForDrivers.docs.required" /></span>
                        ) : (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"><T k="ForDrivers.docs.optional" /></span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground"><T k={`ForDrivers.docs.${doc.key}.desc`} /></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ForDrivers.plans.title" />
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                <T k="ForDrivers.plans.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.key}
                  className={`rounded-2xl p-6 ${
                    plan.highlight
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary-foreground/10'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block px-2 py-1 rounded-full bg-secondary-foreground/20 text-xs font-medium mb-4">
                      <T k="ForDrivers.plans.newDrivers" />
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-2"><T k={`ForDrivers.plans.${plan.key}.name`} /></h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{plan.price}</span>
                    {plan.priceNote && (
                      <span className={`text-sm ${plan.highlight ? 'text-secondary-foreground/70' : 'text-primary-foreground/70'}`}>
                        {' '}{plan.priceNote}
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-2"><T k={`ForDrivers.plans.${plan.key}.duration`} /></p>
                  <p className={`text-sm ${plan.highlight ? 'text-secondary-foreground/80' : 'text-primary-foreground/80'}`}>
                    <T k={`ForDrivers.plans.${plan.key}.desc`} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="ForDrivers.cta.title" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <T k="ForDrivers.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/download"><T k="ForDrivers.cta.download" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link href="/contact"><T k="ForDrivers.cta.support" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
