'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  LockKey,
  Smiley,
  SmileyMeh,
  SmileySad,
  Trash,
} from '@phosphor-icons/react';
import { useAppStorage } from '@/lib/use-app-storage';
import { type Mood, moodLabels, moodScores } from '@/lib/storage';

const moods: Array<{
  value: Mood;
  icon: typeof Smiley;
  tone: string;
}> = [
  { value: 'great', icon: Smiley, tone: 'bg-emerald-100 text-emerald-600' },
  { value: 'good', icon: Smiley, tone: 'bg-blue-100 text-blue-600' },
  { value: 'okay', icon: SmileyMeh, tone: 'bg-amber-100 text-amber-600' },
  { value: 'low', icon: SmileySad, tone: 'bg-orange-100 text-orange-600' },
  {
    value: 'really-low',
    icon: SmileySad,
    tone: 'bg-violet-100 text-violet-600',
  },
];

function dateLabel(value: string) {
  return new Intl.DateTimeFormat('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

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
  const { storage, updateStorage } = useAppStorage();
  const [filterNow] = useState(() => Date.now());
  const [showComposer, setShowComposer] = useState(false);
  const [selectedMood, setSelectedMood] = useState<Mood>('okay');
  const [note, setNote] = useState('');
  const [range, setRange] = useState<'week' | 'month'>('week');

  const entries = useMemo(() => {
    const days = range === 'week' ? 7 : 30;
    const since = filterNow - days * 24 * 60 * 60 * 1000;

    return storage.moodCheckIns
      .filter((entry) => new Date(entry.createdAt).getTime() >= since)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }, [filterNow, range, storage.moodCheckIns]);

  const averageMood =
    entries.length > 0
      ? entries.reduce((sum, entry) => sum + moodScores[entry.mood], 0) /
        entries.length
      : 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const now = new Date().toISOString();
    const newEntry = {
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
      mood: selectedMood,
      note: note.trim(),
      tags: [],
    };

    updateStorage((currentStorage) => ({
      ...currentStorage,
      moodCheckIns: [newEntry, ...currentStorage.moodCheckIns],
    }));
    setNote('');
  }

  function removeCheckIn(id: string) {
    updateStorage((currentStorage) => ({
      ...currentStorage,
      moodCheckIns: currentStorage.moodCheckIns.filter(
        (entry) => entry.id !== id,
      ),
    }));
  }

  if (storage.moodCheckIns.length === 0 && !showComposer) {
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
            {(['week', 'month'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setRange(item)}
                className={
                  range === item ? 'rounded-lg bg-[#eeeaff] text-[#725ff0]' : ''
                }
              >
                {item === 'week' ? 'Week' : 'Month'}
              </button>
            ))}
          </div>
        </div>

        <section className="rounded-xl border border-[#dfe3ef] bg-white px-5 py-10 shadow-[0_18px_50px_rgba(67,78,113,0.04)] sm:px-10 lg:py-12">
          <MoodIllustration />
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111936] sm:text-3xl">
              Start by checking in with yourself
            </h2>
            <p className="mx-auto mt-4 max-w-[540px] text-base leading-7 font-medium text-[#5f6a8a] sm:text-lg">
              Start your first mood check-in to build awareness and understand
              how you&apos;re feeling.
            </p>
            <button
              type="button"
              onClick={() => setShowComposer(true)}
              className="mt-7 inline-flex h-14 items-center gap-3 rounded-lg bg-[#6f56e8] px-9 text-base font-semibold text-white shadow-[0_18px_36px_rgba(111,86,232,0.25)] transition hover:bg-[#6049d4]"
            >
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
          {(['week', 'month'] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRange(item)}
              className={
                range === item ? 'rounded-lg bg-[#eeeaff] text-[#725ff0]' : ''
              }
            >
              {item === 'week' ? 'Week' : 'Month'}
            </button>
          ))}
        </div>
      </div>

      <section className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-[#dfe3ef] bg-white p-5 shadow-[0_18px_50px_rgba(67,78,113,0.04)] sm:p-7"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#111936]">
              How are you feeling today?
            </h2>
            <p className="mt-2 text-base font-medium text-[#5f6a8a]">
              There&apos;s no right answer. Pick what feels closest.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-5">
            {moods.map((mood) => {
              const Icon = mood.icon;
              const active = selectedMood === mood.value;

              return (
                <button
                  key={mood.value}
                  type="button"
                  onClick={() => setSelectedMood(mood.value)}
                  className={`rounded-xl border p-4 text-center transition hover:-translate-y-0.5 ${
                    active
                      ? 'border-[#725ff0] bg-[#fcfbff] shadow-[0_14px_30px_rgba(114,95,240,0.14)]'
                      : 'border-[#e5e8f2] bg-white'
                  }`}
                >
                  <span
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-full ${mood.tone}`}
                  >
                    <Icon className="h-8 w-8" weight="duotone" />
                  </span>
                  <span className="mt-3 block text-sm font-semibold text-[#4f5b7a]">
                    {moodLabels[mood.value]}
                  </span>
                </button>
              );
            })}
          </div>

          <label className="mt-7 block">
            <span className="text-sm font-semibold text-[#44506d]">
              Add a note
            </span>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              className="mt-2 min-h-32 w-full rounded-lg border border-[#dfe3ef] bg-white p-4 text-sm font-medium text-[#111936] transition outline-none placeholder:text-[#9aa3ba] focus:border-[#725ff0] focus:ring-4 focus:ring-[#eeeaff]"
              placeholder="What is behind this feeling?"
            />
          </label>

          <button className="mt-5 inline-flex h-12 items-center gap-3 rounded-lg bg-[#6f56e8] px-7 text-base font-semibold text-white shadow-[0_18px_36px_rgba(111,86,232,0.25)] transition hover:bg-[#6049d4]">
            <Smiley className="h-5 w-5" />
            Save check-in
          </button>
        </form>

        <div className="rounded-xl border border-[#dfe3ef] bg-white p-5 shadow-[0_18px_50px_rgba(67,78,113,0.04)]">
          <p className="text-sm font-semibold tracking-[0.08em] text-[#697492] uppercase">
            {range === 'week' ? 'This week' : 'This month'}
          </p>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-[#111936]">
            {entries.length}
          </p>
          <p className="mt-2 text-sm font-medium text-[#5f6a8a]">
            check-ins saved
          </p>
          <div className="mt-6 rounded-lg bg-[#fcfbff] p-4">
            <p className="text-sm font-semibold text-[#5f6a8a]">Average mood</p>
            <p className="mt-2 text-2xl font-semibold text-[#725ff0]">
              {averageMood ? `${averageMood.toFixed(1)} / 5` : 'No data yet'}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-[#dfe3ef] bg-white p-5 shadow-[0_18px_50px_rgba(67,78,113,0.04)]">
        <h2 className="text-lg font-semibold text-[#111936]">
          Recent check-ins
        </h2>
        <div className="mt-4 space-y-3">
          {entries.length === 0 ? (
            <p className="rounded-lg bg-[#fcfbff] p-4 text-sm font-medium text-[#65708e]">
              Your saved moods will appear here.
            </p>
          ) : (
            entries.map((entry) => (
              <article
                key={entry.id}
                className="grid gap-3 rounded-lg border border-[#e8ebf3] p-4 sm:grid-cols-[1fr_auto] sm:items-start"
              >
                <div>
                  <p className="font-semibold text-[#111936]">
                    {moodLabels[entry.mood]}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#697492]">
                    {dateLabel(entry.createdAt)}
                  </p>
                  {entry.note ? (
                    <p className="mt-3 text-sm leading-6 text-[#4f5b7a]">
                      {entry.note}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => removeCheckIn(entry.id)}
                  className="grid h-10 w-10 place-items-center rounded-lg text-[#f05b4f] hover:bg-[#fff0ee]"
                  aria-label="Delete check-in"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </article>
            ))
          )}
        </div>
      </section>

      <p className="flex items-center gap-3 text-sm font-medium text-[#65708e]">
        <LockKey className="h-4 w-4" />
        Your data is private and secure. You&apos;re in control.
      </p>
    </div>
  );
}
