"use client";
import SpellDisplay from "../Spells/SpellDisplay";
import { SpellInfo } from "@/lib/types";
import Loading from "../UI/Loading";
const SpellPage = ({ spell }: { spell: SpellInfo | null }) => {
  // if (!spellName) return <span className="p-4">Spell does not exist!</span>;
  return (
    <main className="p-4 md:p-8">
      {!spell && <Loading />}
      {spell && <SpellDisplay spell={spell} />}
    </main>
  );
};

export default SpellPage;
