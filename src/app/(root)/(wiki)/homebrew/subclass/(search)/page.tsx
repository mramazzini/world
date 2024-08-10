import HomebrewSubclassSearchPage from "@/app/components/SearchPages/Homebrew/H-SubclassSearch.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclass Homebrew - Max's DND Wiki",
  description: "User submitted homebrew subclasses for your DND campaign.",
};

const Page = () => {
  return <HomebrewSubclassSearchPage />;
};
export default Page;
