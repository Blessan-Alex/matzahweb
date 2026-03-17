import { Metadata } from "next";
import MenuSection from "@/components/sections/MenuSection";

export const metadata: Metadata = {
    title: "Catering Menu & Services | Matzah Caterers Kochi",
    description: "Explore our curated menus, from welcoming appetizers and traditional family-style Sadhyas to formal plated elegance. Authentic Kerala food catering.",
    openGraph: {
        title: "Catering Menu & Services | Matzah Caterers Kochi",
        description: "Explore our curated event catering menus, featuring authentic Kerala cuisine and Michelin-inspired arrangements.",
        url: "https://www.matzahcaterers.in/menu",
        images: [
            {
                url: "https://www.matzahcaterers.in/menu_feast.png",
                width: 1200,
                height: 630,
                alt: "Matzah Caterers - Event Catering Menu",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Catering Menu & Services | Matzah Caterers Kochi",
        description: "Explore our curated event catering menus, featuring authentic Kerala cuisine.",
        images: ["https://www.matzahcaterers.in/menu_feast.png"],
    },
    alternates: {
        canonical: "https://www.matzahcaterers.in/menu",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Matzah Caterers Event Menu",
    "description": "Complete list of catering services including Welcome Appetizers, Curated Feast Displays, Grand Buffets, and Traditional Sadhyas.",
    "url": "https://www.matzahcaterers.in/menu",
    "hasMenuSection": [
        {
            "@type": "MenuSection",
            "name": "Welcoming Appetizers",
            "description": "Refined, handcrafted bites featuring authentic Malabar spices."
        },
        {
            "@type": "MenuSection",
            "name": "Traditional & Family Style",
            "description": "Multi-course Sadhyas on fresh banana leaves, alongside rich Biryani feasts."
        }
    ]
};

export default function MenuPage() {
    return (
        <div className="min-h-screen pt-[15vh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="w-full max-w-[94vw] mx-auto px-4 md:px-0 text-center mb-8">
                <h1 className="sr-only">Catering Menu & Services in Kochi</h1>
                <p className="font-sans text-sm tracking-widest uppercase opacity-60">Authentic Kerala flavors Kochi</p>
            </div>
            <MenuSection />
        </div>
    );
}
