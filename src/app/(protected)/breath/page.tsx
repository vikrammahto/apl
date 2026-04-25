"use client";

import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import {
  ArrowClockwise,
  Bell,
  BookOpen,
  CaretDown,
  ChartLineUp,
  Check,
  FlowerLotus,
  Gear,
  Heart,
  House,
  Pause,
  Square,
  Wind,
} from "@phosphor-icons/react";
import breathReference from "../../../../breath.png";

const navItems = [
  { label: "Dashboard", icon: House },
  { label: "Journal", icon: BookOpen },
  { label: "Activities", icon: FlowerLotus, active: true },
  { label: "Insights", icon: ChartLineUp },
];

const durations = ["1 min", "3 min", "5 min"];

export default function BreathPage() {
  return (
    <main className="min-h-screen bg-[#fbfaff] text-[#111936]">
      <div className="mx-auto flex min-h-screen max-w-[1536px] overflow-hidden rounded-[1.5rem] border border-[#dce0ee] bg-[#fdfcff] shadow-[0_28px_90px_rgba(104,91,173,0.12)]">
        <aside className="hidden w-[268px] shrink-0 flex-col justify-between border-r border-[#e8e7f3] bg-white/70 px-6 py-8 backdrop-blur-xl lg:flex">
          <div>
            <div className="mb-16 flex items-center gap-3 px-2">
              <FlowerLotus className="h-8 w-8 text-[#7a6eed]" weight="fill" />
              <span className="text-2xl font-semibold tracking-tight">Mindful</span>
            </div>

            <nav className="space-y-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`flex items-center gap-4 rounded-xl px-4 py-3 text-[17px] transition ${
                    item.active
                      ? "bg-[#eeeaff] font-medium text-[#6f5ce7]"
                      : "text-[#707b99] hover:bg-[#f4f2ff] hover:text-[#111936]"
                  }`}
                >
                  <item.icon className="h-6 w-6" weight={item.active ? "fill" : "regular"} />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-white/75 px-5 py-6 text-center shadow-[0_20px_60px_rgba(122,110,237,0.1)]">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#eeeaff]">
                <Heart className="h-7 w-7 text-[#7a6eed]" weight="fill" />
              </div>
              <p className="font-semibold">You&apos;re doing great</p>
              <p className="mt-2 text-sm leading-6 text-[#65708e]">Small steps, big difference.</p>
            </div>

            <a href="#" className="flex items-center gap-4 px-3 text-[15px] font-medium text-[#707b99]">
              <Gear className="h-5 w-5" />
              Settings
            </a>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-[94px] items-center justify-between border-b border-[#e8e7f3] bg-white/70 px-6 backdrop-blur-xl sm:px-10">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Breathing exercise</h1>
            <div className="flex items-center gap-4 sm:gap-6">
              <button className="relative text-[#65708e]" aria-label="Notifications">
                <Bell className="h-6 w-6" />
                <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-[#7a6eed] ring-2 ring-white" />
              </button>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-[linear-gradient(135deg,#7b5f4d,#e0b8a1_45%,#18213c_46%)] shadow-inner sm:h-12 sm:w-12" />
                <span className="hidden text-sm font-medium text-[#65708e] sm:inline">Alex</span>
                <CaretDown className="hidden h-4 w-4 text-[#65708e] sm:block" />
              </div>
            </div>
          </header>

          <div className="relative flex flex-1 flex-col overflow-hidden bg-[#fdfcff] px-5 py-8 sm:px-10 lg:px-14">
            <Image
              src={breathReference}
              alt=""
              priority
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.18]"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_33%,rgba(255,255,255,0.96),rgba(255,255,255,0.62)_42%,rgba(246,242,255,0.54)_100%)]" />

            <div className="relative z-10 grid flex-1 grid-cols-1 gap-8 xl:grid-cols-[1fr_240px]">
              <div className="flex min-h-[620px] flex-col items-center justify-center pt-8">
                <div className="relative flex aspect-square w-[min(72vw,540px)] max-w-[540px] items-center justify-center rounded-full bg-[#ece8ff]/55 p-7">
                  <div className="absolute inset-[-28px] rounded-full border-[24px] border-[#eeeaff]/55" />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_90px_rgba(122,110,237,0.28)_inset]" />
                  <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-white/95 text-center shadow-[0_30px_90px_rgba(122,110,237,0.1)]">
                    <Wind className="mb-8 h-20 w-20 text-[#8171ee]" />
                    <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Breathe in...</h2>
                    <p className="mt-5 text-lg text-[#65708e] sm:text-xl">Inhale slowly and deeply</p>
                    <p className="mt-5 text-3xl font-semibold text-[#7767ec]">4</p>
                  </div>
                </div>

                <div className="mt-8 w-full max-w-[430px] text-center">
                  <p className="mb-3 text-sm font-medium text-[#65708e]">Choose duration</p>
                  <div className="grid grid-cols-3 gap-4">
                    {durations.map((duration) => (
                      <button
                        key={duration}
                        className={`h-10 rounded-full border text-sm font-medium shadow-sm transition ${
                          duration === "3 min"
                            ? "border-[#7767ec] bg-[#7767ec] text-white shadow-[#7767ec]/25"
                            : "border-[#e0e4ef] bg-white/70 text-[#111936] hover:border-[#b9b3fb]"
                        }`}
                      >
                        {duration}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex items-start justify-center gap-10">
                  <ControlButton icon={ArrowClockwise} label="Restart" />
                  <ControlButton icon={Pause} label="Pause" primary />
                  <ControlButton icon={Square} label="End" />
                </div>
              </div>

              <aside className="hidden pt-12 xl:block">
                <div className="rounded-3xl bg-white/75 p-7 shadow-[0_30px_80px_rgba(122,110,237,0.12)] backdrop-blur">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#eeeaff]">
                    <Wind className="h-8 w-8 text-[#7a6eed]" />
                  </div>
                  <h3 className="text-lg font-semibold">How it works</h3>
                  <p className="mt-3 text-base leading-7 text-[#65708e]">
                    We&apos;ll guide you through a calming breathing pattern to help you relax and reset.
                  </p>
                </div>
              </aside>
            </div>

            <div className="relative z-10 mx-auto mt-4 flex w-full max-w-[1020px] flex-col gap-5 rounded-3xl bg-white/85 px-6 py-5 shadow-[0_24px_70px_rgba(122,110,237,0.1)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-9">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d9eedf] text-[#438a58]">
                  <Check className="h-9 w-9" weight="bold" />
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    You showed up for yourself today <span className="text-[#7767ec]">♥</span>
                  </p>
                  <p className="mt-1 text-sm text-[#65708e]">That&apos;s a step towards feeling better.</p>
                </div>
              </div>
              <button className="h-12 rounded-xl border border-[#dfe4ef] px-12 text-sm font-semibold text-[#6f5ce7] transition hover:border-[#b9b3fb] hover:bg-[#f6f4ff]">
                Done
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ControlButton({
  icon: Icon,
  label,
  primary = false,
}: {
  icon: Icon;
  label: string;
  primary?: boolean;
}) {
  return (
    <div className="flex w-20 flex-col items-center gap-3">
      <button
        className={`flex h-16 w-16 items-center justify-center rounded-full border transition ${
          primary
            ? "border-[#7767ec] bg-[#7767ec] text-white shadow-[0_20px_40px_rgba(119,103,236,0.35)]"
            : "border-[#dfe4ef] bg-white/80 text-[#65708e] shadow-sm hover:border-[#b9b3fb] hover:text-[#7767ec]"
        }`}
        aria-label={label}
      >
        <Icon className="h-7 w-7" weight={primary ? "fill" : "regular"} />
      </button>
      <span className="text-sm text-[#65708e]">{label}</span>
    </div>
  );
}
