import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100"],
  variable: "--font-public-sans",
});


export const metadata: Metadata = {
  title: "Matzah Caterers | Best Catering in Kochi",
  description: "Curated hospitality for refined gatherings.",
  icons: {
    icon: "/logosvg.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="antialiased bg-primary-bg text-primary-text">
        <SmoothScroll>
          <Preloader />
          <Header />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
