import BackgroundSearchPage from "@/app/components/SearchPages/Official/BackgroundSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getBackgrounds } from "@/lib/actions/db/background/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backgrounds - Max's DnD Wiki",
  description:
    "A list of Background origins for your Dungeons and Dragons Fifth Edition character.",
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const backgrounds = await getBackgrounds();
  return <BackgroundSearchPage backgrounds={backgrounds} />;
};

export default Page;
