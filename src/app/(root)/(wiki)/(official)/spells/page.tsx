import SelectSpellPage from "@/app/components/SearchPages/Official/SelectSpell.page";
import Loading from "@/app/components/UI/Loading";
import { getSpells } from "@/lib/actions/db/spell/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spells - Max's DND Wiki",
  description:
    "A vast collection of spells for your DND campaign. Choose from offical content or user submitted homebrew spells.",
};
export const dynamic = "force-dynamic";
const Spells = async () => {
  const spells = await getSpells();
  if (!spells) {
    return (
      <div className="p-8">
        Spells not found, try refreshing the page or come back later.
      </div>
    );
  }
  return <SelectSpellPage spells={spells} />;
};

export default Spells;
