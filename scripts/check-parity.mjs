#!/usr/bin/env node
/** En.json <-> Am.json key-parity gate.
 *  Build-blocker: any divergence means a string would silently render in the
 *  wrong language under the Amharic toggle, so the build must stop. */
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const load = (name) => JSON.parse(readFileSync(join(root, "lib/locales", name), "utf8"))

const leaves = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key
    return value !== null && typeof value === "object" ? leaves(value, path) : [path]
  })

const en = load("En.json")
const am = load("Am.json")
const enPaths = new Set(leaves(en))
const amPaths = new Set(leaves(am))

const missingInAm = [...enPaths].filter((p) => !amPaths.has(p))
const missingInEn = [...amPaths].filter((p) => !enPaths.has(p))

const valueAt = (obj, path) => path.split(".").reduce((a, k) => (a == null ? a : a[k]), obj)
const emptyInEn = [...enPaths].filter((p) => !String(valueAt(en, p) ?? "").trim())
const emptyInAm = [...amPaths].filter((p) => !String(valueAt(am, p) ?? "").trim())

const fail = (label, list) => {
  if (!list.length) return false
  console.error(`\n✗ i18n parity: ${label} (${list.length})`)
  list.forEach((p) => console.error(`    - ${p}`))
  return true
}

let broken = false
broken = fail("keys present in En.json but missing in Am.json", missingInAm) || broken
broken = fail("keys present in Am.json but missing in En.json", missingInEn) || broken
broken = fail("empty values in En.json", emptyInEn) || broken
broken = fail("empty values in Am.json", emptyInAm) || broken

if (broken) {
  console.error("\nFix lib/locales/En.json and lib/locales/Am.json so every key exists in both.\n")
  process.exit(1)
}

console.log(`✓ i18n parity: ${enPaths.size} keys match across En.json and Am.json`)
