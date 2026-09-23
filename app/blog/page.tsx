import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { T } from "@/components/i18n/text"
import { BookOpen, Clock, Tag } from "lucide-react"

const posts = [
  {
    slug: "addis-to-djibouti-shipping-guide-2026",
    k: "post1",
    date: "2026-01-15",
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
                <BookOpen className="h-4 w-4" /> <T k="Blog.badge" />
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5" style={{ fontFamily: 'var(--font-display)' }}>
                <T k="Blog.title" />
              </h1>
              <p className="text-xl text-muted-foreground">
                <T k="Blog.sub" />
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
                      <Tag className="h-3.5 w-3.5" /> <T k={`Blog.${post.k}.category`} />
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> <T k={`Blog.${post.k}.readTime`} />
                    </span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                    <T k={`Blog.${post.k}.title`} />
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4"><T k={`Blog.${post.k}.excerpt`} /></p>
                  <span className="text-primary font-medium"><T k="Blog.read" /></span>
                </Link>
              </article>
            ))}
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-3xl mt-16">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-xl font-semibold mb-2"><T k="Blog.updates.title" /></h2>
              <p className="text-sm text-muted-foreground mb-4"><T k="Blog.updates.sub" /></p>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="you@example.com" className="flex-1" aria-label="Email" />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground"><T k="Blog.updates.subscribe" /></Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
