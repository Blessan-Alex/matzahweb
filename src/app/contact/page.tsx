import { Metadata } from "next";
import dynamic from 'next/dynamic';

const CTASection = dynamic(() => import("@/components/sections/CTASection"));

export const metadata: Metadata = {
    title: "Contact Us | Matzah Caterers Kochi",
    description: "Connect with Matzah Caterers to start planning your perfect gathering. Reach out for wedding and corporate event inquiries in Kochi.",
    openGraph: {
        title: "Contact Us | Matzah Caterers Kochi",
        description: "Let's create your gathering. Contact Matzah Caterers for luxury event catering and hospitality management in Kochi.",
        url: "https://matzahcaterers.in/contact",
    },
    alternates: {
        canonical: "https://matzahcaterers.in/contact",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Matzah Caterers",
    "description": "Contact information for Matzah Caterers in Kochi.",
    "url": "https://matzahcaterers.in/contact",
    "mainEntity": {
        "@type": "FoodEstablishment",
        "name": "Matzah Caterers",
        "telephone": "+918921038043",
        "email": "info@matzahcaterers.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        }
    }
};

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-[15vh] flex flex-col justify-center bg-[#C7D0D8]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* The CTASection already serves as a high-end Contact block with beautiful typography and layout. */}
            <CTASection />
        </div>
    );
}
