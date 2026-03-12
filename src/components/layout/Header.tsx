"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface HeaderProps {
    hidden?: boolean;
}

export default function Header({ hidden = false }: HeaderProps) {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const headerRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    // Default to dark text if we are NOT on the homepage
    const [isDarkText, setIsDarkText] = useState(!isHomePage);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // If not on homepage, force dark text and skip ScrollTrigger
        if (!isHomePage) {
            setIsDarkText(true);
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        // Determine if we've scrolled past the hero mask expansion
        // 1200 is the pixel distance defined in HeroSection's scrollTl
        const colorTrigger = ScrollTrigger.create({
            trigger: document.body,
            start: 1200,
            onEnter: () => setIsDarkText(true),
            onLeaveBack: () => setIsDarkText(false),
        });

        return () => {
            colorTrigger.kill();
        };
    }, [isHomePage]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Also explicitly lock the html document if needed
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-[4vw] py-[3vh] pointer-events-none transition-all duration-300 ${isDarkText ? "text-[#1A1817]" : "text-[#F0EBE2]"} ${isScrolled ? "bg-[#1A1817]/95 backdrop-blur-md shadow-md py-[2vh] text-[#F0EBE2]" : ""} ${hidden ? "-translate-y-[100%] opacity-0" : "translate-y-0 opacity-100"}`}
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
                            <Link href="/#services" className="hover:opacity-70 transition-opacity flex items-center gap-1 cursor-pointer pb-4">
                                Services
                                <span className="transition-transform duration-300 group-hover:rotate-45 block">+</span>
                            </Link>

                            {/* Dropdown Menu */}
                            <div className="absolute top-[100%] left-0 w-[300px] bg-[#F0EBE2] text-[#1A1817] p-8 rounded-[20px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out flex flex-col gap-3 font-serif font-light text-[22px] md:text-[28px] leading-[1.2]">
                                <Link href="/#private-engagements" className="hover:opacity-60 transition-opacity">Private Engagements</Link>
                                <Link href="/#wedding-receptions" className="hover:opacity-60 transition-opacity">Wedding Receptions</Link>
                                <Link href="/#corporate-conclaves" className="hover:opacity-60 transition-opacity">Corporate Conclaves</Link>
                                <Link href="/#grand-celebrations" className="hover:opacity-60 transition-opacity">Grand Celebrations</Link>
                            </div>
                        </div>

                        <Link href="/menu" className="hover:opacity-70 transition-opacity pb-4">
                            Menu
                        </Link>
                        <Link href="/about" className="hover:opacity-70 transition-opacity pb-4">
                            About Us
                        </Link>
                        <Link href="/blog" className="hover:opacity-70 transition-opacity pb-4">
                            Blog
                        </Link>
                        <Link href="/gallery" className="hover:opacity-70 transition-opacity pb-4">
                            Gallery
                        </Link>
                        <Link href="/faq" className="hover:opacity-70 transition-opacity pb-4">
                            FAQs
                        </Link>
                    </nav>

                    {/* CTA Button (Desktop) & Hamburger (Mobile) */}
                    <div className="flex items-center gap-4">
                        <a href="https://wa.me/918921038043" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex px-8 py-3 rounded-full border border-current transition-colors duration-300 hover:bg-current hover:text-[#F0EBE2] font-sans text-[16px] md:text-[17px] font-medium pointer-events-auto text-center items-center justify-center">
                            Get In Touch
                        </a>
                        <button
                            className={`md:hidden transition-all duration-200 pointer-events-auto min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-[8px] z-[10001] relative ${(!isScrolled && !isDarkText) || isMobileMenuOpen ? "bg-black/30 backdrop-blur-md text-[#F0EBE2]" : "text-current"}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X size={28} strokeWidth={1.5} />
                            ) : (
                                <Menu size={28} strokeWidth={1.5} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[10000] flex md:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            >
                {/* Dark Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Slide-in Panel */}
                <div 
                    className={`absolute top-0 right-0 w-[85%] max-w-[360px] h-full bg-[#f8f5f0] text-[#1A1817] flex flex-col pt-[12vh] px-8 pb-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full shadow-[-10px_0_30px_rgba(0,0,0,0.1)]"}`}
                >
                    <nav className="flex flex-col gap-6 font-serif text-[28px] leading-[1.2]">
                        <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-[#1A1817]/10 hover:opacity-70 transition-opacity">
                            Services
                        </Link>
                        <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-[#1A1817]/10 hover:opacity-70 transition-opacity">
                            Menu
                        </Link>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-[#1A1817]/10 hover:opacity-70 transition-opacity">
                            About Us
                        </Link>
                        <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-[#1A1817]/10 hover:opacity-70 transition-opacity">
                            Blog
                        </Link>
                        <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-[#1A1817]/10 hover:opacity-70 transition-opacity">
                            Gallery
                        </Link>
                        <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="pb-4 border-b border-[#1A1817]/10 hover:opacity-70 transition-opacity">
                            FAQs
                        </Link>
                    </nav>

                    <div className="mt-auto flex flex-col gap-3">
                        <a
                            href="https://wa.me/918921038043"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full py-4 flex items-center justify-center rounded-[12px] bg-[#1A1817] text-[#f8f5f0] font-sans text-[16px] font-semibold transition-transform active:scale-95"
                        >
                            Get In Touch
                        </a>
                        <a
                            href="tel:+918921038043"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full text-center py-2 text-[#1A1817]/70 font-sans text-[15px] font-medium transition-opacity active:opacity-50"
                        >
                            📞 +91 892 103 8043
                        </a>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}
