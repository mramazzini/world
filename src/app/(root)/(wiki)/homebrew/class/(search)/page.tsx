import HomebrewClassSearchPage from "@/app/components/SearchPages/Homebrew/H-ClassSearch.page";
import { getClasses } from "@/lib/actions/db/class/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Homebrew - Max's DND Wiki",
  description: "User submitted homebrew classes for your DND campaign.",
};

const Page = async () => {
  const classes = await getClasses(true);
  return <HomebrewClassSearchPage classes={classes} />;
};

export default Page;
