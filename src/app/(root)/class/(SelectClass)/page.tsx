import SelectClass from "@/app/components/pages/SelectClass";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Class - Max's DND Wiki",
  description:
    "A vast collection of classes for your DND campaign. Choose from offical content or user submitted homebrew classes.",
};

const Page = () => {
  return <SelectClass />;
};

export default Page;
