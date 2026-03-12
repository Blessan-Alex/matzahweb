import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "../../sitemap";
import SadhyaDishesPost from "@/components/blog/SadhyaDishesPost";
import HowToPlanCateringPost from "@/components/blog/HowToPlanCateringPost";
import KeralaWeddingMenuPost from "@/components/blog/KeralaWeddingMenuPost";
import OutdoorCateringPost from "@/components/blog/OutdoorCateringPost";
import BuffetVsSadhyaPost from "@/components/blog/BuffetVsSadhyaPost";
import CorporateEventCateringPost from "@/components/blog/CorporateEventCateringPost";

function formatTitle(slug: string) {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export async function generateStaticParams() {
    return BLOGS.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    if (!BLOGS.includes(slug)) return {};

    const titleStr = formatTitle(slug);
    let title = `${titleStr} | Matzah Caterers Blog`;
    let description = `Read about ${titleStr.toLowerCase()} in our exclusive catering blog focusing on Kerala Sadhya, weddings, and premium corporate events in Kochi.`;

    if (slug === "best-kerala-sadhya-dishes-weddings") {
        title = "Best Kerala Sadhya Dishes for Weddings | Matzah Caterers";
        description = "Discover the essential Kerala Sadhya dishes for weddings. Real tips from Kochi caterers on menu planning, portions, and traditional serving.";
    } else if (slug === "how-to-plan-catering-200-person-wedding") {
        title = "Catering for 200 Guests in Kochi Guide | Matzah Caterers";
        description = "Planning catering for 200 guests in Kochi? Get real quantity charts, logistics timelines, and staffing tips from experienced Kerala caterers.";
    } else if (slug === "kerala-wedding-catering-menu-guide") {
        title = "Kerala Wedding Catering Menu Guide | Matzah Caterers";
        description = "Complete guide to planning your Kerala wedding catering menu. Explore Sadhya dishes, buffet options, live counters, and budget tips in Kochi.";
    } else if (slug === "outdoor-catering-tips-kerala-events") {
        title = "Outdoor Catering Tips for Kerala Events | Matzah Caterers";
        description = "Expert tips for outdoor catering in Kerala. Discover menu ideas, monsoon proofing, venue logistics, and real event setups in Kochi.";
    } else if (slug === "buffet-vs-sadhya-catering") {
        title = "Buffet vs Sadhya Catering for Kerala Events | Matzah";
        description = "Compare buffet and Sadhya catering for Kerala events. Pros, cons, costs, and format choices to help you plan the perfect wedding menu.";
    } else if (slug === "corporate-event-catering-ideas-kochi") {
        title = "Corporate Event Catering Ideas in Kochi | Matzah Caterers";
        description = "Creative corporate catering ideas for Kochi events. Discover Kerala heritage menus, lunch boxes, and live food stations for conferences.";
    }

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            url: `https://matzahcaterers.in/blog/${slug}`,
        },
        alternates: {
            canonical: `https://matzahcaterers.in/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    if (!BLOGS.includes(slug)) {
        notFound();
    }

    const title = formatTitle(slug);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "image": "https://matzahcaterers.in/kerala_sadhya.png",
        "author": {
            "@type": "Organization",
            "name": "Matzah Caterers",
            "url": "https://matzahcaterers.in"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Matzah Caterers",
            "logo": {
                "@type": "ImageObject",
                "url": "https://matzahcaterers.in/logosvg.svg"
            }
        },
        "datePublished": new Date().toISOString().split("T")[0],
    };

    return (
        <article className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/blog"
                    className="text-sm uppercase tracking-widest mb-8 inline-block hover:text-[#D4AF37] transition-colors"
                >
                    ← Back to Blog
                </Link>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-primary-text leading-tight">
                    {title}
                </h1>
                <div className="flex items-center space-x-4 mb-12 text-sm text-gray-400">
                    <span>By Matzah Caterers</span>
                    <span>•</span>
                    <span>Catering Tips</span>
                </div>

                {slug !== "best-kerala-sadhya-dishes-weddings" && slug !== "how-to-plan-catering-200-person-wedding" && slug !== "kerala-wedding-catering-menu-guide" && slug !== "outdoor-catering-tips-kerala-events" && slug !== "buffet-vs-sadhya-catering" && slug !== "corporate-event-catering-ideas-kochi" && (
                    <div className="relative w-full h-[400px] mb-16 rounded-xl overflow-hidden">
                        <Image
                            src="/kerala_sadhya.png"
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="prose prose-lg dark:prose-invert prose-headings:font-light prose-a:text-[#D4AF37] max-w-none">
                    {slug === "best-kerala-sadhya-dishes-weddings" ? (
                        <SadhyaDishesPost />
                    ) : slug === "how-to-plan-catering-200-person-wedding" ? (
                        <HowToPlanCateringPost />
                    ) : slug === "kerala-wedding-catering-menu-guide" ? (
                        <KeralaWeddingMenuPost />
                    ) : slug === "outdoor-catering-tips-kerala-events" ? (
                        <OutdoorCateringPost />
                    ) : slug === "buffet-vs-sadhya-catering" ? (
                        <BuffetVsSadhyaPost />
                    ) : slug === "corporate-event-catering-ideas-kochi" ? (
                        <CorporateEventCateringPost />
                    ) : (
                        <>
                            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                                When it comes to unforgettable events in Kochi, expert catering makes all the difference.
                                In this guide, we dive deep into {title.toLowerCase()} and share professional insights
                                to elevate your next gathering.
                            </p>

                            <h2 className="text-3xl mt-12 mb-6">The Importance of Premium Catering</h2>
                            <p className="mb-6">
                                Whether you are planning a grand wedding reception in Ernakulam or an intimate
                                corporate retreat, the cuisine leaves a lasting impression. Quality ingredients,
                                authentic recipes like traditional Kerala Sadhya, and flawless service are
                                the hallmarks of modern luxury catering.
                            </p>

                            <h2 className="text-3xl mt-12 mb-6">Our Top Recommendations</h2>
                            <ul className="space-y-4 mb-12 list-disc pl-6">
                                <li>Plan your menu based on the season and your guests' dietary preferences.</li>
                                <li>Incorporate live stations for a dynamic and interactive dining experience.</li>
                                <li>Do not underestimate the power of elegant presentation—food should look as exquisite as it tastes.</li>
                                <li>Partner with experienced caterers who understand the logistics of large-scale events.</li>
                            </ul>

                            <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
                                <h3 className="text-3xl mb-4 text-[#D4AF37]">Looking for Expert Caterers in Kochi?</h3>
                                <p className="mb-8 text-lg">Matzah Caterers specializes in authentic Kerala cuisine and premium event hospitality.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-[#D4AF37] text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
                                >
                                    Discuss Your Event
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </article>
    );
}
