"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LanguageLink {
  code: string
  label: string
  short: string
  href: string
  isCurrent: boolean
}

const DEFAULT_LOCALE = "en"
const LOCALES = [
  { code: "en", label: "English", short: "EN", prefix: "" },
  { code: "am", label: "አማርኛ", short: "አማ", prefix: "/am" },
]

function toLocalizedHref(pathname: string, prefix: string): string {
  if (pathname === "/am") return prefix === "" ? "/" : "/am"
  if (pathname.startsWith("/am")) {
    const rest = pathname.replace(/^\/am(?=\/|$)/, "")
    return prefix === "" ? rest || "/" : `${prefix}${rest}`
  }
  return prefix === "" ? pathname : prefix === "/am" && pathname === "/" ? "/am" : `${prefix}${pathname}`
}

export function LanguageToggle({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/"

  const languages: LanguageLink[] = LOCALES.map((l) => {
    const isCurrent =
      l.prefix === "" ? !pathname.startsWith("/am") : pathname === "/am" || pathname.startsWith("/am/")
    return {
      code: l.code,
      label: l.label,
      short: l.short,
      href: toLocalizedHref(pathname, l.prefix),
      isCurrent,
    }
  })

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      <span className="mr-1 hidden xl:inline-flex text-muted-foreground" aria-hidden>
        <Languages className="h-4 w-4" />
      </span>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          asChild
          className={cn(
            "h-8 px-2.5 text-sm font-semibold",
            lang.isCurrent ? "text-primary bg-primary/10 hover:bg-primary/10" : "text-muted-foreground hover:text-foreground",
          )}
          aria-label={`Switch to ${lang.label}`}
          aria-current={lang.isCurrent ? "true" : undefined}
        >
          <Link href={lang.href} lang={lang.code} hrefLang={lang.code}>
            {lang.short}
          </Link>
        </Button>
      ))}
    </div>
  )
}

export { DEFAULT_LOCALE, LOCALES }
