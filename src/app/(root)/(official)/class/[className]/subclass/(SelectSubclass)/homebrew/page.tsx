import SelectHomebrewSubclassPage from "@/app/components/pages/SelectHomebrewSubclassPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclass Homebrew - Max's DND Wiki",
  description:
    "A vast collection of subclasses for your DND campaign. Choose from offical content or user submitted homebrew subclasses.",
};
const Page = () => {
  return <SelectHomebrewSubclassPage />;
};

export default Page;
