import HomeSearchPage from "@/app/components/SearchPages/General/HomeSearch.page";
import { Metadata } from "next";
import { URL } from "url";

if (process.env.DOMAIN_NAME === undefined) {
  throw new Error("DOMAIN_NAME is not defined");
}
export const metadata: Metadata = {
  title: "Max's DND Wiki",
  description:
    "Search for everything you need to build your character in Dungeons and Dragons 5th Edition. Classes, Subclasses, Species, Spells, Backgrounds and more.",
  openGraph: {
    type: "website",
    title: "Max's DND Wiki",
    description:
      "Search for everything you need to build your character in Dungeons and Dragons 5th Edition. Classes, Subclasses, Species, Spells, Backgrounds and more.",
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

export default function Page() {
  return (
    <>
      <HomeSearchPage />
    </>
  );
}
