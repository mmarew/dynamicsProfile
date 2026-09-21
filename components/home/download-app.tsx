import { Smartphone, MapPin, Bell, Wallet } from "lucide-react"

const features = [
  { icon: MapPin, text: "Live GPS tracking" },
  { icon: Bell, text: "Instant notifications" },
  { icon: Wallet, text: "Easy payments" },
]

export function DownloadApp() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-12 text-primary-foreground">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Get the DTC Mobile App
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Download our app to ship cargo, track deliveries, and manage your transportation needs on the go. Available for both shippers and drivers.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-2 text-primary-foreground/90">
                    <feature.icon className="h-4 w-4 text-secondary" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-6 py-3 rounded-xl hover:bg-primary-foreground/90 transition-colors"
                >
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-6 py-3 rounded-xl hover:bg-primary-foreground/90 transition-colors"
                >
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-primary-foreground/10 rounded-[3rem] border-4 border-primary-foreground/20 p-3">
                  <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden flex flex-col">
                    {/* Status Bar */}
                    <div className="bg-primary text-primary-foreground px-4 py-2 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <span className="font-semibold">DTC</span>
                      <span>100%</span>
                    </div>
                    
                    {/* App Content */}
                    <div className="flex-1 bg-background p-4 flex flex-col">
                      <div className="text-sm font-semibold text-foreground mb-4">Active Shipment</div>
                      
                      {/* Route Card */}
                      <div className="bg-muted rounded-xl p-3 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-xs text-muted-foreground">Addis Ababa</span>
                        </div>
                        <div className="border-l-2 border-dashed border-border h-4 ml-1" />
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          <span className="text-xs text-muted-foreground">Djibouti Port</span>
                        </div>
                      </div>

                      {/* Map Placeholder */}
                      <div className="flex-1 bg-primary/5 rounded-xl flex items-center justify-center">
                        <Smartphone className="h-12 w-12 text-primary/20" />
                      </div>

                      {/* Status */}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          <span className="text-xs text-muted-foreground">In Transit</span>
                        </div>
                        <span className="text-xs font-medium text-foreground">ETA: 8 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
