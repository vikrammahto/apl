'use client';

import type { Icon } from '@phosphor-icons/react';
import {
  Camera,
  CaretDown,
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

const dataActions = [
  {
    title: 'Backup your data',
    text: 'Securely back up your data to the cloud',
    icon: CloudArrowUp,
  },
  {
    title: 'Export journal',
    text: 'Download your journal entries',
    icon: DownloadSimple,
  },
];

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

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#44506d]">{label}</span>
      <span className="mt-2 flex h-14 items-center rounded-lg border border-[#dfe3ef] bg-white px-4 text-base font-medium text-[#5a6685]">
        {value}
      </span>
    </label>
  );
}

function ProfileCard() {
  return (
    <SectionCard>
      <CardHeader
        icon={User}
        title="Profile"
        subtitle="Manage how your account appears."
      />

      <div className="mt-8 grid gap-7 md:grid-cols-[120px_1fr] md:items-start">
        <div className="relative h-28 w-28">
          <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_45%_28%,#f7d8c4_0_24%,#c58b68_25%_50%,#66483c_51%_100%)] text-2xl font-semibold text-white shadow-[0_18px_36px_rgba(91,78,170,0.12)] ring-4 ring-[#f4f2ff]">
            VK
          </div>
          <button
            className="absolute right-0 bottom-1 grid h-9 w-9 place-items-center rounded-full border-4 border-white bg-[#eeeaff] text-[#725ff0] shadow-[0_12px_22px_rgba(91,78,170,0.14)]"
            aria-label="Change profile photo"
          >
            <Camera className="h-4 w-4" weight="bold" />
          </button>
        </div>

        <div className="space-y-5">
          <Field label="Full name" value="Vikram" />
          <Field label="Email address" value="vikram@email.com" />
        </div>
      </div>

      <div className="mt-7 border-t border-[#e5e8f2] pt-6">
        <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#eeeaff] px-6 text-sm font-semibold text-[#725ff0] transition hover:bg-[#e4ddff]">
          <PencilSimple className="h-5 w-5" weight="bold" />
          Edit profile
        </button>
      </div>
    </SectionCard>
  );
}

function PreferencesCard() {
  return (
    <SectionCard>
      <CardHeader
        icon={SlidersHorizontal}
        title="Preferences"
        subtitle="Customize your experience."
      />

      <div className="mt-8 divide-y divide-[#e5e8f2]">
        <div className="grid gap-4 py-1 pb-6 sm:grid-cols-[1fr_196px] sm:items-center">
          <div>
            <h3 className="text-base font-semibold text-[#111936]">Theme</h3>
            <p className="mt-1 text-sm leading-6 font-medium text-[#5f6a8a]">
              Choose your preferred theme
            </p>
          </div>
          <div className="grid h-12 grid-cols-2 rounded-lg border border-[#dfe3ef] bg-white p-1 text-sm font-semibold text-[#65708e]">
            <button className="rounded-md bg-[#eeeaff] text-[#725ff0]">
              Light
            </button>
            <button>Dark</button>
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
            className="relative h-9 w-16 rounded-full bg-[#6f56e8] shadow-inner"
            aria-label="Toggle notifications"
          >
            <span className="absolute top-1 right-1 h-7 w-7 rounded-full bg-white shadow-[0_4px_12px_rgba(67,78,113,0.18)]" />
          </button>
        </div>

        <div className="grid gap-4 pt-6 sm:grid-cols-[1fr_196px] sm:items-center">
          <div>
            <h3 className="text-base font-semibold text-[#111936]">
              Reminder time
            </h3>
            <p className="mt-1 text-sm leading-6 font-medium text-[#5f6a8a]">
              Daily reminder to pause and check in
            </p>
          </div>
          <button className="flex h-14 items-center justify-between rounded-lg border border-[#dfe3ef] bg-white px-4 text-base font-semibold text-[#5a6685]">
            7:00 PM
            <CaretDown className="h-5 w-5 text-[#65708e]" weight="bold" />
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

function DataPrivacyCard() {
  return (
    <SectionCard>
      <CardHeader
        icon={ShieldCheck}
        title="Data & privacy"
        subtitle="Manage your data and privacy."
      />

      <div className="mt-5 overflow-hidden rounded-lg border border-[#dfe3ef] bg-white">
        {dataActions.map((action) => (
          <button
            key={action.title}
            className="grid w-full grid-cols-[56px_1fr_28px] items-center gap-4 border-b border-[#e8ebf3] px-4 py-4 text-left last:border-b-0"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#eeeaff] text-[#725ff0]">
              <action.icon className="h-6 w-6" weight="bold" />
            </span>
            <span className="min-w-0">
              <span className="block text-base font-semibold text-[#111936]">
                {action.title}
              </span>
              <span className="mt-1 block text-sm leading-6 font-medium text-[#5f6a8a]">
                {action.text}
              </span>
            </span>
            <CaretRight className="h-5 w-5 text-[#65708e]" weight="bold" />
          </button>
        ))}
      </div>

      <p className="mt-6 flex items-center gap-3 text-sm font-medium text-[#65708e]">
        <LockSimple className="h-4 w-4" weight="bold" />
        Your data is private and encrypted.
      </p>
    </SectionCard>
  );
}

function DangerZoneCard() {
  return (
    <SectionCard className="border-[#f2d5d1] bg-[#fffafa]">
      <CardHeader
        icon={Warning}
        title="Danger zone"
        subtitle="Irreversible and permanent actions."
        danger
      />

      <button className="mt-8 grid w-full grid-cols-[64px_1fr_28px] items-center gap-4 rounded-lg border border-[#f4d9d4] bg-white px-4 py-5 text-left">
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
  );
}

export default function ProfilePage() {
  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-[#111936]">
          Profile & Settings
        </h1>
        <p className="mt-3 text-base font-medium text-[#5f6a8a]">
          Manage your account, preferences, and data.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <ProfileCard />
        <PreferencesCard />
        <DataPrivacyCard />
        <DangerZoneCard />
      </div>
    </div>
  );
}
