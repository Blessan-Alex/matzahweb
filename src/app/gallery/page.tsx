import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Event Gallery | Matzah Caterers Kochi",
    description: "Browse our gallery of premium catering setups, Kerala Sadhya spreads, elegant buffets, and luxury event presentations across Kochi and Ernakulam.",
    openGraph: {
        title: "Event Gallery | Matzah Caterers Kochi",
        description: "Browse stunning catering setups and event presentations by Matzah Caterers in Kochi.",
        url: "https://www.matzahcaterers.in/gallery",
        images: [
            {
                url: "https://www.matzahcaterers.in/buffet.jpg",
                width: 1200,
                height: 630,
                alt: "Matzah Caterers Event Gallery",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Event Gallery | Matzah Caterers Kochi",
        description: "Browse stunning catering setups and event presentations by Matzah Caterers.",
        images: ["https://www.matzahcaterers.in/buffet.jpg"],
    },
    alternates: {
        canonical: "https://www.matzahcaterers.in/gallery",
    },
};

const GALLERY_IMAGES = [
    {
        src: "https://images.pexels.com/photos/5779787/pexels-photo-5779787.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Elegant wedding buffet spread with fresh Kerala dishes in Kochi",
        category: "Wedding Catering",
    },
    {
        src: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Traditional banana leaf meal setup for authentic Kerala Sadhya",
        category: "Kerala Sadhya",
    },
    {
        src: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Colorful appetizer platter for corporate events in Ernakulam",
        category: "Appetizers",
    },
    {
        src: "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Premium biryani feast preparation at catering kitchen",
        category: "Biryani Feast",
    },
    {
        src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Outdoor wedding reception catering setup with elegant table decor",
        category: "Outdoor Events",
    },
    {
        src: "https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Corporate event dining setup with professional hospitality service",
        category: "Corporate Events",
    },
    {
        src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Fresh seafood spread with Kerala spices and garnishes",
        category: "Seafood Station",
    },
    {
        src: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Luxury dessert display at premium wedding reception in Kochi",
        category: "Desserts",
    },
    {
        src: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Live cooking station with chef preparing fresh dishes at event",
        category: "Live Stations",
    },
    {
        src: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Elegant plated dinner service at corporate conclave in Ernakulam",
        category: "Plated Elegance",
    },
    {
        src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Grand buffet arrangement with multiple cuisine stations at wedding",
        category: "Grand Buffet",
    },
    {
        src: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1200",
        alt: "Freshly prepared traditional Kerala curry dishes for catering",
        category: "Kerala Cuisine",
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Matzah Caterers Event Gallery",
    "description": "A curated collection of premium catering setups, traditional Kerala Sadhyas, and luxury event presentations by Matzah Caterers in Kochi.",
    "url": "https://www.matzahcaterers.in/gallery",
    "isPartOf": {
        "@id": "https://www.matzahcaterers.in/#website",
    },
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen pt-20 bg-primary-bg">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="w-full max-w-[94vw] mx-auto pt-16 md:pt-24 px-4 md:px-0">
                <h1 className="font-serif text-[clamp(40px,8vw,100px)] leading-[1.1] text-primary-text mb-4">
                    Event Gallery
                </h1>
                <p className="font-sans text-[18px] md:text-[22px] leading-relaxed opacity-80 max-w-3xl mb-6">
                    A curated showcase from weddings, corporate conclaves, and grand
                    celebrations across Kochi and Ernakulam. Every event tells a story
                    of meticulous craftsmanship and authentic Kerala hospitality.
                </p>
                <hr className="border-t border-primary-text/20 mb-12" />
            </div>

            {/* Masonry-style Gallery Grid */}
            <div className="w-full max-w-[94vw] mx-auto px-4 md:px-0 pb-20">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
                    {GALLERY_IMAGES.map((img, i) => (
                        <div
                            key={i}
                            className="relative mb-4 md:mb-6 break-inside-avoid group rounded-[16px] overflow-hidden"
                        >
                            <div className={`relative ${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-[#D4AF37]/90 text-[#1A1817] text-[12px] font-bold uppercase tracking-wider rounded-full mb-2">
                                        {img.category}
                                    </span>
                                    <p className="text-white/90 text-[14px] font-sans leading-snug">
                                        {img.alt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-[#E4DCD3] py-20">
                <div className="w-full max-w-[94vw] mx-auto px-4 md:px-0 text-center">
                    <h2 className="font-serif text-[clamp(30px,5vw,60px)] leading-[1.1] text-primary-text mb-6">
                        Want This for Your Event?
                    </h2>
                    <p className="font-sans text-[18px] opacity-80 max-w-2xl mx-auto mb-10">
                        Every event we cater is a masterpiece. Let us bring this level
                        of culinary artistry to your next celebration.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-[#1A1817] text-[#F0EBE2] rounded-full font-sans text-[16px] font-medium hover:bg-[#D4AF37] hover:text-[#1A1817] transition-colors duration-300 shadow-lg"
                    >
                        Plan Your Event
                    </Link>
                </div>
            </div>
        </div>
    );
}
