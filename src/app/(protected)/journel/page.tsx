"use client";

import {
  ArrowRight,
  Bell,
  BookOpen,
  CaretDown,
  CaretRight,
  ChartLineUp,
  CheckCircle,
  DotsThree,
  GearSix,
  Heart,
  Leaf,
  MagnifyingGlass,
  PencilSimple,
  Question,
  Smiley,
  SmileyMeh,
  SmileySad,
  SquaresFour,
  Tag,
  Trash,
} from "@phosphor-icons/react";

const navItems = [
  { label: "Dashboard", icon: SquaresFour },
  { label: "Journal", icon: BookOpen, active: true },
  { label: "Activities", icon: Leaf },
  { label: "Insights", icon: ChartLineUp },
];

const entries = [
  {
    day: "Today",
    date: "May 12, 2024",
    text: "I felt a little overwhelmed this morning, but taking a walk helped clear my...",
    mood: Smiley,
    color: "bg-emerald-100 text-emerald-700",
    active: true,
  },
  {
    day: "Yesterday",
    date: "May 11, 2024",
    text: "Had a good conversation with a friend. Gratitude for the little things.",
    mood: Smiley,
    color: "bg-sky-100 text-sky-700",
  },
  {
    day: "Friday",
    date: "May 10, 2024",
    text: "A productive day. I stayed focused and got a lot done.",
    mood: SmileyMeh,
    color: "bg-amber-100 text-amber-700",
  },
  {
    day: "Thursday",
    date: "May 9, 2024",
    text: "Feeling a bit drained. Need to be kinder to myself.",
    mood: SmileySad,
    color: "bg-rose-100 text-rose-700",
  },
  {
    day: "Wednesday",
    date: "May 8, 2024",
    text: "Slow morning, but ended the day feeling peaceful.",
    mood: SmileySad,
    color: "bg-violet-100 text-violet-700",
  },
];

const moods = [
  { label: "Great", icon: Smiley, color: "bg-emerald-100 text-emerald-700" },
  { label: "Good", icon: Smiley, color: "bg-sky-100 text-sky-700" },
  { label: "Okay", icon: SmileyMeh, color: "bg-amber-100 text-amber-700" },
  { label: "Low", icon: SmileySad, color: "bg-rose-100 text-rose-700" },
  { label: "Really low", icon: SmileySad, color: "bg-violet-100 text-violet-700" },
];

function Sidebar() {
  return (
    <aside className="hidden w-[264px] shrink-0 flex-col justify-between bg-gradient-to-b from-white via-[#fbfaff] to-[#f7f8ff] px-6 py-8 lg:flex">
      <div>
        <div className="mb-12 flex items-center gap-3">
          <Leaf className="h-10 w-10 text-indigo-500" weight="fill" />
          <span className="text-[28px] font-semibold tracking-tight text-[#111936]">Mindful</span>
        </div>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex h-[62px] w-full items-center gap-4 rounded-xl px-4 text-left text-base font-medium transition ${
                item.active ? "bg-violet-100/75 text-violet-600" : "text-slate-500 hover:bg-slate-50 hover:text-[#111936]"
              }`}
            >
              <item.icon className="h-6 w-6" weight={item.active ? "fill" : "regular"} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-8">
        <section className="rounded-xl bg-white/70 px-7 py-7 text-center shadow-[0_20px_50px_rgba(91,78,170,0.08)]">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-500">
            <Heart className="h-8 w-8" weight="fill" />
          </div>
          <h2 className="text-base font-semibold text-[#111936]">You matter</h2>
          <p className="mx-auto mt-2 max-w-36 text-sm leading-6 text-slate-500">Small steps create real change.</p>
        </section>

        <div className="space-y-8">
          <button className="flex items-center gap-4 px-3 text-base font-medium text-slate-500">
            <GearSix className="h-6 w-6" />
            Settings
          </button>
          <button className="flex items-center gap-4 px-3 text-base font-medium text-slate-500">
            <Question className="h-6 w-6" />
            Need support?
          </button>
        </div>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="flex h-[93px] shrink-0 items-center justify-between border-b border-slate-200/80 px-5 sm:px-8">
      <p className="min-w-0 truncate text-lg font-semibold tracking-tight text-[#111936] sm:text-2xl">
        Good morning, Alex <span className="text-violet-500">♥</span>
      </p>

      <div className="flex items-center gap-4 sm:gap-6">
        <label className="relative hidden md:block">
          <MagnifyingGlass className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            className="h-12 w-[280px] rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-600 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 xl:w-[310px]"
            placeholder="Search journal..."
          />
        </label>
        <button className="relative flex h-11 w-11 items-center justify-center text-slate-600">
          <Bell className="h-7 w-7" />
          <span className="absolute top-1.5 right-2 h-2.5 w-2.5 rounded-full bg-violet-600 ring-2 ring-white" />
        </button>
        <button className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#f5d6bd] via-[#b98768] to-[#503a30] text-sm font-semibold text-white ring-4 ring-slate-100">
            AJ
          </span>
          <span className="hidden text-base font-medium text-slate-700 sm:inline">Alex</span>
          <CaretDown className="hidden h-4 w-4 text-slate-500 sm:block" />
        </button>
      </div>
    </header>
  );
}

function JournalEntries() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(80,89,126,0.04)]">
      <div className="flex h-[78px] items-center justify-between px-5">
        <h2 className="text-lg font-semibold text-[#111936]">My entries</h2>
        <button className="grid h-11 w-11 place-items-center rounded-xl bg-violet-100 text-violet-600">
          <PencilSimple className="h-6 w-6" />
        </button>
      </div>

      <div>
        {entries.map((entry) => (
          <button
            key={entry.day}
            className={`grid min-h-[112px] w-full grid-cols-[48px_1fr_24px] items-center gap-4 border-t border-slate-200 px-5 text-left transition ${
              entry.active
                ? "border-l-4 border-l-violet-500 bg-violet-50/75 pl-4"
                : "border-l-4 border-l-transparent hover:bg-slate-50/80"
            }`}
          >
            <span className={`grid h-12 w-12 place-items-center rounded-full ${entry.color}`}>
              <entry.mood className="h-8 w-8" />
            </span>
            <span className="min-w-0">
              <span className="mb-2 flex flex-wrap items-center gap-x-5 gap-y-1">
                <span className="text-base font-semibold text-[#111936]">{entry.day}</span>
                <span className="text-sm font-medium text-slate-500">{entry.date}</span>
              </span>
              <span className="line-clamp-2 block text-sm leading-6 text-slate-500">{entry.text}</span>
            </span>
            <CaretRight className="h-5 w-5 text-slate-500" />
          </button>
        ))}
      </div>

      <div className="p-5">
        <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 shadow-sm">
          Show older entries
          <CaretDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function MoodPicker({ title }: { title: string }) {
  return (
    <div className="min-w-0">
      <p className="mb-4 text-sm font-semibold text-slate-600">{title}</p>
      <div className="grid grid-cols-5 gap-3 sm:gap-5">
        {moods.map((mood) => (
          <button key={mood.label} className="flex min-w-0 flex-col items-center gap-2 text-center text-sm font-medium text-slate-600">
            <span className={`grid h-12 w-12 place-items-center rounded-full sm:h-14 sm:w-14 ${mood.color}`}>
              <mood.icon className="h-8 w-8 sm:h-9 sm:w-9" />
            </span>
            <span className="w-full truncate">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function WritingCard() {
  return (
    <section className="flex min-h-[620px] flex-col rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(80,89,126,0.04)]">
      <div className="flex items-start justify-between gap-4 px-5 py-7 sm:px-8 sm:py-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111936] sm:text-3xl">What&apos;s on your mind?</h1>
          <p className="mt-3 text-base text-slate-500">There&apos;s no right or wrong way to write.</p>
        </div>
        <div className="flex gap-3">
          <button className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600">
            <DotsThree className="h-6 w-6" weight="bold" />
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-600">
            <Trash className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="px-5 sm:px-8">
        <textarea
          className="h-[236px] w-full resize-none rounded-xl border border-slate-200 bg-white p-6 text-base leading-7 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 sm:h-[288px] sm:text-lg"
          placeholder="Write anything... no structure needed"
        />
      </div>

      <div className="grid gap-8 px-5 py-7 sm:px-8 lg:grid-cols-[1fr_44px_1fr] lg:items-end">
        <MoodPicker title="How are you feeling right now?" />
        <div className="hidden h-14 items-center justify-center text-slate-400 lg:flex">
          <ArrowRight className="h-8 w-8" />
        </div>
        <MoodPicker title="How do you want to feel?" />
      </div>

      <div className="mt-auto flex flex-col gap-4 border-t border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-5 text-base font-medium text-slate-600 sm:w-auto">
          <Tag className="h-5 w-5" />
          Add a tag
        </button>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 sm:justify-start">
            Autosaved just now
            <CheckCircle className="h-5 w-5 text-emerald-600" weight="fill" />
          </span>
          <button className="h-14 rounded-xl bg-violet-600 px-9 text-base font-semibold text-white shadow-[0_14px_28px_rgba(105,82,220,0.22)] transition hover:bg-violet-700">
            Save entry
          </button>
        </div>
      </div>
    </section>
  );
}

function JournalPrompt() {
  return (
    <section className="relative grid min-h-[174px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(80,89,126,0.04)] lg:grid-cols-[1fr_1.25fr]">
      <div className="relative hidden overflow-hidden lg:block">
        <div className="absolute left-24 top-8 h-28 w-28 rounded-full bg-violet-100" />
        <svg viewBox="0 0 560 190" className="absolute inset-x-0 bottom-0 h-full w-full" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 150 C80 96 150 150 226 111 C305 70 360 131 430 94 C482 66 525 78 560 94 L560 190 L0 190 Z" fill="#edeafb" />
          <path d="M0 170 C86 116 152 176 238 136 C315 100 369 157 445 122 C500 96 532 107 560 123 L560 190 L0 190 Z" fill="#ddd9f7" opacity="0.9" />
          <path d="M120 172 C210 164 330 164 420 173" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.65" />
        </svg>
        <svg viewBox="0 0 160 210" className="absolute bottom-0 left-16 h-40 text-indigo-400/75" aria-hidden="true">
          <path d="M74 206 C74 145 100 92 126 28" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M71 206 C52 152 36 113 22 68" fill="none" stroke="#7f8bbd" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="121" cy="40" rx="12" ry="28" fill="currentColor" transform="rotate(-18 121 40)" />
          <ellipse cx="100" cy="96" rx="13" ry="32" fill="#8f99d1" transform="rotate(24 100 96)" />
          <ellipse cx="31" cy="83" rx="10" ry="26" fill="#a9b1d8" transform="rotate(-30 31 83)" />
          <ellipse cx="51" cy="137" rx="12" ry="30" fill="#8fa4ad" transform="rotate(-28 51 137)" />
        </svg>
        <svg viewBox="0 0 140 190" className="absolute right-14 bottom-0 h-36 text-indigo-400/70" aria-hidden="true">
          <path d="M70 185 C70 123 50 82 63 33" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="61" cy="42" rx="10" ry="24" fill="currentColor" transform="rotate(8 61 42)" />
          <ellipse cx="46" cy="84" rx="11" ry="25" fill="#9ba5dd" transform="rotate(-25 46 84)" />
          <ellipse cx="82" cy="111" rx="12" ry="25" fill="#888fca" transform="rotate(28 82 111)" />
        </svg>
        <div className="absolute left-[72%] top-[28%] h-2 w-6 rounded-[50%] border-t-2 border-indigo-300" />
        <div className="absolute left-[81%] top-[38%] h-2 w-6 rounded-[50%] border-t-2 border-indigo-300" />
      </div>

      <div className="flex flex-col justify-center px-6 py-8 sm:px-10">
        <h2 className="text-xl font-semibold text-[#111936] sm:text-2xl">Your thoughts deserve a space</h2>
        <p className="mt-3 text-base text-slate-500">Journaling helps you process, reflect, and grow.</p>
        <button className="mt-6 flex h-12 w-fit items-center gap-3 rounded-lg bg-violet-600 px-6 text-base font-semibold text-white shadow-[0_14px_28px_rgba(105,82,220,0.2)]">
          <PencilSimple className="h-5 w-5" weight="fill" />
          Start writing
        </button>
      </div>
    </section>
  );
}

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#fbfcff] text-[#111936]">
      <div className="mx-auto flex min-h-screen max-w-[1536px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(80,89,126,0.08)]">
        <Sidebar />

        <section className="flex min-w-0 flex-1 flex-col">
          <Header />

          <div className="flex-1 space-y-8 overflow-y-auto p-5 sm:p-8">
            <div className="grid gap-6 xl:grid-cols-[344px_1fr]">
              <JournalEntries />
              <WritingCard />
            </div>
            <JournalPrompt />
          </div>
        </section>
      </div>
    </main>
  );
}
