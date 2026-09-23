import Image from "next/image"
import { T } from "@/components/i18n/text"

const vehicles = [
  { row: "lt", icon: "LT" },
  { row: "mt50", icon: "MT50" },
  { row: "mt100", icon: "MT100" },
  { row: "ht", icon: "HT" },
  { row: "eht", icon: "EHT" },
  { row: "f20", icon: "20FT" },
  { row: "lb", icon: "LB" },
  { row: "c400", icon: "40FT" },
]

export function VehicleFleet() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <T k="VehicleFleet.title" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <T k="VehicleFleet.sub" />
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.row}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg group"
            >
              <div className="flex items-center justify-center h-24 mb-6 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                <div className="relative">
                  <Image
                    src="/app-icon-driver.png"
                    alt={vehicle.row}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-xl"
                  />
                  <span className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded">
                    {vehicle.icon}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                <T k={`VehicleFleet.rows.${vehicle.row}.name`} />
              </h3>

              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <T k="VehicleFleet.cap" />:{" "}
                  <T k={`VehicleFleet.rows.${vehicle.row}.capacity`} />
                </span>
              </div>

              <p className="text-sm text-muted-foreground">
                <T k={`VehicleFleet.rows.${vehicle.row}.bestFor`} />
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <T k="VehicleFleet.verified" />
          </p>
        </div>
      </div>
    </section>
  )
}
