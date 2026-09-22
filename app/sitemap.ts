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
  "/blog/addis-djibouti-shipping-guide-2026",
  "/google-business-profile",
  "/directory-listings",
]

const amRoutes = [
  "/am",
  "/am/for-shippers",
  "/am/for-drivers",
  "/am/for-queue-orgs",
  "/am/addis-to-djibouti",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...amRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" || route === "/am" ? "weekly" : "monthly",
    priority:
      route === "/" || route === "/addis-to-djibouti" || route === "/am"
        ? 1
        : route === "/download"
          ? 0.9
          : 0.7,
  }))
}