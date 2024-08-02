"use client";
import { useState, useEffect } from "react";
import { Ability, CasterType, CustomField } from "@prisma/client";
import Module from "../Module";
import Info from "../../UI/Info";
import SpellTableEditor from "../SpellTableEditor";

interface Props {
  spellCaster: boolean;
  spellCastingAbility: Ability;

  casterType: CasterType;
  active: boolean;
  ritualCaster: boolean;
  ritualSpellPrepared: boolean;
  spellFocus: string;
  displaySpellList: boolean;
  spellCastingInfo: string;
  prepareSpellInfo: string;
  updateData: (
    key: string,
    value: string | number | boolean | Ability | CustomField[] | CasterType
  ) => void;
  updateCasterType: (value: CasterType) => void;
}

const SpellCasting = ({
  spellCaster,
  spellCastingAbility,
  casterType,
  ritualCaster,
  ritualSpellPrepared,
  spellCastingInfo,
  spellFocus,
  displaySpellList,
  prepareSpellInfo,
  active,
  updateData,
  updateCasterType,
}: Props) => {
  return (
    <Module
      name="Spellcasting"
      description="Select the spellcasting options for your class."
      active={active}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* SpellCaster ? */}
        <div className="form-control w-full  bg-black/30 p-3 rounded-xl">
          <div className="label">
            <span className="label-text">Is this class a spell caster?</span>
          </div>
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="toggle"
              checked={spellCaster}
              onChange={(e) => updateData("spellCaster", e.target.checked)}
            />
          </label>
          {spellCaster && (
            <>
              <div className="label">
                <span className="label-text">
                  Does this class need a regular spell slot table?{" "}
                  <Info tooltip="Tick this if you want to do spellcasting with 'regular' spell slots (Ex: Wizard, Sorcerer, Paladin). Others utilize a more customized spellcasting (Ex: Warlock). See the Class Table Tab to customize your class table columns." />
                </span>
              </div>
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="toggle"
                  checked={displaySpellList && spellCaster}
                  onChange={(e) =>
                    updateData("displaySpellList", e.target.checked)
                  }
                />
              </label>
            </>
          )}
        </div>
        {/* Dont need to load the rest if not a spellcaster */}
        {spellCaster && (
          <>
            {/* Spellcasting Ability */}
            <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
              <div className="label">
                <span className="label-text">
                  Spellcasting Ability <Info tooltip="Spellcasting Ability" />
                </span>
              </div>
              <select
                className="select select-bordered w-full"
                value={spellCastingAbility}
                onChange={(e) =>
                  updateData("spellCastingAbility", e.target.value as Ability)
                }
              >
                {Object.values(Ability).map((ability, index) => (
                  <option key={index} value={ability}>
                    {ability}
                  </option>
                ))}
              </select>
            </label>
            {/* Spell focus */}
            <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
              <div className="label">
                <span className="label-text">
                  Spell Focus{" "}
                  <Info tooltip="Your Spell Focus is what you use to channel your spells. A Spellcasting focus can be used in place of material components for a spell if there is no cost indicated in the spell description and the material components are not consumed." />
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={spellFocus}
                placeholder="Ex: Wand, Staff, Holy Symbol"
                onChange={(e) => updateData("spellFocus", e.target.value)}
              />
            </label>
            {/* Ritual Caster */}
            <div className="form-control w-full  bg-black/30 p-3 rounded-xl">
              <div className="label">
                <span className="label-text">
                  Is this class a ritual caster?{" "}
                  <Info tooltip="Ritual casters can cast spells with the ritual tag without using a spell slot. Doing so takes 10 minutes to cast the spell, instead of the regular time detailed in the spell." />
                </span>
              </div>
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="toggle"
                  checked={ritualCaster}
                  onChange={(e) => {
                    updateData("ritualCaster", e.target.checked);
                  }}
                />
              </label>
              {/* If they are, do they need to have the spell prepared? */}
              <div className="label">
                <span className="label-text">
                  Do you need to have the spell prepared to cast a ritual spell?{" "}
                  <Info tooltip="Currently, Wizards are the only official class that don't need to have this spell prepared." />
                </span>
              </div>
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="toggle"
                  disabled={!ritualCaster}
                  checked={ritualCaster && ritualSpellPrepared}
                  onChange={(e) => {
                    ritualCaster &&
                      updateData("ritualSpellPrepared", e.target.checked);
                  }}
                />
              </label>
            </div>
            <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
              <div className="label">
                <span className="label-text">
                  Spell Casting Resource{" "}
                  <Info tooltip="Describe how this class uses spell slots (or other resource). Add any custom fields you need for spellcasting. For example, Warlocks need to know their Pact Magic level, and their spell slots are all the same level." />
                  <Info
                    tooltip="Surround text in a single star (*) to make it italic. Ex: *hello*"
                    alert
                    format={false}
                  />
                  <Info
                    tooltip="Surround text in a double star (**) to make it bold. Ex: **hello**"
                    alert
                    format={false}
                  />
                </span>
              </div>
              <textarea
                className="textarea h-48 textarea-bordered w-full"
                placeholder="Ex: The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest."
                value={spellCastingInfo}
                onChange={(e) => updateData("spellCastingInfo", e.target.value)}
              />
            </label>
            {/* Prepare Spell info */}
            <label className="form-control w-full  bg-black/30 p-3 rounded-xl">
              <div className="label">
                <span className="label-text">
                  Preparing and Casting Spells{" "}
                  <Info tooltip="This is where you can put any information about how this class prepares and casts spells." />
                  <Info
                    tooltip="Surround text in a single star (*) to make it italic. Ex: *hello*"
                    alert
                    format={false}
                  />
                  <Info
                    tooltip="Surround text in a double star (**) to make it bold. Ex: **hello**"
                    alert
                    format={false}
                  />
                </span>
              </div>
              <textarea
                className="textarea h-48 textarea-bordered w-full"
                placeholder="Ex: You prepare the list of cleric spells that are available for you to cast. To do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots. You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
                value={prepareSpellInfo}
                onChange={(e) => updateData("prepareSpellInfo", e.target.value)}
              />
            </label>
          </>
        )}
        {/* Spell casting info */}
      </div>

      {spellCaster && displaySpellList && (
        <SpellTableEditor
          casterType={casterType}
          updateCasterType={updateCasterType}
        />
      )}
    </Module>
  );
};

export default SpellCasting;
