import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer/Footer";
import { NAVBAR_HEIGHT_REM } from "@/lib/globalVars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max's Dnd Wiki",
  description: "A wiki for all things DnD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen flex flex-col items-center  `}
      >
        <Navbar />

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
