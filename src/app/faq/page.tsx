import { Metadata } from "next";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Catering FAQs | Matzah Caterers Kochi",
    description: "Frequently asked questions about wedding catering costs, corporate menus, outdoor event setups, and catering services in Kochi and Ernakulam.",
    openGraph: {
        title: "Catering FAQs | Matzah Caterers Kochi",
        description: "Answers to common questions about premium catering services, costs, and menus for weddings and corporate events in Kochi.",
        url: "https://www.matzahcaterers.in/faq",
        images: [
            {
                url: "https://www.matzahcaterers.in/buffet.jpg",
                width: 1200,
                height: 630,
                alt: "Matzah Caterers - FAQs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Catering FAQs | Matzah Caterers Kochi",
        description: "Answers to common questions about premium catering services, costs, and menus in Kochi.",
        images: ["https://www.matzahcaterers.in/buffet.jpg"],
    },
    alternates: {
        canonical: "https://www.matzahcaterers.in/faq",
    }
};

const faqs = [
    {
        question: "What types of cuisine do you offer for events in Kochi?",
        rawAnswer: "We specialize deeply in authentic Kerala Sadhya, Malabar biryani, premium coastal seafood, and plated continental fusion. Our menus are fully customizable for weddings, corporate conclaves, or outdoor functions with extensive vegetarian and non-vegetarian options. Explore our full offerings on our Menu page.",
        answer: (
            <span>
                We specialize deeply in authentic Kerala Sadhya, Malabar biryani, premium coastal seafood, and plated continental fusion. Our menus are fully customizable for weddings, corporate conclaves, or outdoor functions with extensive vegetarian and non-vegetarian options. Explore our full offerings on our <Link href="/menu" className="text-[#D4AF37] font-medium hover:underline">Menu page</Link>.
            </span>
        )
    },
    {
        question: "Do you provide staff for serving at Kochi events?",
        rawAnswer: "Yes, our professional teams are fully integrated. We provide executive chefs, trained waitstaff, and a dedicated hospitality crew to ensure seamless service—whether it is a 1,000-guest wedding reception or an exclusive corporate board meeting in Ernakulam. Our staff is hygienic, uniformed, and professionally managed.",
        answer: (
            <span>
                Yes, our professional teams are fully integrated. We provide executive chefs, trained waitstaff, and a dedicated hospitality crew to ensure seamless service—whether it is a 1,000-guest wedding reception or an exclusive corporate board meeting in Ernakulam. Our staff is hygienic, uniformed, and professionally managed.
            </span>
        )
    },
    {
        question: "What is included in corporate catering packages in Ernakulam?",
        rawAnswer: "We offer end-to-end setup. This includes morning breakfast spreads, comprehensive lunch buffets, or scheduled boxed working lunches featuring premium Kerala dishes. Packages include all necessary serving equipment, chafing dishes, staffing, and post-event cleanup for venues across Infopark or Kakkanad conclaves. See our Corporate Catering options.",
        answer: (
            <span>
                We offer end-to-end setup. This includes morning breakfast spreads, comprehensive lunch buffets, or scheduled boxed working lunches featuring premium Kerala dishes. Packages include all necessary serving equipment, chafing dishes, staffing, and post-event cleanup for venues across Infopark or Kakkanad conclaves. See our <Link href="/services/corporate-catering-kochi" className="text-[#D4AF37] font-medium hover:underline">Corporate Catering options</Link>.
            </span>
        )
    },
    {
        question: "How far in advance should I book catering in Kochi?",
        rawAnswer: "For the peak Kerala wedding seasons (August-September and December-February), we recommend booking 1 to 3 months in advance to secure your preferred dates. For corporate events or smaller gatherings, 1-2 weeks is usually sufficient, but confirming availability early is always best.",
        answer: (
            <span>
                For the peak Kerala wedding seasons (August-September and December-February), we recommend booking 1 to 3 months in advance to secure your preferred dates. For corporate events or smaller gatherings, 1-2 weeks is usually sufficient, but confirming availability early is always best.
            </span>
        )
    },
    {
        question: "Do you cater outdoor events in Kochi?",
        rawAnswer: "Absolutely. We specialize in outdoor logistics with hygienic setups, rapid-deploy waterproof tents, and weather-proofed live stations perfect for beachside receptions or farmhouse garden weddings. We offer full-scale event management to handle Kerala's unpredictable weather. Learn more about our Outdoor Catering.",
        answer: (
            <span>
                Absolutely. We specialize in outdoor logistics with hygienic setups, rapid-deploy waterproof tents, and weather-proofed live stations perfect for beachside receptions or farmhouse garden weddings. We offer full-scale event management to handle Kerala's unpredictable weather. Learn more about our <Link href="/services/outdoor-catering-kochi" className="text-[#D4AF37] font-medium hover:underline">Outdoor Catering</Link>.
            </span>
        )
    },
    {
        question: "How do you ensure hygiene and quality for Kochi events?",
        rawAnswer: "We maintain the highest standards of culinary safety. This involves premium ingredient sourcing from verified local vendors, operating from FSSAI-compliant base kitchens, and deploying rigorously trained staff. We prioritize the fresh, authentic flavors of Kerala balanced perfectly with spotless, elegant presentation.",
        answer: (
            <span>
                We maintain the highest standards of culinary safety. This involves premium ingredient sourcing from verified local vendors, operating from FSSAI-compliant base kitchens, and deploying rigorously trained staff. We prioritize the fresh, authentic flavors of Kerala balanced perfectly with spotless, elegant presentation.
            </span>
        )
    }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.rawAnswer
        }
    }))
};

export default function FAQPage() {
    return (
        <div className="min-h-screen pt-20 bg-[#F0EBE2]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="w-full max-w-[94vw] mx-auto pt-16 md:pt-24 px-4 md:px-0 mb-20">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-[clamp(40px,8vw,90px)] leading-[1.1] text-[#1A1817] mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="font-sans text-[18px] md:text-[22px] leading-relaxed opacity-80 max-w-2xl mx-auto">
                        Everything you need to know about our premium catering services, menus, and event management across Kochi and Ernakulam.
                    </p>
                </div>

                <h2 className="font-serif text-[32px] md:text-[40px] text-[#1A1817] mb-8">Common Questions</h2>
                <FAQAccordion items={faqs} />

                <div className="mt-20 text-center">
                    <h2 className="font-serif text-[32px] text-[#1A1817] mb-6">Still have questions?</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1817] text-[#F0EBE2] rounded-full font-sans text-[16px] font-medium hover:bg-[#D4AF37] hover:text-[#1A1817] transition-colors duration-300"
                    >
                        Contact Our Planning Team
                    </Link>
                </div>
            </div>
        </div>
    );
}
