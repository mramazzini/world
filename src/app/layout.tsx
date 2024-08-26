import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer/Footer";
import { NAVBAR_HEIGHT_REM } from "@/lib/globalVars";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max's Dnd Wiki",
  description: "A wiki for all things DnD",
  openGraph: {
    type: "website",
    title: "Max's DND Wiki",
    description:
      "Max's DND Wiki is a collection of Classes, Subclasses, Races, Spells, Backgrounds and more for Dungeons and Dragons 5th Edition.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1440,
        height: 1920,
        alt: "Dungeons and Dragons Fire Dragon Attack",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* charset */}
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${inter.className} w-screen flex flex-col items-center  `}
      >
        <Suspense>
          <Navbar />
        </Suspense>

        <div
          className="max-w-[1800px] w-full  h-full "
          style={{
            minHeight: `calc(100vh - ${NAVBAR_HEIGHT_REM}rem)`,
          }}
        >
          {children} <SpeedInsights /> <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
