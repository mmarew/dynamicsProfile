import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Clock, Tag } from "lucide-react"

const posts = [
  {
    slug: "addis-to-djibouti-shipping-guide-2026",
    title: "How to Ship Cargo from Addis Ababa to Djibouti (2026 Guide)",
    excerpt:
      "The complete 2026 guide to the Addis Ababa–Djibouti corridor, the route carrying ~95% of Ethiopia's trade. Documentation, truck types, transit times, and haulage costs.",
    date: "2026-01-15",
    category: "Route Guide",
    readTime: "9 min read",
  },
]

export const metadata: Metadata = {
  ...canonical('/blog'),
  title: "Freight & Shipping Blog Ethiopia & Djibouti | Guides & Rates | DTC",
  description:
    "Practical route guides, trucking costs, customs tips, and corridor guides for Ethiopian shippers and drivers. New posts weekly.",
}

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "DTC Freight Blog",
    description:
      "Route guides, trucking costs, customs tips, and container shipping advice for Ethiopia and Djibouti.",
    url: "https://dynamicsroute.tech/blog",
    publisher: {
      "@type": "Organization",
      name: "DTC - Dynamics Transport Commission",
      url: "https://dynamicsroute.tech",
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <BookOpen className="h-4 w-4" /> Freight Guides &amp; Rates
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                Freight &amp; Shipping Blog
              </h1>
              <p className="text-xl text-muted-foreground">
                Practical route guides, cost breakdowns, and customs tips written for Ethiopian shippers and drivers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block pb-10">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Tag className="h-3.5 w-3.5" /> {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-primary font-medium">Read the full guide →</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-3xl mt-16">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-2">Route &amp; Rates Updates</h2>
              <p className="text-sm text-muted-foreground mb-4">Get new route guides in your inbox weekly. Unsubscribe anytime.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="you@example.com" className="flex-1" aria-label="Email" />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
