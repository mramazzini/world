import BackgroundSearchPage from "@/app/components/SearchPages/Official/BackgroundSearch.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backgrounds - Max's DnD Wiki",
  description:
    "A list of Background origins for your Dungeons and Dragons Fifth Edition character.",
};

const Page = () => {
  return <BackgroundSearchPage />;
};

export default Page;
