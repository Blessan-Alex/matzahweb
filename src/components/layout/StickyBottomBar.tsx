import Link from "next/link";
import { Phone } from "lucide-react";

export default function StickyBottomBar({ show }: { show: boolean }) {
    return (
        <div 
            className={`md:hidden fixed bottom-0 left-0 right-0 z-[100] flex gap-2 p-3 bg-[#1A1817]/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)] pb-[calc(12px+env(safe-area-inset-bottom))] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${show ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-[100%] opacity-0 pointer-events-none"}`}
        >
            <a 
                href="tel:+918921038043" 
                className="flex-1 flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-white/30 text-white rounded-[10px] py-[14px] text-[14px] font-semibold transition-transform active:scale-95"
            >
                <Phone size={16} />
                Call
            </a>
            <Link 
                href="/contact" 
                className="flex-[2] flex items-center justify-center gap-2 bg-[#D4A853] text-[#1a1a1a] rounded-[10px] py-[14px] text-[14px] font-bold transition-transform active:scale-95 shadow-lg"
            >
                Request a Quote
            </Link>
        </div>
    );
}
