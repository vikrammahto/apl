'use client';

import { FormEvent, useMemo, useState } from 'react';
import {
  BookOpen,
  LockKey,
  MagnifyingGlass,
  PencilSimple,
  SlidersHorizontal,
  Trash,
} from '@phosphor-icons/react';
import { useAppStorage } from '@/lib/use-app-storage';
import { type JournalEntry, type Mood, moodLabels } from '@/lib/storage';

const moodOptions: Mood[] = ['great', 'good', 'okay', 'low', 'really-low'];

function dateLabel(value: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

function JournalIllustration() {
  return (
    <div className="relative mx-auto h-[270px] w-full max-w-[620px] sm:h-[360px]">
      <div className="absolute top-6 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-[#f0edff] sm:h-80 sm:w-80" />
      <div className="absolute top-20 left-[13%] h-5 w-28 rounded-full bg-[#eeeaff]" />
      <div className="absolute top-24 right-[8%] h-5 w-32 rounded-full bg-[#eeeaff]" />
      <div className="absolute top-12 left-[21%] text-2xl text-[#b8adfb]">
        ✦
      </div>
      <div className="absolute top-20 right-[19%] text-2xl text-[#b8adfb]">
        ✦
      </div>

      <svg
        viewBox="0 0 620 330"
        className="absolute inset-x-0 bottom-0 h-[260px] w-full sm:h-[320px]"
        aria-hidden="true"
      >
        <ellipse
          cx="306"
          cy="274"
          rx="255"
          ry="20"
          fill="#e4e0fb"
          opacity="0.72"
        />
        <g transform="translate(184 92)">
          <path
            d="M32 32 C81 12 113 28 128 54 L128 205 C105 178 70 170 32 190 Z"
            fill="#fff"
            stroke="#c8c0fb"
            strokeWidth="6"
          />
          <path
            d="M128 54 C151 28 185 12 232 32 L232 190 C190 169 154 178 128 205 Z"
            fill="#fff"
            stroke="#c8c0fb"
            strokeWidth="6"
          />
          <path d="M128 54 L128 205" stroke="#9d8ff3" strokeWidth="6" />
          <path
            d="M62 72 H109 M62 100 H109 M62 128 H109 M151 74 H203 M151 102 H203 M151 130 H203"
            stroke="#ded9fb"
            strokeLinecap="round"
            strokeWidth="5"
          />
          <path
            d="M158 28 H185 V82 L172 70 L158 82 Z"
            fill="#8b78ef"
            opacity="0.8"
          />
        </g>
        <g transform="translate(392 120) rotate(14)">
          <rect x="0" y="0" width="20" height="150" rx="10" fill="#8b78ef" />
          <rect x="4" y="10" width="12" height="118" rx="6" fill="#b7adfb" />
          <path d="M0 144 L10 168 L20 144 Z" fill="#7767ec" />
        </g>
        <g transform="translate(94 162)">
          <rect x="0" y="58" width="54" height="40" rx="8" fill="#ddd6fb" />
          <path
            d="M8 58 C8 20 45 20 45 58"
            fill="none"
            stroke="#8bc0b9"
            strokeWidth="5"
          />
          <ellipse
            cx="24"
            cy="31"
            rx="12"
            ry="28"
            fill="#7eb4ad"
            transform="rotate(-28 24 31)"
          />
          <ellipse
            cx="49"
            cy="40"
            rx="12"
            ry="28"
            fill="#9bcac4"
            transform="rotate(28 49 40)"
          />
        </g>
        <g transform="translate(492 175)">
          <path
            d="M0 20 H88 V72 C88 92 70 108 44 108 C18 108 0 92 0 72 Z"
            fill="#c7bcfb"
          />
          <path
            d="M88 39 C124 34 124 83 88 78"
            fill="none"
            stroke="#c7bcfb"
            strokeWidth="14"
          />
          <ellipse cx="44" cy="20" rx="44" ry="12" fill="#a99cf6" />
        </g>
      </svg>
    </div>
  );
}

function EntriesEmptyPanel({
  onStart,
  query,
  onQueryChange,
}: {
  onStart: () => void;
  query: string;
  onQueryChange: (value: string) => void;
}) {
  return (
    <section className="flex min-h-[520px] flex-col rounded-xl border border-[#dfe3ef] bg-white shadow-[0_18px_50px_rgba(67,78,113,0.04)] lg:min-h-[690px]">
      <div className="flex items-center gap-4 p-4">
        <label className="relative min-w-0 flex-1">
          <MagnifyingGlass className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[#7d88a6]" />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            className="h-12 w-full rounded-lg border border-[#dfe3ef] bg-white pr-4 pl-12 text-sm font-medium text-[#5f6a8a] outline-none placeholder:text-[#a2aac0]"
            placeholder="Search entries..."
          />
        </label>
        <button
          type="button"
          onClick={onStart}
          className="grid h-12 w-12 shrink-0 place-items-center text-[#65708e]"
          aria-label="Filter entries"
        >
          <SlidersHorizontal className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-[#eeeaff] text-[#725ff0]">
          <BookOpen className="h-11 w-11" />
        </span>
        <h2 className="mt-5 text-lg font-semibold text-[#111936]">
          No journal entries yet
        </h2>
        <p className="mt-2 text-sm font-medium text-[#65708e]">
          Your entries will appear here.
        </p>
      </div>
    </section>
  );
}

export function JournalEmptyState() {
  const { storage, updateStorage } = useAppStorage();
  const [showComposer, setShowComposer] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedMood, setSelectedMood] = useState<Mood | 'all'>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [mood, setMood] = useState<Mood>('okay');
  const [desiredMood, setDesiredMood] = useState<Mood>('good');
  const [note, setNote] = useState('');
  const [tags, setTags] = useState('');

  const entries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return storage.journalEntries
      .filter((entry) => {
        const matchesMood =
          selectedMood === 'all' || entry.mood === selectedMood;
        const matchesQuery =
          normalizedQuery.length === 0 ||
          entry.note.toLowerCase().includes(normalizedQuery) ||
          entry.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

        return matchesMood && matchesQuery;
      })
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
  }, [query, selectedMood, storage.journalEntries]);

  const selectedEntry =
    entries.find((entry) => entry.id === editingId) ?? entries[0];

  function resetForm() {
    setShowComposer(true);
    setEditingId(null);
    setMood('okay');
    setDesiredMood('good');
    setNote('');
    setTags('');
  }

  function editEntry(entry: JournalEntry) {
    setShowComposer(true);
    setEditingId(entry.id);
    setMood(entry.mood);
    setDesiredMood(entry.desiredMood ?? 'good');
    setNote(entry.note);
    setTags(entry.tags.join(', '));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const now = new Date().toISOString();
    const parsedTags = tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!note.trim()) {
      return;
    }

    updateStorage((currentStorage) => {
      if (editingId) {
        return {
          ...currentStorage,
          journalEntries: currentStorage.journalEntries.map((entry) =>
            entry.id === editingId
              ? {
                  ...entry,
                  updatedAt: now,
                  mood,
                  desiredMood,
                  note: note.trim(),
                  tags: parsedTags,
                }
              : entry,
          ),
        };
      }

      const newEntry: JournalEntry = {
        id: crypto.randomUUID(),
        createdAt: now,
        updatedAt: now,
        mood,
        desiredMood,
        note: note.trim(),
        tags: parsedTags,
      };

      return {
        ...currentStorage,
        journalEntries: [newEntry, ...currentStorage.journalEntries],
      };
    });

    resetForm();
    setShowComposer(false);
  }

  function removeEntry(id: string) {
    updateStorage((currentStorage) => ({
      ...currentStorage,
      journalEntries: currentStorage.journalEntries.filter(
        (entry) => entry.id !== id,
      ),
    }));

    if (editingId === id) {
      resetForm();
    }
  }

  if (storage.journalEntries.length === 0 && !showComposer) {
    return (
      <div className="space-y-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#111936]">
              Journal
            </h1>
            <p className="mt-3 text-base font-medium text-[#5f6a8a]">
              A safe space for your thoughts.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowComposer(true)}
            className="inline-flex h-12 w-fit items-center gap-3 rounded-lg bg-[#6f56e8] px-7 text-base font-semibold text-white shadow-[0_18px_36px_rgba(111,86,232,0.25)] transition hover:bg-[#6049d4]"
          >
            <PencilSimple className="h-5 w-5" />
            New entry
          </button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
          <EntriesEmptyPanel
            onStart={() => setShowComposer(true)}
            query={query}
            onQueryChange={setQuery}
          />
          <section className="flex min-h-[600px] flex-col items-center justify-center rounded-xl border border-[#dfe3ef] bg-white px-5 py-10 text-center shadow-[0_18px_50px_rgba(67,78,113,0.04)] lg:min-h-[690px]">
            <JournalIllustration />
            <h2 className="max-w-[440px] text-2xl leading-tight font-semibold tracking-tight text-[#111936] sm:text-3xl">
              Your thoughts deserve a place to land
            </h2>
            <p className="mx-auto mt-5 max-w-[470px] text-base leading-7 font-medium text-[#5f6a8a] sm:text-lg">
              Write freely, reflect deeply, and let your mind feel a little
              lighter.
            </p>
            <button
              type="button"
              onClick={() => setShowComposer(true)}
              className="mt-7 inline-flex h-14 items-center gap-3 rounded-lg bg-[#6f56e8] px-8 text-base font-semibold text-white shadow-[0_18px_36px_rgba(111,86,232,0.25)] transition hover:bg-[#6049d4]"
            >
              <PencilSimple className="h-5 w-5" />
              Write your first entry
            </button>
          </section>
        </div>

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
            Journal
          </h1>
          <p className="mt-3 text-base font-medium text-[#5f6a8a]">
            A safe space for your thoughts.
          </p>
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="inline-flex h-12 w-fit items-center gap-3 rounded-lg bg-[#6f56e8] px-7 text-base font-semibold text-white shadow-[0_18px_36px_rgba(111,86,232,0.25)] transition hover:bg-[#6049d4]"
        >
          <PencilSimple className="h-5 w-5" />
          New entry
        </button>
      </div>

      <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
        <section className="flex min-h-[520px] flex-col rounded-xl border border-[#dfe3ef] bg-white shadow-[0_18px_50px_rgba(67,78,113,0.04)]">
          <div className="flex items-center gap-4 p-4">
            <label className="relative min-w-0 flex-1">
              <MagnifyingGlass className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[#7d88a6]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-12 w-full rounded-lg border border-[#dfe3ef] bg-white pr-4 pl-12 text-sm font-medium text-[#5f6a8a] outline-none placeholder:text-[#a2aac0] focus:border-[#725ff0] focus:ring-4 focus:ring-[#eeeaff]"
                placeholder="Search entries..."
              />
            </label>
            <select
              value={selectedMood}
              onChange={(event) =>
                setSelectedMood(event.target.value as Mood | 'all')
              }
              className="h-12 rounded-lg border border-[#dfe3ef] bg-white px-3 text-sm font-semibold text-[#65708e] outline-none"
              aria-label="Filter entries"
            >
              <option value="all">All</option>
              {moodOptions.map((option) => (
                <option key={option} value={option}>
                  {moodLabels[option]}
                </option>
              ))}
            </select>
            <SlidersHorizontal className="hidden h-6 w-6 text-[#65708e] sm:block" />
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 pt-0">
            {entries.length === 0 ? (
              <div className="flex min-h-80 flex-col items-center justify-center px-6 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#eeeaff] text-[#725ff0]">
                  <BookOpen className="h-11 w-11" />
                </span>
                <h2 className="mt-5 text-lg font-semibold text-[#111936]">
                  No journal entries yet
                </h2>
                <p className="mt-2 text-sm font-medium text-[#65708e]">
                  Write your first note to begin.
                </p>
              </div>
            ) : (
              entries.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => editEntry(entry)}
                  className={`w-full rounded-lg border p-4 text-left transition hover:border-[#c8c0fb] ${
                    selectedEntry?.id === entry.id
                      ? 'border-[#725ff0] bg-[#fcfbff]'
                      : 'border-[#e8ebf3] bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-semibold text-[#111936]">
                      {moodLabels[entry.mood]}
                    </span>
                    <span className="text-xs font-semibold text-[#7d88a6]">
                      {dateLabel(entry.updatedAt)}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#5f6a8a]">
                    {entry.note}
                  </p>
                  {entry.tags.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#eeeaff] px-2.5 py-1 text-xs font-semibold text-[#725ff0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </button>
              ))
            )}
          </div>
        </section>

        <section className="rounded-xl border border-[#dfe3ef] bg-white p-5 shadow-[0_18px_50px_rgba(67,78,113,0.04)] sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#111936]">
                {editingId ? 'Edit entry' : 'Write a journal entry'}
              </h2>
              <p className="mt-2 text-base font-medium text-[#5f6a8a]">
                Capture what happened, how it felt, and what you want next.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span className="text-sm font-semibold text-[#44506d]">
                  Current mood
                </span>
                <select
                  value={mood}
                  onChange={(event) => setMood(event.target.value as Mood)}
                  className="mt-2 h-12 w-full rounded-lg border border-[#dfe3ef] bg-white px-4 text-sm font-semibold text-[#5a6685] outline-none"
                >
                  {moodOptions.map((option) => (
                    <option key={option} value={option}>
                      {moodLabels[option]}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="text-sm font-semibold text-[#44506d]">
                  Desired mood
                </span>
                <select
                  value={desiredMood}
                  onChange={(event) =>
                    setDesiredMood(event.target.value as Mood)
                  }
                  className="mt-2 h-12 w-full rounded-lg border border-[#dfe3ef] bg-white px-4 text-sm font-semibold text-[#5a6685] outline-none"
                >
                  {moodOptions.map((option) => (
                    <option key={option} value={option}>
                      {moodLabels[option]}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-[#44506d]">
                Reflection
              </span>
              <textarea
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="mt-2 min-h-[260px] w-full rounded-lg border border-[#dfe3ef] bg-white p-4 text-base leading-7 text-[#111936] outline-none placeholder:text-[#9aa3ba] focus:border-[#725ff0] focus:ring-4 focus:ring-[#eeeaff]"
                placeholder="Let the thought land here..."
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#44506d]">Tags</span>
              <input
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                className="mt-2 h-12 w-full rounded-lg border border-[#dfe3ef] bg-white px-4 text-sm font-medium text-[#111936] outline-none placeholder:text-[#9aa3ba]"
                placeholder="sleep, work, family"
              />
            </label>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex h-12 items-center gap-3 rounded-lg bg-[#6f56e8] px-7 text-base font-semibold text-white shadow-[0_18px_36px_rgba(111,86,232,0.25)] transition hover:bg-[#6049d4]">
                <PencilSimple className="h-5 w-5" />
                {editingId ? 'Save changes' : 'Save entry'}
              </button>
              {editingId ? (
                <button
                  type="button"
                  onClick={() => removeEntry(editingId)}
                  className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#f4d9d4] px-5 text-sm font-semibold text-[#f05b4f]"
                >
                  <Trash className="h-5 w-5" />
                  Delete
                </button>
              ) : null}
            </div>
          </form>
        </section>
      </div>

      <p className="flex items-center gap-3 text-sm font-medium text-[#65708e]">
        <LockKey className="h-4 w-4" />
        Your data is private and secure. You&apos;re in control.
      </p>
    </div>
  );
}
