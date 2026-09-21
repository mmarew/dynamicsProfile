import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Package, 
  MapPin, 
  Clock, 
  Shield, 
  Globe,
  Building,
  Warehouse,
  Factory,
  ShoppingCart
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services & Freight Vehicles - DTC | From Light Trucks to Container Rigs",
  description: "DTC freight vehicles by cargo type and capacity: light and medium open flatbed trucks for bulk cargo, heavy flatbeds for bulk or 20ft containers, and specialised low-bed rigs for 40ft containers. Ethiopia and Djibouti.",
}

const cargoTypes = {
  bulk_only: { label: "Bulk Cargo Only", badge: "bg-primary/10 text-primary" },
  both: { label: "Bulk + Container", badge: "bg-secondary/10 text-secondary" },
  container_only: { label: "Containers Only", badge: "bg-accent/10 text-accent" },
}

const vehicles = [
  {
    name: "Light Truck (up to 35 Quintal)",
    capacity: "35 quintals",
    capacityKg: "3,500 kg",
    cargoType: "bulk_only" as const,
    description:
      "Small/light freight truck for bulk cargo up to 35 quintal. Cannot carry ISO containers.",
  },
  {
    name: "Medium Truck (up to 50 Quintal)",
    capacity: "50 quintals",
    capacityKg: "5,000 kg",
    cargoType: "bulk_only" as const,
    description:
      "Medium freight truck for bulk cargo up to 50 quintal. Cannot carry ISO containers.",
  },
  {
    name: "Medium Truck (up to 100 Quintal)",
    capacity: "100 quintals",
    capacityKg: "10,000 kg",
    cargoType: "bulk_only" as const,
    description:
      "Medium freight truck for bulk cargo up to 100 quintal. Cannot carry ISO containers.",
  },
  {
    name: "Heavy Truck (125–175 Quintal)",
    capacity: "175 quintals",
    capacityKg: "17,500 kg",
    cargoType: "both" as const,
    description:
      "Heavy truck for loads 125–175 quintal. Accepts bulk cargo or a single 20ft ISO container.",
  },
  {
    name: "Extra Heavy Truck (176–250 Quintal)",
    capacity: "250 quintals",
    capacityKg: "25,000 kg",
    cargoType: "both" as const,
    description:
      "Extra-heavy truck for loads 176–250 quintal. Accepts bulk cargo or ISO containers.",
  },
  {
    name: "20ft Container Truck (251–300 Quintal)",
    capacity: "300 quintals",
    capacityKg: "30,000 kg",
    cargoType: "both" as const,
    description:
      "Container truck with 20ft cassoni fitting for loads 251–300 quintal. Accepts bulk cargo or a 20ft ISO container.",
  },
  {
    name: "2×20ft or 40ft Low-Bed Truck (301–350 Quintal)",
    capacity: "350 quintals",
    capacityKg: "35,000 kg",
    cargoType: "container_only" as const,
    description:
      "Specialised low-bed container rig for 301–350 quintal. Carries either 2 × 20ft or 1 × 40ft ISO containers.",
  },
  {
    name: "2×20ft or 40ft Container Truck (351–400 Quintal)",
    capacity: "400 quintals",
    capacityKg: "40,000 kg",
    cargoType: "container_only" as const,
    description:
      "Specialised multi-container truck for 351–400 quintal. Carries either 2 × 20ft or 1 × 40ft ISO containers.",
  },
]

const serviceTypes = [
  {
    icon: Building,
    title: "Urban Delivery",
    description: "Last-mile delivery within Addis Ababa and other major cities. Perfect for businesses needing quick local transport.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Transfers",
    description: "Move goods between warehouses, distribution centers, and retail locations efficiently.",
  },
  {
    icon: Factory,
    title: "Industrial Freight",
    description: "Transport construction materials, machinery, and industrial goods across Ethiopian industrial zones.",
  },
  {
    icon: Globe,
    title: "Cross-Border Logistics",
    description: "Move cargo between Ethiopia and Djibouti, including access to Djibouti Port for import/export.",
  },
  {
    icon: ShoppingCart,
    title: "Market Transport",
    description: "Connect agricultural producers and markets with reliable freight for perishable and bulk goods.",
  },
  {
    icon: Package,
    title: "General Cargo",
    description: "Flexible transportation for any cargo type, with verified drivers and real-time tracking.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From small urban deliveries to heavy cross-border freight, we have the vehicles and verified drivers to move your cargo safely.
              </p>
            </div>
          </div>
        </section>

        {/* Vehicle Fleet */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Vehicle Fleet
              </h2>
              <p className="text-lg text-muted-foreground">
                Match your cargo with the right vehicle — from light bulk trucks to multi-container rigs. All vehicles are verified with valid registration and ownership records.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {vehicles.map((vehicle) => {
                const cargo = cargoTypes[vehicle.cargoType]
                return (
                  <div
                    key={vehicle.name}
                    className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Image
                            src="/app-icon-driver.png"
                            alt={vehicle.name}
                            width={24}
                            height={24}
                            className="h-6 w-6 rounded"
                          />
                          <h3 className="text-xl font-semibold text-foreground">{vehicle.name}</h3>
                        </div>
                        <p className="text-muted-foreground">{vehicle.description}</p>
                      </div>
                    </div>

                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${cargo.badge} mb-6`}>
                      {cargo.label}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Capacity</div>
                        <div className="font-semibold text-foreground">{vehicle.capacity}</div>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">Weight</div>
                        <div className="font-semibold text-foreground">{vehicle.capacityKg}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <p>
                <strong>Note:</strong> 1 quintal = 100 kg. All vehicles include verified driver, registration, and insurance status tracking.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {Object.values(cargoTypes).map((type) => (
                  <span key={type.label} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${type.badge}`}>
                    {type.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Types */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Types of Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Whatever you need to move, we have a solution for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceTypes.map((service) => (
                <div
                  key={service.title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Why Choose DTC
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground mx-auto mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="font-semibold mb-2">Verified Drivers</h3>
                <p className="text-sm text-primary-foreground/70">All drivers verified with licenses and documents</p>
              </div>
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground mx-auto mb-4">
                  <MapPin className="h-7 w-7" />
                </div>
                <h3 className="font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-sm text-primary-foreground/70">GPS tracking from pickup to delivery</p>
              </div>
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground mx-auto mb-4">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="font-semibold mb-2">Fast Matching</h3>
                <p className="text-sm text-primary-foreground/70">Get matched with nearby drivers instantly</p>
              </div>
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground mx-auto mb-4">
                  <Package className="h-7 w-7" />
                </div>
                <h3 className="font-semibold mb-2">Any Cargo Size</h3>
                <p className="text-sm text-primary-foreground/70">From small packages to 43-ton loads</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Ship?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Post your shipment and receive competitive bids from verified drivers within minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/for-shippers">Start Shipping</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
