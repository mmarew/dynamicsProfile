import En from "@/lib/locales/En.json"
import Am from "@/lib/locales/Am.json"

/** Dictionary layer ported from Driver_load_now's Locales/En.json + Am.json.
 *  Deliberately NOT "use client" so both server and client components can read it.
 *  Key parity between the two files is enforced by `npm run check:parity`. */
export const DICTS = { en: En, am: Am } as const

export type DictLang = keyof typeof DICTS

/** Dot-path lookup, e.g. t("am", "QueueAssociations.features.fifo.title") */
export function t(lang: DictLang, path: string): string {
  const node: any = path.split(".").reduce<any>(
    (acc, key) => (acc == null ? undefined : acc[key]),
    DICTS[lang] ?? DICTS.en,
  )
  if (typeof node === "string") return node
  // Missing translation falls back to English rather than rendering blank.
  const fallback: any = path.split(".").reduce<any>(
    (acc, key) => (acc == null ? undefined : acc[key]),
    DICTS.en,
  )
  return typeof fallback === "string" ? fallback : path
}
