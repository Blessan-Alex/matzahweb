"use client";

import { useSmartVisibility } from "@/hooks/useSmartVisibility";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBottomBar from "@/components/layout/StickyBottomBar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const { finalShowStickyBar, hideNavbar, footerRef } = useSmartVisibility();

    return (
        <SmoothScroll>
            <Preloader />
            <Header hidden={hideNavbar} />
            <main>{children}</main>
            <footer ref={footerRef}>
                <Footer />
            </footer>
            <StickyBottomBar show={finalShowStickyBar} />
        </SmoothScroll>
    );
}
