import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { T } from "@/components/i18n/text"
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
  ...canonical('/how-it-works'),
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
    k: "1",
  },
  {
    icon: FileText,
    k: "2",
  },
  {
    icon: TruckIcon,
    k: "3",
  },
]

const individualSteps = [
  {
    step: 1,
    icon: Users,
    k: "1",
  },
  {
    step: 2,
    icon: Gavel,
    k: "2",
  },
  {
    step: 3,
    icon: CheckCircle,
    k: "3",
  },
  {
    step: 4,
    icon: Star,
    k: "4",
  },
]

const companySteps = [
  {
    step: 1,
    icon: Building2,
    k: "1",
  },
  {
    step: 2,
    icon: Gavel,
    k: "2",
  },
  {
    step: 3,
    icon: CheckCircle,
    k: "3",
  },
  {
    step: 4,
    icon: Users,
    k: "4",
  },
  {
    step: 5,
    icon: Star,
    k: "5",
  },
]

const queueSteps = [
  {
    step: 1,
    icon: FileText,
    k: "1",
  },
  {
    step: 2,
    icon: Users,
    k: "2",
  },
  {
    step: 3,
    icon: Clock,
    k: "3",
  },
  {
    step: 4,
    icon: Gavel,
    k: "4",
  },
  {
    step: 5,
    icon: Star,
    k: "5",
  },
]

const takeFromStreetSteps = [
  {
    step: 1,
    icon: Users,
    k: "1",
  },
  {
    step: 2,
    icon: Smartphone,
    k: "2",
  },
  {
    step: 3,
    icon: MessageSquare,
    k: "3",
  },
  {
    step: 4,
    icon: NavIcon,
    k: "4",
  },
]

const callCenterSteps = [
  {
    step: 1,
    icon: Phone,
    k: "1",
  },
  {
    step: 2,
    icon: FileText,
    k: "2",
  },
  {
    step: 3,
    icon: Package,
    k: "3",
  },
  {
    step: 4,
    icon: MessageSquare,
    k: "4",
  },
]

const apps = [
  {
    name: "Dynamics Shipper",
    icon: "/app-icon-shipper.png",
    descKey: "HowItWorks.apps.shipper.desc",
    href: "/download",
  },
  {
    name: "Dynamics Driver",
    icon: "/app-icon-driver.png",
    descKey: "HowItWorks.apps.driver.desc",
    href: "/download",
  },
  {
    name: "Queue Console",
    icon: "/app-icon-driver.png",
    descKey: "HowItWorks.apps.queue.desc",
    href: "https://queue.dynamicsroute.tech/",
    external: true,
  },
  {
    name: "Company Portal",
    icon: "/app-icon-shipper.png",
    descKey: "HowItWorks.apps.company.desc",
    href: "https://association.dynamicsroute.tech/",
    external: true,
  },
]

function stepTimeline({ steps, prefix, accent }: { steps: typeof individualSteps; prefix: string; accent: "primary" | "secondary" | "accent" }) {
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
                  <h3 className="font-semibold text-foreground"><T k={`${prefix}.${item.k}.title`} /></h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    <T k={`${prefix}.${item.k}.status`} />
                  </span>
                </div>
                <p className="text-muted-foreground"><T k={`${prefix}.${item.k}.desc`} /></p>
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
                <T k="HowItWorks.hero.title" />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <T k="HowItWorks.hero.sub" />
              </p>
            </div>
          </div>
        </section>

        {/* App Ecosystem */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="HowItWorks.ways.title" />
              </h2>
              <p className="text-muted-foreground">
                <T k="HowItWorks.ways.sub" />
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
                  <p className="text-sm text-muted-foreground mt-1"><T k={app.descKey} /></p>
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
                <T k="HowItWorks.step1.title" />
              </h2>
              <p className="text-muted-foreground text-lg">
                <T k="HowItWorks.step1.sub" />
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {shipperPostSteps.map((item, index) => (
                <div key={item.k} className="bg-card border border-border rounded-2xl p-6 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2"><T k={`HowItWorks.s1.${item.k}.title`} /></h3>
                  <p className="text-sm text-muted-foreground"><T k={`HowItWorks.s1.${item.k}.desc`} /></p>
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
                <T k="HowItWorks.step2.title" />
              </h2>
              <p className="text-muted-foreground text-lg">
                <T k="HowItWorks.step2.sub" />
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="rounded-3xl border-2 border-primary/30 bg-primary/5 p-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
                  <T k="HowItWorks.ind.badge" />
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <T k="HowItWorks.ind.title" />
                </h3>
                <p className="text-muted-foreground mb-4">
                  <T k="HowItWorks.ind.desc" />
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> <T k="HowItWorks.ind.b1" /></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> <T k="HowItWorks.ind.b2" /></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> <T k="HowItWorks.ind.b3" /></li>
                </ul>
              </div>

              <div className="rounded-3xl border-2 border-secondary/30 bg-secondary/5 p-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-4">
                  <T k="HowItWorks.comp.badge" />
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-secondary" />
                  <T k="HowItWorks.comp.title" />
                </h3>
                <p className="text-muted-foreground mb-4">
                  <T k="HowItWorks.comp.desc" />
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> <T k="HowItWorks.comp.b1" /></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> <T k="HowItWorks.comp.b2" /></li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> <T k="HowItWorks.comp.b3" /></li>
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
                <T k="HowItWorks.step3.title" />
              </h2>
              <p className="text-muted-foreground text-lg">
                <T k="HowItWorks.step3.sub" />
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
                    <T k="HowItWorks.tabs.ind.title" />
                  </h2>
                  <p className="text-muted-foreground">
                    <T k="HowItWorks.tabs.ind.sub" />
                  </p>
                </div>
                {stepTimeline({ steps: individualSteps, prefix: "HowItWorks.indSteps", accent: "primary" })}
              </TabsContent>

              <TabsContent value="company">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    <T k="HowItWorks.tabs.comp.title" />
                  </h2>
                  <p className="text-muted-foreground">
                    <T k="HowItWorks.tabs.comp.sub" />
                  </p>
                </div>
                {stepTimeline({ steps: companySteps, prefix: "HowItWorks.compSteps", accent: "secondary" })}
                <div className="mt-8 rounded-2xl bg-secondary/10 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
                  <p className="text-foreground font-medium"><T k="HowItWorks.portal.comp" /></p>
                  <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shrink-0">
                    <a href="https://association.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                      <T k="HowItWorks.portal.compBtn" />
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="queue">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    <T k="HowItWorks.tabs.queue.title" />
                  </h2>
                  <p className="text-muted-foreground">
                    <T k="HowItWorks.tabs.queue.sub" />
                  </p>
                </div>
                {stepTimeline({ steps: queueSteps, prefix: "HowItWorks.queueSteps", accent: "accent" })}
                <div className="mt-8 rounded-2xl bg-accent/10 p-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
                  <p className="text-foreground font-medium"><T k="HowItWorks.portal.queue" /></p>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shrink-0">
                    <a href="https://queue.dynamicsroute.tech/" target="_blank" rel="noopener noreferrer">
                      <T k="HowItWorks.portal.queueBtn" />
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="street">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    <T k="HowItWorks.tabs.street.title" />
                  </h2>
                  <p className="text-muted-foreground">
                    <T k="HowItWorks.tabs.street.sub" />
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
                      <h3 className="font-semibold text-foreground mb-2"><T k={`HowItWorks.streetSteps.${item.k}.title`} /></h3>
                      <p className="text-muted-foreground text-sm"><T k={`HowItWorks.streetSteps.${item.k}.desc`} /></p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-secondary/10 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-2"><T k="HowItWorks.streetUse.title" /></h4>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <T k="HowItWorks.streetUse.1" />
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <T k="HowItWorks.streetUse.2" />
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      <T k="HowItWorks.streetUse.3" />
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="call">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    <T k="HowItWorks.tabs.call.title" />
                  </h2>
                  <p className="text-muted-foreground">
                    <T k="HowItWorks.tabs.call.sub" />
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
                      <h3 className="font-semibold text-foreground mb-2"><T k={`HowItWorks.callSteps.${item.k}.title`} /></h3>
                      <p className="text-muted-foreground text-sm"><T k={`HowItWorks.callSteps.${item.k}.desc`} /></p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-primary text-primary-foreground rounded-xl p-8 text-center">
                  <Phone className="h-12 w-12 mx-auto mb-4 text-secondary" />
                  <h4 className="text-xl font-semibold mb-2"><T k="HowItWorks.callHelp.title" /></h4>
                  <p className="text-primary-foreground/80 mb-4">
                    <T k="HowItWorks.callHelp.sub" />
                  </p>
                  <p className="text-secondary font-semibold"><T k="HowItWorks.callHelp.cta" /></p>
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
                  <T k="HowItWorks.journey.title" />
                </h2>
                <p className="text-muted-foreground">
                  <T k="HowItWorks.journey.sub" />
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[NavIcon, Package, MapPin, TruckIcon, Star].map((Icon, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                    <div className="text-xs font-bold text-muted-foreground mb-2"><T k="HowItWorks.journey.stepWord" /> {i + 1}</div>
                    <Icon className="h-6 w-6 text-primary mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground"><T k={`HowItWorks.journey.steps.${i + 1}.label`} /></p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  <T k="HowItWorks.payment.title" />
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2"><T k="HowItWorks.payment.cod.title" /></h4>
                    <p className="text-sm text-muted-foreground"><T k="HowItWorks.payment.cod.desc" /></p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2"><T k="HowItWorks.payment.bank.title" /></h4>
                    <p className="text-sm text-muted-foreground"><T k="HowItWorks.payment.bank.desc" /></p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2"><T k="HowItWorks.payment.telebirr.title" /></h4>
                    <p className="text-sm text-muted-foreground"><T k="HowItWorks.payment.telebirr.desc" /></p>
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
              <T k="HowItWorks.cta.title" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              <T k="HowItWorks.cta.sub" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/download"><T k="HowItWorks.cta.download" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/for-shippers"><T k="HowItWorks.cta.post" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}