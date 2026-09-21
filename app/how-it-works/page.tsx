import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Users,
  Gavel,
  CheckCircle,
  Navigation as NavIcon,
  Star,
  Building2,
  Package,
  MapPin,
  Clock,
  Smartphone,
  Phone,
  MessageSquare,
  ExternalLink,
  Truck as TruckIcon,
} from "lucide-react"

export const metadata: Metadata = {
  title: "How It Works - DTC | Individual, Company & Queue Freight Dispatch",
  description: "Learn how DTC moves cargo. Shipper posts a job. Loads up to 10 vehicles go to individual driver bidding; larger loads go to company bidding. Queue dispatch at loading places, plus street pickup and call center booking.",
  keywords: [
    "freight marketplace Ethiopia",
    "how freight bidding works",
    "company freight bidding",
    "individual driver bidding",
    "queue dispatch loading place",
    "shipper driver match",
    "DTC how it works",
  ],
}

const shipperPostSteps = [
  {
    icon: Package,
    title: "Describe your cargo",
    description: "Enter the item, quantity (in quintals), pickup and destination locations, and your preferred dates.",
  },
  {
    icon: FileText,
    title: "Choose your vehicle",
    description: "Pick the vehicle type you need, from Isuzu NPR to Euro Trackers, based on your cargo size.",
  },
  {
    icon: TruckIcon,
    title: "Set the number of vehicles",
    description: "Tell us how many trucks your job needs. This decides how your load is matched.",
  },
]

const individualSteps = [
  {
    step: 1,
    icon: Users,
    title: "Drivers Are Matched",
    description:
      "Individual drivers near your pickup point are invited to your job — up to 5 verified drivers are invited per vehicle slot. Drivers at the loading-place queue get priority.",
    status: "Requested",
  },
  {
    step: 2,
    icon: Gavel,
    title: "Drivers Submit Bids",
    description:
      "Each driver reviews your load and submits their best price for the slot. You see every bid, driver rating, and vehicle detail in real time.",
    status: "Bids Received",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "You Select the Driver",
    description: "Compare prices and ratings and pick the best driver for each vehicle slot. Selected drivers confirm and prepare for pickup.",
    status: "Selected",
  },
  {
    step: 4,
    icon: Star,
    title: "Track & Deliver",
    description:
      "The driver loads and starts the journey — you follow live GPS until delivery. Pay and rate at the end.",
    status: "Journey Completed",
  },
]

const companySteps = [
  {
    step: 1,
    icon: Building2,
    title: "Companies See the Batch",
    description:
      "Transport companies with large fleets see your full batch — the total number of vehicles needed, route, cargo, and timeline. They place one bid for the entire batch.",
    status: "Batch Posted",
  },
  {
    step: 2,
    icon: Gavel,
    title: "Companies Bid",
    description:
      "Multiple verified companies compete with a price per vehicle. You compare bids and company ratings side by side.",
    status: "Bids Received",
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "You Accept a Company Bid",
    description:
      "Choose the company that best fits your budget and needs. Once accepted, the job is locked to them.",
    status: "Accepted",
  },
  {
    step: 4,
    icon: Users,
    title: "Company Assigns Drivers",
    description:
      "The company assigns its drivers and vehicles to every slot — automatically or manually through their portal. Each assigned driver confirms the assignment.",
    status: "Drivers Assigned",
  },
  {
    step: 5,
    icon: Star,
    title: "Track Every Slot",
    description:
      "Follow each assigned truck with live GPS from loading to delivery. Payment and rating happen per delivered slot.",
    status: "Journey Completed",
  },
]

const queueSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Order Enters the Queue",
    description:
      "A job linked to a loading place (port, customs, factory, cement plant, depot) enters that site's dispatch queue. Queue staff can create it on your behalf.",
    status: "Queue Order",
  },
  {
    step: 2,
    icon: Users,
    title: "Drivers Check In (FIFO)",
    description:
      "Drivers check in at the loading place and join a first-in-first-out line for their vehicle type. The front waiting driver is offered the order.",
    status: "FIFO Line",
  },
  {
    step: 3,
    icon: Clock,
    title: "Offer, Accept or Timeout",
    description:
      "The driver has a short window to accept. If they decline or time out, the order moves to the next driver in line. Too many refusals sends a driver to the back.",
    status: "3-Min Window",
  },
  {
    step: 4,
    icon: Gavel,
    title: "Open for Bidding",
    description:
      "Queue staff can open an order for bidding instead of FIFO — up to 5 drivers bid per vehicle slot. You or the queue staff pick the winning bid.",
    status: "≤ 5 Bids / Slot",
  },
  {
    step: 5,
    icon: Star,
    title: "Load, Track & Complete",
    description: "The winning driver loads, heads to your destination, and you track the full journey to completion.",
    status: "Journey Completed",
  },
]

const takeFromStreetSteps = [
  {
    step: 1,
    icon: Users,
    title: "Driver Meets Shipper",
    description: "Driver finds a shipper at a loading zone, marketplace, or on the road who needs transport but does not have the app.",
  },
  {
    step: 2,
    icon: Smartphone,
    title: "Quick Registration",
    description: "Driver opens the app and enters the shipper's phone number, cargo details, and pickup/destination locations.",
  },
  {
    step: 3,
    icon: MessageSquare,
    title: "Instant SMS Confirmation",
    description: "The system creates accounts for both parties. The shipper receives SMS with driver details, vehicle info, and a tracking link.",
  },
  {
    step: 4,
    icon: NavIcon,
    title: "Journey Begins",
    description: "The journey starts immediately with GPS tracking active. No bidding phase required.",
  },
]

const callCenterSteps = [
  {
    step: 1,
    icon: Phone,
    title: "Call DTC Hotline",
    description: "Shipper calls the DTC call center hotline for phone-based booking assistance.",
  },
  {
    step: 2,
    icon: FileText,
    title: "Operator Collects Details",
    description: "An operator collects all shipment information: origin, destination, item description, quantity, and vehicle type preference.",
  },
  {
    step: 3,
    icon: Package,
    title: "Request Created",
    description: "The operator creates the request in the system on behalf of the shipper. The request enters the normal bid-matching flow.",
  },
  {
    step: 4,
    icon: MessageSquare,
    title: "SMS Updates",
    description: "The shipper receives SMS updates on driver assignment, bid acceptance, and journey progress.",
  },
]

const apps = [
  {
    name: "Dynamics Shipper",
    icon: "/app-icon-shipper.png",
    description: "Post cargo, receive bids, track shipments",
    href: "/download",
  },
  {
    name: "Dynamics Driver",
    icon: "/app-icon-driver.png",
    description: "Check in, bid, and run your journeys",
    href: "/download",
  },
  {
    name: "Queue Console",
    icon: "/app-icon-driver.png",
    description: "FIFO & bidding dispatch at loading places",
    href: "https://queue.dynamicsroute.tech/",
    external: true,
  },
  {
    name: "Company Portal",
    icon: "/app-icon-shipper.png",
    description: "Company & association fleet bidding",
    href: "https://association.dynamicsroute.tech/",
    external: true,
  },
]

function stepTimeline({ steps, accent }: { steps: typeof individualSteps; accent: "primary" | "secondary" | "accent" }) {
  const colors = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
  }
  return (
    <div className="space-y-6">
      {steps.map((item, index) => (
        <div key={item.step} className="flex gap-6 items-start">
          <div className="flex flex-col items-center">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl font-bold ${colors[accent]}`}>
              {item.step}
            </div>
            {index < steps.length - 1 && <div className="w-0.5 h-16 bg-border mt-2" />}
          </div>
          <div className="flex-1 bg-card border border-border rounded-xl p-6 mb-4">
            <div className="flex items-start gap-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent === "primary" ? "bg-primary/10 text-primary" : accent === "secondary" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent"} flex-shrink-0`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {item.status}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                How DTC Works
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Post one job and let the system match it the right way. Small loads go to individual
                drivers, big loads go to transport companies, and loading places run their own queues.
              </p>
            </div>
          </div>
        </section>

        {/* App Ecosystem */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Four Ways to Operate the System
              </h2>
              <p className="text-muted-foreground">
                Shippers and drivers use the mobile apps; loading places and companies use the web consoles.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {apps.map((app) => (
                <a
                  key={app.name}
                  href={app.href}
                  {...(app.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-xl mb-4"
                  />
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{app.name}</h3>
                    {app.external && <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{app.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Step 1 - Post a job */}
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                <FileText className="h-4 w-4" />
                Step 1
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                The Shipper Posts a Job
              </h2>
              <p className="text-muted-foreground text-lg">
                Every shipment starts the same way — from the shipper app.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {shipperPostSteps.map((item, index) => (
                <div key={item.title} className="bg-card border border-border rounded-2xl p-6 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step 2 - Routing decision */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary mb-4">
                <Gavel className="h-4 w-4" />
                Step 2
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                The Load Size Decides the Matching Path
              </h2>
              <p className="text-muted-foreground text-lg">
                The number of vehicles your job needs routes it to the right bidders.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="rounded-3xl border-2 border-primary/30 bg-primary/5 p-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
                  10 or fewer vehicles
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Individual Drivers
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your job is opened to verified individual drivers. Up to 5 drivers are invited to
                  bid per vehicle slot, and you pick the best one for each slot.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Up to 5 bids per vehicle slot</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> You choose the driver per slot</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Works for small &amp; medium loads</li>
                </ul>
              </div>

              <div className="rounded-3xl border-2 border-secondary/30 bg-secondary/5 p-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-4">
                  More than 10 vehicles
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-secondary" />
                  Transport Companies
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your job becomes a company batch. Verified companies bid on the whole batch, you
                  accept one bid, and that company assigns its own drivers to every vehicle slot.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> One bid per company for the batch</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Company assigns fleet &amp; drivers</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Great for big fleets &amp; full convoys</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3 - Flows */}
        <section className="py-12 lg:py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent mb-4">
                <MapPin className="h-4 w-4" />
                Step 3
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Then the Job Flows
              </h2>
              <p className="text-muted-foreground text-lg">
                Individual, company, and queue flows — plus street pickup and call center help when you need them.
              </p>
            </div>

            <Tabs defaultValue="individual" className="max-w-5xl mx-auto">
              <TabsList className="flex w-full flex-wrap mb-12 justify-center">
                <TabsTrigger value="individual" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Individual
                </TabsTrigger>
                <TabsTrigger value="company" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Company
                </TabsTrigger>
                <TabsTrigger value="queue" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Queue
                </TabsTrigger>
                <TabsTrigger value="street" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Street
                </TabsTrigger>
                <TabsTrigger value="call" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call
                </TabsTrigger>
              </TabsList>

              <TabsContent value="individual">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    Individual Driver Bidding
                  </h2>
                  <p className="text-muted-foreground">
                    For jobs of 10 or fewer vehicles. Up to 5 drivers bid per slot; you pick the winner.
                  </p>
                </div>
                {stepTimeline({ steps: individualSteps, accent: "primary" })}
              </TabsContent>

              <TabsContent value="company">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    Company Batch Bidding
                  </h2>
                  <p className="text-muted-foreground">
                    For jobs of more than 10 vehicles. Companies bid on the batch; you accept one and they assign the fleet.
                  </p>
                </div>
                {stepTimeline({ steps: companySteps, accent: "secondary" })}
                <div className="mt-8 rounded-2xl bg-secondary/10 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
                  <p className="text-foreground font-medium">Manage bids, fleet, and assignments from the Company Portal.</p>
                  <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shrink-0">
                    <a href="https://association.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                      Open Company Portal
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="queue">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    Queue Dispatch at Loading Places
                  </h2>
                  <p className="text-muted-foreground">
                    Ports, customs, factories, and depots run a fair FIFO line — or open orders for bidding.
                  </p>
                </div>
                {stepTimeline({ steps: queueSteps, accent: "accent" })}
                <div className="mt-8 rounded-2xl bg-accent/10 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
                  <p className="text-foreground font-medium">Loading-place staff run the live queue and dispatch board online.</p>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shrink-0">
                    <a href="https://queue.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                      Open Queue Console
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="street">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    Take From Street
                  </h2>
                  <p className="text-muted-foreground">
                    For drivers who find a shipper on the road without the app. Perfect for street-side pickups and walk-in customers.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {takeFromStreetSteps.map((item) => (
                    <div key={item.step} className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground font-bold">
                          {item.step}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                          <item.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-secondary/10 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2">Use Cases:</h4>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      Street-side freight pickups
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      Market-to-warehouse transport
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      Walk-in customers at loading docks
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="call">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    Call Center Booking
                  </h2>
                  <p className="text-muted-foreground">
                    For shippers who prefer phone-based booking or do not have the app. Our operators handle everything.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {callCenterSteps.map((item) => (
                    <div key={item.step} className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold">
                          {item.step}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <item.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-primary text-primary-foreground rounded-xl p-8 text-center">
                  <Phone className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h4 className="text-xl font-semibold mb-2">Need Assistance?</h4>
                  <p className="text-primary-foreground/80 mb-4">
                    Our call center is available during business hours to help you book your shipment.
                  </p>
                  <p className="text-secondary font-semibold">Contact us today</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Journey & Payment */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  The Journey, Whatever the Path
                </h2>
                <p className="text-muted-foreground">
                  Every job — individual, company, or queue — finishes the same way.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { icon: NavIcon, label: "Go to loading place" },
                  { icon: Package, label: "Load the cargo" },
                  { icon: MapPin, label: "Live GPS tracking" },
                  { icon: TruckIcon, label: "Deliver on time" },
                  { icon: Star, label: "Payment & rating" },
                ].map((step, i) => (
                  <div key={step.label} className="bg-card border border-border rounded-xl p-5 text-center">
                    <div className="text-xs font-bold text-muted-foreground mb-2">Step {i + 1}</div>
                    <step.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground">{step.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Payment Options
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">Cash on Delivery</h4>
                    <p className="text-sm text-muted-foreground">Pay the driver directly upon delivery</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">Bank Transfer</h4>
                    <p className="text-sm text-muted-foreground">CBE, Dashen, and other banks</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">Telebirr</h4>
                    <p className="text-sm text-muted-foreground">Mobile money payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Ship?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download the app and post your first cargo today. Companies and loading places can open their consoles right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/download">Download App</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/for-shippers">Post a Shipment</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}