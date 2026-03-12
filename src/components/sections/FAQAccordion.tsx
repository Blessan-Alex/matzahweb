"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={index}
                        className="border border-[#1A1817]/10 rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm transition-colors hover:bg-white"
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                            aria-expanded={isOpen}
                        >
                            <h3 className="font-serif text-[20px] md:text-[24px] text-[#1A1817] pr-8">
                                {item.question}
                            </h3>
                            <ChevronDown
                                className={`w-6 h-6 text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <div className="p-6 pt-0 font-sans text-[16px] md:text-[18px] text-[#1A1817]/80 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
