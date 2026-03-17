import { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
    title: "Contact Us | Matzah Caterers Kochi",
    description: "Connect with Matzah Caterers to start planning your perfect gathering. Reach out for wedding and corporate event inquiries in Kochi.",
    openGraph: {
        title: "Contact Us | Matzah Caterers Kochi",
        description: "Let's create your gathering. Contact Matzah Caterers for luxury event catering and hospitality management in Kochi and Ernakulam.",
        url: "https://www.matzahcaterers.in/contact",
        images: [
            {
                url: "https://www.matzahcaterers.in/buffet.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Matzah Caterers",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Matzah Caterers Kochi",
        description: "Let's create your gathering. Contact Matzah Caterers for luxury event catering in Kochi.",
        images: ["https://www.matzahcaterers.in/buffet.jpg"],
    },
    alternates: {
        canonical: "https://www.matzahcaterers.in/contact",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Matzah Caterers",
    "description": "Contact information for Matzah Caterers in Kochi.",
    "url": "https://www.matzahcaterers.in/contact",
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
            <h1 className="sr-only">Contact Matzah Caterers</h1>
            <CTASection />
            <div className="w-full bg-[#C7D0D8] pb-24 relative z-10 flex justify-center">
                <a
                    href="https://share.google/Xqs02UXrRrvJv9Osd"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1817] text-[#F0EBE2] rounded-full font-sans text-[16px] font-medium hover:bg-[#1A1817]/80 transition-colors shadow-lg"
                >
                    Visit our Google Business Profile
                </a>
            </div>
        </div>
    );
}
