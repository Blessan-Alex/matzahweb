import dynamic from 'next/dynamic';
import HeroSection from "@/components/sections/HeroSection";

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const MenuSection = dynamic(() => import("@/components/sections/MenuSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <CTASection />
    </>
  );
}
