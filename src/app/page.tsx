import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <AuroraBackground>
      <FloatingNavbar />
      <main className="relative z-10 space-y-8 md:space-y-12">
        <Hero />
        <Philosophy />
        <Experience />
        <Projects />
        <TechStack />
        <Footer />
        <WhatsAppButton />
      </main>
    </AuroraBackground>
  );
}