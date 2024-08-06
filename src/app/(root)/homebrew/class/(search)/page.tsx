import HomebrewClassSearchPage from "@/app/components/SearchPages/Homebrew/H-ClassSearch.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Homebrew - Max's DND Wiki",
  description: "User submitted homebrew classes for your DND campaign.",
};

const Page = () => {
  return <HomebrewClassSearchPage />;
};

export default Page;
