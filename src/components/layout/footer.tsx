"use client";

import { Plant, InstagramLogo, XLogo, Leaf } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";

const productLinks = [
  { label: "Features", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Pricing", href: "#" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "Guides", href: "#" },
  { label: "Help center", href: "#" },
];

const companyLinks = [
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-12 bg-white">
      <Separator />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-5">
        <div className="space-y-6 md:col-span-2">
          <AppLink href="/" className="flex items-center gap-2">
            <Plant className="h-6 w-6 text-indigo-500" weight="fill" />
            <span className="text-xl font-semibold tracking-tight">Mindful</span>
          </AppLink>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A gentle space for your mind and your everyday.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" aria-label="Instagram">
              <InstagramLogo size={18} />
            </Button>
            <Button variant="outline" size="icon" aria-label="X">
              <XLogo size={18} />
            </Button>
            <Button variant="outline" size="icon" aria-label="Leaf">
              <Leaf size={18} />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-semibold">Product</h4>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            {productLinks.map((link) => (
              <AppLink key={link.label} href={link.href}>
                {link.label}
              </AppLink>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-semibold">Resources</h4>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            {resourceLinks.map((link) => (
              <AppLink key={link.label} href={link.href}>
                {link.label}
              </AppLink>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-sm font-semibold">Company</h4>
          <div className="mb-8 flex flex-col gap-4 text-sm text-muted-foreground">
            {companyLinks.map((link) => (
              <AppLink key={link.label} href={link.href}>
                {link.label}
              </AppLink>
            ))}
          </div>

          <div className="hidden border-t pt-4 md:block">
            <p className="mb-2 text-sm font-medium text-indigo-500">
              Start your journey
            </p>
            <p className="mb-4 text-xs text-muted-foreground">
              It&apos;s free to begin.
            </p>
            <Button variant="secondary" className="w-full">
              Get started
            </Button>
          </div>
        </div>
      </div>

      <Separator />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-8 sm:flex-row">
        <p className="relative z-10 text-xs text-muted-foreground">
          © 2024 Mindful. All rights reserved.
          <span className="mx-2 hidden sm:inline">|</span>
          <span className="mt-2 block space-x-4 sm:mt-0 sm:inline">
            <AppLink href="#">Privacy</AppLink>
            <AppLink href="#">Terms</AppLink>
          </span>
        </p>
        <div className="pointer-events-none absolute right-0 bottom-0 text-indigo-500/10">
          <Plant
            weight="thin"
            size={160}
            className="translate-x-12 translate-y-12 rotate-[-15deg]"
          />
        </div>
      </div>
    </footer>
  );
}