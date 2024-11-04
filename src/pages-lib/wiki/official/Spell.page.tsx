'use client';
import SpellDisplay from '@/components/Spells/SpellDisplay';
import Loading from '@/components/UI/Loading';
import CommentSection from '@/components/CommentSection/CommentSection';
import { AssociatedModel } from '@prisma/client';
import { SpellInfo } from '@/lib/types/modelInfo';
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
