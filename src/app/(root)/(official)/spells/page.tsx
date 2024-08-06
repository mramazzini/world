import SelectSpellPage from "@/app/components/SearchPages/Official/SelectSpell.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spells - Max's DND Wiki",
  description: "Search for Spells in DND.",
};

const Spells = () => {
  return <SelectSpellPage />;
};

export default Spells;
