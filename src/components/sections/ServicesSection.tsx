"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

const CAROUSEL_IMAGES = [
    { id: 1, src: "/kerala_sadhya.png", alt: "Authentic Kerala Sadhya Catering Display" },
    { id: 2, src: "/elegant_biryani.png", alt: "Elegant Biryani Feast for Wedding Receptions" },
    { id: 3, src: "/kerala_event_setting.png", alt: "Premium Kochi Event Catering Setup" },
    { id: 4, src: "/kerala_seafood_prep.png", alt: "Refined Kerala Seafood Preparation Live Station" },
    { id: 5, src: "/composed_hospitality_staff.png", alt: "Professional Hospitality Service Staff for Corporate Events" },
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const pinContainerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Initial Fade In for Text elements
        if (headerRef.current && titleRef.current) {
            gsap.fromTo([headerRef.current, titleRef.current],
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }

        // 2. Horizontal scroll tied to vertical scroll of the isolated pinContainer
        const getScrollAmount = () => {
            // Determine how much overflow we have horizontally
            return -(carouselRef.current!.scrollWidth - window.innerWidth + 60); // 60 adds gap padding buffer
        };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pinContainerRef.current,
                start: "top top", // Pin immediately when the top of the pinContainer hits the top of viewport
                end: () => `+=${carouselRef.current?.scrollWidth || window.innerWidth * 2}`,
                pin: true, // pin just the container, leaving the top text to scroll away
                scrub: 1, // Smooth dragging
                anticipatePin: 1,
                invalidateOnRefresh: true, // Recalculate on load/resize
            }
        });

        tl.to(carouselRef.current, {
            x: getScrollAmount,
            ease: "none"
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id="services-section" ref={sectionRef} className="w-full bg-primary-bg overflow-hidden flex flex-col pt-12 md:pt-20 border-t border-primary-text/20 relative z-20">
            {/* Top Text Content (Unpinned - flows normally) */}
            <div ref={headerRef} className="w-full max-w-[94vw] mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 mb-4 md:mb-6 shrink-0">
                <div className="col-span-1 md:col-span-4">
                    <p className="font-sans text-sm tracking-widest uppercase opacity-60">Services</p>
                </div>
            </div>

            <div ref={titleRef} className="w-full max-w-[94vw] mx-auto px-4 md:px-0 shrink-0">
                <h2 className="font-serif text-[clamp(40px,7vw,110px)] leading-[0.9] uppercase text-primary-text tracking-[-0.02em] mb-6 md:mb-8">
                    Elevating <br />
                    life's <br />
                    gatherings
                </h2>
            </div>

            <div className="w-full max-w-[94vw] mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-12 mb-12 md:mb-20 shrink-0 gap-y-6 md:gap-y-0 relative z-30">
                <div className="col-span-1 md:col-span-5 md:pr-10">
                    <p className="font-sans text-base md:text-lg leading-relaxed text-primary-text/80">
                        From grand wedding receptions to high-profile corporate events and exclusive luxury dining experiences, we transform your occasion into a seamless, unforgettable celebration.
                        Matzah Caterers combines the authentic, rich heritage of Kerala cuisine with composed, elite hospitality management.
                        We handle every detail of the culinary experience, ensuring that event planners, hosts, and guests can focus entirely on the celebration.
                        Our commitment to pristine ingredient sourcing, traditional cooking techniques, and modern presentation creates a dining atmosphere that connects guests and elevates the standard of event catering across Kochi and Ernakulam.
                        Whether you require an intimate pre-wedding gathering or a comprehensive event management catering solution for hundreds of attendees, our expertise guarantees flawless execution.
                    </p>
                </div>
                <div className="col-span-1 md:col-span-3 flex items-start md:mt-0">
                    <Link href="/menu" className="main-button rounded-pill">
                        Explore Catering Options
                    </Link>
                </div>
            </div>

            {/* Pinned Carousel Container */}
            {/* This full height container triggers the GSAP pin when it reaches the top of the screen */}
            <div ref={pinContainerRef} className="h-[100svh] w-full flex flex-col justify-center items-start overflow-visible pt-0">
                <div
                    ref={carouselRef}
                    className="flex gap-4 md:gap-8 px-4 md:px-[3vw] w-max will-change-transform items-center"
                >
                    {CAROUSEL_IMAGES.map((img, idx) => {
                        // Create a rhythmic pattern of squares and tall portraits
                        const isPortrait = idx % 2 !== 0;
                        return (
                            <div
                                key={img.id}
                                className={`relative rounded-[24px] overflow-hidden shrink-0 ${isPortrait ? 'h-[50vh] md:h-[65vh] aspect-[3/4]' : 'h-[40vh] md:h-[55vh] aspect-[5/4]'
                                    }`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
