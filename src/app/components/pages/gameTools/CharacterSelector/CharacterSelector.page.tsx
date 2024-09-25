"use client";
import { getCharactersByUser } from "@/lib/actions/db/character/read.actions";
import { CharacterInfo } from "@/lib/types";
import { getUserId } from "@/lib/utils/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

const CharacterSelector = () => {
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);
  useEffect(() => {
    getUserId().then((user) => {
      getCharactersByUser(user).then((data) => {
        setCharacters(data);
      });
    });
  }, []);

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
