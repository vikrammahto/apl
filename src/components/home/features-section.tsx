"use client";

import { Smiley, NotePencil } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf } from "@phosphor-icons/react";

const features = [
  {
    icon: Smiley,
    color: "bg-indigo-50 text-indigo-500",
    title: "Track your mood",
    description: "Understand how you feel, one day at a time",
  },
  {
    icon: NotePencil,
    color: "bg-blue-50 text-blue-500",
    title: "Clear your mind",
    description: "Write freely, no rules, no judgment",
  },
  {
    icon: Leaf,
    color: "bg-emerald-50 text-emerald-500",
    title: "Find your focus",
    description: "Short exercises to help you reset",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-20 mx-auto w-full max-w-7xl px-8 py-20 text-center">
      <p className="mb-4 text-xs font-semibold tracking-widest text-indigo-500 uppercase">
        Built for your wellbeing
      </p>
      <h2 className="mb-16 text-3xl font-bold tracking-tight md:text-4xl">
        Everything you need to feel better, your way
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="p-8">
            <CardContent className="flex flex-col items-center gap-6 p-0">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full ${feature.color}`}
              >
                <feature.icon size={32} weight="fill" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
