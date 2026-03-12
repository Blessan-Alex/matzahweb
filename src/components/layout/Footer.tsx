import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1A1817] text-[#F0EBE2] pt-20 pb-10 md:pb-12 border-t border-[#F0EBE2]/20 relative z-[50]">
            <div className="max-w-[94vw] mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                {/* Brand & Legacy */}
                <div className="md:col-span-4 flex flex-col items-start">
                    <Link href="/" className="font-serif text-[40px] md:text-[50px] font-normal tracking-wide hover:opacity-80 transition-opacity mb-4">
                        Matzah
                    </Link>
                    <p className="font-sans text-[15px] opacity-80 leading-relaxed max-w-sm mb-6">
                        Premium event catering in Kochi and Ernakulam. Over a decade of crafting authentic Kerala sadhyas and elegant dining experiences for weddings and corporate conclaves.
                    </p>
                    <Link 
                        href="/contact" 
                        className="w-full md:w-auto text-center bg-gradient-to-br from-[#D4A853] to-[#B8943E] text-[#1a1a1a] font-bold tracking-wide px-8 py-4 rounded-[12px] hover:scale-[0.98] transition-transform shadow-lg"
                    >
                        Request a Quote
                    </Link>
                </div>

                {/* Service Areas (Local SEO) */}
                <div className="md:col-span-3 flex flex-col">
                    <h4 className="font-sans tracking-widest text-[13px] uppercase opacity-50 mb-6">Service Areas</h4>
                    <div className="flex flex-wrap gap-2">
                        <Link href="/locations/catering-services-kochi" className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-[13px] font-medium text-white/85 tracking-wide">Kochi</Link>
                        <Link href="/locations/catering-services-ernakulam" className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-[13px] font-medium text-white/85 tracking-wide">Ernakulam</Link>
                        <Link href="/locations/catering-services-kakkanad" className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-[13px] font-medium text-white/85 tracking-wide">Kakkanad</Link>
                        <Link href="/locations/catering-services-aluva" className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-[13px] font-medium text-white/85 tracking-wide">Aluva</Link>
                        <Link href="/locations/catering-services-edappally" className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-[13px] font-medium text-white/85 tracking-wide">Edappally</Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-2 flex flex-col">
                    <h4 className="font-sans tracking-widest text-[13px] uppercase opacity-50 mb-6">Quick Links</h4>
                    <ul className="flex flex-col gap-3 font-serif text-[18px]">
                        <li><Link href="/menu" className="hover:opacity-70 transition-opacity">Menu & Pricing</Link></li>
                        <li><Link href="/about" className="hover:opacity-70 transition-opacity">Our Story</Link></li>
                        <li><Link href="/gallery" className="hover:opacity-70 transition-opacity">Event Gallery</Link></li>
                        <li><Link href="/blog" className="hover:opacity-70 transition-opacity">Catering Blog</Link></li>
                        <li><Link href="/faq" className="hover:opacity-70 transition-opacity">FAQs</Link></li>
                    </ul>
                </div>

                {/* Contact & GBP */}
                <div className="md:col-span-3 flex flex-col">
                    <h4 className="font-sans tracking-widest text-[13px] uppercase opacity-50 mb-6">Connect</h4>
                    <div className="flex flex-col gap-4 font-sans text-[15px] opacity-80">
                        <a href="tel:+918921038043" className="flex items-center gap-3 hover:opacity-100 transition-opacity group">
                            <Phone size={18} className="group-hover:scale-110 transition-transform" />
                            +91 89210 38043
                        </a>
                        <a href="mailto:info@matzahcaterers.com" className="flex items-center gap-3 hover:opacity-100 transition-opacity group">
                            <Mail size={18} className="group-hover:scale-110 transition-transform" />
                            info@matzahcaterers.com
                        </a>
                        <div className="flex items-center gap-3 group mt-2">
                            <MapPin size={18} className="shrink-0" />
                            <a href="https://maps.google.com/?q=Matzah+Caterers+Kochi" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Kochi, Kerala, India
                            </a>
                        </div>
                    </div>
                    {/* Google Reviews CTA */}
                    <div className="mt-8">
                        <a href="https://share.google/Xqs02UXrRrvJv9Osd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-[8px] hover:bg-white/20 transition-colors">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-4 h-4 text-[#Fbbc04] fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-[13px] font-medium tracking-wide">Read our Google Reviews</span>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="w-full max-w-[94vw] mx-auto px-4 md:px-0 mt-16 pt-8 border-t border-[#F0EBE2]/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-sans text-[13px] opacity-50">
                    © {new Date().getFullYear()} Matzah Caterers. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <a href="https://instagram.com/matzahcaterers" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity p-2 border border-[#F0EBE2]/20 rounded-full">
                        <Instagram size={18} />
                        <span className="sr-only">Instagram</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
