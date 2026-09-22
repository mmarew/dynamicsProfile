import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { VehicleFleet } from "@/components/home/vehicle-fleet"
import { QueueAssociations } from "@/components/home/queue-associations"
import { LanguageSample } from "@/components/home/language-sample"
import { CoverageMap } from "@/components/home/coverage-map"
import { Benefits } from "@/components/home/benefits"
import { TrustSafety } from "@/components/home/trust-safety"
import { DownloadApp } from "@/components/home/download-app"
import { CTA } from "@/components/home/cta"
import { JsonLd } from "@/components/seo/json-ld"
import { localBusinessJsonLd } from "@/lib/seo"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <LanguageSample />
        <HowItWorks />
        <VehicleFleet />
        <QueueAssociations />
        <CoverageMap />
        <Benefits />
        <TrustSafety />
        <DownloadApp />
        <CTA />
      </main>
      <Footer />
      <JsonLd data={localBusinessJsonLd()} />
    </div>
  )
}
