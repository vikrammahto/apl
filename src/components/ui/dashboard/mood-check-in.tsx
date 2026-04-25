import { LockKey, Smiley, SmileyMeh, SmileySad } from "@phosphor-icons/react";

export function MoodCheckIn() {
  const moods = [
    { label: "Great", icon: <Smiley className="h-[34px] w-[34px]" />, color: "text-emerald-500", bg: "bg-emerald-100/50", border: "hover:border-emerald-200 hover:bg-emerald-50/30" },
    { label: "Good", icon: <Smiley className="h-[34px] w-[34px] opacity-80" />, color: "text-blue-500", bg: "bg-blue-100/50", border: "hover:border-blue-200 hover:bg-blue-50/30" },
    { label: "Okay", icon: <SmileyMeh className="h-[34px] w-[34px]" />, color: "text-amber-500", bg: "bg-amber-100/50", border: "hover:border-amber-200 hover:bg-amber-50/30" },
    { label: "Low", icon: <SmileySad className="h-[34px] w-[34px] opacity-80" />, color: "text-orange-500", bg: "bg-orange-100/50", border: "hover:border-orange-200 hover:bg-orange-50/30" },
    { label: "Really low", icon: <SmileySad className="h-[34px] w-[34px]" />, color: "text-purple-500", bg: "bg-purple-100/50", border: "hover:border-purple-200 hover:bg-purple-50/30" }
  ];

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 flex">
      
      <div className="relative z-10 w-full max-w-2xl space-y-8 flex-1">
        <div>
          <h2 className="mb-2.5 text-[1.75rem] font-bold tracking-tight text-slate-900">How are you feeling today?</h2>
          <p className="font-light text-slate-500">Your feelings matter. There&apos;s no right or wrong answer.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {moods.map((mood) => (
            <button key={mood.label} className={`group flex flex-col items-center gap-3.5 rounded-[1.5rem] border border-slate-100 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-slate-200/40 w-28 ${mood.border}`}>
              <div className={`flex h-16 w-16 items-center justify-center rounded-full ${mood.bg} ${mood.color} transition-transform group-hover:scale-105`}>
                {mood.icon}
              </div>
              <span className="text-[13px] font-medium text-slate-600">{mood.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-slate-400 pt-1">
          <LockKey className="h-3 w-3" />
          <span className="text-[13px] font-light">Your response is private and only for you.</span>
        </div>
      </div>

      {/* Background Graphic right aligned */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden pointer-events-none rounded-r-[2.5rem] hidden lg:block">
         <div className="absolute inset-0 bg-gradient-to-l from-indigo-50/60 to-transparent blur-sm z-0" />
         
         {/* Sun */}
         <div className="absolute right-[10%] top-[15%] h-56 w-56 rounded-full bg-[#FFFBF2] blur-[1px] z-0" />
         
         {/* Mountains */}
         <svg viewBox="0 0 500 500" className="absolute bottom-0 w-[140%] right-[-10%] h-full preserve-3d" preserveAspectRatio="none">
             <path d="M0,250 Q100,200 250,250 T500,220 L500,500 L0,500 Z" fill="#E8EDF8" className="opacity-[0.85]" />
             <path d="M-50,300 Q150,250 300,300 T600,270 L600,500 L-50,500 Z" fill="#DCE4F5" className="opacity-[0.85]" />
             <path d="M50,390 L400,390" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" className="opacity-60" />
             <path d="M100,415 L350,415" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" className="opacity-40" />
         </svg>

          {/* Leaves right */}
          <div className="absolute -bottom-8 -right-8 text-[#8A95C7]">
            <svg width="280" height="280" viewBox="0 0 100 100" className="overflow-visible">
              <path d="M50,100 C50,60 80,40 90,10 C70,30 50,50 50,80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M50,90 C40,50 20,40 5,20 C20,30 40,50 50,70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="80" cy="25" rx="8" ry="20" fill="currentColor" transform="rotate(30 80 25)" />
              <ellipse cx="20" cy="35" rx="7" ry="15" fill="currentColor" transform="rotate(-40 20 35)" />
              <ellipse cx="60" cy="55" rx="10" ry="22" fill="#6B78AB" transform="rotate(15 60 55)" />
            </svg>
          </div>
          
           {/* Leaves left */}
           <div className="absolute -bottom-10 left-0 text-[#8A95C7]/80 scale-x-[-1]">
              <svg width="240" height="240" viewBox="0 0 100 100" className="overflow-visible">
                <path d="M50,100 C50,60 80,40 90,10 C70,30 50,50 50,80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M50,90 C40,50 20,40 5,20 C20,30 40,50 50,70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="80" cy="25" rx="8" ry="20" fill="currentColor" transform="rotate(30 80 25)" />
                <ellipse cx="20" cy="35" rx="7" ry="15" fill="currentColor" transform="rotate(-40 20 35)" />
                <ellipse cx="60" cy="55" rx="10" ry="22" fill="#6B78AB" transform="rotate(15 60 55)" />
              </svg>
           </div>
           
           <svg className="absolute top-[30%] left-[20%] text-indigo-400/50 w-7 h-7" viewBox="0 0 50 50">
             <path d="M0,25 Q12,15 25,25 Q38,15 50,25 Q38,20 25,30 Q12,20 0,25 Z" fill="currentColor" />
           </svg>
           <svg className="absolute top-[38%] left-[10%] text-indigo-400/30 w-5 h-5" viewBox="0 0 50 50">
             <path d="M0,25 Q12,15 25,25 Q38,15 50,25 Q38,20 25,30 Q12,20 0,25 Z" fill="currentColor" />
           </svg>
           <svg className="absolute top-[25%] right-[25%] text-indigo-400/30 w-4 h-4" viewBox="0 0 50 50">
             <path d="M0,25 Q12,15 25,25 Q38,15 50,25 Q38,20 25,30 Q12,20 0,25 Z" fill="currentColor" />
           </svg>
      </div>

    </div>
  );
}
