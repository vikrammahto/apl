'use client';

import {
  Bell,
  BookOpen,
  CaretDown,
  ChartLineUp,
  FlowerLotus,
  GearSix,
  Heart,
  Leaf,
  MagnifyingGlass,
  Question,
  SquaresFour,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', icon: SquaresFour, href: '/dashboard' },
  { label: 'Journal', icon: BookOpen, href: '/journal' },
  { label: 'Activities', icon: FlowerLotus, href: '/breath' },
  { label: 'Insights', icon: ChartLineUp, href: '/insights' },
];

const pageTitles: Record<string, string> = {
  '/dashboard': 'Good morning, Vikram',
  '/journal': 'Good morning, Vikram',
  '/breath': 'Good morning, Vikram',
  '/insights': 'Your insights',
  '/profile': 'Settings',
};

export function ProtectedShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? 'Mindful';

  return (
    <main className="min-h-screen bg-[#fbfcff] text-[#111936]">
      <div className="mx-auto flex min-h-screen max-w-[1536px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(80,89,126,0.08)]">
        <aside className="hidden w-[264px] shrink-0 flex-col justify-between bg-gradient-to-b from-white via-[#fbfaff] to-[#f7f8ff] px-6 py-8 lg:flex">
          <div>
            <Link href="/dashboard" className="mb-12 flex items-center gap-3">
              <Leaf className="h-10 w-10 text-indigo-500" weight="fill" />
              <span className="text-[28px] font-semibold tracking-tight text-[#111936]">
                Mindful
              </span>
            </Link>

            <nav className="space-y-4">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex h-[62px] w-full items-center gap-4 rounded-xl px-4 text-left text-base font-medium transition ${
                      active
                        ? 'bg-violet-100/75 text-violet-600'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-[#111936]'
                    }`}
                  >
                    <item.icon
                      className="h-6 w-6"
                      weight={active ? 'fill' : 'regular'}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-8">
            <section className="rounded-xl bg-white/70 px-7 py-6 text-center shadow-[0_20px_50px_rgba(91,78,170,0.08)]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-violet-500">
                <Heart className="h-8 w-8" weight="fill" />
              </div>
              <h2 className="text-base font-semibold text-[#111936]">
                You&apos;re not alone
              </h2>
              <p className="mx-auto mt-2 max-w-36 text-sm leading-6 text-slate-500">
                It&apos;s okay to take your time.
              </p>
              <Link
                href="/auth"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600"
              >
                Need support?
                <Question className="h-4 w-4" />
              </Link>
            </section>

            <Link
              href="/profile"
              className="flex items-center gap-4 px-3 text-base font-medium text-slate-500 transition hover:text-[#111936]"
            >
              <GearSix className="h-6 w-6" />
              Settings
            </Link>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-[93px] shrink-0 items-center justify-between border-b border-slate-200/80 bg-white px-5 sm:px-8">
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold tracking-tight text-[#111936] sm:text-2xl">
                {title}
                {pathname !== '/breath' &&
                pathname !== '/insights' &&
                pathname !== '/profile' ? (
                  <span className="text-violet-500"> ♥</span>
                ) : null}
              </p>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <label className="relative hidden md:block">
                <MagnifyingGlass className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  className="h-12 w-[280px] rounded-2xl border border-slate-200 bg-white pr-4 pl-12 text-sm text-slate-600 transition outline-none placeholder:text-slate-400 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 xl:w-[310px]"
                  placeholder="Search anything..."
                />
              </label>
              <button
                className="relative flex h-11 w-11 items-center justify-center text-slate-600"
                aria-label="Notifications"
              >
                <Bell className="h-7 w-7" />
                <span className="absolute top-1.5 right-2 h-2.5 w-2.5 rounded-full bg-violet-600 ring-2 ring-white" />
              </button>
              <Link href="/profile" className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#f5d6bd] via-[#b98768] to-[#503a30] text-sm font-semibold text-white ring-4 ring-slate-100">
                  VK
                </span>
                <span className="hidden text-base font-medium text-slate-700 sm:inline">
                  Vikram
                </span>
                <CaretDown className="hidden h-4 w-4 text-slate-500 sm:block" />
              </Link>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-5 sm:p-8">{children}</div>
        </section>
      </div>
    </main>
  );
}
