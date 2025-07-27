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
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
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
    </div>
  );
}
