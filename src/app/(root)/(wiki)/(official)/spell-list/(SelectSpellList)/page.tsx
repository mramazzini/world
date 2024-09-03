import SpellListSearchPage from "@/app/components/SearchPages/Official/SpellListSearch.page";
import Loading from "@/app/components/UI/Loading";
import { getSpellLists } from "@/lib/actions/db/spellList/read.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spell-lists - Max's DnD Wiki",
  description:
    "Spell-lists are a collection of spells that a character can learn and cast in Dungeons and Dragons Fifth Edition.",
  openGraph: {
    type: "website",
    title: "SpellLists - Max's DnD Wiki",
    description:
      "Spell-lists are a collection of spells that a character can learn and cast in Dungeons and Dragons Fifth Edition.",
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
    canonical: `${process.env.DOMAIN_NAME}/spell-list`,
  },
};
export const dynamic = "force-dynamic";
const Page = async () => {
  const spellLists = await getSpellLists();
  return <SpellListSearchPage spellLists={spellLists} />;
};

export default Page;
