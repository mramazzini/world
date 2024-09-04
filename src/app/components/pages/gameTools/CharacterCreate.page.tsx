"use client";

import { getCharacter } from "@/lib/actions/db/character/read.actions";
import { CharacterInfo } from "@/lib/types";
import { useEffect, useState } from "react";

const CharacterCreate = () => {
  const [character, setCharacter] = useState<CharacterInfo | null>(null);
  useEffect(() => {
    getCharacter("Test Character").then((res) => {
      setCharacter(res);
      console.log(res);
    });
  }, []);
  return (
    <>
      {character && (
        <div>
          <h1>{character.name}</h1>
          <p>{character.armorClass}</p>
          <p>{character.alignment}</p>
          <p>{character.currentHitPoints}</p>
          <p>{character.maxHitPoints}</p>
          <p>{character.hitDice}</p>
        </div>
      )}
    </>
  );
};

export default CharacterCreate;
