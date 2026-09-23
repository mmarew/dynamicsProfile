"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { T } from "@/components/i18n/text"
import {
  Building2,
  Gavel,
  Users,
  CheckCircle,
  MapPin,
  TrendingUp,
  Send,
  ExternalLink,
  Phone,
  Shield,
  FileText,
} from "lucide-react"

const features = [
  { icon: Gavel, key: "f1" },
  { icon: Users, key: "f2" },
  { icon: Shield, key: "f3" },
  { icon: TrendingUp, key: "f4" },
  { icon: MapPin, key: "f5" },
  { icon: FileText, key: "f6" },
]

const howItWorks = [
  { step: 1, key: "h1" },
  { step: 2, key: "h2" },
  { step: 3, key: "h3" },
  { step: 4, key: "h4" },
]

export default function ForAssociationsPage() {
  const [formState, setFormState] = useState({
    name: "",
    associationName: "",
    email: "",
    phone: "",
    memberCount: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        associationName: "",
        email: "",
        phone: "",
        memberCount: "",
        message: "",
      })
    }, 1500)
  }

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
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm font-medium"><T k="ForAssociations.hero.badge" /></span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="ForAssociations.hero.title" />
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  <T k="ForAssociations.hero.sub" />
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8">
                    <Link href="#partnership">
                      <T k="ForAssociations.hero.partner" />
                      <Send className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="https://association.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                      <T k="ForAssociations.hero.portal" />
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground"><T k="ForAssociations.hero.misc.wonBatch" /></h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary"><T k="ForAssociations.hero.misc.vehicles" /></span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { plate: "AA 11223", type: "Medium Truck", driver: "Assign now", state: "Empty slot", assigned: false },
                      { plate: "AA 44556", type: "Heavy Truck", driver: "T. Gebre", state: "Confirmed", assigned: true },
                      { plate: "AA 77889", type: "20ft Container", driver: "A. Ali", state: "Loading", assigned: true },
                    ].map((row) => (
                      <div key={row.plate} className="flex items-center gap-3 bg-muted rounded-lg p-3">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm">{row.plate}</div>
                          <div className="text-xs text-muted-foreground">{row.type}</div>
                        </div>
                        <span
                          className={
                            row.assigned
                              ? "text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary flex items-center gap-1"
                              : "text-xs px-2 py-1 rounded-full bg-accent/10 text-accent flex items-center gap-1"
                          }
                        >
                          {row.assigned ? (
                            <><CheckCircle className="h-3 w-3" />{row.state}</>
                          ) : (
                            <>{row.state}</>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <T k="ForAssociations.hero.misc.routeBar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ForAssociations.features.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ForAssociations.features.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.key}
                  className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`ForAssociations.features.${feature.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`ForAssociations.features.${feature.key}.desc`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="ForAssociations.how.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ForAssociations.how.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {howItWorks.map((item) => (
                <div key={item.step} className="bg-card border border-border rounded-xl p-6 relative">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-border" style={{ fontFamily: 'var(--font-display)' }}>
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`ForAssociations.how.${item.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`ForAssociations.how.${item.key}.desc`} /></p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-secondary/10 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <p className="text-foreground font-medium"><T k="ForAssociations.how.banner" /></p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shrink-0">
                <a href="https://association.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                  <T k="ForAssociations.how.portal" />
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section id="partnership" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="ForAssociations.partner.title" />
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  <T k="ForAssociations.partner.sub" />
                </p>
                <ul className="space-y-3">
                  {(["point1", "point2", "point3", "point4"] as const).map((key) => (
                    <li key={key} className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <T k={`ForAssociations.partner.${key}`} />
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-secondary" />
                    <T k="ForAssociations.partner.call" />
                  </h3>
                  <a href="tel:+251983222221" className="text-secondary hover:underline font-medium">
                    +251 983 222 221
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 text-secondary mx-auto mb-4">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2"><T k="ForAssociations.partner.successTitle" /></h3>
                    <p className="text-muted-foreground mb-4">
                      <T k="ForAssociations.partner.successText" />
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      <T k="ForAssociations.partner.again" />
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="associationName" className="block text-sm font-medium text-foreground mb-1.5">
                        <T k="ForAssociations.partner.assocName" />
                      </label>
                      <Input
                        id="associationName"
                        type="text"
                        required
                        placeholder="e.g. Addis Transport Association"
                        value={formState.associationName}
                        onChange={(e) => setFormState({ ...formState, associationName: e.target.value })}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          <T k="ForAssociations.partner.yourName" />
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          placeholder="Full name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                          <T k="ForAssociations.partner.phone" />
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+251 9XX XXX XXXX"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          <T k="ForAssociations.partner.email" />
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="memberCount" className="block text-sm font-medium text-foreground mb-1.5">
                          <T k="ForAssociations.partner.memberCount" />
                        </label>
                        <Input
                          id="memberCount"
                          type="text"
                          placeholder="e.g. 80"
                          value={formState.memberCount}
                          onChange={(e) => setFormState({ ...formState, memberCount: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        <T k="ForAssociations.partner.message" />
                      </label>
                      <Textarea
                        id="message"
                        rows={3}
                        placeholder="Tell us about your association, routes, and fleet..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <T k="ForAssociations.partner.sending" /> : <T k="ForAssociations.partner.submit" />}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      <T k="ForAssociations.partner.note" />
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="ForAssociations.cta.title" />
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              <T k="ForAssociations.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="#partnership"><T k="ForAssociations.cta.partner" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/for-queue-orgs"><T k="ForAssociations.cta.queueOps" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Transport Association Software Ethiopia",
            serviceType: "Transport association fleet management",
            description: "Bulk driver onboarding, association dashboard, batch bidding, fleet and member management, and compliance tracking for transport associations and companies in Ethiopia.",
            url: "https://dynamicsroute.tech/for-associations",
            provider: {
              "@type": "Organization",
              name: "DTC - Dynamics Route Tech",
              telephone: "+251983222221",
              url: "https://dynamicsroute.tech",
            },
            areaServed: { "@type": "Country", name: "Ethiopia" },
          }),
        }}
      />
    </div>
  )
}