import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const LOCATIONS = [
    "catering-services-kochi",
    "catering-services-ernakulam",
    "catering-services-aluva",
    "catering-services-thrippunithura",
];

function formatTitle(slug: string) {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export async function generateStaticParams() {
    return LOCATIONS.map((location) => ({
        location,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ location: string }>;
}): Promise<Metadata> {
    const { location } = await params;
    if (!LOCATIONS.includes(location)) return {};

    const titleStr = formatTitle(location);
    const title = `${titleStr} | Premium Events | Matzah Caterers`;
    const description = `Top-rated ${titleStr.toLowerCase()} for weddings, birthdays, and corporate events. Authentic Kerala Sadhya and custom menus delivered near you.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://matzahcaterers.in/locations/${location}`,
        },
        alternates: {
            canonical: `https://matzahcaterers.in/locations/${location}`,
        },
    };
}

export default async function LocationPage({
    params,
}: {
    params: Promise<{ location: string }>;
}) {
    const { location } = await params;

    if (!LOCATIONS.includes(location)) {
        notFound();
    }

    const title = formatTitle(location);
    const localityName = title.split(" ").pop() || "the area";

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Catering Services",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Matzah Caterers",
            "image": "https://matzahcaterers.in/kerala_sadhya.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": localityName,
                "addressRegion": "Kerala",
                "addressCountry": "IN",
            },
        },
        "areaServed": localityName,
        "description": `Premium catering and hospitality services serving ${localityName} and surrounding regions.`,
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-light mb-8 text-primary-text">
                    {title}
                </h1>
                <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
                    <Image
                        src="/kerala_sadhya.png"
                        alt={`Premium ${title} by Matzah Caterers`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                        Looking for exceptional catering near {localityName}? Matzah Caterers is your premier culinary
                        partner for weddings, corporate gatherings, and private parties in the area.
                    </p>
                    <h2 className="text-2xl mt-12 mb-6">Our Services in {localityName}</h2>
                    <ul className="space-y-4 mb-12">
                        <li>Authentic Kerala Sadhya Catering</li>
                        <li>Premium Wedding Receptions</li>
                        <li>Corporate Event Buffets</li>
                        <li>Customized Private Dining</li>
                    </ul>

                    <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl mb-4">Book Your Event in {localityName}</h3>
                        <p className="mb-8">Contact our experts today to conceptualize your perfect menu.</p>
                        <Link
                            href="/contact"
                            className="inline-block bg-primary-text text-primary-bg px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
                        >
                            Contact Us Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
