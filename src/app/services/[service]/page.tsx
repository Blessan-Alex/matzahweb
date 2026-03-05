import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
    "wedding-catering-kochi",
    "corporate-catering-kochi",
    "birthday-party-catering-kochi",
    "kerala-sadhya-catering",
    "outdoor-catering-kerala",
];

function formatTitle(slug: string) {
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        service,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ service: string }>;
}): Promise<Metadata> {
    const { service } = await params;
    if (!SERVICES.includes(service)) return {};

    const titleStr = formatTitle(service);
    const title = `${titleStr} | Matzah Caterers`;
    const description = `Professional ${titleStr.toLowerCase()} by Matzah Caterers. Authentic Kerala cuisine, premium service, and unforgettable events. Contact us today.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://matzahcaterers.in/services/${service}`,
        },
        alternates: {
            canonical: `https://matzahcaterers.in/services/${service}`,
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ service: string }>;
}) {
    const { service } = await params;

    if (!SERVICES.includes(service)) {
        notFound();
    }

    const title = formatTitle(service);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Matzah Caterers",
            "image": "https://matzahcaterers.in/kerala_sadhya.png",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kochi",
                "addressRegion": "Kerala",
                "addressCountry": "IN",
            },
        },
        "areaServed": "Kochi",
        "description": `Premium ${title.toLowerCase()} tailored for your special event.`,
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
                        alt={`${title} by Matzah Caterers in Kochi`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                        Experience exceptional {title.toLowerCase()} with Matzah Caterers.
                        We specialize in delivering authentic flavors, impeccable presentation,
                        and seamless service to make your event truly memorable.
                    </p>
                    <h2 className="text-2xl mt-12 mb-6">Why Choose Our {title}?</h2>
                    <ul className="space-y-4 mb-12">
                        <li>Authentic Kerala recipes perfected over generations</li>
                        <li>Premium ingredients sourced locally for freshness</li>
                        <li>Professional staff trained in luxury hospitality</li>
                        <li>Customizable menus to suit every dietary requirement</li>
                    </ul>

                    <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                        <h3 className="text-2xl mb-4">Ready to Plan Your Event?</h3>
                        <p className="mb-8">Contact us to discuss your requirements and get a custom quote.</p>
                        <Link
                            href="/contact"
                            className="inline-block bg-primary-text text-primary-bg px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
