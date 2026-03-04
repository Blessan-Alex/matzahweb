"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const curveTextRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Text Split Setup
        let split: SplitType | null = null;
        if (textRef.current) {
            split = new SplitType(textRef.current, { types: 'chars' });
            gsap.set(split.chars, { y: 100, opacity: 0 }); // Initial State
        }

        // 2. Oval Mask Initial State
        gsap.set(maskRef.current, { scale: 0.8, opacity: 0 });
        gsap.set(imageRef.current, { scale: 1.3 }); // Parallax reverse
        gsap.set(curveTextRef.current, { opacity: 0 }); // Hide curved text initially

        // 3. Entrance Animation (Triggered by Preloader)
        const playEntrance = () => {
            const tl = gsap.timeline();

            // Mask Scales In from slightly smaller
            tl.fromTo(maskRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.inOut",
                }, 0);

            // Overlay fades in
            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 1.2,
                ease: "power3.inOut"
            }, 0);

            // Image scales down internally for smooth parallax
            tl.to(imageRef.current, {
                scale: 1,
                duration: 1.2,
                ease: "power3.inOut"
            }, 0);

            // Text Staggers In Smoother
            if (split?.chars) {
                tl.fromTo(split.chars,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.0,
                        stagger: 0.04,
                        ease: "power4.out"
                    }, 0.5); // Starts smoother overlapping with mask
            }

            // Finally, fade in the curved text synchronously with the delayed Navbar
            tl.to(curveTextRef.current, {
                opacity: 1,
                duration: 1.5,
                ease: "power2.out"
            }, 2.5); // Delayed significantly so Marquet is fully readable first
        };

        window.addEventListener("preloaderComplete", playEntrance, { once: true });

        // 4. Scroll Scrub Animation: Heavy and slow zooming
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1200", // Faster scroll duration
                scrub: 1, // Smooth scrub
                pin: true, // Pins the hero while the mask scales
            }
        });

        // Instead of scaling, we animate width/height to reveal the landscape video's sides
        scrollTl.to(maskRef.current, {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px", // Use 0px instead of 0% for smooth capsule -> rectangle interpolation
            ease: "power2.inOut",
            duration: 1
        }, 0);

        // The massive typography now perfectly stays in place during scroll
        // No animation applied to textRef.current

        // Parallax background overlay moves up significantly while scrolling
        scrollTl.to(overlayRef.current, {
            y: "-50vh",
            duration: 1,
            ease: "none"
        }, 0);

        return () => {
            window.removeEventListener("preloaderComplete", playEntrance);
            split?.revert();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1817]"
        >
            {/* Transparent Animated Overlay Layer */}
            <div
                ref={overlayRef}
                className="absolute inset-x-0 inset-y-[-50vh] z-[0] opacity-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(rgba(240, 235, 226, 0.15) 2px, transparent 2px)",
                    backgroundSize: "30px 30px"
                }}
            />

            {/* Background Layer: Massive Typography */}
            <h1
                ref={textRef}
                className="absolute w-full text-center z-[3] font-serif font-light text-[16vw] sm:text-[13vw] !leading-[1] text-[#F0EBE2] uppercase tracking-wide opacity-90"
            >
                Matzah
                <span className="sr-only"> Caterers - Premium Wedding & Corporate Catering in Kochi</span>
            </h1>

            <div
                ref={maskRef}
                className="hero-mask z-[2] absolute flex items-center justify-center overflow-hidden w-[clamp(240px,35vw,500px)] h-[clamp(380px,70vh,800px)]"
                style={{ borderRadius: "30%" }}
            >
                {/* LCP Optimization: Next.js Image with priority and fetchPriority */}
                <img
                    ref={imageRef}
                    src="/herosvg.svg"
                    alt="Matzah Kerala Event Landscape"
                    className="absolute w-[100vw] h-[100vh] object-cover max-w-none opacity-90"
                    style={{ width: "100vw", height: "100vh" }}
                    fetchPriority="high"
                />
            </div>

            {/* Bottom Layer: Straight Text Badge near the bottom */}
            <div
                ref={curveTextRef}
                className="absolute z-[1] bottom-[6vh] md:bottom-[8vh] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none"
            >
                <p
                    className="text-[14px] md:text-[18px] font-thin tracking-[0.15em] text-[#F0EBE2] uppercase"
                    style={{ fontFamily: 'var(--font-public-sans)' }}
                >
                    Curated hospitality for every gathering
                </p>
            </div>
        </section>
    );
}
