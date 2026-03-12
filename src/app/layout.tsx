import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBottomBar from "@/components/layout/StickyBottomBar";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Matzah Caterers | Premium Event Catering in Kochi",
  description: "Authentic Kerala cuisine and premium event catering for weddings and corporate gatherings in Kochi. Elevate your events with Matzah Caterers.",
  alternates: {
    canonical: "https://www.matzahcaterers.in",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/logo.png' }
    ],
  },
  openGraph: {
    title: "Matzah Caterers | Premium Event Catering in Kochi",
    description: "Curated hospitality and authentic Kerala cuisine for wedding receptions, corporate events, and grand celebrations. Elevate your gathering with Matzah.",
    url: "https://www.matzahcaterers.in",
    siteName: "Matzah Caterers",
    images: [
      {
        url: "https://www.matzahcaterers.in/buffet.jpg",
        width: 1200,
        height: 630,
        alt: "Matzah Caterers - Premium Buffet Spread",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matzah Caterers | Premium Event Catering in Kochi",
    description: "Curated hospitality and authentic Kerala cuisine for wedding receptions and corporate events.",
    images: ["https://www.matzahcaterers.in/buffet.jpg"],
  },
  metadataBase: new URL("https://www.matzahcaterers.in"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1A1817",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.matzahcaterers.in/#website",
      "url": "https://www.matzahcaterers.in/",
      "name": "Matzah Caterers",
      "description": "Premium catering services in Kochi specializing in authentic Kerala cuisine.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.matzahcaterers.in/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": ["FoodEstablishment", "LocalBusiness"],
      "@id": "https://www.matzahcaterers.in/#organization",
      "name": "Matzah Caterers",
      "image": "https://www.matzahcaterers.in/buffet.jpg",
      "logo": "https://www.matzahcaterers.in/icon.svg",
      "url": "https://www.matzahcaterers.in",
      "telephone": "+918921038043",
      "email": "info@matzahcaterers.com",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kakkanad",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "servesCuisine": ["Kerala Cuisine", "Event Catering"],
      "description": "Premium catering services in Kochi prioritizing wedding receptions, corporate events, and authentic Kerala cuisine."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-primary-bg text-primary-text md:pb-0 pb-20">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
