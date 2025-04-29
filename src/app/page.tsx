import { HeroParallax } from "@/components/ui/HeroParallax";
import { Hero } from "@/components/Hero";
import { NavbarTop } from "@/components/Navbar";
import { Projects } from "@/components/Card";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import Footer from "@/components/Footer";
import { HeroNew } from "@/components/HeroNew";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <HeroSection/> */}
      <NavbarTop/>
      <HeroNew/>
      <Projects/>
      {/* <TimelineComponent/> */}
      <Experience/>
      <TechStack/>
      <ContactMe/>
      <Footer/>
    </main>
 );
}
