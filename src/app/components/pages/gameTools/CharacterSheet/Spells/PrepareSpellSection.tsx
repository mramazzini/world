"use client";
import { CharacterInfo } from "@/lib/utils/types/types";
import { toSpellLevel } from "@/lib/utils/toSpellLevel";
import { DamageTypes } from "@prisma/client";
import { Fragment, useState } from "react";
import PreparedSpellView from "./PreparedSpellView";

interface Props {
  character: CharacterInfo;
  setState: (state: PrismaJson.CharacterState) => void;
}

const PrepareSpellSection = ({ character, setState }: Props) => {
  const handleAddSpell = () => {
    if (!character.state) return;
    setState({
      ...character.state,
      userSubmittedSpells: [
        ...character.state.userSubmittedSpells,
        {
          name: "New Spell",
          notes: "",
          prepared: false,
          alwaysPrepared: false,
          baseLevel: 0,
        },
      ],
    });
  };

  const handleRemoveSpell = (index: number) => {
    if (!character.state) return;
    const newSpells = [...character.state.userSubmittedSpells];
    newSpells.splice(index, 1);
    setState({
      ...character.state,
      userSubmittedSpells: newSpells,
    });
  };
  return (
    <div className="bg-base-300 p-4 mt-4 min-h-48 w-full rounded-xl">
      <h2 className="font-bold">Prepare Spells</h2>
      <div className="divider m-0"></div>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {character.state &&
          character.state.userSubmittedSpells.map((spell, index) => {
            return (
              character.state &&
              character.state.spellSlots && (
                <PreparedSpellView
                  spellSlotsAvailable={character.state.spellSlots}
                  setAvailableSlots={(newSlots) => {
                    if (!character.state) return;
                    setState({
                      ...character.state,
                      spellSlots: newSlots,
                    });
                  }}
                  key={index}
                  index={index}
                  showEditor={true}
                  spellInput={spell}
                  updateSpell={(newSpell) => {
                    if (!character.state) return;
                    const newSpells = [...character.state.userSubmittedSpells];
                    newSpells[index] = newSpell;
                    setState({
                      ...character.state,
                      userSubmittedSpells: newSpells,
                    });
                  }}
                />
              )
            );
          })}
        <button onClick={handleAddSpell} className="btn btn-success">
          Add Spell
        </button>
      </div>
    </div>
  );
};

export default PrepareSpellSection;
