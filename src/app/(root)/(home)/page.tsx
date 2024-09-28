import HomePage from "@/app/components/pages/home/Home";
import { Metadata } from "next";

if (process.env.DOMAIN_NAME === undefined) {
  throw new Error("DOMAIN_NAME is not defined");
}
export const metadata: Metadata = {
  title: "Max's DND Wiki",
  description:
    "Max's DND Wiki is a collection of Classes, Subclasses, Races, Spells, Backgrounds and more for Dungeons and Dragons 5th Edition.",
  metadataBase: new URL(process.env.DOMAIN_NAME),
  openGraph: {
    type: "website",

    title: "Max's DND Wiki",
    description:
      "Max's DND Wiki is a collection of Classes, Subclasses, Races, Spells, Backgrounds and more for Dungeons and Dragons 5th Edition.",
    images: [
      {
        url: "https://www.maxdnd.com/images/hero.jpg",
        width: 1440,
        height: 1920,
        alt: "Dungeons and Dragons Fire Dragon Attack",
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
