import SelectSpellPage from "@/app/components/SearchPages/Official/SpellSearch.page";
import { getSpells } from "@/lib/actions/db/spell/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spells - Max's DND Wiki",
  description:
    "A vast collection of spells for your DND campaign. Choose from offical content or user submitted homebrew spells.",
  openGraph: {
    type: "website",
    title: "Spells - Max's DND Wiki",
    description:
      "A vast collection of spells for your DND campaign. Choose from offical content or user submitted homebrew spells.",
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
    canonical: `${process.env.DOMAIN_NAME}/spells`,
  },
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
