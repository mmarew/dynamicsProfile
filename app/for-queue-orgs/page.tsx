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
  {
    icon: Users,
    title: "Automatic FIFO Rotation",
    description:
      "Every driver that checks in joins a fair first-in-first-out line for their vehicle type. The front waiting driver gets the next order — no favoritism, no arguments.",
  },
  {
    icon: Clock,
    title: "3-Minute Offer Window",
    description:
      "An order is offered to the front driver with a short accept window. A decline or timeout moves the order to the next driver in line, keeping turnaround fast.",
  },
  {
    icon: Gavel,
    title: "Open for Bidding",
    description:
      "Need a competitive price instead of a queue? Open any order for bidding — up to 5 drivers bid per vehicle slot and you pick the winner.",
  },
  {
    icon: MapPin,
    title: "Geofenced Check-In",
    description:
      "Drivers confirm they are physically at your loading place with GPS. Virtual queues stay honest, and loading staff stay in control.",
  },
  {
    icon: FileText,
    title: "Create Orders for Shippers",
    description:
      "Walk-in shippers without the app? Queue staff create the order on their behalf in seconds and it enters your dispatch line immediately.",
  },
  {
    icon: Shield,
    title: "Refusal & Conduct Rules",
    description:
      "Too many refusals sends a driver to the back of the line. Ratings and conduct history keep every driver accountable.",
  },
]

const steps = [
  {
    icon: FileText,
    title: "Order Enters the Queue",
    description:
      "A job linked to your loading place (port, customs, factory, cement plant, depot) enters your dispatch queue. Staff can create it for walk-in shippers.",
  },
  {
    icon: MapPin,
    title: "Drivers Check In by GPS",
    description:
      "Drivers check in at the site and join the FIFO line for their vehicle type, verified by geofence.",
  },
  {
    icon: Clock,
    title: "Front Driver Gets the Order",
    description:
      "The order is offered to the front waiting driver. Decline or timeout → next in line. Open for bidding if you prefer.",
  },
  {
    icon: TrendingUp,
    title: "Load, Track, Complete",
    description:
      "The driver loads, runs the journey with live GPS, and the order closes. Your queue stats update automatically.",
  },
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
                  <span className="text-sm font-medium">For Queue Operators &amp; Loading Places</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Digitize Your Loading Queue
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Automatic FIFO rotation, geofenced driver check-in, and fair dispatch — no more paper lists, no more arguments at the gate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
                    <Link href="#request-demo">
                      Request a Demo
                      <Send className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href="https://queue.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                      Open Queue Console
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground">Live Dispatch Board</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">Queue running</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { plate: "AA 12345", type: "Isuzu FSR", state: "Waiting since 09:12", pos: 1 },
                      { plate: "AA 98765", type: "Sino Truck", state: "Waiting since 09:20", pos: 2 },
                      { plate: "AA 55667", type: "Euro Tracker", state: "Waiting since 09:27", pos: 3 },
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
                      Next order → offered to driver #1
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
                What the Queue Console Does
              </h2>
              <p className="text-lg text-muted-foreground">
                Purpose-built for ports, customs yards, factories, cement plants, and depots that fight driver chaos every day.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
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
                A Fair Line, Every Time
              </h2>
              <p className="text-lg text-muted-foreground">
                From check-in to completion, the system removes the disputes that cost loading places hours every day.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6 relative">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-border" style={{ fontFamily: 'var(--font-display)' }}>
                    {String(steps.indexOf(item) + 1).padStart(2, '0')}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-accent/10 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <p className="text-foreground font-medium">Queue staff run the live dispatch board online, from any device.</p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shrink-0">
                <a href="https://queue.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                  Open Queue Console
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
                  Try It at Your Loading Place
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We can run a free pilot at your site. Your drivers check in on the app, your staff dispatches from the console, and you see the difference within days — not months.
                </p>
                <ul className="space-y-3">
                  {[
                    "Free 30-day pilot at your loading place",
                    "Onboarding for your queue staff",
                    "Driver check-in via GPS",
                    "No paper lists, no gate arguments",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    Or call us directly
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
                    <h3 className="text-xl font-semibold text-foreground mb-2">Request Received!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for your interest. Our team will contact you to schedule your queue demo.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="orgName" className="block text-sm font-medium text-foreground mb-1.5">
                        Loading Place / Organization Name *
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
                        <label htmlFor="vehicles" className="block text-sm font-medium text-foreground mb-1.5">
                          Trucks per day (approx.)
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
                        Anything else?
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
                      {isSubmitting ? "Sending..." : "Request Demo"}
                    </Button>
                    <p className={cn("text-xs text-muted-foreground text-center")}>
                      No commitment. We simply run a free pilot and show you the numbers.
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
              Ready to End the Chaos at Your Gate?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Digitize your queue, keep your drivers fair, and cut wasted time for everyone. Start with a free pilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#request-demo">Request a Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}