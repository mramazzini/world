import SelectHomebrewClassPage from "@/app/components/pages/SelectHomebrewClassPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Homebrew - Max's DND Wiki",
  description: "User submitted homebrew classes for your DND campaign.",
};

const Page = () => {
  return <SelectHomebrewClassPage />;
};

export default Page;
