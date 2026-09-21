import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Package, Truck, CreditCard, MapPin, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - DTC | Frequently Asked Questions",
  description: "Find answers to common questions about DTC: shipping, driver registration, pricing, tracking, payments, and more.",
}

const faqCategories = [
  {
    id: "shipping",
    icon: Package,
    title: "Shipping",
    faqs: [
      {
        question: "How do I post a shipment request?",
        answer: "Download the DTC app, register with your phone number, and verify via OTP. Then tap 'Post Shipment' and enter your pickup location, destination, cargo details (item name, quantity in quintals), vehicle type needed, and preferred dates. You can set a budget or let drivers bid freely.",
      },
      {
        question: "How long does it take to get matched with a driver?",
        answer: "Our system automatically finds verified drivers within approximately 1 km of your pickup location. Drivers are notified instantly and can place bids within minutes. Most shippers receive their first bid within 5-10 minutes.",
      },
      {
        question: "Can I request multiple vehicles at once?",
        answer: "Yes! You can create a batch request for multiple vehicles in one submission. This is useful for large shipments that need more than one truck.",
      },
      {
        question: "What if no drivers bid on my shipment?",
        answer: "If no drivers bid within a reasonable time, try adjusting your budget, expanding the vehicle type options, or reposting at a different time. You can also call our support center for assistance.",
      },
      {
        question: "Can I cancel my shipment request?",
        answer: "Yes, you can cancel before the journey starts. All matched drivers will be notified. However, cancellations are tracked and excessive cancellations may affect your account standing.",
      },
    ],
  },
  {
    id: "drivers",
    icon: Truck,
    title: "Driver Registration",
    faqs: [
      {
        question: "What documents do I need to register as a driver?",
        answer: "Required documents: Driver's License (with expiration date and file number), Vehicle Registration/Librea (with file number), and Profile Photo. Optional but recommended: Insurance Document, Tax Identification Number, National ID, and Delegation of Vehicle Use.",
      },
      {
        question: "How long does the verification process take?",
        answer: "Typically 24-48 hours after you submit all required documents. Our admin team reviews each submission carefully. You'll be notified when your account is approved.",
      },
      {
        question: "What vehicle types are supported?",
        answer: "We support four vehicle types: Isuzu NPR (50 quintals), Isuzu FSR (100 quintals), Sino Truck (150 quintals), and Euro Tracker (430 quintals). Each vehicle must be registered with its license plate, color, and type.",
      },
      {
        question: "Do I need to own the vehicle?",
        answer: "You can drive a vehicle you own or one that's been delegated to you. If it's not your vehicle, you'll need a Delegation of Vehicle Use document from the owner.",
      },
      {
        question: "What happens if my documents expire?",
        answer: "The platform tracks document expiration dates. You'll receive alerts before expiration. If a document expires, your status will change to inactive until you upload the renewed document.",
      },
    ],
  },
  {
    id: "pricing",
    icon: CreditCard,
    title: "Pricing & Payments",
    faqs: [
      {
        question: "How is the shipping price determined?",
        answer: "Prices are determined through competitive bidding. When you post a shipment, drivers submit their proposed prices. You can set a budget or leave it open. Choose the best offer based on price, driver ratings, and vehicle type.",
      },
      {
        question: "Are there any fees for shippers?",
        answer: "No, shippers do not pay any platform fees. You only pay the agreed shipping cost directly to the driver. The platform charges drivers a commission and subscription fee.",
      },
      {
        question: "What is the driver commission?",
        answer: "DTC is currently free — no commission is charged yet. We are launching with a free period and will introduce a transparent commission structure in the future. Any changes will be announced clearly.",
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept Cash on Delivery, Bank Transfer (CBE, Dashen, and others), and Telebirr/Mobile Money. Choose the method that works best for you.",
      },
      {
        question: "What are the driver subscription plans?",
        answer: "Free Trial (1 month, for new drivers), Monthly (700 ETB), Quarterly (1,800 ETB, save 300 ETB), and Annual (6,000 ETB, save 2,400 ETB). Drivers need an active subscription to receive shipment requests.",
      },
    ],
  },
  {
    id: "tracking",
    icon: MapPin,
    title: "Tracking & Delivery",
    faqs: [
      {
        question: "How do I track my shipment?",
        answer: "Once the driver starts the journey, you'll see a live map in the app showing the truck's real-time location. GPS tracking is continuous from pickup to delivery.",
      },
      {
        question: "What happens when my cargo arrives?",
        answer: "The driver taps 'Complete Journey' when they arrive at the destination. You'll receive a notification to confirm delivery. After confirmation, you can rate the driver and make payment.",
      },
      {
        question: "What if there's a problem during delivery?",
        answer: "Contact our 24/7 support center immediately. You can report issues through the app or by calling. Our admin team can intervene, cancel journeys, or help resolve disputes.",
      },
      {
        question: "Can I communicate with the driver?",
        answer: "Yes, once a driver is assigned to your shipment, you can see their contact information in the app and coordinate directly for pickup details.",
      },
    ],
  },
  {
    id: "safety",
    icon: Shield,
    title: "Safety & Support",
    faqs: [
      {
        question: "How are drivers verified?",
        answer: "Every driver must submit a valid Driver's License, Vehicle Registration (Librea), and Profile Photo. Documents are reviewed by our admin team. Drivers must also maintain an active subscription and good standing.",
      },
      {
        question: "What is the rating system?",
        answer: "After every journey, both shipper and driver rate each other (1-5 stars) with optional comments. Ratings help build trust and help others make informed decisions.",
      },
      {
        question: "What happens if a driver has bad ratings?",
        answer: "Drivers with consistently poor ratings or violations (late arrival, rude behavior, cancellations) accumulate delinquency points. Too many points result in automatic temporary or permanent bans.",
      },
      {
        question: "Is my personal data secure?",
        answer: "Yes. All passwords and OTPs are hashed using industry-standard encryption. API communication is secured via token-based authentication (JWT). We only share your information with matched drivers during active journeys.",
      },
      {
        question: "How do I contact support?",
        answer: "Contact us through the app's in-app support feature, call our hotline (available during business hours), or email support@dynamicstransport.com. Our team is here to help.",
      },
    ],
  },
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
                <span className="text-sm font-medium">Help Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions about shipping, driver registration, pricing, tracking, and more.
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
                      {category.title}
                    </h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium text-foreground">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Contact us and we will get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link href="/download">Download App</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
