import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"

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
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/download" ? 0.9 : 0.7,
  }))
}