"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Stage 0.0s -> 1.0s: Preloader slides left via aggressive cubic-bezier
        if (preloaderRef.current) {
            // Slide left animation
            gsap.to(preloaderRef.current, {
                xPercent: -100,
                duration: 0.1, // Super fast exit

                ease: "power3.inOut",
                delay: 0,
                onComplete: () => {
                    // Fire a custom event to tell the Hero it's time to animate
                    window.dispatchEvent(new Event('preloaderComplete'));
                }
            });
        }
    }, []);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[9999] bg-accent-sage flex items-center justify-center pointer-events-none"
        />
    );
}
