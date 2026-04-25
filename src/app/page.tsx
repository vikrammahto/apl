import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { SocialProofSection } from "@/components/home/social-proof-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <Footer />
    </div>
  );
}