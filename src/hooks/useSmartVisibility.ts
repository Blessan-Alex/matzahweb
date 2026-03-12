import { useState, useEffect, useRef } from 'react';

export const useSmartVisibility = () => {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  
  const footerRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Observer for Footer - Hides BOTH Navbar and Sticky Bar when footer is visible
    const footerObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHideNavbar(true);
          setShowStickyBar(false);
        } else {
          setHideNavbar(false);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of footer visible
    );

    // Observer for Hero - Hides Sticky Bar when hero is visible
    const heroObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowStickyBar(false);
        } else {
          // Only show sticky bar if we're past the hero AND not at the footer
          setShowStickyBar(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) footerObserver.observe(footerRef.current);
    if (heroRef.current) heroObserver.observe(heroRef.current);

    return () => {
      footerObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  // Ensure Sticky bar never shows if the navbar is hiding (meaning we are at the footer)
  const finalShowStickyBar = showStickyBar && !hideNavbar;

  return { finalShowStickyBar, hideNavbar, footerRef, heroRef };
};
