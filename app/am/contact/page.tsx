import type { Metadata } from "next"
import { canonical } from "@/lib/seo"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  ...canonical("/am/contact"),
  title: "አግኙን | የደንበኛ ድጋፍ 24/7 | DTC",
  description:
    "ከ DTC ጋር ይገናኙ — ለማንኛውም ጥያቄ፣ የተመን መረጃ፣ ወይም የጭነት እርዳታ። ደውለን ወይም ስልክ ያግኙን።",
  openGraph: {
    title: "አግኙን | DTC",
    description: "ጥያቄዎችዎን ይጠይቁ — የደንበኛ ድጋፍ 24/7።",
    type: "website",
    locale: "am_ET",
    siteName: "DTC - Dynamics Transport Commission",
  },
}

const contactChannels = [
  { icon: Phone, title: "ስልክ", value: "+251 983 222 221", note: "24/7" },
  { icon: Mail, title: "ኢሜይል", value: "hello@dynamicsroute.tech", note: "በ24 ሰዓት ውስጥ መልስ" },
  { icon: Clock, title: "መስሪያ ቤት", value: "አዲስ አበባ፣ ኢትዮጵያ", note: "ከሰዓት በኋላ በመስመር ላይ" },
  { icon: MessageSquare, title: "Telegram", value: "@DTC_Support", note: "ፈጣን መልስ" },
]

export default function AmharicContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                አግኙን
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ጥያቄዎችዎ ካሉ — ስለ ጭነት ማጓጓዝ፣ ተመኖች፣ ወይም ሌላ ነገር — እኛ በ24/7 እንገኛለን።
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 grid gap-10 lg:grid-cols-2">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                መልዕክት ይላኩልን
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground" htmlFor="am-name">ስምዎ</label>
                  <Input id="am-name" placeholder="ሙሉ ስም" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground" htmlFor="am-phone">ስልክ</label>
                  <Input id="am-phone" type="tel" placeholder="+251 ..." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-foreground" htmlFor="am-message">መልዕክትዎ</label>
                  <Textarea id="am-message" rows={5} placeholder="እርዳታ የሚፈልጉትን ይጻፉ..." />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  መልዕክት ይላኩ
                </Button>
              </form>
            </div>

            {/* Contact channels */}
            <div className="flex flex-col gap-4">
              {contactChannels.map((item) => (
                <div key={item.title} className="flex gap-4 bg-card border border-border rounded-2xl p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-0.5">{item.title}</div>
                    <div className="text-primary font-medium mb-1">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
