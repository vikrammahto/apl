'use client';

import {
  CalendarBlank,
  CaretDown,
  CaretRight,
  FlowerLotus,
  LockKey,
  PlayCircle,
} from '@phosphor-icons/react';

function ActivitiesIllustration() {
  return (
    <div className="relative mx-auto h-[285px] w-full max-w-[620px] sm:h-[360px]">
      <div className="absolute top-3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#eeeaff] shadow-[0_0_80px_rgba(164,151,247,0.24)] sm:h-80 sm:w-80" />
      <div className="absolute top-16 left-[15%] h-5 w-28 rounded-full bg-[#e8e3ff]" />
      <div className="absolute top-10 right-[15%] h-5 w-36 rounded-full bg-[#eeeaff]" />
      <div className="absolute top-12 left-[24%] text-xl text-[#b8adfb]">✦</div>
      <div className="absolute top-20 right-[22%] text-xl text-[#b8adfb]">
        ✦
      </div>

      <svg
        viewBox="0 0 620 340"
        className="absolute inset-x-0 bottom-0 h-[285px] w-full sm:h-[330px]"
        aria-hidden="true"
      >
        <path
          d="M80 275 C156 219 200 285 285 229 C363 178 407 272 494 216 C535 190 579 199 620 222 L620 340 L70 340 Z"
          fill="#e9e5ff"
        />
        <path
          d="M56 294 C150 236 219 310 307 258 C385 211 426 305 516 250 C556 226 586 234 620 254 L620 340 L56 340 Z"
          fill="#dcd6fb"
          opacity="0.72"
        />
        <ellipse
          cx="326"
          cy="288"
          rx="230"
          ry="20"
          fill="#cbc2f5"
          opacity="0.35"
        />
        <g transform="translate(242 122)">
          <ellipse
            cx="90"
            cy="137"
            rx="102"
            ry="32"
            fill="#9aa6df"
            opacity="0.86"
          />
          <ellipse cx="90" cy="130" rx="100" ry="30" fill="#8796d4" />
          <ellipse cx="90" cy="85" rx="75" ry="26" fill="#9da9e0" />
          <ellipse cx="90" cy="78" rx="73" ry="24" fill="#8a98d5" />
          <ellipse cx="90" cy="41" rx="42" ry="20" fill="#aeb8e9" />
          <ellipse cx="90" cy="34" rx="40" ry="18" fill="#c5cdef" />
        </g>
        <g fill="none" strokeLinecap="round">
          <path
            d="M178 299 C174 234 148 184 154 132"
            stroke="#9188e5"
            strokeWidth="5"
          />
          <path
            d="M449 299 C451 235 476 186 468 132"
            stroke="#7fb0a8"
            strokeWidth="5"
          />
          <ellipse
            cx="151"
            cy="169"
            rx="14"
            ry="34"
            fill="#aaa2f2"
            transform="rotate(-28 151 169)"
          />
          <ellipse
            cx="186"
            cy="211"
            rx="15"
            ry="36"
            fill="#8a82df"
            transform="rotate(31 186 211)"
          />
          <ellipse
            cx="140"
            cy="228"
            rx="14"
            ry="33"
            fill="#8fc0ba"
            transform="rotate(-18 140 228)"
          />
          <ellipse
            cx="466"
            cy="165"
            rx="14"
            ry="34"
            fill="#9bcac4"
            transform="rotate(28 466 165)"
          />
          <ellipse
            cx="433"
            cy="215"
            rx="15"
            ry="36"
            fill="#77aaa4"
            transform="rotate(-31 433 215)"
          />
          <ellipse
            cx="480"
            cy="228"
            rx="14"
            ry="33"
            fill="#aaa2f2"
            transform="rotate(18 480 228)"
          />
        </g>
      </svg>
    </div>
  );
}

export function ActivitiesEmptyState() {
  return (
    <div className="space-y-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#111936]">
            Activities
          </h1>
          <p className="mt-3 text-base font-medium text-[#5f6a8a]">
            Mindful exercises to help you relax, focus and unwind.
          </p>
        </div>
        <button className="inline-flex h-12 w-fit items-center gap-3 rounded-xl border border-[#dfe3ef] bg-white px-5 text-sm font-semibold text-[#111936] shadow-sm">
          <CalendarBlank className="h-5 w-5 text-[#65708e]" />
          This week
          <CaretDown className="h-4 w-4 text-[#65708e]" />
        </button>
      </div>

      <section className="rounded-xl border border-[#dfe3ef] bg-white px-5 py-10 text-center shadow-[0_18px_50px_rgba(67,78,113,0.04)] sm:px-10 lg:py-12">
        <ActivitiesIllustration />
        <h2 className="text-2xl font-semibold tracking-tight text-[#111936] sm:text-3xl">
          Take your first mindful break
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-base leading-7 font-medium text-[#5f6a8a] sm:text-lg">
          You haven&apos;t started any activity sessions yet. Short, mindful
          moments can make a big difference.
        </p>
        <button className="mt-7 inline-flex h-14 items-center gap-3 rounded-lg bg-[#6f56e8] px-9 text-base font-semibold text-white shadow-[0_18px_36px_rgba(111,86,232,0.25)] transition hover:bg-[#6049d4]">
          <PlayCircle className="h-6 w-6" weight="fill" />
          Start a session
        </button>
        <p className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-[#65708e]">
          <FlowerLotus className="h-5 w-5 text-[#6fa6a0]" />
          Just a few minutes for you
        </p>
      </section>

      <div className="flex flex-col gap-4 rounded-xl border border-[#dfe3ef] bg-white px-5 py-4 text-sm font-medium text-[#4f5b7a] shadow-[0_18px_50px_rgba(67,78,113,0.04)] sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#dfe3ef] text-[#65708e]">
            <LockKey className="h-5 w-5" />
          </span>
          Your data is private and secure. You&apos;re in control.
        </p>
        <button className="inline-flex items-center gap-2 text-[#6f56e8]">
          Learn more
          <CaretRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
