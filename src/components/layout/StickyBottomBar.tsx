import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyBottomBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] flex gap-2 p-3 bg-[#1A1817]/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)] pb-[calc(12px+env(safe-area-inset-bottom))]">
            <a 
                href="tel:+918921038043" 
                className="flex-1 flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-white/30 text-white rounded-[10px] py-[14px] text-[14px] font-semibold"
            >
                <Phone size={16} />
                Call
            </a>
            <Link 
                href="/contact" 
                className="flex-[2] flex items-center justify-center gap-2 bg-[#D4A853] text-[#1a1a1a] rounded-[10px] py-[14px] text-[14px] font-bold"
            >
                Request a Quote
            </Link>
        </div>
    );
}
