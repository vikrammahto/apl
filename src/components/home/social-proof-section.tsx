"use client";

import { Heart } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";

const avatars = [
  { src: "https://i.pravatar.cc/100?img=1", fallback: "JD" },
  { src: "https://i.pravatar.cc/100?img=11", fallback: "AK" },
  { src: "https://i.pravatar.cc/100?img=5", fallback: "MR" },
  { src: "https://i.pravatar.cc/100?img=12", fallback: "TS" },
];

export function SocialProofSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-8 py-16">
      <Card className="p-12">
        <CardContent className="flex flex-col items-center gap-6 p-0">
          <Heart size={24} weight="fill" className="text-indigo-400" />
          <h3 className="text-2xl font-bold">
            Trusted by people building healthier habits
          </h3>

          <AvatarGroup>
            {avatars.map((avatar, index) => (
              <Avatar key={index}>
                <AvatarImage src={avatar.src} alt="Avatar" />
                <AvatarFallback>{avatar.fallback}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>

          <p className="mx-auto max-w-sm text-muted-foreground">
            Join thousands who are choosing small moments for a better mind.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}