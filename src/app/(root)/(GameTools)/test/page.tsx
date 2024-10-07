import CharacterSheet from "@/app/components/gameTools/CharacterSheet/Character.page";
import { getCharacter } from "@/lib/actions/db/character/read.actions";

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
