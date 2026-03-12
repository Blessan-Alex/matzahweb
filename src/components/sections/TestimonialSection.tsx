"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TESTIMONIALS = [
    {
        id: 1,
        text: "Matzah handled our pre-wedding dinner in Kochi and we didn't have to worry about a thing. The fried rice was amazing, the chicken curry was exceptional, and the appam with fish molly had everyone coming back for more. Relatives, neighbours, everyone loved it. The presentation and service felt truly premium. They even took care of breakfast the next morning with appam, beef stew, coffee and tea. Absolute lifesavers.",
        author: "Feeba Ranjith",
        event: "Pre-Wedding Dinner, Kochi",
        initials: "FR",
        rating: 5
    },
    {
        id: 2,
        text: "I recently used Matzah Caterers for an event, and they exceeded all expectations. The food was incredibly fresh and flavorful, but what really stood out was their attention to detail and professionalism, allowing us to actually enjoy the occasion without any added stress.",
        author: "Anish Paul",
        event: "Private Event, Kochi",
        initials: "AP",
        rating: 5
    },
    {
        id: 3,
        text: "Recently attended a small event catered by Matzah Caterers in Aluva. Very professional service with plenty of vegetarian and non-vegetarian choices. The food was delicious and everything was well-organized. Highly recommended if you are looking for reliable catering services in Kochi.",
        author: "Priskilla Thomas",
        event: "Event Catering, Aluva",
        initials: "PT",
        rating: 5
    },
    {
        id: 4,
        text: "I recently attended a small event catered by Matzah. The food quality was outstanding, with great taste, freshness, and perfect presentation. Every dish was served at the right temperature. The team was professional, friendly, and well-organized. I highly recommend them for high-quality catering.",
        author: "Koshy Mathai",
        event: "Private Event, Ernakulam",
        initials: "KM",
        rating: 5
    }
];

const StarRating = ({ count }: { count: number }) => (
    <div className="flex gap-1 mb-4 text-[#D4A853]" aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: count }, (_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
);

const TestimonialCard = ({ testimonial, maxLength = 160 }: { testimonial: any, maxLength?: number }) => {
    const [expanded, setExpanded] = useState(false);
    const isLong = testimonial.text.length > maxLength;
    const displayText = expanded
        ? testimonial.text
        : testimonial.text.substring(0, maxLength) + (isLong && !expanded ? '...' : '');

    return (
        <article className="testimonial-card flex flex-col bg-white rounded-2xl p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] border border-[#8B6F47]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,111,71,0.1)]">
            <StarRating count={testimonial.rating} />
            <div className="flex-grow mb-4">
                <p className="font-sans text-[15px] leading-[1.65] text-[#4A3728] text-left">
                    {displayText}
                </p>
                {isLong && (
                    <button
                        className="text-[#8B6F47] font-semibold text-[14px] text-left underline underline-offset-4 mt-2 hover:text-[#6B5A3E] transition-colors"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? 'Read less' : 'Read more'}
                    </button>
                )}
            </div>
            <div className="flex flex-row items-center gap-3 mt-auto pt-4 border-t border-[#8B6F47]/10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#D4A853] text-white flex items-center justify-center font-bold text-[14px] tracking-wide shrink-0">
                    {testimonial.initials}
                </div>
                <div className="flex flex-col text-left">
                    <cite className="font-semibold text-[14px] text-[#2D1810] not-italic block m-0">
                        {testimonial.author}
                    </cite>
                    <span className="text-[13px] text-[#8B7A6B] block m-0 mt-0.5">
                        {testimonial.event}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default function TestimonialSection() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (headerRef.current) {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }

        const cards = gsap.utils.toArray<HTMLElement>('.testimonial-card');
        gsap.fromTo(cards,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="py-20 md:py-24 bg-[#FDF8F0] relative z-20" aria-label="Customer Testimonials">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <div ref={headerRef} className="text-center mb-12 md:mb-16">
                    <span className="text-[13px] font-semibold uppercase tracking-[2px] text-[#8B6F47] block mb-2">
                        Client Legacies
                    </span>
                    <h2 className="font-serif text-[clamp(32px,5vw,48px)] leading-[1.1] text-[#2D1810] mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="font-sans text-[16px] text-[#6B5A4E] max-w-2xl mx-auto m-0">
                        Trusted by families and businesses across Kochi and Ernakulam to deliver unforgettable culinary experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {TESTIMONIALS.map((t) => (
                        <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
