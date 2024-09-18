import FeatSearchPage from "@/app/components/SearchPages/Official/FeatsSearch.page";
import { getFeats } from "@/lib/actions/db/feat/get.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feats - Max's DND Wiki",
  description: "A vast collection of Feats for your DND 5e campaign.",
  openGraph: {
    type: "website",
    title: "Feats - Max's DND Wiki",
    description: "A vast collection of Feats for your DND 5e campaign.",
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
    canonical: `${process.env.DOMAIN_NAME}/feat`,
  },
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const feats = await getFeats();
  if (!feats) {
    return (
      <div className="p-8">
        Feats not found, try refreshing the page or come back later.
      </div>
    );
  }
  return <FeatSearchPage feats={feats} />;
};

export default Page;
