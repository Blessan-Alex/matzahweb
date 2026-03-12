"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const curveTextRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // 2. Initial State
        gsap.set(imageRef.current, { scale: 1.1 }); // Parallax reverse
        gsap.set(curveTextRef.current, { opacity: 0 }); // Hide curved text initially

        // 3. Entrance Animation (Triggered by Preloader)
        const playEntrance = () => {
            const tl = gsap.timeline();

            // Overlay fades in
            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 1.2,
                ease: "power3.inOut"
            }, 0);

            // Image scales down internally for smooth parallax
            tl.to(imageRef.current, {
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut"
            }, 0);

            // Finally, fade in the curved text synchronously with the delayed Navbar
            tl.to(curveTextRef.current, {
                opacity: 1,
                duration: 1.5,
                ease: "power2.out"
            }, 1.5); 
        };

        window.addEventListener("preloaderComplete", playEntrance, { once: true });

        // 4. Scroll Scrub Animation: Parallax background moves up slightly while scrolling
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top", // Normal flow
                scrub: true,
            }
        });

        scrollTl.to(overlayRef.current, {
            y: "-20vh",
            duration: 1,
            ease: "none"
        }, 0);
        
        scrollTl.to(imageRef.current, {
            y: "15vh",
            duration: 1,
            ease: "none"
        }, 0);

        return () => {
            window.removeEventListener("preloaderComplete", playEntrance);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative h-[100dvh] w-full flex flex-col items-center justify-end overflow-hidden"
        >
            {/* Immersive Edge-to-Edge Image */}
            <div className="absolute inset-0 z-[0] overflow-hidden bg-[#1A1817]">
                <img
                    ref={imageRef}
                    src="/herosvg.svg"
                    alt="Premium Kerala wedding and corporate event catering setup in Kochi by Matzah Caterers"
                    className="absolute w-full h-full object-cover object-[center_30%]"
                    fetchPriority="high"
                />
            </div>

            {/* Dark Gradient Overlay Layer for Text Readability */}
            <div
                ref={overlayRef}
                className="absolute inset-x-0 inset-y-0 z-[1] opacity-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.85) 100%)"
                }}
            />

            <h1 className="sr-only">
                Matzah Caterers - Premium Event Catering in Kochi – Weddings, Corporates & Sadhya
            </h1>

            {/* Bottom Content Area */}
            <div
                ref={curveTextRef}
                className="relative z-[10] w-[90%] md:w-[600px] pb-[140px] text-center pointer-events-auto flex flex-col items-center"
            >
                {/* Badge Context */}
                <span className="inline-block px-4 py-2 bg-[#D4A853]/10 border border-[#D4A853]/30 rounded-full text-[12px] font-semibold tracking-widest text-[#D4A853] uppercase mb-4 backdrop-blur-sm shadow-sm">
                    ✦ 15+ Years of Excellence
                </span>

                <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-white leading-[1.1] mb-3 drop-shadow-lg">
                    Premium Kerala<br className="md:hidden" /> Catering
                </h2>
                
                <p 
                    className="text-[14px] md:text-[16px] text-white/90 leading-relaxed mb-8 max-w-[340px] md:max-w-md mx-auto drop-shadow"
                    style={{ fontFamily: 'var(--font-public-sans)' }}
                >
                    Authentic sadhyas & elegant dining for weddings and corporate events across Kochi
                </p>

                {/* Hero Primary CTAs */}
                <div className="flex flex-row gap-3 w-full md:w-auto max-w-[340px]">
                    <a 
                        href="/contact" 
                        className="flex-[2] py-4 bg-[#D4A853] text-[#1a1410] rounded-xl text-[15px] font-bold text-center active:scale-95 transition-transform"
                    >
                        Request a Quote
                    </a>
                    <a 
                        href="tel:+918921038043" 
                        className="flex-1 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl text-[15px] font-semibold text-center whitespace-nowrap active:scale-95 transition-transform"
                    >
                        📞 Call
                    </a>
                </div>
            </div>

            {/* Animated Scroll Indicator layer is placed over gradient */}
            <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center gap-2">
                <span className="block w-[1px] h-8 bg-white/40 animate-[scrollPulse_2s_ease-in-out_infinite]" />
            </div>

            {/* Smooth Extender into Beige Section */}
            <div className="absolute bottom-0 left-0 right-0 h-[120px] z-[5] pointer-events-none"
                 style={{ background: 'linear-gradient(to bottom, transparent 0%, #F0EBE2 100%)' }}
            />

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes scrollPulse {
                    0%, 100% { opacity: 0.3; transform: scaleY(0.5); transform-origin: top; }
                    50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
                }
            `}} />
        </section>
    );
}
