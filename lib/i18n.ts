"use client"

/** Web port of Driver_load_now's saved-language i18n pattern:
 *  RN: AsyncStorage.getSavedLanguage → changeLanguage → persist.
 *  Web: localStorage + <html lang> + a storage-persisted LanguageProvider toggle.
 */

const LANGUAGE_KEY = "dtc:language"
export const LANGUAGE_CHANGED_EVENT = "dtc:lang-change"
export const DEFAULT_LOCALE = "en"

export type LangCode = "en" | "am"

export const LOCALES = [
  { code: "en" as const, label: "English / እንግሊዝኛ", short: "EN", hrefLang: "en" },
  { code: "am" as const, label: "አማርኛ (Amharic)", short: "አማ", hrefLang: "am" },
]

const hasAm = (pathname: string) => pathname.startsWith("/am")

/** RN getSavedLanguage → web localStorage (no crash in private mode) */
export function getSavedLanguage(): LangCode | null {
  if (typeof window === "undefined") return null
  try {
    const v = window.localStorage.getItem(LANGUAGE_KEY)
    return v === "am" ? "am" : v === "en" ? "en" : null
  } catch {
    return null
  }
}

/** RN changeLanguage(lang) → persist for next visit */
export function changeLanguage(lang: LangCode): void {
  if (typeof window === "undefined") return
  try {
    if (lang === DEFAULT_LOCALE) window.localStorage.removeItem(LANGUAGE_KEY)
    else window.localStorage.setItem(LANGUAGE_KEY, lang)
  } catch {
    /* private mode — ignore */
  }
  document.documentElement.lang = lang === "am" ? "am" : "en"
  window.dispatchEvent(new Event(LANGUAGE_CHANGED_EVENT))
}

/** i18n-aware href twin per RN hrefLang pattern (fallback to locale home, never 404) */
export function localizedHref(pathname: string, lang: LangCode): string {
  if (lang === DEFAULT_LOCALE)
    return hasAm(pathname) ? pathname.replace(/^\/am(\/|$)/, "/$1").replace(/^\/$/, "/") : pathname
  // am: twin if the path is in the AM set, else locale home
  const en = hasAm(pathname) ? pathname.replace(/^\/am(\/|$)/, "/$1").replace(/^\/$/, "/") : pathname
  const am = en === "/" ? "/am" : `/am${en}`
  if (pathname.startsWith("/am")) return pathname
  return am
}
