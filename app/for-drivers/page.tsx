import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
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
  Shield,
  Clock,
  Truck
} from "lucide-react"

export const metadata: Metadata = {
  title: "For Drivers - DTC | Grow Your Trucking Business",
  description: "Join DTC and get access to quality loads, fair pricing, and steady income. Register your vehicle, get verified, and start earning. Free trial for new drivers.",
}

const benefits = [
  {
    icon: Truck,
    title: "Steady Income",
    description: "Access to a constant stream of transportation jobs from businesses and individuals across Ethiopia and Djibouti.",
  },
  {
    icon: Users,
    title: "Direct Connections",
    description: "Connect directly with shippers without middlemen. Build relationships and earn repeat business.",
  },
  {
    icon: Wallet,
    title: "No Fees During Launch",
    description: "Free to use right now — no commission, no hidden fees. Keep 100% of what you earn while the platform is free.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Work on your own time. Choose the loads that fit your schedule and preferred routes.",
  },
  {
    icon: Star,
    title: "Build Reputation",
    description: "Earn ratings from shippers and grow your customer base. Good ratings mean more business.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help anytime through our call center. We are here to support your success.",
  },
]

const registrationSteps = [
  {
    step: 1,
    icon: Smartphone,
    title: "Download & Register",
    description: "Get the DTC app and register with your phone number, full name, and email. Verify via OTP.",
  },
  {
    step: 2,
    icon: FileCheck,
    title: "Upload Documents",
    description: "Upload your Driver's License, Vehicle Registration (Librea), and Profile Photo. Optional: Insurance, Tax ID, National ID.",
  },
  {
    step: 3,
    icon: Truck,
    title: "Register Vehicle",
    description: "Add your vehicle details: license plate, color, and vehicle type — from light trucks (up to 35 quintals) to multi-container rigs (up to 400 quintals).",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Get Verified",
    description: "Wait for admin to review and approve your documents. This usually takes 24-48 hours.",
  },
  {
    step: 5,
    icon: CreditCard,
    title: "Subscribe",
    description: "Choose a subscription plan to start receiving jobs. New drivers get a free 1-month trial.",
  },
  {
    step: 6,
    icon: Bell,
    title: "Start Earning",
    description: "Receive shipment requests, place your bids, and start earning when shippers select you.",
  },
]

const requiredDocs = [
  { name: "Driver's License", required: true, description: "Valid license with expiration date and file number" },
  { name: "Vehicle Registration (Librea)", required: true, description: "Proof of legal vehicle ownership or delegation" },
  { name: "Profile Photo", required: true, description: "Clear photo for identity confirmation" },
  { name: "Insurance Document", required: false, description: "Vehicle insurance (recommended)" },
  { name: "Tax Identification Number", required: false, description: "For tax compliance" },
  { name: "National ID", required: false, description: "Government-issued identification" },
]

const subscriptionPlans = [
  {
    name: "Free Trial",
    duration: "1 month",
    price: "FREE",
    priceNote: "(700 ETB value)",
    description: "Available once per driver. Experience the platform at no cost.",
    highlight: true,
  },
  {
    name: "Monthly",
    duration: "30 days",
    price: "700 ETB",
    priceNote: "",
    description: "Standard monthly subscription. Best for flexibility.",
    highlight: false,
  },
  {
    name: "Quarterly",
    duration: "90 days",
    price: "1,800 ETB",
    priceNote: "(save 300 ETB)",
    description: "3-month plan at a discounted rate.",
    highlight: false,
  },
  {
    name: "Annual",
    duration: "365 days",
    price: "6,000 ETB",
    priceNote: "(save 2,400 ETB)",
    description: "Best value for committed drivers. Save the most.",
    highlight: false,
  },
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
                <span className="text-sm font-medium">For Drivers</span>
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Grow Your Trucking Business with DTC
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Join the DTC driver network and get access to quality loads, fair pricing, and a platform built to support your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                    <Link href="/download">Start Driving</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="h-12 px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    <Link href="/how-it-works">How It Works</Link>
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Free 1-month trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>No hidden fees</span>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>Verified</div>
                  <div className="text-muted-foreground">Drivers &amp; Vehicles</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2" style={{ fontFamily: 'var(--font-display)' }}>GPS</div>
                  <div className="text-muted-foreground">Live Load Tracking</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2" style={{ fontFamily: 'var(--font-display)' }}>Rated</div>
                  <div className="text-muted-foreground">Build Your Reputation</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
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
                Why Drivers Choose DTC
              </h2>
              <p className="text-lg text-muted-foreground">
                Join a platform built by truckers, for truckers. We understand what you need to succeed.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
                How to Register
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started in 6 simple steps. New drivers get a free 1-month trial.
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
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
                  Required Documents
                </h2>
                <p className="text-lg text-muted-foreground">
                  Prepare these documents before registration to speed up the verification process.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocs.map((doc) => (
                  <div
                    key={doc.name}
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
                        <h3 className="font-medium text-foreground">{doc.name}</h3>
                        {doc.required ? (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Required</span>
                        ) : (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">Optional</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
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
                Subscription Plans
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Choose the plan that works best for you. New drivers get a free trial.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {subscriptionPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 ${
                    plan.highlight
                      ? 'bg-secondary text-secondary-foreground'
                      : 'bg-primary-foreground/10'
                  }`}
                >
                  {plan.highlight && (
                    <span className="inline-block px-2 py-1 rounded-full bg-secondary-foreground/20 text-xs font-medium mb-4">
                      New Drivers
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{plan.price}</span>
                    {plan.priceNote && (
                      <span className={`text-sm ${plan.highlight ? 'text-secondary-foreground/70' : 'text-primary-foreground/70'}`}>
                        {' '}{plan.priceNote}
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-2">{plan.duration}</p>
                  <p className={`text-sm ${plan.highlight ? 'text-secondary-foreground/80' : 'text-primary-foreground/80'}`}>
                    {plan.description}
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
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join DTC today and get your free 1-month trial. Start receiving loads and grow your trucking business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/download">Download App</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
