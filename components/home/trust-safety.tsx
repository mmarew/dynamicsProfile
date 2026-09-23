import { Shield, FileCheck, Radar, Star, AlertTriangle, HeadphonesIcon } from "lucide-react"
import { T } from "@/components/i18n/text"

const features = [
  {
    icon: FileCheck,
    key: "i1",
    title: "Document Verification",
    description: "Every driver is verified through government-issued licenses, vehicle registration, and photo ID",
  },
  {
    icon: Radar,
    key: "i2",
    title: "Real-time GPS Tracking",
    description: "Track your cargo location from pickup to delivery with continuous GPS monitoring",
  },
  {
    icon: Star,
    key: "i3",
    title: "Rating System",
    description: "Both shippers and drivers rate each transaction, building accountability and trust",
  },
  {
    icon: AlertTriangle,
    key: "i4",
    title: "Delinquency Tracking",
    description: "Violations are tracked and users with poor conduct are automatically restricted",
  },
  {
    icon: Shield,
    key: "i5",
    title: "Admin Oversight",
    description: "Our team monitors platform activity and can intervene to resolve disputes",
  },
  {
    icon: HeadphonesIcon,
    key: "i6",
    title: "24/7 Support",
    description: "Call center available around the clock for booking assistance and issue resolution",
  },
]

export function TrustSafety() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-medium"><T k="TrustSafety.badge" /></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <T k="TrustSafety.title" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <T k="TrustSafety.sub" />
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2"><T k={`TrustSafety.${feature.key}.title`} /></h3>
              <p className="text-sm text-muted-foreground leading-relaxed"><T k={`TrustSafety.${feature.key}.desc`} /></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
