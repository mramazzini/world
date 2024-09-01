import { Metadata } from "next";

import "@/lib/string.extensions";

import { getSpell } from "@/lib/actions/db/spell/read.actions";
import SpellPage from "@/app/components/pages/wiki/official/Spell.page";

type Props = {
  params: { spellName: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getSpell(params.spellName.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Spell Not Found - Max's DND Wiki",
      description: "Spell Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Spell Not Found - Max's DND Wiki",
        description: "Spell Not Found - Max's DND Wiki",
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
  }

  return {
    title: `${data.name} - Max's DND Wiki`,
    description:
      data.description.length > 157
        ? data.description.substring(0, 157) + "..."
        : data.description,
    openGraph: {
      type: "website",
      title: `${data.name} - Max's DND Wiki`,
      description:
        data.description.length > 157
          ? data.description.substring(0, 157) + "..."
          : data.description,
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
}

const Page = async ({ params }: Props) => {
  const spell = await getSpell(params.spellName.replaceAll("-", " "));
  return <SpellPage spell={spell} />;
};

export default Page;
