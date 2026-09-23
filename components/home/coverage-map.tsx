import { MapPin } from "lucide-react"
import { T } from "@/components/i18n/text"

const locations = {
  ethiopia: [
    "Addis Ababa",
    "Dire Dawa",
    "Mekelle",
    "Hawassa",
    "Bahir Dar",
    "Adama",
    "Jimma",
  ],
  djibouti: [
    "Djibouti City",
    "Ali Sabieh",
    "Tadjoura",
  ],
}

const corridors = [
  "c1",
  "c2",
  "c3",
  "c4",
]

export function CoverageMap() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-lg mx-auto bg-primary-foreground/10 rounded-3xl p-8 relative">
              {/* Simplified Map Representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Ethiopia shape representation */}
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-secondary/50 rounded-3xl bg-secondary/10" />
                  {/* Djibouti shape representation */}
                  <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-secondary rounded-xl bg-secondary/20" />
                  
                  {/* Route line */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                    <path
                      d="M 40 50 Q 60 40 70 45"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                      className="text-secondary"
                    />
                  </svg>

                  {/* Location dots */}
                  <div className="absolute top-[45%] left-[35%] w-3 h-3 bg-secondary rounded-full animate-pulse" title="Addis Ababa" />
                  <div className="absolute top-[35%] right-[28%] w-3 h-3 bg-secondary rounded-full animate-pulse" title="Djibouti City" />
                  
                  {/* City labels */}
                  <span className="absolute top-[52%] left-[28%] text-xs text-primary-foreground/70">Addis Ababa</span>
                  <span className="absolute top-[28%] right-[20%] text-xs text-primary-foreground/70">Djibouti</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="CoverageMap.title" />
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              <T k="CoverageMap.sub" />
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-secondary mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <T k="CoverageMap.ethiopia" />
                </h3>
                <ul className="space-y-2">
                  {locations.ethiopia.map((city) => (
                    <li key={city} className="text-primary-foreground/70 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <T k="CoverageMap.djibouti" />
                </h3>
                <ul className="space-y-2">
                  {locations.djibouti.map((city) => (
                    <li key={city} className="text-primary-foreground/70 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-secondary mb-4"><T k="CoverageMap.keyCorridors" /></h3>
              <ul className="space-y-2">
                {corridors.map((corridor) => (
                  <li key={corridor} className="text-primary-foreground/70 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    <T k={`CoverageMap.corridors.${corridor}`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
