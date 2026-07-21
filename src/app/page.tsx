import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <AuroraBackground>
      <FloatingNavbar />
      <main className="relative z-10 space-y-10">
        <Hero />
        <Philosophy />
        <Projects />
        <TechStack />
        <Footer />
      </main>
    </AuroraBackground>
  );
}