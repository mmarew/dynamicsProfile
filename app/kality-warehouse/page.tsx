import type { Metadata } from "next"
import { CorridorPage } from "@/components/corridors/corridor-page"
import { corridors } from "@/lib/corridors"
import { canonical } from "@/lib/seo"

const data = corridors.find((c) => c.slug === "/kality-warehouse")!

export const metadata: Metadata = {
  ...canonical('/kality-warehouse'),
  title: data.metaTitle,
  description: data.metaDescription,
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: "website",
    locale: "en_US",
    siteName: "DTC - Dynamics Transport Commission",
  },
}

export default function KalityWarehousePage() {
  return <CorridorPage data={data} />
}
