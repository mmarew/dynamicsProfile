/* Dictionary access shared by server + client.
 * Keys are JSON leaves (En.json/Am.json). Use t()/tTree0 for server components,
 * <T k="Section.key" /> for client SSR-safe rendering. */
import En from "@/lib/locales/En.json"
import Am from "@/lib/locales/Am.json"

export type Lang = "en" | "am"

const D: Record<Lang, Record<string, unknown>> = { en: En, am: Am }

export const DEFAULT_LANG: Lang = "en"

export type DictPath = string

const leaf = (o: Record<string, unknown>, p: string): unknown =>
  p.split(".").reduce((acc: unknown, k: string) => {
    if (acc && typeof acc === "object" && k in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[k]
    }
    return undefined
  }, o)

/** Shallow reader with EN fallback so AM never renders a hole. */
export function t<T extends string = string>(lang: Lang, path: DictPath): T {
  const v = leaf(D[lang], path)
  if (typeof v === "string") return v as T
  const fb = leaf(D.en, path)
  return (typeof fb === "string" ? fb : path) as T
}

/** Plain object reader (no SSR primitive) — use inside components, not SSR JSX. */
export function tRaw(lang: Lang, path: DictPath): string {
  return t(lang, path)
}
