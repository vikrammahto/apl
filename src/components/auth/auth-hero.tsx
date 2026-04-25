"use client";

import { Plant, Heart } from "@phosphor-icons/react";
import { AppLink } from "@/components/ui/link";

export function AuthHero() {
  return (
    <div className="relative hidden w-5/12 flex-col justify-between overflow-hidden bg-gradient-to-br from-[#EEF2FC] to-[#FDFEFE] p-12 lg:flex">
      <AppLink href="/" className="relative z-10 flex w-fit items-center gap-2">
        <Plant className="h-6 w-6 text-indigo-500" weight="fill" />
        <span className="text-lg font-semibold tracking-tight">Mindful</span>
      </AppLink>

      <div className="relative z-10 max-w-md space-y-6 lg:mb-20 xl:mb-32">
        <h1 className="text-[2.75rem] font-bold leading-[1.15] tracking-tight xl:text-5xl">
          Welcome back. <br />
          Let&apos;s take it{" "}
          <span className="text-indigo-500">one step</span> <br />
          at a time.
        </h1>
        <div className="flex items-center gap-2 pt-2 text-muted-foreground">
          <Heart className="h-5 w-5 text-indigo-400" weight="fill" />
          <p>You&apos;re not alone. We&apos;re here with you.</p>
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <div className="absolute top-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#FFF4DB] to-[#FFFBF2] blur-xl" />
        <svg viewBox="0 0 500 500" className="absolute bottom-0 h-3/5 w-full preserve-3d" preserveAspectRatio="none">
          <path d="M0,250 Q100,180 250,230 T500,180 L500,500 L0,500 Z" fill="#DDE5F4" className="opacity-80" />
          <path d="M-50,300 Q150,230 300,280 T600,250 L600,500 L-50,500 Z" fill="#C9D4F1" className="opacity-90" />
          <path d="M100,380 L400,380" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
          <path d="M150,400 L350,400" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="opacity-30" />
        </svg>
        <svg className="absolute right-32 top-32 h-8 w-8 text-indigo-300/40" viewBox="0 0 50 50">
          <path d="M0,25 Q12,15 25,25 Q38,15 50,25 Q38,20 25,30 Q12,20 0,25 Z" fill="currentColor" />
        </svg>
        <svg className="absolute right-20 top-40 h-6 w-6 text-indigo-300/30" viewBox="0 0 50 50">
          <path d="M0,25 Q12,15 25,25 Q38,15 50,25 Q38,20 25,30 Q12,20 0,25 Z" fill="currentColor" />
        </svg>

        <div className="absolute -bottom-10 -right-20 text-[#8A95C7]">
          <svg width="450" height="400" viewBox="0 0 100 100" className="overflow-visible">
            <path d="M50,100 C50,60 80,40 90,10 C70,30 50,50 50,80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50,90 C40,50 20,40 5,20 C20,30 40,50 50,70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="80" cy="25" rx="8" ry="20" fill="currentColor" transform="rotate(30 80 25)" />
            <ellipse cx="20" cy="35" rx="7" ry="15" fill="currentColor" transform="rotate(-40 20 35)" />
            <ellipse cx="60" cy="55" rx="10" ry="22" fill="#6B78AB" transform="rotate(15 60 55)" />
            <ellipse cx="35" cy="65" rx="8" ry="18" fill="#6B78AB" transform="rotate(-20 35 65)" />
          </svg>
        </div>
        <div className="absolute -bottom-10 -left-10 scale-x-[-1] text-[#8A95C7]/70">
          <svg width="300" height="300" viewBox="0 0 100 100" className="overflow-visible">
            <path d="M50,100 C50,60 80,40 90,10 C70,30 50,50 50,80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50,90 C40,50 20,40 5,20 C20,30 40,50 50,70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="80" cy="25" rx="8" ry="20" fill="currentColor" transform="rotate(30 80 25)" />
            <ellipse cx="20" cy="35" rx="7" ry="15" fill="currentColor" transform="rotate(-40 20 35)" />
          </svg>
        </div>
      </div>
    </div>
  );
}