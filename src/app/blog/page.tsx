import { Metadata } from "next";
import Link from 'next/link';
import { BLOGS } from "../sitemap";

export const metadata: Metadata = {
    title: "Catering Tips & Event Ideas | Matzah Caterers Blog",
    description: "Explore the ultimate event planning and catering ideas by Matzah Caterers. From Kerala Sadhya menus to corporate event catering tips in Kochi.",
};

function formatTitle(slug: string) {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default function BlogListing() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-6xl mx-auto">
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
