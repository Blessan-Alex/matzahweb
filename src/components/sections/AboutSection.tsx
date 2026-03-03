"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Split text into lines for the "wipe" reveal effect
        let split: SplitType | null = null;

        if (textContainerRef.current) {
            // Split into lines
            split = new SplitType(textContainerRef.current, { types: 'lines' });

            // Prepare lines for upward fade animation
            split.lines?.forEach((line) => {
                const wrapper = document.createElement('div');
                wrapper.className = 'overflow-hidden line-wrapper';
                // Adjust for alignment if needed, inline-block handles it well
                wrapper.style.display = 'inline-block';
                wrapper.style.width = '100%';

                line.parentNode?.insertBefore(wrapper, line);
                wrapper.appendChild(line);

                // Initial state: shifted down and invisible
                gsap.set(line, { y: "100%", opacity: 0 });
            });

            // 2. Scroll Scrub Reveal: line by line fade up
            if (split.lines && split.lines.length > 0) {
                gsap.to(split.lines, {
                    scrollTrigger: {
                        trigger: textContainerRef.current,
                        start: "top 85%", // Starts revealing when section enters the viewport
                        end: "bottom 50%", // Finishes before the text block reaches halfway up the screen
                        scrub: 1, // Smooth dragging
                    },
                    y: "0%",
                    opacity: 1,
                    stagger: 0.1, // Cascades down the lines
                    ease: "power2.out"
                });
            }
        }

        return () => {
            split?.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative z-10 bg-primary-bg text-primary-text pt-[150px] pb-[150px]"
        >
            <div className="max-w-[94vw] mx-auto grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-1 md:col-span-12 lg:col-span-10 lg:col-start-2">
                    {/* The elegant sentence-case typography block */}
                    <div ref={textContainerRef} className="font-serif font-normal text-about-text leading-[1.6]">
                        We are a boutique catering company that serves up thoughtful menus and
                        moments. Known for personalizing our catering, we craft creative,
                        tasteful, and intuitive culinary experiences that inspire the way we
                        gather. Food should be as beautiful as it is delicious.
                    </div>
                </div>
            </div>
        </section>
    );
}
