import HomebrewClassSearchPage from "@/app/components/SearchPages/Homebrew/H-ClassSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getClasses } from "@/lib/actions/db/class/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Homebrew - Max's DND Wiki",
  description: "User submitted homebrew classes for your DND campaign.",
  openGraph: {
    type: "website",
    title: "Class Homebrew - Max's DND Wiki",
    description: "User submitted homebrew classes for your DND campaign.",
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
  const classes = await getClasses(true);
  return <HomebrewClassSearchPage classes={classes} />;
};

export default Page;
