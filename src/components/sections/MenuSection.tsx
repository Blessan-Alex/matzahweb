"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MENU_CATEGORIES = [
    {
        id: "01",
        title: "Welcome Drinks",
        items: [
            "Mango Juice",
            "Pineapple Juice",
            "Watermelon Juice",
            "Mint Lime",
            "Grape Juice"
        ],
        note: "More available upon request"
    },
    {
        id: "02",
        title: "Snacks",
        items: [
            "Veg Samosa",
            "French Fries",
            "Spring Roll (Chicken / Veg)",
            "Cake Piece"
        ],
        note: "More available upon request"
    },
    {
        id: "03",
        title: "Mains & Breads",
        items: [
            "Breadroll / Appam",
            "Pathiri / Idiyappam",
            "Chicken Stew",
            "Mutton Stew",
            "Fish Molly",
            "Chicken Roast",
            "Duck Kuruma",
            "Chicken 65",
            "Mutton Biryani",
            "Chicken Biryani",
            "Meals (Veg & Non-Veg Available)",
            "Pappadam, Salad & Pickles (Lemon / Dates)"
        ],
        note: "More available upon request"
    },
    {
        id: "04",
        title: "Desserts",
        items: [
            "Ice Cream",
            "Gulab Jamun",
            "Cake Brownie",
            "Carrot Halwa",
            "Fresh Fruits",
            "Fruit Salad",
            "Jalebi"
        ],
        note: "More available upon request"
    }
];

export default function MenuSection() {
    const containerRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLHRElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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

        const menuBlocks = gsap.utils.toArray<HTMLElement>('.menu-category');
        menuBlocks.forEach((block) => {
            const items = block.querySelectorAll('.menu-item');
            const title = block.querySelector('.category-header');
            const note = block.querySelector('.category-note');
            
            gsap.fromTo([title, ...Array.from(items), note],
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 85%",
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
            <div className="max-w-[94vw] lg:max-w-5xl mx-auto px-4 md:px-0">
                <div ref={headerRef} className="mb-4 md:mb-8 pt-[6vh] text-center">
                    <h2 className="font-serif text-[clamp(40px,8vw,100px)] leading-[1.1] text-primary-text mb-4 md:mb-8">
                        Our Menu
                    </h2>
                    <h3 className="font-sans text-sm font-semibold tracking-widest uppercase text-primary-text opacity-70">
                        Curated Offerings
                    </h3>
                </div>
                <hr ref={lineRef} className="border-t border-primary-text/20 mb-12 md:mb-20" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 lg:gap-y-28">
                    {MENU_CATEGORIES.map((category) => (
                        <div key={category.id} className="menu-category flex flex-col">
                            <div className="category-header flex flex-col mb-8 md:mb-10">
                                <span className="font-serif text-xl md:text-xl opacity-40 mb-2 text-primary-text">
                                    {category.id}.
                                </span>
                                <h3 className="font-serif text-[clamp(32px,3.5vw,44px)] leading-[1.1] text-primary-text border-b border-primary-text/30 pb-4 inline-block">
                                    {category.title}
                                </h3>
                            </div>
                            
                            <ul className="flex flex-col gap-5 text-primary-text/80 font-sans text-[17px] md:text-[19px]">
                                {category.items.map((item, i) => (
                                    <li key={i} className="menu-item flex justify-between items-end gap-4 group">
                                        <span className="shrink-0 tracking-wide">{item}</span>
                                        <div className="flex-grow border-b border-dotted border-primary-text/30 mb-[6px] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                                    </li>
                                ))}
                            </ul>

                            <div className="category-note mt-10 italic text-sm text-primary-text/50 font-serif tracking-wider">
                                * {category.note}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
