import type { Metadata } from "next"
import { CorridorPage } from "@/components/corridors/corridor-page"
import { corridors } from "@/lib/corridors"
import { canonical } from "@/lib/seo"

const data = corridors.find((c) => c.slug === "/addis-to-djibouti")!

export const metadata: Metadata = {
  ...canonical('/addis-to-djibouti'),
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

export default function AddisToDjiboutiPage() {
  return <CorridorPage data={data} />
}