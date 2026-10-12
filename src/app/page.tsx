import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsBento from "@/components/SkillsBento";
import TerminalPlayground from "@/components/TerminalPlayground";
import ContactSection from "@/components/ContactSection";
import FloatingDock from "@/components/FloatingDock";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <ProjectShowcase />
        <ExperienceTimeline />
        <SkillsBento />
        <TerminalPlayground />
        <ContactSection />
      </main>
      <Footer />
      <FloatingDock />
    </>
  );
}
