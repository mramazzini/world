import {
  CharacterInfo,
  Level,
  SpellLevel,
  SpellListInfo,
} from "@/lib/utils/types/types";
import { Spell, SpellList } from "@prisma/client";
import SpellSection from "./SpellSection";
import { calcProficiency } from "@/app/components/Utility/characterStateFunctions/calc/calcProficiency";
import numberArray from "@/lib/utils/numberArray";
import JsonTable from "@/app/components/Utility/JsonTable";
import P from "@/app/components/Utility/FormatAndSanitize";
import {
  numberColor,
  numberColorBefore,
} from "@/app/components/Utility/colorBefore";
import PrepareSpellSection from "./PrepareSpellSection";

interface Props {
  character: CharacterInfo;
  setState: (state: PrismaJson.CharacterState) => void;
}

//user needs to be able to select spells to prepare, view the rules for spellcasting for their class, and view the spells they have prepared. Any spells automatically granted to them should be readily available as well.
const SpellSheet = ({ character, setState }: Props) => {
  if (!character || !character.state || !character.Classes) return <div></div>;
  const classObj = character.Classes[0];
  if (!classObj) return <div></div>;
  const spellList = classObj.SpellList;
  if (!spellList) return <div></div>;
  const spellCastingInfo = classObj.spellCastingInfo;
  if (!spellCastingInfo) return <div></div>;
  const spellSlots = character.state.spellSlots;
  const calcLevel = () => {
    return character?.state?.classLevels.reduce(
      (acc, cur) => acc + cur.level,
      0
    );
  };
  const levelAquired = spellCastingInfo.levelAquired;
  return character && character.state && levelAquired <= (calcLevel() || 1) ? (
    <div className="flex flex-col w-full bg-base-200 p-4">
      <div className="bg-base-300 p-4 rounded-xl">
        <h2 className="font-bold">
          {character.Classes[0].name.toCapitalCase()} Spellcasting
        </h2>
        <p>You have access to the {spellList.name}. </p>
        <div className="divider"></div>
        <h3>Spell Slots</h3>
        <div className="flex flex-row w-full items-center justify-center bg-neutral text-neutral-content rounded-xl p-4">
          {numberArray(1, 9).map((level) => {
            if (!spellSlots) return null;
            const slots = spellSlots[level as SpellLevel];
            if (!slots) return null;
            return (
              <div
                key={level}
                className="flex flex-col items-center justify-center"
              >
                <h4>Level {level}</h4>
                <div className="badge ">{slots} slots</div>
              </div>
            );
          })}{" "}
        </div>
      </div>
      <PrepareSpellSection character={character} setState={setState} />

      <div className="grid grid-cols-2 gap-4 mt-4"></div>

      <div className="divider"></div>

      {spellList.Spells.map((spell) => {
        return (
          <SpellSection
            key={spell.id}
            preparedSpell={character.state?.preparedSpells?.includes(spell.id)}
            spell={spell}
            alwaysPrepared={character.state?.alwaysPreparedSpells.includes(
              spell.id
            )}
            spellCastingAbility={spellCastingInfo.ability}
            proficiencyBonus={calcProficiency(calcLevel() || 1)}
            spellCastingModifier={
              character.state?.abilityScores[spellCastingInfo.ability] || 0
            }
          />
        );
      })}
    </div>
  ) : (
    <div className="flex flex-col w-full bg-base-200 p-4">
      <div className="bg-base-300 p-4 rounded-xl">
        <h2 className="font-bold">
          {character.Classes[0].name.toCapitalCase()} Spellcasting
        </h2>
        <div className="divider m-0"></div>
        <p>You can cast spells at level {levelAquired} </p>
      </div>
    </div>
  );
};

export default SpellSheet;
