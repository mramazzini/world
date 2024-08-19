import SelectSpellPage from "@/app/components/SearchPages/Official/SelectSpell.page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spells - Max's DND Wiki",
  description:
    "A vast collection of spells for your DND campaign. Choose from offical content or user submitted homebrew spells.",
};

const Spells = () => {
  return <SelectSpellPage />;
};

export default Spells;
