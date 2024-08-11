import HomePage from "@/app/components/pages/Home";
import { Metadata } from "next";
import { URL } from "url";

export const metadata: Metadata = {
  title: "Max's DND Wiki",
  description: "A collection of DND resources",
  metadataBase: new URL("https://maxdnd.com"),
  openGraph: {
    type: "website",
    title: "Max's DND Wiki",
    description: "A collection of DND resources",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1440,
        height: 1920,
        alt: "Description of the image",
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
