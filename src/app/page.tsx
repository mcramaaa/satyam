import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import TeamSection from "@/components/sections/TeamSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import FAQSection from "@/components/sections/FAQSection";
import RequirementsSection from "@/components/sections/RequirementsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <TeamSection />
      <ServicesSection />
      <CaseStudiesSection />
      <FAQSection />
      <RequirementsSection />
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <Footer />
      <p className="font-black text-black/20 text-7xl fixed top-1/2 left-1/2 z-50 -translate-x-1/2 flex flex-col text-center bg-black/5 px-2 rounded-lg">
        TESTER
        <span className="text-lg">Crafted By Cathabot.id</span>
      </p>
    </div>
  );
}
