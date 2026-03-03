"use client";

import { Instagram } from "lucide-react";

export default function CTASection() {
    return (
        <section className="w-full bg-[#C7D0D8] pt-32 pb-8 flex flex-col items-center justify-between min-h-[70vh] relative z-20">
            {/* Top Text Cluster */}
            <div className="flex flex-col items-center text-center mt-10">
                <h2 className="font-serif text-[#1A1817] text-[clamp(50px,9vw,140px)] leading-[0.9] tracking-[-0.02em] uppercase max-w-[90vw]">
                    Let&apos;s Create <br />
                    Your Gathering
                </h2>

                <button className="main-button rounded-pill mt-16 !border-[#1A1817]/40 !text-[#1A1817] hover:!bg-[#1A1817] hover:!text-[#C7D0D8] text-lg px-8 py-4">
                    Schedule a Call
                </button>
            </div>

            {/* Bottom Footer Info */}
            <div className="w-full max-w-[94vw] mx-auto flex flex-col md:flex-row items-center justify-between mt-auto pt-16">

                {/* Socials */}
                <div className="flex space-x-4 mb-6 md:mb-0">
                    <a href="https://instagram.com/matzahcaterers" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#1A1817]/30 flex items-center justify-center text-[#1A1817] hover:bg-[#1A1817] hover:text-[#C7D0D8] transition-colors">
                        <Instagram size={20} />
                    </a>
                </div>

                {/* Contact Email & Phone */}
                <div className="text-[#1A1817] font-sans text-sm tracking-wide text-center md:text-left">
                    <p className="mb-2">For General Inquiries: <span className="font-bold">info@matzahcaterers.com</span></p>
                    <p>Phone / WhatsApp: <span className="font-bold">+91 8921038043</span></p>
                </div>

                {/* Empty div for flex spacing balance on desktop if needed, or we just leave it justify-between */}
                <div className="hidden md:block w-24"></div>
            </div>
        </section>
    );
}
