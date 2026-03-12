"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

const MENU_ITEMS = [
    {
        id: "01",
        title: "Welcoming Appetizers",
        desc: "An elegant start to your gathering. We serve refined, handcrafted bites featuring authentic Malabar spices and fresh local produce. Our expert chefs ensure that every starter keeps guests perfectly satisfied as they arrive. Conversations flow seamlessly alongside these masterfully prepared introductions to our Kochi culinary heritage. Every detail, from the vibrant presentation to the delicate flavor balance, is carefully managed by our hospitality team.",
        img: "/menu_appetizers.png",
    },
    {
        id: "02",
        title: "Curated Feast Displays",
        desc: "Designed as a stunning visual centerpiece for your event. Our curated displays showcase the immense richness of Kerala cuisine, utilizing premium ingredients and age-old recipes. We feature specialized live-cooking stations where guests can interact directly with our culinary team. Guests enjoy a dynamic, interactive dining experience that brings structured elegance and high-end flair to communal eating.",
        img: "/menu_feast.png",
    },
    {
        id: "03",
        title: "Grand Buffet",
        desc: "Our most extensive and luxurious offering. We provide a comprehensive culinary journey through exquisite local cuisine and refined international dishes. Our grand buffets are ideal for large-scale wedding receptions and corporate celebrations. We ensure pristine arrangement, spotless presentation, and constantly refreshed stations. Guests dine with absolute comfort, order, and unparalleled variety.",
        img: "/menu_buffet.png",
    },
    {
        id: "04",
        title: "Traditional & Family Style",
        desc: "The most authentic, heartwarming way to gather. We offer a ceremonial sit-down service that honors Kerala's deepest traditions. We serve authentic, multi-course Sadhyas on fresh banana leaves, alongside rich, expertly spiced Biryani feasts. We focus intensely on the shared emotional experience and our signature composed hospitality, ensuring every guest enjoys true culinary heritage exactly as it was meant to be experienced.",
        img: "/menu_traditional.png",
    },
    {
        id: "05",
        title: "Plated Elegance",
        desc: "Our most formal, Michelin-inspired catering offering. We present beautifully, professionally arranged dishes course by course. We serve each guest with exact precision and practiced etiquette. This tailored menu guarantees absolute structure, polish, and elite elegance for your most important VIP gatherings. We execute prestigious corporate conclaves and high-society events flawlessly.",
        img: "/menu_plated.png",
    }
];

export default function MenuSection() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLHRElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Header & Line smooth fade-in
        if (headerRef.current && lineRef.current) {
            gsap.fromTo([headerRef.current, lineRef.current],
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }

        // 2. Menu Items Fast Top-to-Bottom Description Reveal
        const menuBlocks = gsap.utils.toArray<HTMLElement>('.menu-block');
        menuBlocks.forEach((block) => {
            const desc = block.querySelector('.menu-desc');
            const title = block.querySelector('.menu-title');
            const num = block.querySelector('.menu-num');

            if (desc && title && num) {
                gsap.fromTo([num, title, desc],
                    { y: -30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1, // Fast top to bottom cascade for elements inside block
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: block,
                            start: "top 85%", // Triggers early as it enters screen
                        }
                    }
                );
            }
        });

        // 3. Parallax Infinite Image Scrolling
        // The image physically moves upwards within its overflowing container
        const images = gsap.utils.toArray<HTMLImageElement>('.menu-image-parallax');
        images.forEach((img) => {
            gsap.fromTo(img,
                { y: "15%" }, // Starts slightly lower
                {
                    y: "-15%",  // Moves upward
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-primary-bg relative z-20">
            <div className="max-w-[94vw] mx-auto px-4 md:px-0">

                {/* Header Title & Line */}
                <div ref={headerRef} className="mb-8">
                    <h2 className="font-serif text-[clamp(50px,8vw,120px)] leading-[1.1] text-primary-text mb-20">
                        Get-togethers
                    </h2>
                    <h3 className="font-sans text-sm font-semibold tracking-wider text-primary-text">
                        Menu
                    </h3>
                </div>
                <hr ref={lineRef} className="border-t border-primary-text/20 mb-20 md:mb-32" />

                {/* Vertical Menu List Layer */}
                <div className="grid grid-cols-1 gap-y-20 md:gap-y-40">
                    {MENU_ITEMS.map((item, index) => (
                        <div key={item.id} className="menu-block grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 relative">

                            {/* Left Content (Text) */}
                            <div className="col-span-1 lg:col-span-6 lg:col-start-1 flex flex-col pt-4">
                                <span className="menu-num font-serif text-2xl opacity-60 mb-6 block text-primary-text">
                                    {item.id}.
                                </span>

                                <h3 className="menu-title font-serif text-[clamp(40px,5vw,70px)] leading-[1.1] md:leading-[1] tracking-[-0.02em] text-primary-text mb-6 md:mb-8">
                                    {item.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h3>

                                <p className="menu-desc font-sans text-lg leading-relaxed max-w-md mb-8 text-primary-text/80">
                                    {item.desc}
                                </p>

                                <div className="menu-desc">
                                    <Link href="/menu" className="main-button rounded-pill mt-4">
                                        View {item.title} Options
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content (Parallax Image) */}
                            <div className="col-span-1 lg:col-span-6 lg:col-start-7 flex justify-end">
                                {/* Wrap image in hidden overflow so parallax happens internally */}
                                <div className="w-full lg:w-[70%] aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[24px] relative mt-4 md:mt-0">
                                    <Image
                                        src={item.img}
                                        alt={`${item.title} - Matzah Caterers Kochi Event Menu`}
                                        fill
                                        className="menu-image-parallax object-cover scale-[1.3]" // Scaled up to allow room for parallax movement
                                    />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
