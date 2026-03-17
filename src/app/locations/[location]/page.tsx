import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locationsData, LocationKey } from '@/data/locations';
import { servicesData } from '@/data/services';
import CTASection from '@/components/sections/CTASection';
import TestimonialSection from '@/components/sections/TestimonialSection';

type Props = {
    params: { location: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const locKey = params.location as LocationKey;
    const data = locationsData[locKey];

    if (!data) return { title: 'Location Not Found' };

    return {
        title: `${data.title} | Matzah Caterers`,
        description: data.metaDesc,
        alternates: {
            canonical: `https://www.matzahcaterers.in/locations/${locKey}`,
        },
        openGraph: {
            title: data.title,
            description: data.metaDesc,
            images: [
                {
                    url: "https://www.matzahcaterers.in/buffet.jpg",
                    width: 1200,
                    height: 630,
                    alt: data.title,
                },
            ],
            url: `https://www.matzahcaterers.in/locations/${locKey}`
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.metaDesc,
            images: ["https://www.matzahcaterers.in/buffet.jpg"],
        },
    };
}

export function generateStaticParams() {
    return Object.keys(locationsData).map((key) => ({
        location: key,
    }));
}

export default function LocationPage({ params }: Props) {
    const locKey = params.location as LocationKey;
    const data = locationsData[locKey];

    if (!data) notFound();

    // Pull core services to show on location page
    const services = Object.entries(servicesData);

    return (
        <article className="min-h-screen bg-[#F0EBE2] pt-20">
            {/* Local schema specialized for the area */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": `Catering Services in ${data.area.split(',')[0]}`,
                        "description": data.metaDesc,
                        "url": `https://www.matzahcaterers.in/locations/${locKey}`,
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "Matzah Caterers",
                            "telephone": "+918921038043",
                            "address": {
                                "@type": "PostalAddress",
                                "addressRegion": "Kerala",
                                "addressCountry": "IN"
                            }
                        },
                        "areaServed": data.area,
                        "serviceType": "Catering"
                    })
                }}
            />

            <div className="w-full max-w-[94vw] mx-auto pt-16 md:pt-24 px-4 md:px-0 text-center">
                <h1 className="font-serif text-[clamp(40px,6vw,90px)] leading-[1.1] text-primary-text mb-6">
                    {data.heading}
                </h1>
                <p className="font-sans text-[18px] md:text-[22px] leading-relaxed opacity-80 max-w-3xl mx-auto mb-12">
                    {data.sub}
                </p>
                <hr className="border-t border-primary-text/20 mb-20" />
            </div>

            {/* List Services Available in this Location */}
            <div className="w-full max-w-[94vw] mx-auto px-4 md:px-0 mb-20">
                <h2 className="font-serif text-[clamp(30px,4vw,60px)] leading-[1.1] text-primary-text mb-12 text-center">
                    Services in {data.area.split(',')[0]}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map(([sKey, sData]) => (
                        <div key={sKey} className="bg-white p-8 rounded-[24px] border border-primary-text/10 hover:shadow-xl transition-shadow">
                            <h3 className="font-serif text-[28px] mb-4 text-primary-text">{sData.title}</h3>
                            <p className="font-sans text-[16px] opacity-80 mb-6">{sData.intro.slice(0, 120)}...</p>
                            <Link href={`/services/${sKey}`} className="text-[#D4AF37] font-medium hover:underline flex items-center gap-2">
                                View Packages
                                <span>→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <TestimonialSection />
            <CTASection />
        </article>
    );
}
