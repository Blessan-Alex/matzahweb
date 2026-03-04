"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Circle, Menu } from "lucide-react";

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const [isDarkText, setIsDarkText] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Determine if we've scrolled past the hero mask expansion
        // 1200 is the pixel distance defined in HeroSection's scrollTl
        const colorTrigger = ScrollTrigger.create({
            start: 1200,
            onEnter: () => setIsDarkText(true),
            onLeaveBack: () => setIsDarkText(false),
        });

        return () => {
            colorTrigger.kill();
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-[4vw] py-[3vh] pointer-events-none transition-colors duration-500 ${isDarkText ? "text-[#1A1817]" : "text-[#F0EBE2]"}`}
        >
            {/* Navbar Content */}
            <div
                ref={linksRef}
                className="flex items-center gap-4 md:gap-10 pointer-events-auto w-full justify-between"
            >
                {/* Brand Logo - On Left */}
                <Link href="/" className="pointer-events-auto font-serif text-[28px] md:text-[32px] font-normal tracking-wide hover:opacity-80 transition-opacity">
                    Matzah
                </Link>

                <div className="flex items-center gap-4 md:gap-10">
                    {/* Navigation Links (Desktop) */}
                    <nav className="hidden md:flex items-center gap-8 font-sans text-[16px] md:text-[17px] font-medium pointer-events-auto">
                        {/* Services Dropdown Container */}
                        <div className="group relative">
                            <a href="#services" className="hover:opacity-70 transition-opacity flex items-center gap-1 cursor-pointer pb-4">
                                Services
                                <span className="transition-transform duration-300 group-hover:rotate-45 block">+</span>
                            </a>

                            {/* Dropdown Menu */}
                            <div className="absolute top-[100%] left-0 w-[300px] bg-[#F0EBE2] text-[#1A1817] p-8 rounded-[20px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out flex flex-col gap-3 font-serif font-light text-[22px] md:text-[28px] leading-[1.2]">
                                <a href="#private-engagements" className="hover:opacity-60 transition-opacity">Private Engagements</a>
                                <a href="#wedding-receptions" className="hover:opacity-60 transition-opacity">Wedding Receptions</a>
                                <a href="#corporate-conclaves" className="hover:opacity-60 transition-opacity">Corporate Conclaves</a>
                                <a href="#grand-celebrations" className="hover:opacity-60 transition-opacity">Grand Celebrations</a>
                            </div>
                        </div>

                        <a href="#menu" className="hover:opacity-70 transition-opacity pb-4">
                            Menu
                        </a>
                        <a href="#about" className="hover:opacity-70 transition-opacity pb-4">
                            About Us
                        </a>
                    </nav>

                    {/* CTA Button (Desktop) & Hamburger (Mobile) */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:inline-flex px-8 py-3 rounded-full border border-current transition-colors duration-300 hover:bg-current hover:text-primary-bg font-sans text-[16px] md:text-[17px] font-medium pointer-events-auto">
                            Get In Touch
                        </button>
                        <button
                            className="md:hidden transition-opacity duration-200 hover:opacity-60 pointer-events-auto min-w-[48px] min-h-[48px] flex items-center justify-center p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={28} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#F0EBE2] text-[#1A1817] z-[9998] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
                style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
            >
                {/* Close Button or leave hamburger to toggle. We'll rely on hamburger since it stays fixed at top right */}

                <nav className="flex flex-col items-center gap-8 font-serif text-[32px] leading-[1.2]">
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">
                        Services
                    </a>
                    <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">
                        Menu
                    </a>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">
                        About Us
                    </a>
                </nav>

                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-8 px-8 py-3 rounded-full border border-current transition-colors duration-300 hover:bg-current hover:text-[#F0EBE2] font-sans text-[16px] font-medium"
                >
                    Get In Touch
                </button>
            </div>
        </header>
    );
}
