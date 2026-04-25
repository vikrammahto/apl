'use client';

import Link from 'next/link';
import {
  ChartLineUp,
  CheckCircle,
  Fire,
  Info,
  Leaf,
  Moon,
  Notebook,
  Plant,
  Smiley,
  SmileyMeh,
  SmileySad,
  Sparkle,
} from '@phosphor-icons/react';
import { formatMinutes, moodScores } from '@/lib/storage';
import { useAppStorage } from '@/lib/use-app-storage';

const moodIcons = [
  { icon: Smiley, tone: 'bg-[#dceede] text-[#509363]' },
  { icon: Smiley, tone: 'bg-[#d7e9ff] text-[#4d80bd]' },
  { icon: SmileyMeh, tone: 'bg-[#ffe2ba] text-[#c17836]' },
  { icon: SmileySad, tone: 'bg-[#ffd5ca] text-[#d46d5c]' },
  { icon: SmileySad, tone: 'bg-[#e1d6ff] text-[#7b64df]' },
];

function Card({
  title,
  subtitle,
  children,
  className = '',
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-[#dfe3ef] bg-white p-5 shadow-[0_18px_50px_rgba(67,78,113,0.04)] sm:p-6 ${className}`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-[#111936]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-sm font-medium text-[#697492]">
              {subtitle}
            </p>
          ) : null}
        </div>
        <span className="grid h-8 w-8 shrink-0 place-items-center text-[#7d88a6]">
          <Info className="h-5 w-5" />
        </span>
      </div>
      {children}
    </section>
  );
}

function getWeekPoints(
  entries: Array<{ createdAt: string; mood: keyof typeof moodScores }>,
) {
  const formatter = new Intl.DateTimeFormat('en', { weekday: 'short' });
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    return date;
  });

  return days.map((day, index) => {
    const dayEntries = entries.filter((entry) => {
      const entryDate = new Date(entry.createdAt);
      return entryDate.toDateString() === day.toDateString();
    });
    const average =
      dayEntries.length > 0
        ? dayEntries.reduce((sum, entry) => sum + moodScores[entry.mood], 0) /
          dayEntries.length
        : 3;

    return {
      day: formatter.format(day),
      x: index * 16.6,
      y: 100 - average * 18,
      average,
    };
  });
}

export default function InsightsPage() {
  const { storage } = useAppStorage();
  const trendPoints = getWeekPoints(storage.moodCheckIns);
  const points = trendPoints.map((point) => `${point.x},${point.y}`).join(' ');
  const totalSeconds = storage.breathingSessions.reduce(
    (sum, session) => sum + session.durationSeconds,
    0,
  );
  const journalDays = new Set(
    storage.journalEntries.map((entry) =>
      new Date(entry.createdAt).toDateString(),
    ),
  ).size;
  const currentStreak = Math.min(
    7,
    new Set(
      [...storage.moodCheckIns, ...storage.journalEntries].map((entry) =>
        new Date(entry.createdAt).toDateString(),
      ),
    ).size,
  );
  const averageMood =
    storage.moodCheckIns.length > 0
      ? storage.moodCheckIns.reduce(
          (sum, entry) => sum + moodScores[entry.mood],
          0,
        ) / storage.moodCheckIns.length
      : 0;

  const activityStats = [
    {
      label: 'Sessions completed',
      value: String(storage.breathingSessions.length),
      change: 'Saved breathing sessions',
      icon: Plant,
      tone: 'bg-[#ebe7ff] text-[#7767ec]',
    },
    {
      label: 'Active days',
      value: String(currentStreak),
      change: 'Mood or journal activity',
      icon: Fire,
      tone: 'bg-[#dff0e3] text-[#4f9a62]',
    },
    {
      label: 'Time spent',
      value: formatMinutes(totalSeconds),
      change: 'Mindful breathing',
      icon: ChartLineUp,
      tone: 'bg-[#dceafe] text-[#3f7fc4]',
    },
  ];

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-3xl font-semibold tracking-tight text-[#111936]">
          Your insights
        </h1>
        <p className="mt-3 text-base font-medium text-[#5f6a8a]">
          Understand your mind. Celebrate your progress.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <Card
          title="1. Mood trends"
          subtitle="Your average mood this week"
          className="xl:col-span-7"
        >
          <div className="grid grid-cols-[36px_1fr] gap-3">
            <div className="grid h-[220px] grid-rows-5 place-items-center">
              {moodIcons.map((mood, index) => (
                <span
                  key={index}
                  className={`grid h-6 w-6 place-items-center rounded-full ${mood.tone}`}
                >
                  <mood.icon className="h-4 w-4" weight="fill" />
                </span>
              ))}
            </div>

            <div className="min-w-0">
              <div className="relative h-[220px] border-y border-dashed border-[#e4e7f1] bg-[linear-gradient(to_bottom,transparent_24%,#e8eaf4_24%,#e8eaf4_calc(24%+1px),transparent_calc(24%+1px),transparent_49%,#e8eaf4_49%,#e8eaf4_calc(49%+1px),transparent_calc(49%+1px),transparent_74%,#e8eaf4_74%,#e8eaf4_calc(74%+1px),transparent_calc(74%+1px))]">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 h-full w-full overflow-visible"
                >
                  <defs>
                    <linearGradient id="moodFill" x1="0" x2="0" y1="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#8171ee"
                        stopOpacity="0.24"
                      />
                      <stop
                        offset="100%"
                        stopColor="#8171ee"
                        stopOpacity="0.02"
                      />
                    </linearGradient>
                  </defs>
                  <polygon
                    points={`0,100 ${points} 100,100`}
                    fill="url(#moodFill)"
                  />
                  <polyline
                    points={points}
                    fill="none"
                    stroke="#8171ee"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                    vectorEffect="non-scaling-stroke"
                  />
                  {trendPoints.map((point) => (
                    <circle
                      key={point.day}
                      cx={point.x}
                      cy={point.y}
                      r="1.1"
                      fill="#8171ee"
                      stroke="white"
                      strokeWidth="0.65"
                      vectorEffect="non-scaling-stroke"
                    />
                  ))}
                </svg>
              </div>

              <div className="mt-4 grid grid-cols-7 text-center text-sm font-medium text-[#5f6a8a]">
                {trendPoints.map((point) => (
                  <span key={point.day}>{point.day}</span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <Card
          title="2. Patterns"
          subtitle="Helpful insights based on your activity"
          className="xl:col-span-5"
        >
          <div className="space-y-4">
            <div className="grid min-h-[106px] grid-cols-[64px_1fr_36px] items-center gap-4 rounded-lg bg-[#fcfbff] px-4 shadow-[0_18px_45px_rgba(87,95,126,0.06)]">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#dceede] text-[#4f9a62]">
                <Notebook className="h-8 w-8" weight="duotone" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base leading-6 font-semibold text-[#111936]">
                  {journalDays
                    ? `You journaled on ${journalDays} day${journalDays === 1 ? '' : 's'}`
                    : 'Start journaling to reveal patterns'}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#5f6a8a]">
                  Average mood is{' '}
                  {averageMood ? averageMood.toFixed(1) : 'not ready'} / 5.
                </p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-current text-[#4f9a62]">
                <CheckCircle className="h-5 w-5" weight="bold" />
              </span>
            </div>

            <div className="grid min-h-[106px] grid-cols-[64px_1fr_36px] items-center gap-4 rounded-lg bg-[#fcfbff] px-4 shadow-[0_18px_45px_rgba(87,95,126,0.06)]">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#ebe7ff] text-[#7767ec]">
                <Moon className="h-8 w-8" weight="duotone" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base leading-6 font-semibold text-[#111936]">
                  Consistency is building
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#5f6a8a]">
                  {currentStreak} active day{currentStreak === 1 ? '' : 's'}{' '}
                  recorded locally.
                </p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-current text-[#7767ec]">
                <Sparkle className="h-5 w-5" weight="bold" />
              </span>
            </div>
          </div>
          <Link
            href="/journal"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#725ff0]"
          >
            Explore more patterns
            <span aria-hidden>→</span>
          </Link>
        </Card>

        <Card
          title="3. Activity stats"
          subtitle="Your progress at a glance"
          className="xl:col-span-7"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {activityStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-[#fcfbff] px-4 py-5 shadow-[0_18px_45px_rgba(87,95,126,0.06)]"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${stat.tone}`}
                  >
                    <stat.icon className="h-8 w-8" weight="duotone" />
                  </span>
                  <div>
                    <p className="text-2xl font-semibold tracking-tight text-[#111936]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#697492]">
                      {stat.label}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs font-semibold text-[#4f9a62]">
                  {stat.change}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="Mood by time of day"
          subtitle="Based on your saved check-ins"
          className="xl:col-span-5"
        >
          <div className="grid grid-cols-[28px_1fr] gap-3">
            <div className="grid grid-rows-5 gap-1.5">
              {moodIcons.map((mood, index) => (
                <span
                  key={index}
                  className={`grid h-5 w-5 place-items-center self-center rounded-full ${mood.tone}`}
                >
                  <mood.icon className="h-3.5 w-3.5" weight="fill" />
                </span>
              ))}
            </div>
            <div className="grid grid-rows-5 gap-1.5">
              {Array.from({ length: 5 }, (_, row) => (
                <div key={row} className="grid grid-cols-12 gap-1">
                  {Array.from({ length: 12 }, (_, col) => {
                    const value = Math.min(
                      0.9,
                      0.08 + (averageMood / 5) * 0.55 + row * 0.04 + col * 0.01,
                    );
                    return (
                      <span
                        key={`${row}-${col}`}
                        className="h-6 rounded-[4px] border border-white"
                        style={{
                          backgroundColor: `rgba(129, 113, 238, ${value})`,
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <section className="grid overflow-hidden rounded-xl border border-[#dfe3ef] bg-white shadow-[0_18px_50px_rgba(67,78,113,0.04)] lg:grid-cols-[1fr_1.55fr] xl:col-span-12">
          <div className="relative min-h-[170px] overflow-hidden bg-[#fcfbff]">
            <div className="absolute right-0 bottom-0 left-0 h-28 bg-[#ebe7ff]" />
            <div className="absolute bottom-0 left-10 h-16 w-64 rounded-t-[100%] bg-[#d9d2fb]" />
            <div className="absolute bottom-0 left-40 h-20 w-72 rounded-t-[100%] bg-[#c9c1f4]" />
            <Plant
              className="absolute bottom-4 left-16 h-24 w-24 text-[#9d8ff3]"
              weight="duotone"
            />
            <Leaf
              className="absolute right-20 bottom-2 h-32 w-32 text-[#8978ef]"
              weight="duotone"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-8 sm:px-9">
            <h2 className="text-xl font-semibold tracking-tight text-[#111936]">
              Insights improve as you use the app
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#5f6a8a]">
              Your mood, journal, and breathing activity all feed this page from
              local storage.
            </p>
            <Link
              href="/breath"
              className="mt-5 inline-flex h-11 w-fit items-center gap-2 rounded-lg bg-[#725ff0] px-6 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(114,95,240,0.28)]"
            >
              <Leaf className="h-5 w-5" weight="fill" />
              Start an activity
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
