import RaceSearchPage from "@/app/components/SearchPages/Official/RacesSearch.page";
import { getRaces } from "@/lib/actions/db/race/get.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Racial Origins - Max's DND Wiki",
  description: "A vast collection of Racial Origins for your DND 5e campaign.",
  openGraph: {
    type: "website",
    title: "Racial Origins - Max's DND Wiki",
    description:
      "A vast collection of Racial Origins for your DND 5e campaign.",
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
    canonical: `${process.env.DOMAIN_NAME}/race`,
  },
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const races = await getRaces();
  if (!races) {
    return (
      <div className="p-8">
        Races not found, try refreshing the page or come back later.
      </div>
    );
  }
  return <RaceSearchPage races={races} />;
};

export default Page;
