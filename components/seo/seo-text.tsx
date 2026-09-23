import React from "react"

/**
 * Hardcoded English SEO copy that stays in the SSR HTML for crawlers but is
 * visually hidden (sr-only clip) so it never disturbs the EN⇄AM language toggle.
 *
 * - NOT display:none — that reads as hidden-text spam to Google.
 * - sr-only = position:absolute; clip-path — parsed as normal content, also
 *   exposed to screen readers.
 *
 * Usage: <SeoText tag="h2">Transporting cargo from Addis Ababa to Djibouti with
 * live GPS tracking and FIFO truck queue management.</SeoText>
 *
 * Place directly as a sibling of the visible section you are describing.
 */

type SeoTextProps = {
  tag?: "h1" | "h2" | "h3" | "p"
  className?: string
  children: React.ReactNode
}

export function SeoText({ tag = "h2", className = "", children }: SeoTextProps) {
  const Tag = tag as keyof React.JSX.IntrinsicElements
  return (
    <Tag className={`sr-only ${className}`} aria-hidden="false">
      {children}
    </Tag>
  )
}