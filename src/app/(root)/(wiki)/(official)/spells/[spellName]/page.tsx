import { Metadata } from "next";

import "@/lib/string.extensions";

import { getSpell } from "@/lib/actions/db/spell/read.actions";
import SpellPage from "@/app/components/pages/Spellpage";
import { SpellInfo } from "@/lib/types";

type Props = {
  params: { spellName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSpell(params.spellName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Spell Not Found",
      description: "Spell Not Found",
    };
  }

  return {
    title: `${data.name} - Max's DND Wiki`,
    description: data.description,
  };
}

const Page = async ({ params }: Props) => {
  const spell = await getSpell(params.spellName.replaceAll("-", " "));
  return <SpellPage spell={spell} />;
};

export default Page;
