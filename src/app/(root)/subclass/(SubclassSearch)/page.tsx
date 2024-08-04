import SelectHomebrewClassPage from "@/app/components/pages/SelectHomebrewClassPage";
import SubclassSearchPage from "@/app/components/pages/SubclassSearchPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclasses - Max's DND Wiki",
  description: "Search for subclasses for your DND campaign.",
};

const Page = () => {
  return <SubclassSearchPage />;
};

export default Page;
