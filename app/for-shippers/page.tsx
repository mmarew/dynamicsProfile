import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
import { 
  Package, 
  TrendingUp, 
  Shield, 
  Clock, 
  MapPin, 
  CreditCard,
  Smartphone,
  Phone,
  FileText,
  Users,
  CheckCircle,
  Star
} from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/for-shippers'),
  title: "For Shippers - DTC | Ship Your Cargo with Confidence",
  description: "Post shipments and receive competitive bids from verified truck drivers. Real-time GPS tracking, flexible payments, and 24/7 support. Ship across Ethiopia and Djibouti.",
}

const benefits = [
  { icon: Package, key: "b1" },
  { icon: TrendingUp, key: "b2" },
  { icon: Shield, key: "b3" },
  { icon: MapPin, key: "b4" },
  { icon: CreditCard, key: "b5" },
  { icon: Clock, key: "b6" },
]

const steps = [
  { step: 1, icon: Smartphone, key: "s1" },
  { step: 2, icon: FileText, key: "s2" },
  { step: 3, icon: Users, key: "s3" },
  { step: 4, icon: CheckCircle, key: "s4" },
  { step: 5, icon: MapPin, key: "s5" },
  { step: 6, icon: Star, key: "s6" },
]

const paymentMethods = [
  { key: "m1" },
  { key: "m2" },
  { key: "m3" },
]

export default function ForShippersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary mb-6">
                  <Package className="h-4 w-4" />
                  <span className="text-sm font-medium"><T k="ForShippers.hero.badge" /></span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="ForShippers.hero.title" />
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  <T k="ForShippers.hero.sub" />
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8">
                    <Link href="/download"><T k="ForShippers.hero.download" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="/how-it-works"><T k="ForShippers.hero.how" /></Link>
                  </Button>
                </div>
              </div>
              
              {/* Visual */}
              <div className="hidden lg:block">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground"><T k="ForShippers.hero.misc.newShipment" /></h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent"><T k="ForShippers.hero.misc.bidsReceived" /></span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">Addis Ababa, Merkato</span>
                    </div>
                    <div className="border-l-2 border-dashed border-border h-4 ml-1.5" />
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                      <span className="text-sm text-muted-foreground">Djibouti City</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground"><T k="ForShippers.hero.misc.cargo" /></div>
                      <div className="font-medium text-sm"><T k="ForShippers.hero.misc.constructionMaterials" /></div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="text-xs text-muted-foreground"><T k="ForShippers.hero.misc.weight" /></div>
                      <div className="font-medium text-sm">150 quintals</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-xs text-muted-foreground mb-2"><T k="ForShippers.hero.misc.bestBid" /></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                          <Image
                            src="/app-icon-driver.png"
                            alt="Driver avatar"
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-sm"><T k="ForShippers.hero.misc.heavyTruck" /></div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-secondary fill-secondary" />
                            <span className="text-xs text-muted-foreground"><T k="ForShippers.hero.misc.rating" /></span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground">45,000 ETB</div>
                        <div className="text-xs text-accent"><T k="ForShippers.hero.misc.lowestBid" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ForShippers.benefits.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ForShippers.benefits.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.key}
                  className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`ForShippers.benefits.${benefit.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`ForShippers.benefits.${benefit.key}.desc`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Ship */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ForShippers.steps.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ForShippers.steps.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((item) => (
                <div key={item.step} className="bg-card border border-border rounded-xl p-6 relative">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-border" style={{ fontFamily: 'var(--font-display)' }}>
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`ForShippers.steps.${item.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`ForShippers.steps.${item.key}.desc`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Options */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="ForShippers.payments.title" />
                </h2>
                <p className="text-lg text-muted-foreground">
                  <T k="ForShippers.payments.sub" />
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {paymentMethods.map((method) => (
                  <div key={method.key} className="bg-card border border-border rounded-xl p-6 text-center">
                    <CreditCard className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2"><T k={`ForShippers.payments.${method.key}.title`} /></h3>
                    <p className="text-sm text-muted-foreground"><T k={`ForShippers.payments.${method.key}.desc`} /></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call Center */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <Phone className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="ForShippers.call.title" />
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              <T k="ForShippers.call.sub" />
            </p>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8">
              <Link href="/contact"><T k="ForShippers.call.support" /></Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="ForShippers.cta.title" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <T k="ForShippers.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/download"><T k="ForShippers.cta.download" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/pricing"><T k="ForShippers.cta.pricing" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
