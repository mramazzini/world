import BackgroundSearchPage from "@/app/components/SearchPages/Official/BackgroundSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getBackgrounds } from "@/lib/actions/db/background/read.actions";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Backgrounds - Max's DnD Wiki",
  description:
    "A list of Background origins for your Dungeons and Dragons Fifth Edition character.",
};

const Page = async () => {
  const backgrounds = await getBackgrounds();
  return (
    <Suspense fallback={<Loading />}>
      <BackgroundSearchPage backgrounds={backgrounds} />
    </Suspense>
  );
};

export default Page;
