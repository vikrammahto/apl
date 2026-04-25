'use client';

import { FormEvent, useEffect, useState } from 'react';
import type { Icon } from '@phosphor-icons/react';
import {
  Camera,
  CaretRight,
  CloudArrowUp,
  DownloadSimple,
  LockSimple,
  PencilSimple,
  ShieldCheck,
  SlidersHorizontal,
  Trash,
  User,
  Warning,
} from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import {
  APP_STORAGE_KEY,
  createInitialAppStorage,
  getInitials,
} from '@/lib/storage';
import { useAppStorage } from '@/lib/use-app-storage';

function SectionCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-[#dfe3ef] bg-white p-5 shadow-[0_18px_50px_rgba(67,78,113,0.04)] sm:p-6 lg:p-7 ${className}`}
    >
      {children}
    </section>
  );
}

function CardHeader({
  icon: Icon,
  title,
  subtitle,
  danger = false,
}: {
  icon: Icon;
  title: string;
  subtitle: string;
  danger?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${
          danger ? 'bg-[#fff0ee] text-[#f05b4f]' : 'bg-[#eeeaff] text-[#725ff0]'
        }`}
      >
        <Icon className="h-6 w-6" weight="bold" />
      </span>
      <div className="min-w-0">
        <h2
          className={`text-lg leading-7 font-semibold tracking-tight ${
            danger ? 'text-[#6f2b27]' : 'text-[#111936]'
          }`}
        >
          {title}
        </h2>
        <p className="mt-1 text-sm leading-6 font-medium text-[#5f6a8a]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const { storage, updateStorage } = useAppStorage();
  const [draftName, setDraftName] = useState<string | null>(null);
  const [draftEmail, setDraftEmail] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const name = draftName ?? storage.profile.name;
  const email = draftEmail ?? storage.profile.email;

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      storage.preferences.activeTheme === 'dark',
    );
  }, [storage.preferences.activeTheme]);

  function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const safeName = name.trim() || 'Vikram';

    updateStorage((currentStorage) => ({
      ...currentStorage,
      auth: {
        ...currentStorage.auth,
        displayName: safeName,
      },
      profile: {
        ...currentStorage.profile,
        name: safeName,
        email: email.trim() || currentStorage.profile.email,
        avatarInitials: getInitials(safeName),
      },
    }));
    setDraftName(null);
    setDraftEmail(null);
    setMessage('Profile saved.');
  }

  function toggleReminder() {
    updateStorage((currentStorage) => ({
      ...currentStorage,
      preferences: {
        ...currentStorage.preferences,
        reminderEnabled: !currentStorage.preferences.reminderEnabled,
      },
    }));
  }

  function setTheme(theme: 'light' | 'dark') {
    updateStorage((currentStorage) => ({
      ...currentStorage,
      preferences: {
        ...currentStorage.preferences,
        activeTheme: theme,
      },
    }));
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(storage, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mindful-data.json';
    link.click();
    URL.revokeObjectURL(url);
    setMessage('Data export started.');
  }

  function backupData() {
    updateStorage((currentStorage) => ({
      ...currentStorage,
      preferences: {
        ...currentStorage.preferences,
      },
    }));
    setMessage('Local backup refreshed in this browser.');
  }

  function deleteAccount() {
    const confirmed = window.confirm(
      'Delete your account and all local Mindful data?',
    );

    if (!confirmed) {
      return;
    }

    window.localStorage.removeItem(APP_STORAGE_KEY);
    updateStorage(createInitialAppStorage());
    router.push('/auth');
  }

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[#111936]">
          Profile & Settings
        </h1>
        <p className="mt-3 text-base font-medium text-[#5f6a8a]">
          Manage your account, preferences, and data.
        </p>
        {message ? (
          <p className="mt-3 text-sm font-semibold text-[#4f9a62]">{message}</p>
        ) : null}
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <SectionCard>
          <CardHeader
            icon={User}
            title="Profile"
            subtitle="Manage how your account appears."
          />

          <form
            onSubmit={saveProfile}
            className="mt-8 grid gap-7 md:grid-cols-[120px_1fr] md:items-start"
          >
            <div className="relative h-28 w-28">
              <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_45%_28%,#f7d8c4_0_24%,#c58b68_25%_50%,#66483c_51%_100%)] text-2xl font-semibold text-white shadow-[0_18px_36px_rgba(91,78,170,0.12)] ring-4 ring-[#f4f2ff]">
                {storage.profile.avatarInitials}
              </div>
              <button
                type="button"
                onClick={() =>
                  setMessage('Initials update when your name changes.')
                }
                className="absolute right-0 bottom-1 grid h-9 w-9 place-items-center rounded-full border-4 border-white bg-[#eeeaff] text-[#725ff0] shadow-[0_12px_22px_rgba(91,78,170,0.14)]"
                aria-label="Change profile photo"
              >
                <Camera className="h-4 w-4" weight="bold" />
              </button>
            </div>

            <div className="space-y-5">
              <label className="block">
                <span className="text-sm font-semibold text-[#44506d]">
                  Full name
                </span>
                <input
                  value={name}
                  onChange={(event) => setDraftName(event.target.value)}
                  className="mt-2 flex h-14 w-full items-center rounded-lg border border-[#dfe3ef] bg-white px-4 text-base font-medium text-[#111936] outline-none focus:border-[#725ff0] focus:ring-4 focus:ring-[#eeeaff]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-[#44506d]">
                  Email address
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setDraftEmail(event.target.value)}
                  className="mt-2 flex h-14 w-full items-center rounded-lg border border-[#dfe3ef] bg-white px-4 text-base font-medium text-[#111936] outline-none focus:border-[#725ff0] focus:ring-4 focus:ring-[#eeeaff]"
                />
              </label>
              <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#eeeaff] px-6 text-sm font-semibold text-[#725ff0] transition hover:bg-[#e4ddff]">
                <PencilSimple className="h-5 w-5" weight="bold" />
                Save profile
              </button>
            </div>
          </form>
        </SectionCard>

        <SectionCard>
          <CardHeader
            icon={SlidersHorizontal}
            title="Preferences"
            subtitle="Customize your experience."
          />

          <div className="mt-8 divide-y divide-[#e5e8f2]">
            <div className="grid gap-4 py-1 pb-6 sm:grid-cols-[1fr_196px] sm:items-center">
              <div>
                <h3 className="text-base font-semibold text-[#111936]">
                  Theme
                </h3>
                <p className="mt-1 text-sm leading-6 font-medium text-[#5f6a8a]">
                  Choose your preferred theme
                </p>
              </div>
              <div className="grid h-12 grid-cols-2 rounded-lg border border-[#dfe3ef] bg-white p-1 text-sm font-semibold text-[#65708e]">
                {(['light', 'dark'] as const).map((theme) => (
                  <button
                    key={theme}
                    type="button"
                    onClick={() => setTheme(theme)}
                    className={
                      storage.preferences.activeTheme === theme
                        ? 'rounded-md bg-[#eeeaff] text-[#725ff0]'
                        : ''
                    }
                  >
                    {theme === 'light' ? 'Light' : 'Dark'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 py-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h3 className="text-base font-semibold text-[#111936]">
                  Notifications
                </h3>
                <p className="mt-1 text-sm leading-6 font-medium text-[#5f6a8a]">
                  Receive helpful reminders and updates
                </p>
              </div>
              <button
                type="button"
                onClick={toggleReminder}
                className={`relative h-9 w-16 rounded-full shadow-inner ${
                  storage.preferences.reminderEnabled
                    ? 'bg-[#6f56e8]'
                    : 'bg-[#dfe3ef]'
                }`}
                aria-label="Toggle notifications"
              >
                <span
                  className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow-[0_4px_12px_rgba(67,78,113,0.18)] transition ${
                    storage.preferences.reminderEnabled ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>

            <label className="grid gap-4 pt-6 sm:grid-cols-[1fr_196px] sm:items-center">
              <span>
                <span className="block text-base font-semibold text-[#111936]">
                  Reminder time
                </span>
                <span className="mt-1 block text-sm leading-6 font-medium text-[#5f6a8a]">
                  Daily reminder to pause and check in
                </span>
              </span>
              <input
                type="time"
                value={storage.preferences.reminderTime}
                onChange={(event) =>
                  updateStorage((currentStorage) => ({
                    ...currentStorage,
                    preferences: {
                      ...currentStorage.preferences,
                      reminderTime: event.target.value,
                    },
                  }))
                }
                className="flex h-14 rounded-lg border border-[#dfe3ef] bg-white px-4 text-base font-semibold text-[#5a6685] outline-none"
              />
            </label>
          </div>
        </SectionCard>

        <SectionCard>
          <CardHeader
            icon={ShieldCheck}
            title="Data & privacy"
            subtitle="Manage your data and privacy."
          />

          <div className="mt-5 overflow-hidden rounded-lg border border-[#dfe3ef] bg-white">
            <button
              type="button"
              onClick={backupData}
              className="grid w-full grid-cols-[56px_1fr_28px] items-center gap-4 border-b border-[#e8ebf3] px-4 py-4 text-left"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#eeeaff] text-[#725ff0]">
                <CloudArrowUp className="h-6 w-6" weight="bold" />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-semibold text-[#111936]">
                  Backup your data
                </span>
                <span className="mt-1 block text-sm leading-6 font-medium text-[#5f6a8a]">
                  Refresh the local browser backup
                </span>
              </span>
              <CaretRight className="h-5 w-5 text-[#65708e]" weight="bold" />
            </button>
            <button
              type="button"
              onClick={exportData}
              className="grid w-full grid-cols-[56px_1fr_28px] items-center gap-4 px-4 py-4 text-left"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#eeeaff] text-[#725ff0]">
                <DownloadSimple className="h-6 w-6" weight="bold" />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-semibold text-[#111936]">
                  Export journal
                </span>
                <span className="mt-1 block text-sm leading-6 font-medium text-[#5f6a8a]">
                  Download all local Mindful data
                </span>
              </span>
              <CaretRight className="h-5 w-5 text-[#65708e]" weight="bold" />
            </button>
          </div>

          <p className="mt-6 flex items-center gap-3 text-sm font-medium text-[#65708e]">
            <LockSimple className="h-4 w-4" weight="bold" />
            Your data stays in this browser&apos;s local storage.
          </p>
        </SectionCard>

        <SectionCard className="border-[#f2d5d1] bg-[#fffafa]">
          <CardHeader
            icon={Warning}
            title="Danger zone"
            subtitle="Irreversible and permanent actions."
            danger
          />

          <button
            type="button"
            onClick={deleteAccount}
            className="mt-8 grid w-full grid-cols-[64px_1fr_28px] items-center gap-4 rounded-lg border border-[#f4d9d4] bg-white px-4 py-5 text-left"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#fff0ee] text-[#f05b4f]">
              <Trash className="h-7 w-7" weight="bold" />
            </span>
            <span className="min-w-0">
              <span className="block text-base font-semibold text-[#6f2b27]">
                Delete account
              </span>
              <span className="mt-1 block text-sm leading-6 font-medium text-[#5f6a8a]">
                Permanently delete your account and all your data.
              </span>
            </span>
            <CaretRight className="h-5 w-5 text-[#f05b4f]" weight="bold" />
          </button>
        </SectionCard>
      </div>
    </div>
  );
}
