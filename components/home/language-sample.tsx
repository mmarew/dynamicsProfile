"use client";

import { useEffect, useState } from "react";
import { getSavedLanguage, changeLanguage, type LangCode } from "@/lib/i18n";
import En from "@/lib/locales/En.json";
import Am from "@/lib/locales/Am.json";
import { cn } from "@/lib/utils";

const dicts = { en: En, am: Am } as const;

const SENTENCES: Array<[section: string, key: string]> = [
  ["Hero", "title"],
  ["Hero", "subtitle"],
  ["StatsBar", "title"],
  ["QueueAssociations", "title"],
  ["QueueAssociations", "description"],
];

const pick = (dict: Record<string, any>, section: string, key: string) =>
  dict[section]?.[key] ?? "";

export function LanguageSample() {
  const [lang, setLang] = useState<LangCode>(() => getSavedLanguage() ?? "en");

  useEffect(() => {
    const onStorage = () => setLang(getSavedLanguage() ?? "en");
    window.addEventListener("storage", onStorage);
    window.addEventListener("dtc:lang-change", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("dtc:lang-change", onStorage);
    };
  }, []);

  const dict = dicts[lang];

  return (
    <section
      aria-labelledby="lang-sample-title"
      className="border-t border-border bg-card/40"
    >
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2
              id="lang-sample-title"
              className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4"
            >
              {lang === "am"
                ? "የቋንቋ ናሙና — 5 ዓረፍተ ነገር"
                : "Language sample — 5 sentences"}
            </h2>
            <ul className="space-y-3">
              {SENTENCES.map(([section, key]) => (
                <li
                  key={`${section}.${key}`}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {pick(dict, section, key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RN Languages toggle — in-place swap, persisted, default EN */}
          <div
            className="inline-flex items-center rounded-full border border-border bg-card p-0.5 shrink-0"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => changeLanguage("am")}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                lang === "am"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              አማ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LanguageSample;
