import useSpellcaster from '@/hooks/useSpellcaster';

const SpellSheet = () => {
  const { spellSlots } = useSpellcaster();
  console.log(spellSlots);
  return (
    <div className="grid gap-4 bg-base-200 p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Spell Sheet</h2>
      </div>
    </div>
  );
};

export default SpellSheet;
