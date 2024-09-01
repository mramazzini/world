import SelectHomebrewSubclassPage from "@/app/components/pages/SelectHomebrewSubclassPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclass Homebrew - Max's DND Wiki",
  description:
    "A vast collection of subclasses for your DND campaign. Choose from offical content or user submitted homebrew subclasses.",
  openGraph: {
    type: "website",
    title: "Subclass Homebrew - Max's DND Wiki",
    description:
      "A vast collection of subclasses for your DND campaign. Choose from offical content or user submitted homebrew subclasses.",
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
const Page = () => {
  return <SelectHomebrewSubclassPage />;
};

export default Page;
