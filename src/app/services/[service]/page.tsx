import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData, ServiceKey } from '@/data/services';
import CTASection from '@/components/sections/CTASection';

type Props = {
    params: { service: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const serviceKey = params.service as ServiceKey;
    const data = servicesData[serviceKey];

    if (!data) return { title: 'Service Not Found' };

    return {
        title: `${data.title} | Matzah Caterers Kochi`,
        description: data.metaDesc,
        alternates: {
            canonical: `https://www.matzahcaterers.in/services/${serviceKey}`,
        },
        openGraph: {
            title: data.title,
            description: data.metaDesc,
            images: [
                {
                    url: `https://www.matzahcaterers.in${data.image}`,
                    width: 1200,
                    height: 630,
                    alt: data.title,
                },
            ],
            url: `https://www.matzahcaterers.in/services/${serviceKey}`
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.metaDesc,
            images: [`https://www.matzahcaterers.in${data.image}`],
        },
    };
}

export function generateStaticParams() {
    return Object.keys(servicesData).map((key) => ({
        service: key,
    }));
}

export default function ServicePage({ params }: Props) {
    const serviceKey = params.service as ServiceKey;
    const data = servicesData[serviceKey];

    if (!data) notFound();

    return (
        <article className="min-h-screen bg-primary-bg pt-20">
            {/* Structured Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": data.title,
                        "description": data.metaDesc,
                        "provider": {
                            "@type": "FoodEstablishment",
                            "name": "Matzah Caterers",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Kochi",
                                "addressRegion": "Kerala"
                            }
                        },
                        "areaServed": "Kochi",
                        "image": `https://www.matzahcaterers.in${data.image}`
                    })
                }}
            />
            {/* FAQ Schema for rich results */}
            {data.faqs && data.faqs.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": data.faqs.map((faq: { q: string; a: string }) => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.a,
                                },
                            })),
                        })
                    }}
                />
            )}

            {/* Hero Section */}
            <div className="w-full max-w-[94vw] mx-auto pt-16 md:pt-24 px-4 md:px-0">
                <h1 className="font-serif text-[clamp(40px,6vw,90px)] leading-[1.1] text-primary-text mb-6">
                    {data.heading}
                </h1>
                <hr className="border-t border-primary-text/20 mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <p className="font-sans text-[18px] md:text-[22px] leading-relaxed opacity-80 mb-8">
                            {data.intro}
                        </p>
                        <Link href="/contact" className="main-button rounded-pill inline-block">
                            Get Custom Quote
                        </Link>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
                        <Image
                            src={data.image}
                            alt={data.imageAlt}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Pricing/Packages Table */}
            <div className="bg-[#E4DCD3] py-20">
                <div className="w-full max-w-[94vw] mx-auto px-4 md:px-0">
                    <h2 className="font-serif text-[clamp(30px,4vw,60px)] leading-[1.1] text-primary-text mb-12">
                        Serving Formats
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <caption className="text-left text-sm opacity-60 mb-2">Available serving formats and pricing</caption>
                            <thead>
                                <tr className="border-b-2 border-primary-text/20">
                                    <th className="py-4 px-6 font-sans font-bold text-[18px]">Format</th>
                                    <th className="py-4 px-6 font-sans font-bold text-[18px]">Est. Guests</th>
                                    <th className="py-4 px-6 font-sans font-bold text-[18px]">Key Features</th>
                                    <th className="py-4 px-6 font-sans font-bold text-[18px]">Pricing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.packages.map((pkg, i) => (
                                    <tr key={i} className="border-b border-primary-text/10 hover:bg-white/30 transition-colors">
                                        <td className="py-6 px-6 font-serif text-[22px] min-w-[200px]">{pkg.name}</td>
                                        <td className="py-6 px-6 font-sans text-[16px] min-w-[120px]">{pkg.guests}</td>
                                        <td className="py-6 px-6 font-sans text-[15px] opacity-80 min-w-[250px]">
                                            <ul className="list-disc list-inside">
                                                {pkg.features.map((f, j) => (
                                                    <li key={j}>{f}</li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="py-6 px-6 font-sans text-[16px] font-medium">{pkg.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* FAQs Snippet Bait */}
            <div className="py-20 w-full max-w-[80vw] mx-auto px-4 md:px-0">
                <h2 className="font-serif text-[clamp(30px,4vw,50px)] leading-[1.1] text-primary-text mb-12 text-center">
                    {data.faqHeading}
                </h2>
                <div className="flex flex-col gap-8">
                    {data.faqs.map((faq, i) => (
                        <div key={i} className="bg-white/5 p-8 rounded-[16px] border border-primary-text/10">
                            {/* Note: H3 usage is critical for Google NLP Snippet extraction */}
                            <h3 className="font-serif text-[24px] mb-3 text-primary-text">{faq.q}</h3>
                            <p className="font-sans text-[16px] leading-relaxed opacity-80">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>

            <CTASection />
        </article>
    );
}
