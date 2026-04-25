"use client";

import { Heart, Leaf, Play } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/ui/link";

export function HeroSection() {
  return (
    <section id="how-it-works" className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-8 pt-12 pb-24 lg:flex-row">
      <div className="relative z-10 w-full flex-1 space-y-8">
        <div className="absolute -top-12 -left-4 rotate-12 text-indigo-200">
          <Heart size={32} weight="fill" />
        </div>
        <h1 className="text-6xl font-bold leading-[1.1] tracking-tight md:text-7xl">
          Take a moment <br />
          for{" "}
          <span className="relative inline-block text-indigo-500">
            yourself
            <svg
              className="absolute -bottom-1 left-0 h-3 w-full text-indigo-400/30"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </span>
        </h1>
        <div className="max-w-lg space-y-4">
          <p className="text-xl leading-relaxed text-muted-foreground">
            No pressure. Just a space to breathe, reflect, and reset.
          </p>
          <p className="text-xl font-medium leading-relaxed text-indigo-500/80">
            You don&apos;t have to do everything today.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button size="lg" className="gap-2" asChild>
            <AppLink href="/auth">
              <Leaf size={20} />
              Start your calm journey
            </AppLink>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <AppLink href="#features">
              <Play size={20} className="text-muted-foreground" />
              Explore features
            </AppLink>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-lg flex-1 lg:w-auto">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-50 to-blue-50/50 blur-[80px]" />

        <div className="relative h-[500px] w-full overflow-hidden rounded-[3rem] border border-white bg-gradient-to-b from-blue-50/60 to-indigo-100/40 shadow-sm">
          <div className="absolute top-12 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#FFF4DB] to-orange-50 blur-md" />

          <svg
            viewBox="0 0 500 500"
            className="absolute bottom-0 h-[300px] w-full preserve-3d"
            preserveAspectRatio="none"
          >
            <path d="M0,250 Q100,180 250,230 T500,180 L500,500 L0,500 Z" fill="#DDE5F4" className="opacity-80" />
            <path d="M-50,300 Q150,230 300,280 T600,250 L600,500 L-50,500 Z" fill="#C9D4F1" className="opacity-90" />
            <path d="M100,380 L400,380" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
            <path d="M150,400 L350,400" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="opacity-30" />
            <path d="M200,420 L300,420" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="opacity-20" />
          </svg>

          <div className="absolute -bottom-4 right-[-10%] overflow-hidden text-[#8A95C7]">
            <svg width="220" height="300" viewBox="0 0 100 100" className="overflow-visible">
              <path d="M50,100 C50,60 80,40 90,10 C70,30 50,50 50,80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M50,90 C40,50 20,40 5,20 C20,30 40,50 50,70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="80" cy="25" rx="8" ry="20" fill="currentColor" transform="rotate(30 80 25)" />
              <ellipse cx="20" cy="35" rx="7" ry="15" fill="currentColor" transform="rotate(-40 20 35)" />
              <ellipse cx="60" cy="55" rx="10" ry="22" fill="#6B78AB" transform="rotate(15 60 55)" />
              <ellipse cx="35" cy="65" rx="8" ry="18" fill="#6B78AB" transform="rotate(-20 35 65)" />
            </svg>
          </div>

          <svg className="absolute top-24 right-20 h-12 w-12 text-indigo-300" viewBox="0 0 50 50">
            <path d="M0,25 Q12,15 25,25 Q38,15 50,25 Q38,20 25,30 Q12,20 0,25 Z" fill="currentColor" className="opacity-60" />
          </svg>
          <svg className="absolute top-16 right-32 h-8 w-8 text-indigo-300" viewBox="0 0 50 50">
            <path d="M0,25 Q12,15 25,25 Q38,15 50,25 Q38,20 25,30 Q12,20 0,25 Z" fill="currentColor" className="opacity-40" />
          </svg>
        </div>
      </div>
    </section>
  );
}
