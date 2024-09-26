import CharacterSheet from "@/app/components/pages/gameTools/CharacterSheet/Character.page";
import {
  getCharacter,
  getCharacters,
} from "@/lib/actions/db/character/read.actions";
import { getUserId } from "@/lib/utils/auth";
import { Metadata } from "next";

if (process.env.DOMAIN_NAME === undefined) {
  throw new Error("DOMAIN_NAME is not defined");
}

interface Props {
  params: { characterID: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getCharacter(params.characterID.replaceAll("-", " "));

  if (!data) {
    return {
      title: "Character Not Found - Max's DND Wiki",
      description: "Character Not Found - Max's DND Wiki",
      openGraph: {
        type: "website",
        title: "Character Not Found - Max's DND Wiki",
        description: "Character Not Found - Max's DND Wiki",
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
    description: "View and edit your character sheet.",

    openGraph: {
      type: "website",
      title: `${data.name} - Max's DND Wiki`,
      description: "View and edit your character sheet.",
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

export default async function Page({ params }: Props) {
  const character = await getCharacter(parseInt(params.characterID));
  if (!character) {
    return <div className="p-8">You do not have a character with that ID.</div>;
  }
  const userID = await getUserId();
  if (character.User?.id !== userID) {
    return (
      <div className="p-8">
        You do not have permission to view this character.
      </div>
    );
  }

  return <CharacterSheet characterData={character} />;
}
