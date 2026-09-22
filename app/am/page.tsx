import type { Metadata } from "next"
import Link from "next/link"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  ...canonical('/am'),
  title: "የጭነት ማጓጓዣ ገበያ ኢትዮጵያ | Dynamics Transport Commission | በነጻ",
  description:
    "የኢትዮጵያ የመጀመሪያው የጭነት ማጓጓዣ ገበያ። ጭነትዎን በነጻ ይለጥፉ፣ የተረጋገጡ አሽከርካሪዎችን ዋጋ ያወዳድሩ፣ ጭነትዎ በሚደርስበት ቀን ብቻ ይክፈሉ። ለጅምር ሙሉ በሙሉ ነጻ።",
  alternates: {
    languages: {
      "en-US": "https://dynamicsroute.tech",
      "am-ET": "https://dynamicsroute.tech/am",
    },
  },
  openGraph: {
    title: "የጭነት ማጓጓዣ ገበያ ኢትዮጵያ | DTC",
    description:
      "ጭነትን በነጻ ይለጥፉ፣ የተረጋገጡ አሽከርካሪዎችን ተመን ያወዳድሩ እና በአስተማማኝ ሁኔታ ያጓጓዙ። ለጅምር ነጻ ነው።",
    type: "website",
    locale: "am_ET",
    siteName: "DTC - Dynamics Transport Commission",
  },
}

const steps = [
  {
    step: "01",
    title: "ጭነትዎን ይለጥፉ",
    text: "መነሻ፣ መድረሻ፣ የጭነት ክብደት እና የሚፈለገውን መኪና ይግለጹ። ከ2 ደቂቃ በታች ይወስዳል።",
  },
  {
    step: "02",
    title: "ተመኖችን ያወዳድሩ",
    text: "የተረጋገጡ አሽከርካሪዎች ጭነትዎ ላይ ተመናቸውን ያቀርባሉ። መልካሙን ይምረጡ።",
  },
  {
    step: "03",
    title: "ጭነትዎ ሲደርስ ይክፈሉ",
    text: "ክፍያ የሚከፈለው ጭነቱ በደህንነት ሲደርስ ብቻ ነው። ጭነትዎን ከመነሻ እስከ መድረሻ ይከታተሉ።",
  },
]

export default function AmharicHomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-foreground/10" />
          <div className="relative container mx-auto px-4 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                ለጅምር ሙሉ በሙሉ ነጻ — ምንም ኮሚሽን የለም
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                የኢትዮጵያ የጭነት ማጓጓዣ ገበያ
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-2xl">
                በኢትዮጵያ እና ጅቡቲ ውስጥ ጭነት ለሚለጥፉ ሰዎች እና ለአሽከርካሪዎች — ጭነትዎን በነጻ ይለጥፉ፣ ተመኖችን ያወዳድሩ፣ ጭነትዎ ሲደርስ ብቻ ይክፈሉ።
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/for-shippers">
                    ጭነት ይለጥፉ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/for-drivers">አሽከርካሪ በመሆን ይመዝገቡ</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12" style={{ fontFamily: 'var(--font-display)' }}>
              እንዴት ይሰራል?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.step} className="bg-card border border-border rounded-2xl p-8">
                  <div className="text-accent font-bold text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>{s.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-accent-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              ዛሬ ይጀምሩ — ሙሉ በሙሉ ነጻ
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              ለጅምር ፕሮግራሙ ምንም ክፍያ ወይም ኮሚሽን የለም። ማንኛውም የሚደረግ ለውጥ ከመደረጉ በፊት ይገለጻል።
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/download">አፕሊኬሽኑን ያውርዱ</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}