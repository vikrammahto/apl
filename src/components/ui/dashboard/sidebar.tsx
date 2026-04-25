import {
  ArrowSquareOut,
  BookOpen,
  ChartLineUp,
  GearSix,
  Heart,
  Leaf,
  SquaresFour,
  Wind,
} from "@phosphor-icons/react";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col justify-between border-r border-slate-100 bg-[#FCFDFD] px-6 py-8 lg:flex h-screen sticky top-0 overflow-y-auto">
      <div className="space-y-10">
        <div className="flex items-center gap-2 pl-2">
          <div className="text-indigo-500">
            <Leaf className="h-6 w-6" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-800">Mindful</span>
        </div>

        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-xl bg-indigo-50/80 px-4 py-3 text-sm font-semibold text-indigo-600 transition-colors">
            <SquaresFour className="h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/journal" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900">
            <BookOpen className="h-5 w-5" />
            Journal
          </Link>
          <Link href="/breath" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900">
            <Wind className="h-5 w-5" />
            Activities
          </Link>
          <Link href="/insights" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900">
            <ChartLineUp className="h-5 w-5" />
            Insights
          </Link>
        </nav>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl bg-gradient-to-b from-[#F2F5FC] to-[#FAFBFC] p-5 text-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-indigo-50/50">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
            <Heart className="h-5 w-5 text-indigo-400 fill-indigo-100" />
          </div>
          <h4 className="mb-1 text-sm font-semibold text-slate-800">You&apos;re not alone</h4>
          <p className="mb-4 text-xs leading-relaxed text-slate-500">It&apos;s okay to take your time.</p>
          <Link href="/auth" className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-indigo-600 shadow-sm transition-all hover:bg-slate-50 hover:shadow">
            Get support <ArrowSquareOut className="h-3 w-3" />
          </Link>
        </div>

        <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900">
          <GearSix className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
