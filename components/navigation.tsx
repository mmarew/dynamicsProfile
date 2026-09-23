"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
Menu } from "lucide-react";
import { cn } from "@/lib/utils"
import { changeLanguage, getSavedLanguage, type LangCode } from "@/lib/i18n";
import { T } from "@/components/i18n/text";



const navigation = {
  main: [
    { key: "about", href: "/about" },
    { key: "howItWorks", href: "/how-it-works" },
    { key: "services", href: "/services" },
  ],
  platform: [
    {
      key: "shippers",
      href: "/for-shippers",
      name: "For Shippers",
      description: "Post shipments and get competitive bids",
    },
    {
      key: "drivers",
      href: "/for-drivers",
      name: "For Drivers",
      description: "Find loads and grow your business",
    },
    {
      key: "queueOrgs",
      href: "/for-queue-orgs",
      name: "For Queue Orgs",
      description: "Digitize your loading queue with FIFO dispatch",
    },
    {
      key: "associations",
      href: "/for-associations",
      name: "For Associations",
      description: "Fleet bidding and driver assignment portal",
    },
    {
      key: "pricing",
      href: "/pricing",
      name: "Pricing",
      description: "Transparent pricing and subscription plans",
    },
  ],
  resources: [
    { key: "safety", href: "/safety" },
    { key: "faq", href: "/faq" },
    { key: "contact", href: "/contact" },
  ],
};

const desktopLinkClass = (active: boolean) =>
  cn(
    "group relative inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none",
    active
      ? "text-foreground after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-primary"
      : "text-muted-foreground hover:text-foreground",
  );

const mobileLinkClass = (active: boolean) =>
  cn(
    "text-lg font-medium transition-colors hover:text-primary",
    active
      ? "text-primary underline decoration-primary decoration-2 underline-offset-8"
      : "text-foreground",
  );

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [langState, setLangState] = useState<LangCode>("en");
  useEffect(() => {
    const onLangChange = () => setLangState(getSavedLanguage() ?? "en");
    window.addEventListener("dtc:lang-change", onLangChange);
    return () => window.removeEventListener("dtc:lang-change", onLangChange);
  }, []);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const activePlatform = navigation.platform.some((item) => isActive(item.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-primary">
            <Image
              src="/app-icon-driver.png"
              alt="DTC logo"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
          <span
            className="text-xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DTC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            {navigation.main.map((item) => (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuLink asChild active={isActive(item.href)}>
                  <Link
                    href={item.href}
                    className={desktopLinkClass(isActive(item.href))}
                  >
                    <T k={`Nav.main.${item.key}`} />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                data-active={activePlatform || undefined}
                className={cn(
                  "relative",
                  activePlatform &&
                    "after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:rounded-full after:bg-primary",
                )}
              >
                <T k="Nav.platform" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {navigation.platform.map((item) => (
                    <li key={item.key}>
                      <NavigationMenuLink asChild active={isActive(item.href)}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            <T k={`Nav.links.${item.key}.name`} />
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            <T k={`Nav.links.${item.key}.desc`} />
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navigation.resources.map((item) => (
              <NavigationMenuItem key={item.key}>
                <NavigationMenuLink asChild active={isActive(item.href)}>
                  <Link
                    href={item.href}
                    className={desktopLinkClass(isActive(item.href))}
                  >
                    <T k={`Nav.resources.${item.key}`} />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language toggle — EN ↔ AM (in-place dictionary swap, persisted, no /am URL) */}
          <div className="inline-flex items-center rounded-full border border-border bg-card p-0.5">
            {[
              { code: "en" as LangCode, label: "EN" },
              { code: "am" as LangCode, label: "አማ" },
            ].map((lang) => {
              const isCurrent = lang.code === "en" ? langState === "en" : langState === "am"
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  aria-pressed={isCurrent}
                  aria-label={`Switch language to ${lang.code}`}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                    isCurrent
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {lang.label}
                </button>
              )
            })}
          </div>

          <Button variant="ghost" asChild>
            <Link href="/download"><T k="Nav.cta.download" /></Link>
          </Button>
          <Button
            asChild
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <Link href="/for-shippers"><T k="Nav.cta.ship" /></Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only"><T k="Nav.mobile.toggleMenu" /></span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only"><T k="Nav.mobile.navMenu" /></SheetTitle>
            <nav className="flex flex-col gap-4 mt-8 pl-2.5">
              {navigation.main.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass(isActive(item.href))}
                >
                  <T k={`Nav.main.${item.key}`} />
                </Link>
              ))}
              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground mb-2"><T k="Nav.platform" /></p>
                {navigation.platform.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn("block py-2 text-lg font-medium transition-colors hover:text-primary", isActive(item.href) ? "text-primary underline decoration-primary decoration-2 underline-offset-8" : "text-foreground")}
                  >
                    <T k={`Nav.links.${item.key}.name`} />
                  </Link>
                ))}
              </div>
              <div className="border-t pt-4">
                {navigation.resources.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn("block py-2 text-lg font-medium transition-colors hover:text-primary", isActive(item.href) ? "text-primary underline decoration-primary decoration-2 underline-offset-8" : "text-foreground")}
                  >
                    <T k={`Nav.resources.${item.key}`} />
                  </Link>
                ))}
              </div>
              <div className="border-t pt-4 flex flex-col gap-3">
                <Button
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <Link href="/for-shippers" onClick={() => setOpen(false)}>
                    <T k="Nav.cta.ship" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/for-drivers" onClick={() => setOpen(false)}>
                    <T k="Nav.cta.drive" />
                  </Link>
                </Button>
                {/* Language toggle — mobile */}
                <div className="mt-1 flex w-full items-center justify-between rounded-full border border-border bg-card p-1">
                  {[
                    { code: "en" as LangCode, label: "English (EN)" },
                    { code: "am" as LangCode, label: "አማርኛ (አማ)" },
                  ].map((lang) => {
                    const isCurrent = langState === lang.code
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          changeLanguage(lang.code)
                          setLangState(lang.code)
                          setOpen(false)
                        }}
                        aria-pressed={isCurrent}
                        className={cn(
                          "flex-1 rounded-full px-3 py-1.5 text-xs font-semibold text-center transition-colors",
                          isCurrent
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {lang.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
