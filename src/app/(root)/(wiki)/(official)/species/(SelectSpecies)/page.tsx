import SpeciesSearchPage from "@/app/components/SearchPages/Official/SpeciesSearch.page";
import { getSpecies } from "@/lib/actions/db/species/get.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Species Origins - Max's DND Wiki",
  description: "A vast collection of Species for your DND 5e campaign.",
  openGraph: {
    type: "website",
    title: "Species - Max's DND Wiki",
    description: "A vast collection of Species for your DND 5e campaign.",
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
    canonical: `${process.env.DOMAIN_NAME}/species`,
  },
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const species = await getSpecies();
  if (!species) {
    return (
      <div className="p-8">
        Species not found, try refreshing the page or come back later.
      </div>
    );
  }
  return <SpeciesSearchPage species={species} />;
};

export default Page;
