import SubclassSearchPage from "@/app/components/SearchPages/Official/SubclassSearch.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subclasses - Max's DND Wiki",
  description: "Search for subclasses for your DND campaign.",
};

const Page = () => {
  return <SubclassSearchPage />;
};

export default Page;
