"use client";

import { useState } from "react";
import { Eye, ShieldCheck } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AppLink } from "@/components/ui/link";

export function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-8 sm:p-12">
      <div className="w-full max-w-md space-y-10 xl:max-w-[400px]">
        <div className="mx-auto flex w-fit rounded-[1.25rem] bg-muted p-1.5">
          <Button variant="default" size="sm">
            Log in
          </Button>
          <Button variant="ghost" size="sm">
            Sign up
          </Button>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
          <p className="text-muted-foreground">Take a small step. We&apos;re here with you.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pl-12 pr-12"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <Eye size={18} />
              </Button>
            </div>
            <div className="flex justify-end pt-1">
              <AppLink href="#" className="text-sm text-indigo-500">
                Forgot password?
              </AppLink>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>

        <Button variant="outline" className="w-full gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </Button>

        <div className="flex items-center justify-center gap-2 pt-8 text-muted-foreground">
          <ShieldCheck size={16} />
          <p className="text-xs">Your data is private and always protected.</p>
        </div>
      </div>
    </div>
  );
}