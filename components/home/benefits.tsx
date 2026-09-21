import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Package, 
  TrendingUp, 
  Shield, 
  Clock, 
  MapPin, 
  CreditCard,
  Truck,
  Users,
  Wallet,
  Calendar,
  Star,
  Headphones
} from "lucide-react"

const shipperBenefits = [
  {
    icon: Package,
    title: "Easy Booking",
    description: "Post shipments in minutes through our app or call center",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description: "Get multiple bids from drivers and choose the best offer",
  },
  {
    icon: Shield,
    title: "Verified Drivers",
    description: "All drivers are verified with proper documentation",
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Follow your cargo with live GPS tracking",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Pay via cash, bank transfer, or Telebirr",
  },
  {
    icon: Clock,
    title: "Fast Matching",
    description: "Get matched with nearby drivers instantly",
  },
]

const driverBenefits = [
  {
    icon: Truck,
    title: "Steady Income",
    description: "Access to a constant stream of transportation jobs",
  },
  {
    icon: Users,
    title: "Direct Connections",
    description: "Connect directly with shippers without middlemen",
  },
  {
    icon: Wallet,
    title: "Free During Launch",
    description: "No commission, no hidden fees — keep 100% of your earnings",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Work on your own time and choose your loads",
  },
  {
    icon: Star,
    title: "Build Reputation",
    description: "Earn ratings and grow your customer base",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help anytime through our call center",
  },
]

export function Benefits() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* For Shippers */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              For Shippers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Ship Your Cargo with Confidence
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you are a business moving freight or an individual with goods to transport, DTC makes shipping simple and transparent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shipperBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-secondary/30 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/for-shippers">Learn More for Shippers</Link>
            </Button>
          </div>
        </div>

        {/* For Drivers */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              For Drivers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Grow Your Trucking Business
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the DTC driver network and get access to quality loads, fair pricing, and a platform that supports your success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {driverBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/for-drivers">Learn More for Drivers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
