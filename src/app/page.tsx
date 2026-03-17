import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.matzahcaterers.in/#organization",
  "name": "Matzah Caterers",
  "url": "https://www.matzahcaterers.in",
  "telephone": "+918921038043",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kakkanad",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MenuSection />
      <TestimonialSection />
    </>
  );
}
