"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { T } from "@/components/i18n/text"
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
    titleKey: "Contact.options.email.title",
    descriptionKey: "Contact.options.email.description",
    contact: "support@dynamicstransport.com",
    href: "mailto:support@dynamicstransport.com",
  },
  {
    icon: Phone,
    titleKey: "Contact.options.call.title",
    descriptionKey: "Contact.options.call.description",
    contact: "+251 983 222 221",
    href: "tel:+251983222221",
  },
  {
    icon: MessageSquare,
    titleKey: "Contact.options.inApp.title",
    descriptionKey: "Contact.options.inApp.description",
    contactKey: "Contact.options.inApp.contact",
    href: null,
  },
]

const offices = [
  {
    city: "Addis Ababa, Ethiopia",
    roleKey: "Contact.offices.head",
    icon: Building,
  },
  {
    city: "Djibouti City, Djibouti",
    roleKey: "Contact.offices.regional",
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
                <T k="Contact.hero.title" />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <T k="Contact.hero.sub" />
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((item) => (
                <div key={item.titleKey} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1"><T k={item.titleKey} /></h3>
                  <p className="text-sm text-muted-foreground mb-2"><T k={item.descriptionKey} /></p>
                  {item.href ? (
                    <a href={item.href} className="text-primary hover:underline font-medium">
                      {item.contact}
                    </a>
                  ) : (
                    <span className="text-foreground font-medium"><T k={item.contactKey!} /></span>
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="Contact.form.title" />
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent mx-auto mb-4">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2"><T k="Contact.form.success" /></h3>
                    <p className="text-muted-foreground mb-4">
                      <T k="Contact.form.successSub" />
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      <T k="Contact.form.sendAnother" />
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                          <T k="Contact.form.name" />
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
                          <T k="Contact.form.email" />
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
                          <T k="Contact.form.phone" />
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
                          <T k="Contact.form.subject" />
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
                        <T k="Contact.form.message" />
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
                      {isSubmitting ? <T k="Contact.form.sending" /> : <T k="Contact.form.submit" />}
                    </Button>
                  </form>
                )}
              </div>

              {/* Office Locations & Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="Contact.offices.title" />
                </h2>

                <div className="space-y-4 mb-8">
                  {offices.map((office) => (
                    <div key={office.city} className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <office.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground"><T k={office.roleKey} /></h3>
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
                    <h3 className="text-xl font-semibold"><T k="Contact.offices.callCenter" /></h3>
                  </div>
                  <p className="text-primary-foreground/80 mb-4">
                    <T k="Contact.offices.callCenterSub" />
                  </p>
                  <div className="flex items-center gap-2 text-secondary mb-4">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm"><T k="Contact.offices.available" /></span>
                  </div>
                  <a
                    href="tel:+251983222221"
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mb-4"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">+251 983 222 221</span>
                  </a>
                  <p className="text-sm text-primary-foreground/70">
                    <T k="Contact.offices.urgent" />
                  </p>
                </div>

                <div className="mt-8 p-6 border border-border rounded-xl">
                  <h3 className="font-semibold text-foreground mb-3"><T k="Contact.business.title" /></h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    <T k="Contact.business.sub" />
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
              <T k="Contact.cta.title" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <T k="Contact.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/download"><T k="Contact.cta.download" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/faq"><T k="Contact.cta.faq" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}