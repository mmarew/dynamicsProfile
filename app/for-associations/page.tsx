"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  {
    icon: Gavel,
    title: "Batch Bidding",
    description:
      "When a shipper posts a load of more than 10 vehicles, your association places ONE bid for the entire batch — no member fighting over pieces.",
  },
  {
    icon: Users,
    title: "Member & Fleet Management",
    description:
      "Register your member drivers and their vehicles. Approve, verify documents, and keep one clean record for the whole association.",
  },
  {
    icon: Shield,
    title: "Driver Assignment",
    description:
      "Win a batch? Assign your drivers to vehicle slots automatically or manually from the portal. Each driver confirms the assignment.",
  },
  {
    icon: TrendingUp,
    title: "Fair Load Distribution",
    description:
      "Rotate loads among members so everyone earns consistently. No favorites, no one-person-takes-all.",
  },
  {
    icon: MapPin,
    title: "Per-Slot GPS Tracking",
    description:
      "Track every assigned truck from loading to delivery. Know where each vehicle is at all times.",
  },
  {
    icon: FileText,
    title: "Batch & Payment Records",
    description:
      "Complete payment and delivery history per member. Clean books for the association, transparent earnings for drivers.",
  },
]

const howItWorks = [
  {
    step: 1,
    title: "Association Joins",
    description:
      "Your association registers and adds your certified drivers and vehicles member by member.",
  },
  {
    step: 2,
    title: "Large Loads Come to You",
    description:
      "Shipper batches over 10 vehicles are shown to verified companies like yours. You bid once per batch.",
  },
  {
    step: 3,
    title: "Won Bid → Assign the Fleet",
    description:
      "When accepted, you assign your drivers to the vehicle slots. They confirm and head to the loading place.",
  },
  {
    step: 4,
    title: "Track & Settle",
    description:
      "Follow the whole convoy live, complete each slot, and keep clean records per member.",
  },
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
                  <span className="text-sm font-medium">For Transport Associations &amp; Companies</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  One Portal for Your Whole Fleet
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Bid on big loads as a company, assign your member drivers, and track every truck — all from one association portal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8">
                    <Link href="#partnership">
                      Partner With Us
                      <Send className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="https://association.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                      Open Company Portal
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground">Won Batch</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">15 vehicles</span>
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
                      Addis Ababa → Djibouti Port · 15 vehicle slots
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
                Why Associations Choose DTC
              </h2>
              <p className="text-lg text-muted-foreground">
                Big loads, clean records, and a fair share for every member.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                From Bid to Delivery
              </h2>
              <p className="text-lg text-muted-foreground">
                The full association workflow — win, assign, track, settle.
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
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-secondary/10 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <p className="text-foreground font-medium">See your fleet dashboard, bids, and batches right now.</p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shrink-0">
                <a href="https://association.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                  Open Company Portal
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
                  Partner With Us
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We onboard associations and transport companies onto the portal so their members can start bidding on batches. Free during our launch period.
                </p>
                <ul className="space-y-3">
                  {[
                    "Register your members and vehicles as a fleet",
                    "Bid on large shipper batches (10+ vehicles)",
                    "Assign drivers and track every slot live",
                    "Clean earnings and payment records per member",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-secondary" />
                    Or call us directly
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
                    <h3 className="text-xl font-semibold text-foreground mb-2">Inquiry Received!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. Our team will contact you about onboarding your association.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="associationName" className="block text-sm font-medium text-foreground mb-1.5">
                        Association / Company Name *
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
                          Your Name *
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
                          Phone *
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
                          Email
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
                          Approx. member count
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
                        Anything else?
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
                      {isSubmitting ? "Sending..." : "Send Partnership Inquiry"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      No subscription required during launch. We onboard you free.
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
              Bring Your Fleet to the Platform
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Turn your member fleet into a competitive force on big loads — and keep every driver in the loop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="#partnership">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/for-queue-orgs">Queue Operators</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}