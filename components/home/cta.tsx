import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { T } from "@/components/i18n/text"

export function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            <T k="CtaBanner.title" />
          </h2>
          <T
            k="CtaBanner.description"
            as="p"
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 px-8">
              <Link href="/for-shippers">
                <T k="CtaBanner.ctaPrimary" />
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/for-drivers">
                <T k="CtaBanner.ctaSecondary" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span><T k="CtaBanner.phoneNote" /></span>
          </div>
        </div>
      </div>
    </section>
  )
}
