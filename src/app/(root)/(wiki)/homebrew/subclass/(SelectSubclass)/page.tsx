import HomebrewSubclassSearchPage from "@/app/components/SearchPages/Homebrew/H-SubclassSearch.page";

import { getSubclasses } from "@/lib/actions/db/subclass/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclass Homebrew - Max's DND Wiki",
  description: "User submitted homebrew subclasses for your DND campaign.",
  openGraph: {
    type: "website",
    title: "Subclass Homebrew - Max's DND Wiki",
    description: "User submitted homebrew subclasses for your DND campaign.",
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
export const dynamic = "force-dynamic";
const Page = async () => {
  const subclasses = await getSubclasses({ homebrew: true });
  return <HomebrewSubclassSearchPage subclasses={subclasses} />;
};
export default Page;
