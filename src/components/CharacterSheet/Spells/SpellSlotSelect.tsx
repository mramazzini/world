import { SpellInfo } from '@/lib/types/modelInfo';
import { SpellLevel } from '@/lib/types/types';
import { toSpellLevel } from '@/lib/utils/toSpellLevel';

interface SpellSlotSelectProps {
  selectedSlot: SpellLevel;
  setSelectedSlot: (slot: SpellLevel) => void;
  spell: SpellInfo;
}

const spellLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const SpellSlotSelect = ({
  spell,
  setSelectedSlot,
  selectedSlot,
}: SpellSlotSelectProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-2">
      {spellLevels
        .filter((level) => level >= spell.level)
        .map((level) => (
          <button
            onClick={() => setSelectedSlot(level as SpellLevel)}
            key={level}
            className={`btn  min-w-12 h-12 px-3 m-0 min-h-0 rounded-full ${selectedSlot === level ? 'btn-primary' : 'btn-ghost border border-gray-500'}`}
          >
            <span>{toSpellLevel(level)}</span>
          </button>
        ))}
    </div>
  );
};

export default SpellSlotSelect;
