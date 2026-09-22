"use client"

import { useEffect, useState, type ElementType } from "react"
import {
  getSavedLanguage,
  LANGUAGE_CHANGED_EVENT,
  DEFAULT_LOCALE,
  type LangCode,
} from "@/lib/i18n"
import { t } from "@/lib/dict"

/** Current UI language. Initialises to DEFAULT_LOCALE so the first client render
 *  matches the server-rendered HTML (no hydration mismatch), then syncs to the
 *  persisted choice and to every subsequent toggle — same tab or another tab. */
export function useLang(): LangCode {
  const [lang, setLang] = useState<LangCode>(DEFAULT_LOCALE)

  useEffect(() => {
    const sync = () => setLang(getSavedLanguage() ?? DEFAULT_LOCALE)
    sync()
    window.addEventListener(LANGUAGE_CHANGED_EVENT, sync)
    window.addEventListener("storage", sync)
    return () => {
      window.removeEventListener(LANGUAGE_CHANGED_EVENT, sync)
      window.removeEventListener("storage", sync)
    }
  }, [])

  return lang
}

type TProps = {
  /** Dot-path into En.json / Am.json, e.g. "Hero.title" */
  k: string
  /** Element to render as. Defaults to <span> so it is safe inline. */
  as?: ElementType
  className?: string
}

/** Renders one translated string, swapping in place when the language toggle fires. */
export function T({ k, as, className }: TProps) {
  const lang = useLang()
  const Tag = (as ?? "span") as ElementType
  return <Tag className={className}>{t(lang, k)}</Tag>
}
