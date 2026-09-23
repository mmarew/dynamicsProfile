import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
import { 
  Shield, 
  FileCheck, 
  Radar, 
  Star, 
  AlertTriangle, 
  HeadphonesIcon,
  Lock,
  Eye,
  UserCheck,
  Truck,
  CheckCircle,
  Ban
} from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/safety'),
  title: "Safety & Trust - DTC | Your Cargo, Fully Protected",
  description: "Learn about DTC's safety measures: driver verification, real-time GPS tracking, rating systems, and delinquency tracking. Your cargo is protected at every step.",
}

const verificationSteps = [
  { icon: FileCheck, key: "s1" },
  { icon: UserCheck, key: "s2" },
  { icon: Truck, key: "s3" },
  { icon: CheckCircle, key: "s4" },
]

const trackingFeatures = [
  { icon: Radar, key: "f1" },
  { icon: Eye, key: "f2" },
  { icon: Lock, key: "f3" },
]

const accountabilityFeatures = [
  { icon: Star, key: "a1" },
  { icon: AlertTriangle, key: "a2" },
  { icon: Ban, key: "a3" },
  { icon: HeadphonesIcon, key: "a4" },
]

const driverStatuses = [
  { key: "st1", type: "success" },
  { key: "st2", type: "warning" },
  { key: "st3", type: "error" },
  { key: "st4", type: "warning" },
  { key: "st5", type: "warning" },
  { key: "st6", type: "warning" },
  { key: "st7", type: "error" },
]

const cancellationRules = ["c1", "c2", "c3", "c4"]

export default function SafetyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent mb-6">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium"><T k="Safety.hero.badge" /></span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="Safety.hero.title" />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <T k="Safety.hero.sub" />
              </p>
            </div>
          </div>
        </section>

        {/* Driver Verification */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="Safety.verification.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="Safety.verification.sub" />
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {verificationSteps.map((step) => (
                <div key={step.key} className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2"><T k={`Safety.verification.${step.key}.title`} /></h3>
                    <p className="text-sm text-muted-foreground"><T k={`Safety.verification.${step.key}.desc`} /></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GPS Tracking */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="Safety.tracking.title" />
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  <T k="Safety.tracking.sub" />
                </p>
                
                <div className="space-y-6">
                  {trackingFeatures.map((feature) => (
                    <div key={feature.key} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground flex-shrink-0">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1"><T k={`Safety.tracking.${feature.key}.title`} /></h3>
                        <p className="text-primary-foreground/70 text-sm"><T k={`Safety.tracking.${feature.key}.desc`} /></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="hidden lg:block">
                <div className="bg-primary-foreground/10 rounded-2xl p-8">
                  <div className="aspect-square bg-primary-foreground/5 rounded-xl flex items-center justify-center relative">
                    <Radar className="h-24 w-24 text-secondary/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-secondary rounded-full animate-ping" />
                      <div className="absolute w-4 h-4 bg-secondary rounded-full" />
                    </div>
                    
                    {/* Route visualization */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full" />
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-secondary rounded-full" />
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                      <path
                        d="M 30 30 Q 50 20 70 70"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                        className="text-secondary/50"
                      />
                    </svg>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-primary-foreground/70"><T k="Safety.tracking.liveActive" /></span>
                    <span className="text-secondary"><T k="Safety.tracking.updatedAgo" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accountability System */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="Safety.accountability.title" />
              </h2>
              <p className="text-lg text-muted-foreground">
                <T k="Safety.accountability.sub" />
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {accountabilityFeatures.map((feature) => (
                <div key={feature.key} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`Safety.accountability.${feature.key}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`Safety.accountability.${feature.key}.desc`} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Driver Account Statuses */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="Safety.statuses.title" />
                </h2>
                <p className="text-lg text-muted-foreground">
                  <T k="Safety.statuses.sub" />
                </p>
              </div>

              <div className="space-y-3">
                {driverStatuses.map((item) => (
                  <div
                    key={item.key}
                    className={`flex items-start gap-4 p-4 rounded-xl border ${
                      item.type === 'success' ? 'bg-accent/5 border-accent/20' :
                      item.type === 'warning' ? 'bg-secondary/5 border-secondary/20' :
                      'bg-destructive/5 border-destructive/20'
                    }`}
                  >
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full flex-shrink-0 mt-0.5 ${
                      item.type === 'success' ? 'bg-accent/20 text-accent' :
                      item.type === 'warning' ? 'bg-secondary/20 text-secondary' :
                      'bg-destructive/20 text-destructive'
                    }`}>
                      {item.type === 'success' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : item.type === 'warning' ? (
                        <AlertTriangle className="h-4 w-4" />
                      ) : (
                        <Ban className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground"><T k={`Safety.statuses.${item.key}.status`} /></h3>
                      <p className="text-sm text-muted-foreground"><T k={`Safety.statuses.${item.key}.meaning`} /></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="Safety.cancellation.title" />
                </h2>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-muted-foreground mb-6">
                  <T k="Safety.cancellation.intro" />
                </p>
                
                <ul className="space-y-4">
                  {cancellationRules.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <div>
                        <span className="font-medium text-foreground"><T k={`Safety.cancellation.${key}.label`} /></span>
                        <span className="text-muted-foreground"> <T k={`Safety.cancellation.${key}.desc`} /></span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong><T k="Safety.cancellation.noteLabel" /></strong> <T k="Safety.cancellation.noteText" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-accent/10">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="Safety.cta.title" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <T k="Safety.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/for-shippers"><T k="Safety.cta.start" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/for-drivers"><T k="Safety.cta.driver" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
