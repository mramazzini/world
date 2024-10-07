"use client";
import SpellDisplay from "../../../Spells/SpellDisplay";
import { SpellInfo } from "@/lib/utils/types/types";
import Loading from "../../../UI/Loading";
import CommentSection from "@/app/components/CommentSection/CommentSection";
import { AssociatedModel } from "@prisma/client";
const SpellPage = ({ spell }: { spell: SpellInfo | null }) => {
  // if (!spellName) return <span className="p-4">Spell does not exist!</span>;
  return (
    <main className="p-4 md:p-8">
      {!spell && <Loading />}

      {spell && (
        <>
          <SpellDisplay spell={spell} />
          <CommentSection id={spell.id} model={AssociatedModel.SPELL} />
        </>
      )}
    </main>
  );
};

export default SpellPage;
