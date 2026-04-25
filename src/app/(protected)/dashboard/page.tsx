"use client";

import {
  ArrowSquareOut,
  Bell,
  BookOpen,
  CalendarBlank,
  CaretDown,
  CaretRight,
  ChartLineUp,
  DotsThree,
  GearSix,
  Heart,
  Leaf,
  List,
  LockKey,
  MagnifyingGlass,
  NotePencil,
  PlayCircle,
  Smiley,
  SmileyMeh,
  SmileySad,
  SquaresFour,
  Timer,
  Wind,
} from "@phosphor-icons/react";

const moods = [
  { label: "Great", icon: Smiley, color: "text-emerald-700", bg: "bg-emerald-100" },
  { label: "Good", icon: Smiley, color: "text-sky-700", bg: "bg-sky-100" },
  { label: "Okay", icon: SmileyMeh, color: "text-amber-700", bg: "bg-amber-100" },
  { label: "Low", icon: SmileySad, color: "text-rose-700", bg: "bg-rose-100" },
  { label: "Really low", icon: SmileySad, color: "text-violet-700", bg: "bg-violet-100" },
];

const navItems = [
  { label: "Dashboard", icon: SquaresFour, active: true },
  { label: "Journal", icon: BookOpen },
  { label: "Activities", icon: Leaf },
  { label: "Insights", icon: ChartLineUp },
];

const quickActions = [
  {
    title: "Write a journal",
    description: "Write down your thoughts and reflect.",
    icon: NotePencil,
    bg: "bg-violet-100",
    color: "text-violet-600",
  },
  {
    title: "Start breathing",
    description: "Take a deep breath and reset your mind.",
    icon: Wind,
    bg: "bg-blue-100",
    color: "text-blue-700",
  },
  {
    title: "Focus timer",
    description: "Stay focused with a calm mind.",
    icon: Timer,
    bg: "bg-emerald-100",
    color: "text-emerald-700",
  },
];

const moodPoints = [
  { day: "Mon", y: 62 },
  { day: "Tue", y: 78 },
  { day: "Wed", y: 57 },
  { day: "Thu", y: 55 },
  { day: "Fri", y: 40 },
  { day: "Sat", y: 27 },
  { day: "Sun", y: 38 },
];

function BotanicalScene({ compact = false }: { compact?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute right-[8%] top-[8%] h-36 w-36 rounded-full bg-[#fff8ec] shadow-[0_0_60px_rgba(255,238,206,0.9)] sm:h-48 sm:w-48" />
      <svg
        viewBox="0 0 720 360"
        className="absolute right-0 bottom-0 h-full w-[78%]"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 250 C120 180 190 270 310 205 C420 145 470 240 575 190 C635 160 680 170 720 188 L720 360 L0 360 Z" fill="#edeafb" />
        <path d="M0 292 C140 215 205 310 330 244 C445 184 485 288 596 232 C660 198 690 212 720 226 L720 360 L0 360 Z" fill="#dedcf8" opacity="0.85" />
        <path d="M210 300 C300 292 430 294 530 303" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.65" />
        <path d="M255 326 C360 319 440 321 505 329" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      </svg>
      <svg
        viewBox="0 0 160 260"
        className={`absolute bottom-0 text-indigo-400/75 ${compact ? "right-6 h-52" : "right-4 h-72 md:right-14"}`}
        aria-hidden="true"
      >
        <path d="M74 256 C74 184 105 108 132 31" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M78 232 C55 176 34 123 22 67" fill="none" stroke="#7f8bbd" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="125" cy="44" rx="13" ry="34" fill="currentColor" transform="rotate(-18 125 44)" />
        <ellipse cx="106" cy="104" rx="15" ry="39" fill="#8f99d1" transform="rotate(24 106 104)" />
        <ellipse cx="91" cy="166" rx="18" ry="42" fill="#717db7" transform="rotate(28 91 166)" />
        <ellipse cx="32" cy="88" rx="11" ry="31" fill="#a9b1d8" transform="rotate(-30 32 88)" />
        <ellipse cx="51" cy="151" rx="13" ry="34" fill="#8fa4ad" transform="rotate(-28 51 151)" />
      </svg>
      <svg viewBox="0 0 150 230" className="absolute bottom-0 left-[58%] hidden h-60 text-indigo-400/70 lg:block" aria-hidden="true">
        <path d="M70 225 C70 150 47 103 63 37" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <ellipse cx="61" cy="46" rx="10" ry="25" fill="currentColor" transform="rotate(8 61 46)" />
        <ellipse cx="47" cy="88" rx="11" ry="27" fill="#9ba5dd" transform="rotate(-25 47 88)" />
        <ellipse cx="81" cy="117" rx="12" ry="27" fill="#888fca" transform="rotate(28 81 117)" />
        <ellipse cx="50" cy="158" rx="12" ry="29" fill="#9eaeb9" transform="rotate(-30 50 158)" />
      </svg>
      <div className="absolute top-[28%] left-[72%] h-2 w-6 rounded-[50%] border-t-2 border-indigo-300" />
      <div className="absolute top-[38%] left-[76%] h-2 w-6 rounded-[50%] border-t-2 border-indigo-300" />
      <div className="absolute top-[34%] left-[68%] h-2 w-6 rounded-[50%] border-t-2 border-indigo-300" />
    </div>
  );
}

function PlantIllustration() {
  return (
    <div className="absolute right-0 bottom-0 h-full w-2/3 overflow-hidden">
      <div className="absolute right-5 bottom-2 h-32 w-64 rounded-[50%] bg-emerald-100/70 blur-sm" />
      <div className="absolute right-32 bottom-20 h-24 w-24 rounded-full bg-white/70" />
      <svg viewBox="0 0 260 260" className="absolute right-6 bottom-0 h-[220px] w-[220px]" aria-hidden="true">
        <path d="M132 255 C133 190 142 139 165 73" fill="none" stroke="#5b936f" strokeWidth="5" strokeLinecap="round" />
        <path d="M124 255 C105 194 94 152 74 104" fill="none" stroke="#7aa58a" strokeWidth="4" strokeLinecap="round" />
        <path d="M138 255 C154 205 185 171 214 126" fill="none" stroke="#7aa58a" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="170" cy="78" rx="16" ry="39" fill="#a4c8aa" transform="rotate(8 170 78)" />
        <ellipse cx="149" cy="121" rx="18" ry="42" fill="#8fba98" transform="rotate(38 149 121)" />
        <ellipse cx="111" cy="166" rx="17" ry="37" fill="#74a882" transform="rotate(-36 111 166)" />
        <ellipse cx="72" cy="105" rx="13" ry="30" fill="#9cc1a5" transform="rotate(-29 72 105)" />
        <ellipse cx="205" cy="129" rx="13" ry="32" fill="#87b493" transform="rotate(45 205 129)" />
        <ellipse cx="181" cy="177" rx="12" ry="29" fill="#6e9d7b" transform="rotate(42 181 177)" />
      </svg>
    </div>
  );
}

export default function DashboardPage() {
  const linePoints = moodPoints
    .map((point, index) => `${60 + index * 90},${point.y}`)
    .join(" ");

  return (
    <main className="min-h-screen bg-[#fbfcff] text-[#111936]">
      <div className="mx-auto flex min-h-screen max-w-[1536px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(80,89,126,0.08)]">
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
                    item.active
                      ? "bg-violet-100/70 text-violet-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-[#111936]"
                  }`}
                >
                  <item.icon className="h-6 w-6" weight={item.active ? "fill" : "regular"} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-8">
            <section className="rounded-xl bg-white/70 px-7 py-6 text-center shadow-[0_20px_50px_rgba(91,78,170,0.08)]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                <Heart className="h-8 w-8" weight="fill" />
              </div>
              <h2 className="text-base font-semibold text-[#111936]">You&apos;re not alone</h2>
              <p className="mx-auto mt-2 max-w-32 text-sm leading-6 text-slate-500">It&apos;s okay to take your time.</p>
              <button className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-violet-600 shadow-sm">
                Get support
                <ArrowSquareOut className="h-4 w-4" />
              </button>
            </section>

            <button className="flex items-center gap-4 px-3 text-base font-medium text-slate-500">
              <GearSix className="h-6 w-6" />
              Settings
            </button>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-[93px] shrink-0 items-center justify-between border-b border-slate-200/80 px-5 sm:px-8">
            <div className="flex min-w-0 items-center gap-8">
              <button className="flex h-10 w-10 shrink-0 items-center justify-center text-slate-600">
                <List className="h-7 w-7" />
              </button>
              <p className="truncate text-base font-medium text-[#111936] sm:text-lg">
                Good morning, Alex <span className="text-violet-500">♥</span>
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-7">
              <label className="relative hidden md:block">
                <MagnifyingGlass className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  className="h-12 w-[270px] rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-600 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100 lg:w-[300px]"
                  placeholder="Search anything..."
                />
              </label>
              <button className="relative text-slate-600">
                <Bell className="h-7 w-7" />
                <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-violet-600 ring-2 ring-white" />
              </button>
              <button className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#f5d6bd] to-[#7a5946] text-sm font-semibold text-white ring-4 ring-slate-100">
                  AJ
                </span>
                <span className="hidden text-base font-medium text-slate-700 sm:inline">Alex</span>
                <CaretDown className="hidden h-4 w-4 text-slate-500 sm:block" />
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-8 overflow-y-auto p-5 sm:p-8">
            <section className="relative min-h-[312px] overflow-hidden rounded-xl bg-gradient-to-r from-white via-[#fbf8ff] to-[#f0edff] p-8 shadow-[0_12px_45px_rgba(100,92,160,0.08)] sm:p-10">
              <BotanicalScene />
              <div className="relative z-10 max-w-[660px]">
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">How are you feeling today?</h1>
                <p className="mt-4 text-base text-slate-500">Your feelings matter. There&apos;s no right or wrong answer.</p>

                <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  {moods.map((mood) => (
                    <button
                      key={mood.label}
                      className="flex h-[122px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/85 text-sm font-medium text-slate-600 shadow-[0_12px_30px_rgba(84,92,127,0.06)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_16px_34px_rgba(119,91,220,0.12)]"
                    >
                      <span className={`grid h-14 w-14 place-items-center rounded-full ${mood.bg} ${mood.color}`}>
                        <mood.icon className="h-9 w-9" weight="regular" />
                      </span>
                      {mood.label}
                    </button>
                  ))}
                </div>

                <p className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <LockKey className="h-4 w-4" />
                  Your response is private and only for you.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold">Quick actions</h2>
              <div className="grid gap-6 lg:grid-cols-3">
                {quickActions.map((action) => (
                  <button
                    key={action.title}
                    className="flex min-h-[116px] items-center justify-between rounded-xl border border-slate-200 bg-white px-5 text-left shadow-[0_12px_35px_rgba(80,89,126,0.04)] transition hover:border-violet-200 hover:shadow-[0_18px_40px_rgba(91,78,170,0.08)] sm:px-6"
                  >
                    <span className="flex items-center gap-5">
                      <span className={`grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full ${action.bg} ${action.color}`}>
                        <action.icon className="h-9 w-9" />
                      </span>
                      <span>
                        <span className="block text-lg font-semibold text-[#111936]">{action.title}</span>
                        <span className="mt-2 block max-w-48 text-base leading-6 text-slate-500">{action.description}</span>
                      </span>
                    </span>
                    <CaretRight className="h-6 w-6 shrink-0 text-slate-500" />
                  </button>
                ))}
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.25fr_0.9fr]">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(80,89,126,0.04)]">
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">Mood overview</h2>
                    <p className="mt-4 flex items-center gap-2 text-base text-slate-500">
                      You&apos;ve been feeling better this week
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                        <ChartLineUp className="h-4 w-4" weight="bold" />
                      </span>
                    </p>
                  </div>
                  <button className="flex items-center gap-3 text-sm font-medium text-slate-500">
                    <CalendarBlank className="h-5 w-5" />
                    This week
                    <CaretDown className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-[30px_1fr] gap-4">
                  <div className="flex h-[210px] flex-col justify-between py-1 text-lg">
                    <Smiley className="h-6 w-6 text-emerald-500" />
                    <Smiley className="h-6 w-6 text-sky-500" />
                    <SmileyMeh className="h-6 w-6 text-amber-500" />
                    <SmileySad className="h-6 w-6 text-rose-500" />
                    <SmileySad className="h-6 w-6 text-violet-500" />
                  </div>
                  <div>
                    <svg viewBox="0 0 660 210" className="h-[210px] w-full" preserveAspectRatio="none" aria-label="Mood line chart">
                      {[24, 70, 116, 162, 208].map((y) => (
                        <line key={y} x1="0" x2="660" y1={y} y2={y} stroke="#e8eaf3" strokeDasharray="6 6" />
                      ))}
                      <path d={`M60 210 L${linePoints} L600 210 Z`} fill="url(#moodFill)" opacity="0.72" />
                      <polyline points={linePoints} fill="none" stroke="#8b72ee" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      {moodPoints.map((point, index) => (
                        <circle key={point.day} cx={60 + index * 90} cy={point.y} r="8" fill="#7c67e8" stroke="white" strokeWidth="4" />
                      ))}
                      <defs>
                        <linearGradient id="moodFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#b7a8ff" stopOpacity="0.48" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="grid grid-cols-7 text-center text-sm text-slate-500">
                      {moodPoints.map((point) => (
                        <span key={point.day}>{point.day}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[348px] overflow-hidden rounded-xl bg-gradient-to-br from-[#fbfcf8] to-[#edf5ec] p-6 shadow-[0_12px_35px_rgba(80,89,126,0.04)]">
                <PlantIllustration />
                <div className="relative z-10 max-w-[270px]">
                  <div className="mb-9 flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                      <Bell className="h-7 w-7" />
                    </span>
                    <DotsThree className="h-7 w-7 text-slate-500" weight="bold" />
                  </div>
                  <p className="text-base font-semibold">Today&apos;s reminder</p>
                  <h2 className="mt-9 text-2xl font-semibold leading-tight sm:text-[28px]">
                    Take 2 minutes to pause and breathe
                  </h2>
                  <p className="mt-5 text-base leading-7 text-slate-500">A short break can make a big difference.</p>
                  <button className="mt-8 flex h-12 items-center gap-4 rounded-lg bg-emerald-700 px-5 text-base font-medium text-white shadow-[0_14px_28px_rgba(50,120,77,0.18)]">
                    Start breathing
                    <PlayCircle className="h-7 w-7" weight="fill" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
