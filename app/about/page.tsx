import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, MapPin, Globe, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/about'),
  title: "About Us - DTC | Dynamics Transport Commission",
  description: "Learn about DTC, Ethiopia and Djibouti's leading freight transportation marketplace. Our mission is to digitize and modernize cargo transportation in the Horn of Africa.",
}

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "We build technology that empowers both shippers and drivers, creating value for the entire logistics ecosystem.",
  },
  {
    icon: Globe,
    title: "Regional Impact",
    description: "We are committed to transforming logistics across the Horn of Africa, starting with Ethiopia and Djibouti.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously improve our platform with real-time tracking, competitive bidding, and seamless payments.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                About Dynamics Transport Commission
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are building the future of freight transportation in the Horn of Africa. Our platform connects shippers with verified drivers through transparent, competitive bidding.
              </p>
            </div>
          </div>
        </section>

        {/* What We Are */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  What We Are
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Dynamics Transport Commission (DTC) is a technology-driven freight and cargo logistics platform operating across Ethiopia and Djibouti. We connect shippers—businesses and individuals who need to move goods—with verified truck drivers and fleet owners through a transparent, competitive bidding system.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Think of us as Uber for freight, combining Convoy-style load matching with comprehensive fleet management. Our platform handles everything from request creation to delivery completion.
                </p>
                <p className="text-lg font-semibold text-foreground italic">
                  &ldquo;Move goods. Move fast. Move smart.&rdquo;
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-8 lg:p-12">
                <div className="grid gap-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To digitize and modernize cargo transportation in the Horn of Africa, making it safer, more affordable, and more transparent for every participant in the supply chain.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To become the leading logistics technology platform across East Africa, enabling any shipper to move any load to any destination with full visibility, fair pricing, and guaranteed security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Where We Operate
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Our network spans the most critical trade corridors in the Horn of Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Ethiopia</h3>
                </div>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Addis Ababa (Capital Hub)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Dire Dawa
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Mekelle, Hawassa, Bahir Dar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Adama, Jimma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    All inter-city freight routes
                  </li>
                </ul>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Djibouti</h3>
                </div>
                <ul className="space-y-3 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Djibouti City
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Ali Sabieh
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Djibouti-Ethiopia Trade Corridor
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Djibouti Port Access
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do at DTC.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Join the DTC Network
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need to ship cargo or you are a driver looking for loads, we are here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/for-shippers">Start Shipping</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/for-drivers">Become a Driver</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
