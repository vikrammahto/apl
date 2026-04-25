import { CaretRight, NotePencil, Timer, Wind } from "@phosphor-icons/react";

export function QuickActions() {
  const actions = [
    {
      title: "Write a journal",
      desc: "Write down your thoughts\nand reflect.",
      icon: <NotePencil className="h-[22px] w-[22px] text-indigo-500" />,
      bg: "bg-indigo-100/50",
    },
    {
      title: "Start breathing",
      desc: "Take a deep breath and\nreset your mind.",
      icon: <Wind className="h-[22px] w-[22px] text-blue-500" />,
      bg: "bg-blue-100/50",
    },
    {
      title: "Focus timer",
      desc: "Stay focused with a\ncalm mind.",
      icon: <Timer className="h-[22px] w-[22px] text-emerald-500" />,
      bg: "bg-emerald-100/50",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {actions.map((action, i) => (
        <button key={i} className="group flex items-center justify-between rounded-3xl border border-slate-100 bg-white p-6 py-7 text-left shadow-sm transition-all hover:border-indigo-100 hover:shadow-md hover:shadow-indigo-100/30">
          <div className="flex items-start gap-4">
            <div className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full ${action.bg}`}>
              {action.icon}
            </div>
            <div className="pt-0.5">
              <h3 className="text-[15px] font-semibold text-slate-800">{action.title}</h3>
              <p className="mt-1.5 text-[13px] text-slate-500 leading-relaxed font-light whitespace-pre-line">{action.desc}</p>
            </div>
          </div>
          <div className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-indigo-400 pl-2">
            <CaretRight className="h-5 w-5" />
          </div>
        </button>
      ))}
    </div>
  );
}
