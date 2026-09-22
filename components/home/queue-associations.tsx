import Link from "next/link"
import { MapPin, ListOrdered, RefreshCcw, BarChart3, Users, ArrowRight } from "lucide-react"
import { T } from "@/components/i18n/text"

const features = [
  { icon: MapPin, key: "geofencedCheckin" },
  { icon: ListOrdered, key: "fifoRotation" },
  { icon: RefreshCcw, key: "refusalHandling" },
  { icon: BarChart3, key: "performanceDashboard" },
  { icon: Users, key: "bulkOnboarding" },
]

export function QueueAssociations() {
  return (
    <section id="queue-associations" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              <T k="QueueAssociations.badge" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="QueueAssociations.title" />
            </h2>
            <T
              k="QueueAssociations.description"
              as="p"
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            />
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature.key} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-medium text-foreground block">
                      <T k={`QueueAssociations.features.${feature.key}.title`} />
                    </span>
                    <span className="text-sm text-muted-foreground">
                      <T k={`QueueAssociations.features.${feature.key}.description`} />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/for-queue-orgs"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                <T k="QueueAssociations.ctaDemo" />
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/for-associations"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <T k="QueueAssociations.ctaPartner" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-muted/50 border border-border rounded-3xl p-6 sm:p-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground text-lg">Live Queue — Kality Freight Terminal</h3>
                <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  Queue running
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "In queue", value: "42", sub: "drivers checked in" },
                  { label: "Turnaround today", value: "18", sub: "min average" },
                  { label: "Rotations", value: "0", sub: "arguments logged" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border border-border rounded-2xl p-4">
                    <div className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sub}</div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-2xl divide-y divide-border">
                {[
                  { pos: 1, plate: "AA 12345", type: "Medium Truck", waited: "09:12", assigned: true },
                  { pos: 2, plate: "AA 98765", type: "Heavy Truck", waited: "09:20", assigned: false },
                  { pos: 3, plate: "AA 55667", type: "40ft Container", waited: "09:27", assigned: false },
                ].map((row) => (
                  <div key={row.plate} className="flex items-center gap-4 px-5 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                      {row.pos}
                    </span>
                    <span className="font-mono text-sm text-foreground">{row.plate}</span>
                    <span className="flex-1 text-sm text-muted-foreground">{row.type}</span>
                    <span className="hidden sm:block text-xs text-muted-foreground">Waiting since {row.waited}</span>
                    {row.assigned ? (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-accent/20 text-accent font-medium whitespace-nowrap">
                        Order offered ✓
                      </span>
                    ) : (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                        In line
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                A dispatch board like this runs today at <a href="https://queue.dynamicsroute.tech" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">queue.dynamicsroute.tech</a>. Built for ports, customs yards, factories, and cement plants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}