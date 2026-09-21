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
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Building,
  Headphones,
  MessageSquare
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@dynamicstransport.com",
    href: "mailto:support@dynamicstransport.com",
  },
  {
    icon: Phone,
    title: "Call Center",
    description: "Phone-based assistance, 24/7",
    contact: "+251 983 222 221",
    href: "tel:+251983222221",
  },
  {
    icon: MessageSquare,
    title: "In-App Support",
    description: "Contact us through the app",
    contact: "24/7 messaging support",
    href: null,
  },
]

const offices = [
  {
    city: "Addis Ababa, Ethiopia",
    role: "Head Office",
    icon: Building,
  },
  {
    city: "Djibouti City, Djibouti",
    role: "Regional Office",
    icon: Building,
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions or need assistance? Our team is here to help you with shipping, driver registration, or any platform inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  {item.href ? (
                    <a href={item.href} className="text-primary hover:underline font-medium">
                      {item.contact}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium">{item.contact}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent mx-auto mb-4">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. Our team will get back to you as soon as possible.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          placeholder="Your name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+251 9XX XXX XXXX"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          type="text"
                          required
                          placeholder="How can we help?"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>

              {/* Office Locations & Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Our Offices
                </h2>

                <div className="space-y-4 mb-8">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <office.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{office.role}</h3>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {office.city}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Headphones className="h-8 w-8 text-secondary" />
                    <h3 className="text-xl font-semibold">Call Center Support</h3>
                  </div>
                  <p className="text-primary-foreground/80 mb-4">
                    Our call center operators are ready to assist you with booking shipments, answering questions, and resolving issues.
                  </p>
                  <div className="flex items-center gap-2 text-secondary mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Available 24/7</span>
                  </div>
                  <a
                    href="tel:+251983222221"
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mb-4"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">+251 983 222 221</span>
                  </a>
                  <p className="text-sm text-primary-foreground/70">
                    For urgent matters, call us directly or use in-app support or email.
                  </p>
                </div>

                <div className="mt-8 p-6 border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-3">Business Inquiries</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For fleet partnerships, corporate accounts, and business collaborations:
                  </p>
                  <a href="mailto:business@dynamicstransport.com" className="text-primary hover:underline flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    business@dynamicstransport.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download the DTC app and start shipping or earning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/download">Download App</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
