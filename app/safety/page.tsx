import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
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
  title: "Safety & Trust - DTC | Your Cargo, Fully Protected",
  description: "Learn about DTC's safety measures: driver verification, real-time GPS tracking, rating systems, and delinquency tracking. Your cargo is protected at every step.",
}

const verificationSteps = [
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "Every driver must submit a valid Driver's License with expiration tracking and Vehicle Registration (Librea) proving legal ownership or delegation.",
  },
  {
    icon: UserCheck,
    title: "Profile Photo",
    description: "Drivers provide a clear profile photo for identity confirmation. This helps shippers recognize their assigned driver.",
  },
  {
    icon: Truck,
    title: "Vehicle Registration",
    description: "Each vehicle is verified with license plate, type, and carrying capacity. Active/inactive status is managed by admin.",
  },
  {
    icon: CheckCircle,
    title: "Admin Approval",
    description: "All documents are reviewed and approved or rejected by DTC admin staff before a driver can go active on the platform.",
  },
]

const trackingFeatures = [
  {
    icon: Radar,
    title: "Real-time GPS Tracking",
    description: "Continuous GPS monitoring from journey start to completion. Shippers can see driver location on a live map at all times.",
  },
  {
    icon: Eye,
    title: "Route Recording",
    description: "Route points are recorded continuously during every journey, creating a complete audit trail of the cargo's path.",
  },
  {
    icon: Lock,
    title: "Secure Data",
    description: "All tracking data is secured and only shared with relevant parties during active journeys. Privacy is protected.",
  },
]

const accountabilityFeatures = [
  {
    icon: Star,
    title: "Rating System",
    description: "After every journey, both shipper and driver rate each other (1-5 stars) with optional comments. Ratings build trust and help others make informed decisions.",
  },
  {
    icon: AlertTriangle,
    title: "Delinquency Tracking",
    description: "The platform tracks violations (late arrival, rude behavior, cancellations) with severity levels (Low, Medium, High, Critical) and point-based scoring.",
  },
  {
    icon: Ban,
    title: "Automatic Banning",
    description: "Users who accumulate too many delinquency points are automatically banned for a configurable duration (7, 30, 90+ days).",
  },
  {
    icon: HeadphonesIcon,
    title: "Admin Oversight",
    description: "DTC admins can manually ban or unban users, resolve disputes, and intervene when necessary to maintain platform safety.",
  },
]

const driverStatuses = [
  { status: "Active", meaning: "All documents approved, vehicle registered, subscription active. Can receive requests.", type: "success" },
  { status: "Inactive - Documents Pending", meaning: "Documents uploaded but awaiting admin review.", type: "warning" },
  { status: "Inactive - Documents Rejected", meaning: "One or more documents were rejected. Must re-upload.", type: "error" },
  { status: "Inactive - Documents Missing", meaning: "Must upload all required documents.", type: "warning" },
  { status: "Inactive - Vehicle Not Registered", meaning: "Must register a vehicle first.", type: "warning" },
  { status: "Inactive - No Subscription", meaning: "Must purchase or renew a subscription plan.", type: "warning" },
  { status: "Inactive - Banned", meaning: "Account suspended due to policy violation.", type: "error" },
]

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
                <span className="text-sm font-medium">Trust & Safety</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Your Cargo, Fully Protected
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We have built multiple layers of verification, tracking, and accountability to ensure every shipment is secure and every transaction is trustworthy.
              </p>
            </div>
          </div>
        </section>

        {/* Driver Verification */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Driver Verification
              </h2>
              <p className="text-lg text-muted-foreground">
                Every driver on DTC goes through a rigorous verification process before they can accept jobs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {verificationSteps.map((step) => (
                <div key={step.title} className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
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
                  Real-time Cargo Tracking
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  Know exactly where your cargo is at all times. Our GPS tracking system provides continuous updates from pickup to delivery.
                </p>
                
                <div className="space-y-6">
                  {trackingFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground flex-shrink-0">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
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
                    <span className="text-primary-foreground/70">Live tracking active</span>
                    <span className="text-secondary">Updated 5s ago</span>
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
                Accountability System
              </h2>
              <p className="text-lg text-muted-foreground">
                Our rating and delinquency tracking systems ensure high standards and protect all users.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {accountabilityFeatures.map((feature) => (
                <div key={feature.title} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                  Driver Account Statuses
                </h2>
                <p className="text-lg text-muted-foreground">
                  Understanding driver statuses helps shippers know who they are working with.
                </p>
              </div>

              <div className="space-y-3">
                {driverStatuses.map((item) => (
                  <div
                    key={item.status}
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
                      <h3 className="font-medium text-foreground">{item.status}</h3>
                      <p className="text-sm text-muted-foreground">{item.meaning}</p>
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
                  Cancellation Policy
                </h2>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-muted-foreground mb-6">
                  Either party can cancel a request, but cancellations are tracked and may result in penalties:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <div>
                      <span className="font-medium text-foreground">Shipper Cancels:</span>
                      <span className="text-muted-foreground"> All matched drivers are notified; the request is removed.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <div>
                      <span className="font-medium text-foreground">Driver Cancels:</span>
                      <span className="text-muted-foreground"> Only that driver's participation is withdrawn; the shipper can select another driver.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <div>
                      <span className="font-medium text-foreground">Admin Cancels:</span>
                      <span className="text-muted-foreground"> Administrative intervention (e.g., fraud, safety concern).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <div>
                      <span className="font-medium text-foreground">System Cancels:</span>
                      <span className="text-muted-foreground"> Automatic cancellation due to timeout or rule violation.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Every cancellation requires selecting a reason from a predefined list, and all cancellations are logged for audit. Excessive cancellations may result in temporary or permanent account suspension.
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
              Ship with Confidence
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our safety measures ensure your cargo is protected at every step. Join shippers and drivers who trust DTC.
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
