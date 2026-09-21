import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
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
  title: "Pricing - DTC | Transparent Pricing & Plans",
  description: "Understand DTC's pricing model. Competitive bidding for shippers, transparent commission for drivers, and flexible subscription plans. No hidden fees.",
}

const forShippers = [
  {
    title: "No Platform Fees",
    description: "Shippers do not pay any platform fees to use DTC",
  },
  {
    title: "Competitive Bidding",
    description: "Set your budget or let drivers compete for the best price",
  },
  {
    title: "Pay the Driver Directly",
    description: "Payment goes to the driver; platform commission is separate",
  },
  {
    title: "Free to Post",
    description: "Post unlimited shipment requests at no cost",
  },
]

const subscriptionPlans = [
  {
    name: "Free Trial",
    duration: "1 month",
    price: "FREE",
    priceValue: 0,
    savings: "700 ETB value",
    features: [
      "Full platform access",
      "Receive shipment requests",
      "Place bids on loads",
      "GPS tracking enabled",
      "24/7 support access",
    ],
    highlight: true,
    note: "Available once per driver",
  },
  {
    name: "Monthly",
    duration: "30 days",
    price: "700 ETB",
    priceValue: 700,
    savings: null,
    features: [
      "Full platform access",
      "Receive shipment requests",
      "Place bids on loads",
      "GPS tracking enabled",
      "24/7 support access",
    ],
    highlight: false,
    note: "Best for flexibility",
  },
  {
    name: "Quarterly",
    duration: "90 days",
    price: "1,800 ETB",
    priceValue: 1800,
    savings: "Save 300 ETB",
    features: [
      "Full platform access",
      "Receive shipment requests",
      "Place bids on loads",
      "GPS tracking enabled",
      "24/7 support access",
      "Priority support",
    ],
    highlight: false,
    note: "Best for regular drivers",
  },
  {
    name: "Annual",
    duration: "365 days",
    price: "6,000 ETB",
    priceValue: 6000,
    savings: "Save 2,400 ETB",
    features: [
      "Full platform access",
      "Receive shipment requests",
      "Place bids on loads",
      "GPS tracking enabled",
      "24/7 support access",
      "Priority support",
      "Best value",
    ],
    highlight: false,
    note: "Best for committed drivers",
  },
]

const paymentMethods = [
  {
    name: "Cash on Delivery",
    description: "Shipper pays driver directly upon delivery completion",
    icon: CreditCard,
  },
  {
    name: "Bank Transfer",
    description: "CBE, Dashen, and other Ethiopian banks",
    icon: CreditCard,
  },
  {
    name: "Telebirr / Mobile Money",
    description: "Quick digital payments via mobile",
    icon: Smartphone,
  },
]

const faqs = [
  {
    question: "How is the shipping price determined?",
    answer: "Prices are determined through competitive bidding. When you post a shipment, drivers submit their proposed prices. You can set a budget or leave it open for drivers to bid freely. Choose the best offer based on price, ratings, and vehicle type.",
  },
  {
    question: "What is the platform commission?",
    answer: "DTC charges a commission (typically 10-15%) on each completed journey. This is deducted from the driver's earnings after the journey is completed. The exact rate is configured by admin and may vary.",
  },
  {
    question: "Are there any hidden fees for shippers?",
    answer: "No. Shippers do not pay any platform fees. You only pay the agreed shipping cost to the driver. The driver pays a subscription fee and commission to the platform.",
  },
  {
    question: "Can I negotiate the price?",
    answer: "The bidding system is your negotiation tool. You can review multiple bids and choose the one that fits your budget. If no bids meet your expectations, you can repost with a different budget.",
  },
  {
    question: "What happens if I don't have a subscription?",
    answer: "Drivers need an active subscription to receive shipment requests. When your subscription expires, your status changes to 'Inactive - No Subscription' and you won't receive new job notifications until you renew.",
  },
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
                Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                No hidden fees. Shippers pay drivers directly through competitive bidding. Drivers subscribe to access the platform.
              </p>
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
                    For Shippers
                  </h2>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Gavel className="h-5 w-5 text-secondary" />
                    <h3 className="font-semibold text-foreground">Competitive Bidding</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Post your shipment and receive multiple bids from verified drivers. There is no fixed price—you choose the best offer based on price, driver ratings, and vehicle type.
                  </p>
                </div>

                <ul className="space-y-3">
                  {forShippers.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground">{item.title}</span>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/for-shippers">Start Shipping</Link>
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
                    For Drivers
                  </h2>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Percent className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Commission Model</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    DTC charges a commission (typically 10-15%) on each completed journey. Commission is automatically calculated when a journey is completed.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-4 mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Example:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping Cost</span>
                      <span className="font-medium text-foreground">45,000 ETB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Commission (10%)</span>
                      <span className="text-destructive">-4,500 ETB</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-medium text-foreground">Driver Receives</span>
                      <span className="font-bold text-accent">40,500 ETB</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Plus a subscription fee to access the platform (see plans below). New drivers get a free 1-month trial.
                </p>

                <div className="mt-8">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/for-drivers">Start Driving</Link>
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
                Driver Subscription Plans
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the plan that fits your driving schedule. All plans include full platform access.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 ${
                    plan.highlight
                      ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2'
                      : 'bg-card border border-border'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-4">
                      New Drivers
                    </span>
                  )}
                  <h3 className={`text-xl font-semibold mb-1 ${plan.highlight ? '' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    {plan.duration}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                      {plan.price}
                    </span>
                    {plan.savings && (
                      <p className={`text-sm mt-1 ${plan.highlight ? 'text-secondary' : 'text-accent'}`}>
                        {plan.savings}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${plan.highlight ? 'text-secondary' : 'text-accent'}`} />
                        <span className={plan.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className={`text-xs ${plan.highlight ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                    {plan.note}
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
                  Payment Methods
                </h2>
                <p className="text-lg text-muted-foreground">
                  Multiple payment options for your convenience.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {paymentMethods.map((method) => (
                  <div key={method.name} className="bg-card border border-border rounded-xl p-6 text-center">
                    <method.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{method.name}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
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
                  Pricing FAQ
                </h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
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
              Get Started Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join shippers and drivers using DTC to move goods across Ethiopia and Djibouti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/for-shippers">Ship Your Cargo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/for-drivers">Become a Driver</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
