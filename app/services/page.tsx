import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
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
  ...canonical('/services'),
  title: "Services & Freight Vehicles - DTC | From Light Trucks to Container Rigs",
  description: "DTC freight vehicles by cargo type and capacity: light and medium open flatbed trucks for bulk cargo, heavy flatbeds for bulk or 20ft containers, and specialised low-bed rigs for 40ft containers. Ethiopia and Djibouti.",
}

const cargoTypes = {
  bulk_only: { badge: "bg-primary/10 text-primary", key: "bulk_only" },
  both: { badge: "bg-secondary/10 text-secondary", key: "both" },
  container_only: { badge: "bg-accent/10 text-accent", key: "container_only" },
}

const vehicles = [
  { key: "v1", name: "Light Truck (up to 35 Quintal)", capacity: "35 quintals", capacityKg: "3,500 kg", cargoType: "bulk_only" as const },
  { key: "v2", name: "Medium Truck (up to 50 Quintal)", capacity: "50 quintals", capacityKg: "5,000 kg", cargoType: "bulk_only" as const },
  { key: "v3", name: "Medium Truck (up to 100 Quintal)", capacity: "100 quintals", capacityKg: "10,000 kg", cargoType: "bulk_only" as const },
  { key: "v4", name: "Heavy Truck (125–175 Quintal)", capacity: "175 quintals", capacityKg: "17,500 kg", cargoType: "both" as const },
  { key: "v5", name: "Extra Heavy Truck (176–250 Quintal)", capacity: "250 quintals", capacityKg: "25,000 kg", cargoType: "both" as const },
  { key: "v6", name: "20ft Container Truck (251–300 Quintal)", capacity: "300 quintals", capacityKg: "30,000 kg", cargoType: "both" as const },
  { key: "v7", name: "2×20ft or 40ft Low-Bed Truck (301–350 Quintal)", capacity: "350 quintals", capacityKg: "35,000 kg", cargoType: "container_only" as const },
  { key: "v8", name: "2×20ft or 40ft Container Truck (351–400 Quintal)", capacity: "400 quintals", capacityKg: "40,000 kg", cargoType: "container_only" as const },
]

const serviceTypes = [
  { icon: Building, key: "s1" },
  { icon: Warehouse, key: "s2" },
  { icon: Factory, key: "s3" },
  { icon: Globe, key: "s4" },
  { icon: ShoppingCart, key: "s5" },
  { icon: Package, key: "s6" },
]

const keyFeatures = [
  { icon: Shield, key: "f1" },
  { icon: MapPin, key: "f2" },
  { icon: Clock, key: "f3" },
  { icon: Package, key: "f4" },
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
                <T k="Services.hero.title" />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <T k="Services.hero.sub" />
              </p>
            </div>
          </div>
        </section>

        {/* Vehicle Fleet */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="Services.fleet.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="Services.fleet.sub" />
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {vehicles.map((vehicle) => {
                const cargo = cargoTypes[vehicle.cargoType]
                return (
                  <div
                    key={vehicle.key}
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
                          <h3 className="text-xl font-semibold text-foreground"><T k={`Services.vehicles.${vehicle.key}.name`} /></h3>
                        </div>
                        <p className="text-muted-foreground"><T k={`Services.vehicles.${vehicle.key}.desc`} /></p>
                      </div>
                    </div>

                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${cargo.badge} mb-6`}>
                      <T k={`Services.cargoTypes.${cargo.key}`} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1"><T k="Services.fleet.capacity" /></div>
                        <div className="font-semibold text-foreground">{vehicle.capacity}</div>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1"><T k="Services.fleet.weight" /></div>
                        <div className="font-semibold text-foreground">{vehicle.capacityKg}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <p>
                <strong><T k="Services.fleet.noteLabel" /></strong> <T k="Services.fleet.note" />
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {Object.values(cargoTypes).map((type) => (
                  <span key={type.key} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${type.badge}`}>
                    <T k={`Services.cargoTypes.${type.key}`} />
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
                <T k="Services.types.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="Services.types.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceTypes.map((service) => (
                <div
                  key={service.key}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`Services.types.${service.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`Services.types.${service.key}.desc`} /></p>
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
                <T k="Services.features.title" />
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature) => (
                <div key={feature.key} className="text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground mx-auto mb-4">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold mb-2"><T k={`Services.features.${feature.key}.title`} /></h3>
                  <p className="text-sm text-primary-foreground/70"><T k={`Services.features.${feature.key}.desc`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="Services.cta.title" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <T k="Services.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/for-shippers"><T k="Services.cta.start" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/how-it-works"><T k="Services.cta.how" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
