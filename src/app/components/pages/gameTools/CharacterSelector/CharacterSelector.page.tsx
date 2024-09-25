import { CharacterInfo } from "@/lib/types";
import Link from "next/link";

interface Props {
  characters: CharacterInfo[];
}

const CharacterSelector = ({ characters }: Props) => {
  return (
    <>
      <div className="flex flex-col p-4 md:p-8">
        <h1 className="text-4xl font-bold">Character Dashboard</h1>
        {characters.length === 0 && (
          <div className="">
            You do not have any characters. DM Maxy on the Discord server to add
            your character to your dashboard.
          </div>
        )}
        {characters.map((character) => (
          <Link
            key={character.id}
            href={`/gameTools/character/${character.id}`}
          >
            {character.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default CharacterSelector;
