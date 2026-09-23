import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { HowItWorks } from "@/components/home/how-it-works"
import { VehicleFleet } from "@/components/home/vehicle-fleet"
import { QueueAssociations } from "@/components/home/queue-associations"
import { CoverageMap } from "@/components/home/coverage-map"
import { Benefits } from "@/components/home/benefits"
import { TrustSafety } from "@/components/home/trust-safety"
import { DownloadApp } from "@/components/home/download-app"
import { CTA } from "@/components/home/cta"
import { JsonLd } from "@/components/seo/json-ld"
import { SeoText } from "@/components/seo/seo-text"
import { localBusinessJsonLd } from "@/lib/seo"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <SeoText tag="h2">
          Transport and Logistics Company in Ethiopia and Djibouti — DTC freight marketplace for
          cargo trucking, container shipping, GPS tracking, and FIFO loading queue management
        </SeoText>
        <SeoText tag="p">
          A digital transport cargo marketplace connecting verified truck drivers with shippers in
          Addis Ababa, Modjo, Adama, Dire Dawa, Hawassa, and Djibouti. Move goods, move fast, move smart.
        </SeoText>
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
