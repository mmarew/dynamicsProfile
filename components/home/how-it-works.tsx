import { FileText, MapPin, CheckCircle } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Post Your Shipment",
    description: "Enter pickup location, destination, cargo details, and preferred vehicle type. Set your budget or let drivers bid.",
  },
  {
    step: "02",
    icon: MapPin,
    title: "Compare & Select",
    description: "Receive competitive bids from verified drivers nearby. Compare ratings, prices, and vehicle details to choose the best offer.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Track & Deliver",
    description: "Follow your cargo in real-time with GPS tracking. Get notified when your shipment arrives safely at its destination.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Ship your cargo in three simple steps. Our platform makes freight transportation transparent, efficient, and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div key={item.title} className="relative group">
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
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
