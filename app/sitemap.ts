import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/seo"

const routes = [
  "/",
  "/about",
  "/contact",
  "/download",
  "/faq",
  "/for-drivers",
  "/for-shippers",
  "/for-queue-orgs",
  "/for-associations",
  "/how-it-works",
  "/pricing",
  "/safety",
  "/services",
  "/addis-to-djibouti",
  "/addis-to-adama",
  "/dire-dawa-to-djibouti",
  "/modjo-dry-port",
  "/kality-warehouse",
  "/addis-to-hawassa",
  "/container-transport",
  "/blog",
  "/blog/addis-to-djibouti-shipping-guide-2026",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/" || route === "/addis-to-djibouti"
        ? 1
        : route === "/download"
          ? 0.9
          : 0.7,
  }))
}