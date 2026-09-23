import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
import { Target, Eye, Users, MapPin, Globe, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/about'),
  title: "About Us - DTC | Dynamics Transport Commission",
  description: "Learn about DTC, Ethiopia and Djibouti's leading freight transportation marketplace. Our mission is to digitize and modernize cargo transportation in the Horn of Africa.",
}

const values = [
  { icon: Users, key: "v1" },
  { icon: Globe, key: "v2" },
  { icon: TrendingUp, key: "v3" },
]

const ethiopiaCoverage = ["i1", "i2", "i3", "i4", "i5"]
const djiboutiCoverage = ["i1", "i2", "i3", "i4"]

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
                <T k="About.hero.title" />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <T k="About.hero.sub" />
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
                  <T k="About.story.badge" />
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="About.story.title" />
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <T k="About.story.p1" />
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <T k="About.story.p2" />
                </p>
                <p className="text-lg font-semibold text-foreground italic">
                  <T k="About.story.tagline" />
                </p>
              </div>
              <div className="bg-muted rounded-2xl p-8 lg:p-12">
                <div className="grid gap-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2"><T k="About.mission.title" /></h3>
                      <p className="text-muted-foreground">
                        <T k="About.mission.desc" />
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2"><T k="About.vision.title" /></h3>
                      <p className="text-muted-foreground">
                        <T k="About.vision.desc" />
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
                <T k="About.coverage.title" />
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                <T k="About.coverage.sub" />
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold"><T k="About.coverage.ethiopia.heading" /></h3>
                </div>
                <ul className="space-y-3 text-primary-foreground/80">
                  {ethiopiaCoverage.map((key) => (
                    <li key={key} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <T k={`About.coverage.ethiopia.${key}`} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-foreground/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold"><T k="About.coverage.djibouti.heading" /></h3>
                </div>
                <ul className="space-y-3 text-primary-foreground/80">
                  {djiboutiCoverage.map((key) => (
                    <li key={key} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <T k={`About.coverage.djibouti.${key}`} />
                    </li>
                  ))}
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
                <T k="About.values.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="About.values.sub" />
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.key} className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3"><T k={`About.values.${value.key}.title`} /></h3>
                  <p className="text-muted-foreground"><T k={`About.values.${value.key}.desc`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="About.cta.title" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <T k="About.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/for-shippers"><T k="About.cta.start" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/for-drivers"><T k="About.cta.driver" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
