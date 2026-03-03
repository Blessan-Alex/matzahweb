"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const TESTIMONIALS = [
    { id: 1, text: "Aravind M | Kochi, Kerala", hoverImg: "/kerala_sadhya.png" },
    { id: 2, text: "Lakshmi R | Trivandrum, Kerala", hoverImg: "/elegant_biryani.png" },
    { id: 3, text: "Rohan C | Calicut, Kerala", hoverImg: "/kerala_event_setting.png" }
];

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    // QuickTo instances for smooth performance tracking
    const xTo = useRef<any>(null);
    const yTo = useRef<any>(null);

    useEffect(() => {
        if (cursorRef.current) {
            xTo.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.6, ease: "power3" });
            yTo.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.6, ease: "power3" });
        }
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current || !xTo.current || !yTo.current) return;

        // Use relative coordinates to the section
        const rect = sectionRef.current.getBoundingClientRect();

        // Offset by half the width/height of the follower to center it on cursor
        const followerSize = 250;

        xTo.current(e.clientX - rect.left - (followerSize / 2));
        yTo.current(e.clientY - rect.top - (followerSize / 2));
    };

    const handleMouseEnter = (img: string) => {
        setHoveredImage(img);
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: "back.out(1.5)"
            });
        }
    };

    const handleMouseLeave = () => {
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => setHoveredImage(null)
            });
        }
    };

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#1A1817] py-32 md:py-48 relative overflow-hidden flex flex-col items-center justify-center cursor-default z-20"
            onMouseMove={handleMouseMove}
        >
            {/* Custom Mouse Follower */}
            <div
                ref={cursorRef}
                className="absolute z-10 w-[250px] aspect-[4/5] overflow-hidden rounded-[20px] pointer-events-none opacity-0 scale-0"
                style={{ top: 0, left: 0 }}
            >
                {hoveredImage && (
                    <Image
                        src={hoveredImage}
                        alt="Testimonial hover"
                        fill
                        className="object-cover"
                    />
                )}
            </div>

            <div className="w-full max-w-[94vw] mx-auto px-4 md:px-0 flex flex-col relative z-20 mix-blend-difference">
                {TESTIMONIALS.map((item, i) => (
                    <div
                        key={item.id}
                        className="relative w-full border-t border-[#F0EBE2]/20 py-12 md:py-20 flex justify-start items-center"
                        onMouseEnter={() => handleMouseEnter(item.hoverImg)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h3 className="font-serif text-[#F0EBE2] text-[clamp(35px,5vw,80px)] pointer-events-auto transition-opacity duration-300 hover:opacity-100 opacity-90 inline-block">
                            • {item.text}
                        </h3>
                    </div>
                ))}

                {/* Final bottom border line */}
                <div className="w-full border-t border-[#F0EBE2]/20"></div>
            </div>

        </section>
    );
}
