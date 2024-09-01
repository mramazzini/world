import SubRaceSearchPage from "@/app/components/SearchPages/Official/SubraceSearch.page";
import { getSubRaces } from "@/lib/actions/db/subrace/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subraces - Max's DND Wiki",
  description: "A vast collection of Subraces for your DND 5e campaign.",
  openGraph: {
    type: "website",
    title: "Subraces - Max's DND Wiki",
    description: "A vast collection of Subraces for your DND 5e campaign.",
    images: [
      {
        url: "https://www.maxdnd.com/images/hero.jpg",
        width: 1440,
        height: 1920,
        alt: "Dungeons and Dragons Fire Dragon Attack",
      },
    ],
  },
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const races = await getSubRaces();
  if (!races) {
    return (
      <div className="p-8">
        Subraces not found, try refreshing the page or come back later.
      </div>
    );
  }
  return <SubRaceSearchPage subRaces={races} />;
};

export default Page;
