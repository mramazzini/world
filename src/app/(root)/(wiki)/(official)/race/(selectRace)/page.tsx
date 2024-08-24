import RaceSearchPage from "@/app/components/SearchPages/Official/RacesSearch.page";
import { getRaces } from "@/lib/actions/db/race/get.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Racial Origins - Max's DND Wiki",
  description: "A vast collection of Racial Origins for your DND 5e campaign.",
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
