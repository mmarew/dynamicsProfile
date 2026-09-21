"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Services", href: "/services" },
  ],
  platform: [
    {
      name: "For Shippers",
      href: "/for-shippers",
      description: "Post shipments and get competitive bids",
    },
    {
      name: "For Drivers",
      href: "/for-drivers",
      description: "Find loads and grow your business",
    },
    {
      name: "Pricing",
      href: "/pricing",
      description: "Transparent pricing and subscription plans",
    },
  ],
  resources: [
    { name: "Safety", href: "/safety" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
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
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigation.main.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild active={isActive(item.href)}>
                  <Link
                    href={item.href}
                    className={desktopLinkClass(isActive(item.href))}
                  >
                    {item.name}
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
                Platform
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {navigation.platform.map((item) => (
                    <li key={item.name}>
                      <NavigationMenuLink asChild active={isActive(item.href)}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground",
                          )}
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.name}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navigation.resources.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink asChild active={isActive(item.href)}>
                  <Link
                    href={item.href}
                    className={desktopLinkClass(isActive(item.href))}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/download">Download App</Link>
          </Button>
          <Button
            asChild
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <Link href="/for-shippers">Ship Your Cargo</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass(isActive(item.href))}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground mb-2">Platform</p>
                {navigation.platform.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn("block py-2 text-lg font-medium transition-colors hover:text-primary", isActive(item.href) ? "text-primary underline decoration-primary decoration-2 underline-offset-8" : "text-foreground")}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t pt-4">
                {navigation.resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn("block py-2 text-lg font-medium transition-colors hover:text-primary", isActive(item.href) ? "text-primary underline decoration-primary decoration-2 underline-offset-8" : "text-foreground")}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t pt-4 flex flex-col gap-3">
                <Button
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <Link href="/for-shippers" onClick={() => setOpen(false)}>
                    Ship Your Cargo
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/for-drivers" onClick={() => setOpen(false)}>
                    Drive With Us
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
