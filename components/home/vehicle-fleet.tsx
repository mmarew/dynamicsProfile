import Image from "next/image"

const vehicles = [
  {
    name: "Light Truck (up to 35 q)",
    capacity: "35 quintals",
    bestFor: "Bulk cargo, small & light loads",
    icon: "LT",
  },
  {
    name: "Medium Truck (up to 50 q)",
    capacity: "50 quintals",
    bestFor: "Bulk cargo, regional transport",
    icon: "MT",
  },
  {
    name: "Medium Truck (up to 100 q)",
    capacity: "100 quintals",
    bestFor: "Bulk cargo, warehouse transfers",
    icon: "M100",
  },
  {
    name: "Heavy Truck (125–175 q)",
    capacity: "175 quintals",
    bestFor: "Bulk cargo or 20ft container",
    icon: "HT",
  },
  {
    name: "Extra Heavy Truck (176–250 q)",
    capacity: "250 quintals",
    bestFor: "Bulk cargo or ISO containers",
    icon: "EHT",
  },
  {
    name: "20ft Container Truck (251–300 q)",
    capacity: "300 quintals",
    bestFor: "Bulk or 20ft container (cassoni)",
    icon: "20FT",
  },
  {
    name: "2×20ft / 40ft Low-Bed (301–350 q)",
    capacity: "350 quintals",
    bestFor: "2×20ft or 1×40ft ISO containers",
    icon: "LB",
  },
  {
    name: "2×20ft / 40ft Container (351–400 q)",
    capacity: "400 quintals",
    bestFor: "2×20ft or 1×40ft ISO containers",
    icon: "40FT",
  },
]

export function VehicleFleet() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Our Vehicle Fleet
          </h2>
          <p className="text-lg text-muted-foreground">
            Match your cargo with the right vehicle. From small urban deliveries to heavy cross-border freight, we have the capacity you need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg group"
            >
              <div className="flex items-center justify-center h-24 mb-6 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                <div className="relative">
                  <Image
                    src="/app-icon-driver.png"
                    alt={vehicle.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-xl"
                  />
                  <span className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded">
                    {vehicle.icon}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{vehicle.name}</h3>
              
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  {vehicle.capacity}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground">{vehicle.bestFor}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All vehicles on our platform are verified with valid registration, insurance status, and ownership records.
          </p>
        </div>
      </div>
    </section>
  )
}
