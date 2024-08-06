import SelectClassPage from "@/app/components/SearchPages/Official/ClassSearch.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Classes - Max's DND Wiki",
  description:
    "A vast collection of classes for your DND campaign. Choose from offical content or user submitted homebrew classes.",
};

const Page = () => {
  return <SelectClassPage />;
};

export default Page;
