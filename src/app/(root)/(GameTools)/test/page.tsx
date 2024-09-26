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

export default async function Page() {
  const character = await getCharacter("Littlefoot");
  if (!character) {
    return <div>Character not found</div>;
  }

  return <CharacterSheet characterData={character} />;
}
