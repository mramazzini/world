import BackgroundSearchPage from "@/app/components/SearchPages/Official/BackgroundSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getBackgrounds } from "@/lib/actions/db/background/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backgrounds - Max's DnD Wiki",
  description:
    "A list of Background origins for your Dungeons and Dragons Fifth Edition character.",
  openGraph: {
    type: "website",
    title: "Backgrounds - Max's DnD Wiki",
    description:
      "A list of Background origins for your Dungeons and Dragons Fifth Edition character.",
    images: [
      {
        url: "https://www.maxdnd.com/images/hero.jpg",
        width: 1440,
        height: 1920,
        alt: "Dungeons and Dragons Fire Dragon Attack",
      },
    ],
  },
  alternates: {
    canonical: `${process.env.DOMAIN_NAME}/background`,
  },
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const backgrounds = await getBackgrounds();
  return <BackgroundSearchPage backgrounds={backgrounds} />;
};

export default Page;
