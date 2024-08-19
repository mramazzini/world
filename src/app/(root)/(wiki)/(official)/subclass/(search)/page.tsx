import SubclassSearchPage from "@/app/components/SearchPages/Official/SubclassSearch.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclasses - Max's DND Wiki",
  description:
    "A vast collection of subclasses for your DND campaign. Choose from offical content or user submitted homebrew subclasses.",
};

const Page = () => {
  return <SubclassSearchPage />;
};

export default Page;
