import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Shield } from "lucide-react"
import { T } from "@/components/i18n/text"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a5f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-6">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium"><T k="Hero.badge" /></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <T k="Hero.title" as="span" className="text-balance" />
            </h1>
            
            <T
              k="Hero.subtitle"
              as="p"
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8">
                <Link href="/for-shippers">
                  <T k="Hero.ctaPrimary" />
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/for-drivers">
                  <T k="Hero.ctaSecondary" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}><T k="Hero.trust.verified" /></div>
                <div className="text-sm text-muted-foreground"><T k="Hero.trust.verifiedSub" /></div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}><T k="Hero.trust.gps" /></div>
                <div className="text-sm text-muted-foreground"><T k="Hero.trust.gpsSub" /></div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'var(--font-display)' }}><T k="Hero.trust.support" /></div>
                <div className="text-sm text-muted-foreground"><T k="Hero.trust.supportSub" /></div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
              {/* Simplified Truck Illustration */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, var(--primary) 50px, var(--primary) 51px)`
                }} />
                <Image
                  src="/app-icon-driver.png"
                  alt="DTC freight truck"
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-2xl opacity-30"
                />
                
                {/* Floating Info Cards */}
                <div className="absolute top-4 right-4 bg-card/95 backdrop-blur rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-medium">Live Tracking</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur rounded-lg p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium">Verified Driver</span>
                  </div>
                </div>
              </div>
              
              {/* Route Info */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">From</div>
                  <div className="font-medium">Addis Ababa</div>
                </div>
                <div className="flex-1 mx-4 border-t-2 border-dashed border-border relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2">
                    <Image
                      src="/app-icon-driver.png"
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4 rounded"
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">To</div>
                  <div className="font-medium">Djibouti Port</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
