import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
        className={`${inter.className} w-screen flex flex-col items-center  min-h-screen`}
      >
        <Navbar />

        <div className="max-w-[1800px] w-full  ">
          {children} <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
