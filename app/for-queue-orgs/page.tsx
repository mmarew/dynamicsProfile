"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { T } from "@/components/i18n/text"
import {
  MapPin,
  Clock,
  Users,
  Gavel,
  CheckCircle,
  FileText,
  Shield,
  TrendingUp,
  Send,
  ExternalLink,
  Phone,
  Eye,
} from "lucide-react"

const features = [
  { icon: Users, key: "f1" },
  { icon: Clock, key: "f2" },
  { icon: Gavel, key: "f3" },
  { icon: MapPin, key: "f4" },
  { icon: FileText, key: "f5" },
  { icon: Shield, key: "f6" },
]

const steps = [
  { icon: FileText, key: "h1" },
  { icon: MapPin, key: "h2" },
  { icon: Clock, key: "h3" },
  { icon: TrendingUp, key: "h4" },
]

export default function ForQueueOrgsPage() {
  const [formState, setFormState] = useState({
    name: "",
    orgName: "",
    email: "",
    phone: "",
    vehicles: "",
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
        orgName: "",
        email: "",
        phone: "",
        vehicles: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent mb-6">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium"><T k="ForQueueOrgs.hero.badge" /></span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="ForQueueOrgs.hero.title" />
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  <T k="ForQueueOrgs.hero.sub" />
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
                    <Link href="#request-demo">
                      <T k="ForQueueOrgs.hero.demo" />
                      <Send className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="https://queue.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                      <T k="ForQueueOrgs.hero.console" />
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground"><T k="ForQueueOrgs.hero.misc.liveBoard" /></h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent"><T k="ForQueueOrgs.hero.misc.queueRunning" /></span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { plate: "AA 12345", type: "Medium Truck", state: "Waiting since 09:12", pos: 1 },
                      { plate: "AA 98765", type: "Heavy Truck", state: "Waiting since 09:20", pos: 2 },
                      { plate: "AA 55667", type: "40ft Container", state: "Waiting since 09:27", pos: 3 },
                    ].map((row) => (
                      <div key={row.plate} className="flex items-center gap-3 bg-muted rounded-lg p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold">
                          {row.pos}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm">{row.plate}</div>
                          <div className="text-xs text-muted-foreground">{row.type}</div>
                        </div>
                        <div className="text-xs text-accent flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {row.state}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="h-4 w-4 text-accent" />
                      <T k="ForQueueOrgs.hero.misc.nextOrder" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <T k="ForQueueOrgs.hero.misc.liveNote" />
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
                <T k="ForQueueOrgs.features.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ForQueueOrgs.features.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.key}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`ForQueueOrgs.features.${feature.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`ForQueueOrgs.features.${feature.key}.desc`} /></p>
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
                <T k="ForQueueOrgs.how.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="ForQueueOrgs.how.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, index) => (
                <div key={item.key} className="bg-card border border-border rounded-xl p-6 relative">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-border" style={{ fontFamily: 'var(--font-display)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`ForQueueOrgs.how.${item.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`ForQueueOrgs.how.${item.key}.desc`} /></p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-accent/10 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <p className="text-foreground font-medium"><T k="ForQueueOrgs.how.banner" /></p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0">
                <a href="https://queue.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                  <T k="ForQueueOrgs.how.console" />
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Demo request */}
        <section id="request-demo" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="ForQueueOrgs.demo.title" />
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  <T k="ForQueueOrgs.demo.sub" />
                </p>
                <ul className="space-y-3">
                  {(["point1", "point2", "point3", "point4"] as const).map((key) => (
                    <li key={key} className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <T k={`ForQueueOrgs.demo.${key}`} />
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    <T k="ForQueueOrgs.demo.call" />
                  </h3>
                  <a href="tel:+251983222221" className="text-accent hover:underline font-medium">
                    +251 983 222 221
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent mx-auto mb-4">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2"><T k="ForQueueOrgs.demo.successTitle" /></h3>
                    <p className="text-muted-foreground mb-4">
                      <T k="ForQueueOrgs.demo.successText" />
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      <T k="ForQueueOrgs.demo.again" />
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="orgName" className="block text-sm font-medium text-foreground mb-1.5">
                        <T k="ForQueueOrgs.demo.orgName" />
                      </label>
                      <Input
                        id="orgName"
                        type="text"
                        required
                        placeholder="e.g. Kality Freight Terminal"
                        value={formState.orgName}
                        onChange={(e) => setFormState({ ...formState, orgName: e.target.value })}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          <T k="ForQueueOrgs.demo.yourName" />
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
                          <T k="ForQueueOrgs.demo.phone" />
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
                          <T k="ForQueueOrgs.demo.email" />
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
                        <label htmlFor="vehicles" className="block text-sm font-medium text-foreground mb-1.5">
                          <T k="ForQueueOrgs.demo.vehicles" />
                        </label>
                        <Input
                          id="vehicles"
                          type="text"
                          placeholder="e.g. 150"
                          value={formState.vehicles}
                          onChange={(e) => setFormState({ ...formState, vehicles: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        <T k="ForQueueOrgs.demo.message" />
                      </label>
                      <Textarea
                        id="message"
                        rows={3}
                        placeholder="Tell us about your loading place, your biggest queue pain points..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <T k="ForQueueOrgs.demo.sending" /> : <T k="ForQueueOrgs.demo.submit" />}
                    </Button>
                    <p className={cn("text-xs text-muted-foreground text-center")}>
                      <T k="ForQueueOrgs.demo.finePrint" />
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
              <T k="ForQueueOrgs.cta.title" />
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              <T k="ForQueueOrgs.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#request-demo"><T k="ForQueueOrgs.cta.demo" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/how-it-works"><T k="ForQueueOrgs.cta.how" /></Link>
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
            "@type": ["SoftwareApplication", "Product"],
            name: "DTC Truck Queue Management System",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Freight and loading queue management",
            operatingSystem: "Web, Android, iOS",
            description: "Digitize your loading queue with GPS driver check-in, automatic FIFO rotation, refusal handling, and a dispatcher dashboard for ports, customs yards, factories, cement plants, and depots.",
            url: "https://dynamicsroute.tech/for-queue-orgs",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "ETB",
              description: "Free 30-day pilot at your loading place",
            },
            provider: {
              "@type": "Organization",
              name: "DTC - Dynamics Route Tech",
              telephone: "+251983222221",
              url: "https://dynamicsroute.tech",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Truck Queue Management System Ethiopia",
            serviceType: "Loading queue digitization",
            description: "Automatic FIFO loading queue with geofenced driver check-in for queue operators and transport associations in Ethiopia.",
            url: "https://dynamicsroute.tech/for-queue-orgs",
            provider: {
              "@type": "Organization",
              name: "DTC - Dynamics Route Tech",
              url: "https://dynamicsroute.tech",
            },
            areaServed: { "@type": "Country", name: "Ethiopia" },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "ETB",
              description: "Free 30-day pilot",
            },
          }),
        }}
      />
    </div>
  )
}