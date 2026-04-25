import Image from "next/image";
import { Bell, CaretDown, List, MagnifyingGlass } from "@phosphor-icons/react";

export function TopNav() {
  return (
    <header className="flex h-[88px] shrink-0 items-center justify-between border-b border-slate-100/60 shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] px-8 py-4 bg-[#FCFDFD] sticky top-0 z-50">
      <div className="flex items-center gap-4">
        
        <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <List className="h-[22px] w-[22px]" />
            </button>
            <h1 className="text-lg font-medium text-slate-800 hidden sm:block">Good morning, Vikram 💜</h1>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative hidden w-[300px] md:block border border-slate-200/80 rounded-full bg-slate-50/50">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <MagnifyingGlass className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full rounded-full bg-transparent py-2.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>
        
        <div className="h-6 w-[1px] bg-slate-200 hidden md:block"></div>
        
        <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="h-[22px] w-[22px] stroke-[1.5]" />
          <span className="absolute top-0 right-0.5 block h-2 w-2 rounded-full ring-2 ring-white bg-indigo-500"></span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full transition-colors border border-transparent hover:border-slate-100 -mr-2">
          <Image
            src="https://i.pravatar.cc/100?img=5"
            alt="Vikram"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-slate-700 hidden sm:block pl-1">Vikram</span>
          <CaretDown className="h-4 w-4 text-slate-400 hidden sm:block" />
        </div>
      </div>
    </header>
  );
}
