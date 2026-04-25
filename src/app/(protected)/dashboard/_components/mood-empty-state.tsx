'use client';

import { LockKey, Smiley } from '@phosphor-icons/react';

function MoodIllustration() {
  return (
    <div className="relative mx-auto h-[260px] w-full max-w-[520px] sm:h-[330px]">
      <div className="absolute top-6 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#eeeaff] shadow-[0_0_70px_rgba(164,151,247,0.22)] sm:h-72 sm:w-72" />
      <div className="absolute top-16 left-[24%] h-4 w-24 rounded-full bg-[#e8e3ff]" />
      <div className="absolute top-20 right-[18%] h-5 w-28 rounded-full bg-[#eeeaff]" />
      <div className="absolute top-7 left-[29%] text-2xl text-[#b8adfb]">✦</div>
      <div className="absolute top-16 right-[25%] text-xl text-[#beb5fb]">
        ✦
      </div>

      <svg
        viewBox="0 0 520 300"
        className="absolute inset-x-0 bottom-0 h-[245px] w-full sm:h-[285px]"
        aria-hidden="true"
      >
        <path
          d="M86 250 C143 198 182 256 247 205 C313 153 354 244 432 192 C462 172 491 181 512 197 L512 300 L45 300 Z"
          fill="#e9e5ff"
        />
        <path
          d="M66 265 C136 215 190 281 260 232 C330 184 376 274 448 222 C477 202 500 211 520 228 L520 300 L50 300 Z"
          fill="#dcd6fb"
          opacity="0.72"
        />
        <path
          d="M145 272 C233 263 328 263 412 273"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="7"
          opacity="0.72"
        />
        <g transform="translate(178 92)">
          <circle
            cx="82"
            cy="82"
            r="72"
            fill="#fff"
            opacity="0.92"
            filter="drop-shadow(0 22px 30px rgba(119,103,236,.16))"
          />
          <path
            d="M55 77 C60 90 73 90 78 77"
            fill="none"
            stroke="#7767ec"
            strokeLinecap="round"
            strokeWidth="7"
          />
          <path
            d="M92 77 C97 90 110 90 115 77"
            fill="none"
            stroke="#7767ec"
            strokeLinecap="round"
            strokeWidth="7"
          />
          <path
            d="M60 112 C73 128 96 128 109 112"
            fill="none"
            stroke="#7767ec"
            strokeLinecap="round"
            strokeWidth="7"
          />
        </g>
        <g fill="none" strokeLinecap="round">
          <path
            d="M145 268 C143 211 125 174 134 126"
            stroke="#7fb0a8"
            strokeWidth="5"
          />
          <path
            d="M378 268 C379 210 397 173 388 124"
            stroke="#7fb0a8"
            strokeWidth="5"
          />
          <ellipse
            cx="122"
            cy="168"
            rx="15"
            ry="34"
            fill="#95c2bd"
            transform="rotate(-31 122 168)"
          />
          <ellipse
            cx="146"
            cy="208"
            rx="16"
            ry="37"
            fill="#77aaa4"
            transform="rotate(28 146 208)"
          />
          <ellipse
            cx="391"
            cy="166"
            rx="15"
            ry="34"
            fill="#95c2bd"
            transform="rotate(31 391 166)"
          />
          <ellipse
            cx="366"
            cy="211"
            rx="16"
            ry="37"
            fill="#77aaa4"
            transform="rotate(-28 366 211)"
          />
          <path
            d="M186 268 C181 211 164 175 168 128"
            stroke="#9188e5"
            strokeWidth="5"
          />
          <ellipse
            cx="162"
            cy="168"
            rx="13"
            ry="31"
            fill="#aaa2f2"
            transform="rotate(-26 162 168)"
          />
          <ellipse
            cx="186"
            cy="215"
            rx="14"
            ry="32"
            fill="#8a82df"
            transform="rotate(24 186 215)"
          />
        </g>
      </svg>
    </div>
  );
}

export function MoodEmptyState() {
  return (
    <div className="space-y-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-[#111936]">
            Mood
          </h1>
          <p className="mt-3 text-base font-medium text-[#5f6a8a]">
            Track how you&apos;re feeling and spot patterns over time.
          </p>
        </div>
        <div className="grid h-11 w-full grid-cols-2 rounded-xl border border-[#dfe3ef] bg-white p-1 text-sm font-semibold text-[#65708e] sm:w-[190px]">
          <button className="rounded-lg bg-[#eeeaff] text-[#725ff0]">
            Week
          </button>
          <button>Month</button>
        </div>
      </div>

      <section className="rounded-xl border border-[#dfe3ef] bg-white px-5 py-10 shadow-[0_18px_50px_rgba(67,78,113,0.04)] sm:px-10 lg:py-12">
        <MoodIllustration />
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[#111936] sm:text-3xl">
            Start by checking in with yourself
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-base leading-7 font-medium text-[#5f6a8a] sm:text-lg">
            Start your first mood check-in to build awareness and understand how
            you&apos;re feeling.
          </p>
          <button className="mt-7 inline-flex h-14 items-center gap-3 rounded-lg bg-[#6f56e8] px-9 text-base font-semibold text-white shadow-[0_18px_36px_rgba(111,86,232,0.25)] transition hover:bg-[#6049d4]">
            <Smiley className="h-6 w-6" />
            Check in now
          </button>
        </div>
      </section>

      <p className="flex items-center gap-3 text-sm font-medium text-[#65708e]">
        <LockKey className="h-4 w-4" />
        Your data is private and secure. You&apos;re in control.
      </p>
    </div>
  );
}
