import { Metadata } from "next";
import Link from 'next/link';
import { BLOGS } from "../sitemap";

export const metadata: Metadata = {
    title: "Catering Tips & Event Ideas | Matzah Caterers Blog",
    description: "Explore the ultimate event planning and catering ideas by Matzah Caterers. From Kerala Sadhya menus to corporate event catering tips in Kochi.",
    openGraph: {
        title: "Catering Tips & Event Ideas | Matzah Caterers Blog",
        description: "Explore the ultimate event planning and catering ideas by Matzah Caterers in Kochi.",
        url: "https://www.matzahcaterers.in/blog",
        images: [
            {
                url: "https://www.matzahcaterers.in/kerala_sadhya.png",
                width: 1200,
                height: 630,
                alt: "Matzah Caterers Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Catering Tips & Event Ideas | Matzah Caterers Blog",
        description: "Explore event planning and catering ideas from Kerala's premium caterers.",
        images: ["https://www.matzahcaterers.in/kerala_sadhya.png"],
    },
    alternates: {
        canonical: "https://www.matzahcaterers.in/blog",
    },
};

function formatTitle(slug: string) {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Matzah Caterers Blog",
    "description": "Explore the ultimate event planning and catering ideas by Matzah Caterers. From Kerala Sadhya menus to corporate event catering tips in Kochi.",
    "url": "https://www.matzahcaterers.in/blog",
    "publisher": {
        "@type": "Organization",
        "name": "Matzah Caterers",
        "url": "https://www.matzahcaterers.in",
    },
    "blogPost": BLOGS.map((slug) => ({
        "@type": "BlogPosting",
        "headline": slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        "url": `https://www.matzahcaterers.in/blog/${slug}`,
    })),
};

export default function BlogListing() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />
            <h1 className="text-4xl md:text-6xl font-light mb-16 text-primary-text">
                Blog & Event Insights
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOGS.map((slug) => (
                    <Link
                        key={slug}
                        href={`/blog/${slug}`}
                        className="group block border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors"
                    >
                        <h2 className="text-xl font-medium mb-4 group-hover:text-[#D4AF37] transition-colors">
                            {formatTitle(slug)}
                        </h2>
                        <p className="text-gray-400">
                            Read our latest thoughts, menu inspirations, and event tips exclusively curated for catering in Kochi.
                        </p>
                        <span className="inline-block mt-6 text-sm underline opacity-60 group-hover:opacity-100">
                            Read Article
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
