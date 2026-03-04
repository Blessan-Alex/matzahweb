import { Metadata } from "next";
import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));

export const metadata: Metadata = {
    title: "About Us | Matzah Caterers Kochi",
    description: "Learn about Matzah Caterers, the premier event catering company based in Kochi. We specialize in authentic Kerala cuisine and composed hospitality.",
    openGraph: {
        title: "About Us | Matzah Caterers Kochi",
        description: "Matzah Caterers is a boutique catering company in Kochi with over a decade of experience serving thoughtful menus and moments.",
        url: "https://matzahcaterers.in/about",
    },
    alternates: {
        canonical: "https://matzahcaterers.in/about",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Matzah Caterers",
    "description": "Information about Matzah Caterers experience, expertise, and luxury catering standards in Kochi.",
    "url": "https://matzahcaterers.in/about",
    "mainEntity": {
        "@type": "FoodEstablishment",
        "name": "Matzah Caterers",
        "image": "https://matzahcaterers.in/kerala_sadhya.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        }
    }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="w-full max-w-[94vw] mx-auto pt-16 md:pt-24 px-4 md:px-0">
                <h1 className="font-serif text-[clamp(50px,8vw,120px)] leading-[1.1] text-primary-text mb-4">
                    Our Story
                </h1>
                <hr className="border-t border-primary-text/20 mb-8" />
            </div>

            <AboutSection />
        </div>
    );
}
