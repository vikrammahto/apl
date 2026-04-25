import { AuthHero } from "@/components/auth/auth-hero";
import { AuthForm } from "@/components/auth/auth-form";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      <AuthHero />
      <AuthForm />
    </div>
  );
}