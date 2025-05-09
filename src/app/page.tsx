// Removed duplicate import of HeroParallax
// import { Hero } from "@/components/Hero";
import { NavbarTop } from "@/components/Navbar";
import { Projects } from "@/components/Card";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import Footer from "@/components/Footer";
import { HeroNew } from "@/components/HeroNew";
import { HeroParallax } from "@/components/ui/HeroParallax";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroParallax
        products={[
          { name: "",deployedUrl: "/product1", imageUrl: "/products/p1.jpg" },
          { name: "",deployedUrl: "/product1", imageUrl: "/products/p2.jpg" },
          { name: "",deployedUrl: "/product1", imageUrl: "/products/p3.jpg" },
          { name: "",deployedUrl: "/product1", imageUrl: "/products/p4.jpg" },
          { name: "",deployedUrl: "/product1", imageUrl: "/products/p5.jpg" },
          { name: "",deployedUrl: "/product1", imageUrl: "/products/p6.jpg" },
          { name: "",deployedUrl: "/product1", imageUrl: "/products/p7.jpg" },
        ]}
      />
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
