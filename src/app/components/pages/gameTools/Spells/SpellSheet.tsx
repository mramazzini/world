import { CharacterInfo, SpellListInfo } from "@/lib/types";
import { Spell, SpellList } from "@prisma/client";
import SpellSection from "./SpellSection";
import { calcProficiency } from "@/app/components/Utility/calcProficiency";
import numberArray from "@/lib/utils/numberArray";
import JsonTable from "@/app/components/Utility/JsonTable";
import P from "@/app/components/Utility/FormatAndSanitize";
import {
  numberColor,
  numberColorBefore,
} from "@/app/components/Utility/colorBefore";

interface Props {
  character: CharacterInfo;
}

const preparedSpellsDemo = numberArray(1, 50);
const alwaysPreparedDemo = numberArray(101, 150);

//user needs to be able to select spells to prepare, view the rules for spellcasting for their class, and view the spells they have prepared. Any spells automatically granted to them should be readily available as well.
const SpellSheet = ({ character }: Props) => {
  if (!character || !character.state || !character.Classes) return <div></div>;
  const classObj = character.Classes[0];
  if (!classObj) return <div></div>;
  const spellList = classObj.SpellList;
  if (!spellList) return <div></div>;
  const spellCastingInfo = classObj.spellCastingInfo;
  if (!spellCastingInfo) return <div></div>;
  const calcLevel = () => {
    return character?.state?.classLevels.reduce(
      (acc, cur) => acc + cur.level,
      0
    );
  };
  return (
    character &&
    character.state && (
      <div className="flex flex-col w-full bg-base-200 p-4">
        <div className="bg-base-300 p-4 rounded-xl">
          <h2 className="font-bold">Spell Sheet</h2>
          <p>You have access to the {spellList.name}. </p>
        </div>
        <div className="divider"></div>

        {spellList.Spells.map((spell) => {
          return (
            <SpellSection
              key={spell.id}
              preparedSpell={preparedSpellsDemo.includes(spell.id)}
              spell={spell}
              alwaysPrepared={alwaysPreparedDemo.includes(spell.id)}
              spellCastingAbility={spellCastingInfo.ability}
              proficiencyBonus={calcProficiency(calcLevel() || 1)}
              spellCastingModifier={
                character.state?.abilityScores[spellCastingInfo.ability] || 0
              }
            />
          );
        })}
      </div>
    )
  );
};

export default SpellSheet;
