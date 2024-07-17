import SelectClass from "@/app/components/pages/SelectClassPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Classes - Max's DND Wiki",
  description:
    "A vast collection of classes for your DND campaign. Choose from offical content or user submitted homebrew classes.",
};

const Page = () => {
  return <SelectClass />;
};

export default Page;
