"use client";

import { Plant } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/ui/link";

const navLinks = [
  { label: "Features", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
];

export function Header() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
      <AppLink href="/" className="flex items-center gap-2">
        <Plant className="h-6 w-6 text-indigo-500" weight="fill" />
        <span className="text-lg font-semibold tracking-tight">Mindful</span>
      </AppLink>

      <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        {navLinks.map((link) => (
          <AppLink key={link.label} href={link.href}>
            {link.label}
          </AppLink>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <AppLink href="#" className="hidden sm:block">
          Log in
        </AppLink>
        <Button>Get started</Button>
      </div>
    </nav>
  );
}