import { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
    title: "About Us | Matzah Caterers Kochi",
    description: "Learn about Matzah Caterers, the premier event catering company based in Kochi. We specialize in authentic Kerala cuisine and composed hospitality.",
    openGraph: {
        title: "About Us | Matzah Caterers Kochi",
        description: "Matzah Caterers is a boutique catering company in Kochi with over a decade of experience serving thoughtful menus and moments.",
        url: "https://www.matzahcaterers.in/about",
        images: [
            {
                url: "https://www.matzahcaterers.in/kerala_sadhya.png",
                width: 1200,
                height: 630,
                alt: "Matzah Caterers - About Us",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Matzah Caterers Kochi",
        description: "Matzah Caterers is a boutique catering company in Kochi with over a decade of experience serving thoughtful menus and moments.",
        images: ["https://www.matzahcaterers.in/kerala_sadhya.png"],
    },
    alternates: {
        canonical: "https://www.matzahcaterers.in/about",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Matzah Caterers",
    "description": "Information about Matzah Caterers experience, expertise, and luxury catering standards in Kochi.",
    "url": "https://www.matzahcaterers.in/about",
    "mainEntity": {
        "@type": ["FoodEstablishment", "LocalBusiness"],
        "name": "Matzah Caterers",
        "image": "https://www.matzahcaterers.in/kerala_sadhya.png",
        "telephone": "+918921038043",
        "email": "info@matzahcaterers.com",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "areaServed": ["Kochi", "Ernakulam", "Aluva", "Kakkanad", "Edappally"],
        "sameAs": [
            "https://www.instagram.com/matzahcaterers"
        ],
        "foundingDate": "2014"
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
                <p className="font-sans text-[18px] md:text-[22px] leading-relaxed opacity-80 max-w-3xl mb-12">
                    Over a decade in Kochi, bringing people together through meticulously crafted food. We are a team of passionate culinary experts dedicated to preserving authentic Kerala traditions while offering premium hospitality management.
                </p>
                <hr className="border-t border-primary-text/20 mb-8" />
            </div>

            <AboutSection />
        </div>
    );
}
