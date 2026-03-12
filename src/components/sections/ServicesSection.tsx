"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

const CAROUSEL_IMAGES = [
    { id: 1, src: "/kerala_sadhya.png", alt: "Authentic Kerala Sadhya Catering Display", format: "landscape" },
    { id: 2, src: "/elegant_biryani.png", alt: "Elegant Biryani Feast for Wedding Receptions", format: "portrait" },
    { id: 3, src: "/kerala_event_setting.png", alt: "Premium Kochi Event Catering Setup", format: "portrait" },
    { id: 4, src: "/kerala_seafood_prep.png", alt: "Refined Kerala Seafood Preparation Live Station", format: "landscape" },
    { id: 5, src: "/composed_hospitality_staff.png", alt: "Professional Hospitality Service Staff", format: "portrait" },
    { id: 6, src: "/elegant_biryani.png", alt: "Muted elegant biryani spread", format: "portrait" },
    { id: 7, src: "/kerala_sadhya.png", alt: "Massive traditional sadhya layout", format: "landscape" },
    { id: 8, src: "/kerala_event_setting.png", alt: "Twilight outdoor event setting", format: "portrait" },
    { id: 9, src: "/composed_hospitality_staff.png", alt: "Staff setting the table", format: "portrait" },
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
            <div ref={headerRef} className="w-full max-w-[94vw] mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 mb-4 md:mb-12 shrink-0">
                <div className="col-span-1 md:col-span-12 flex justify-between items-end">
                    <p className="font-sans text-sm tracking-widest uppercase opacity-60">Services Gallery</p>
                    <Link href="/gallery" className="font-sans text-sm tracking-widest uppercase underline hover:opacity-70 transition-opacity">
                        View All
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
                    {CAROUSEL_IMAGES.map((img) => {
                        // Apply specific formatting based on the new array
                        const aspectClass = img.format === 'landscape' ? 'aspect-[4/3] md:aspect-[16/9]' : 'aspect-[3/4] md:aspect-[2/3]';

                        return (
                            <div
                                key={img.id}
                                // Force uniform height for all items, adjust width via aspect ratio
                                className={`relative rounded-[24px] overflow-hidden shrink-0 h-[50vh] md:h-[65vh] ${aspectClass}`}
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
