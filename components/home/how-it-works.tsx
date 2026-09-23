import { FileText, MapPin, CheckCircle } from "lucide-react"
import { T } from "@/components/i18n/text"

const steps = [
  { step: "01", icon: FileText, key: "s1" },
  { step: "02", icon: MapPin, key: "s2" },
  { step: "03", icon: CheckCircle, key: "s3" },
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <T k="HomeHowItWorks.title" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <T k="HomeHowItWorks.sub" />
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div key={item.key} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-x-8 z-0" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="text-4xl font-bold text-border" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  <T k={`HomeHowItWorks.${item.key}.title`} />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <T k={`HomeHowItWorks.${item.key}.desc`} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
