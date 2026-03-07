import { Metadata } from "next";
import MenuSection from "@/components/sections/MenuSection";

export const metadata: Metadata = {
    title: "Catering Menu & Services | Matzah Caterers Kochi",
    description: "Explore our curated menus, from welcoming appetizers and traditional family-style Sadhyas to formal plated elegance. Authentic Kerala food catering.",
    openGraph: {
        title: "Catering Menu & Services | Matzah Caterers Kochi",
        description: "Explore our curated event catering menus, featuring authentic Kerala cuisine and Michelin-inspired arrangements.",
        url: "https://matzahcaterers.in/menu",
    },
    alternates: {
        canonical: "https://matzahcaterers.in/menu",
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Matzah Caterers Event Menu",
    "description": "Complete list of catering services including Welcome Appetizers, Curated Feast Displays, Grand Buffets, and Traditional Sadhyas.",
    "url": "https://matzahcaterers.in/menu",
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
            {/* The MenuSection already contains its own massive header ("Get-Togethers - Menu"). 
                We can just render it directly here for maximum visual impact. */}
            <MenuSection />
        </div>
    );
}
