"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 1. Split text into lines for the "wipe" reveal effect
        if (!textContainerRef.current) return;

        const split = new SplitType(textContainerRef.current, { types: 'lines' });

        // Prepare lines for upward fade animation
        split.lines?.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'overflow-hidden line-wrapper';
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

        return () => {
            split.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative z-10 bg-primary-bg text-primary-text pt-12 md:pt-[150px] pb-12 md:pb-[150px]"
        >
            <div className="max-w-[94vw] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
                <div className="col-span-1 md:col-span-6 lg:col-span-5 relative lg:left-[4vw]">
                    {/* The elegant sentence-case typography block */}
                    <div ref={textContainerRef} className="font-serif leading-[1.1] text-primary-text mb-6 md:mb-0">
                        <h2 className="text-[clamp(50px,8vw,120px)] tracking-[-0.02em]">
                            Elevating Life&apos;s<br/>Gatherings
                        </h2>
                    </div>
                </div>

                {/* Body Text Column */}
                <div className="col-span-1 md:col-span-6 lg:col-span-5 md:pl-[6vw] lg:pl-[2vw] flex flex-col justify-end">
                    <p className="font-sans font-light text-[16px] md:text-[18px] leading-[1.8] text-primary-text opacity-85">
                        From grand wedding receptions to high-profile corporate events and exclusive luxury dining experiences, we transform your occasion into a seamless, unforgettable celebration. Matzah Caterers combines the authentic, rich heritage of Kerala cuisine with composed, elite hospitality management.
                        <br /><br />
                        We handle every detail of the culinary experience, ensuring that event planners, hosts, and guests can focus entirely on the celebration. Our commitment to pristine ingredient sourcing, traditional cooking techniques, and modern presentation creates a dining atmosphere that connects guests and elevates the standard of event catering across Kochi and Ernakulam.
                        <br /><br />
                        Whether you require an intimate pre-wedding gathering or a comprehensive event management catering solution for hundreds of attendees, our expertise guarantees flawless execution.
                    </p>
                    <div className="mt-8 md:mt-10">
                        <a href="/menu" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D1810] text-[#F5EDE0] rounded-[12px] font-sans text-[15px] font-semibold uppercase tracking-wider transition-colors hover:bg-[#3D2820] active:scale-95">
                            Explore Menu <span className="text-[18px] transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
