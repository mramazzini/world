import SubSpeciesSearchPage from "@/app/components/SearchPages/Official/SubspeciesSearch.page";
import { getSubSpecies } from "@/lib/actions/db/subSpecies/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subspecies - Max's DND Wiki",
  description: "A vast collection of Subspecies for your DND 5e campaign.",
  openGraph: {
    type: "website",
    title: "Subspecies - Max's DND Wiki",
    description: "A vast collection of Subspecies for your DND 5e campaign.",
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
    canonical: `${process.env.DOMAIN_NAME}/subspecies`,
  },
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const species = await getSubSpecies();
  if (!species) {
    return (
      <div className="p-8">
        Subspecies not found, try refreshing the page or come back later.
      </div>
    );
  }
  return <SubSpeciesSearchPage subSpecies={species} />;
};

export default Page;
