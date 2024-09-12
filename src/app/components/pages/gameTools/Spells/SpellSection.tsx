import P from "@/app/components/Utility/FormatAndSanitize";
import JsonTable from "@/app/components/Utility/JsonTable";
import { toSpellLevel } from "@/lib/utils/toSpellLevel";
import { Ability, Spell } from "@prisma/client";
import { Fragment } from "react";

interface Props {
  preparedSpell?: boolean;
  alwaysPrepared?: boolean;
  spell: Spell;
  spellCastingAbility: Ability;
  proficiencyBonus: number;
  spellCastingModifier: number;
}

const SpellSection = ({
  preparedSpell,
  alwaysPrepared,
  spell,
  spellCastingAbility,
  proficiencyBonus,
  spellCastingModifier,
}: Props) => {
  if (!preparedSpell && !alwaysPrepared) return null;
  return (
    <div tabIndex={0} className="bg-base-300 rounded-xl  mt-2">
      <div className="flex flex-row items-center justify-between px-4 pt-2">
        <h3>{spell.name}</h3>
        <div className="flex flex-row items-center">
          <span className="badge badge-accent font-bold rounded-full">
            Prepared
          </span>
          {alwaysPrepared && (
            <span className="badge badge-primary font-bold rounded-full ml-2">
              Always Prepared
            </span>
          )}
        </div>
      </div>
      <div className="divider m-0"></div>
      <div className="collapse collapse-arrow  py-0 bg-base-100 mx-2 mb-2 w-auto">
        <input type="checkbox" />
        <div className="collapse-title p-0 flex flex-row items-center justify-between pl-4 pr-8">
          <div className="flex flex-row items-center">
            <h4 className="p-0">Spell Info</h4>
          </div>
          <div className="flex flex-wrap items-center">
            {/* {featureInfo.feature.levels &&
          featureInfo.feature.levels.length == 20 ? (
            <span className="badge badge-accent font-bold rounded-full">
              All Levels
            </span>
          ) : (
            featureInfo.feature.levels?.map((level, index) => {
              return (
                <div
                  className={`bg-neutral rounded-full w-8 h-8 flex justify-center items-center text-neutral-content font-bold ${numberColor(
                    level
                  )} border border-4 mx-1 before:absolute  before:rounded-full before:border-4 z-[1] before:w-8 before:h-8 ${
                    numberColorBefore[level].bg
                  } ${numberColorBefore[level].opacity}`}
                  key={index}
                >
                  {level}
                </div>
              );
            })
          )} */}
          </div>
        </div>
        <div className="collapse-content">
          <p>
            <P>{spell.description}</P>
          </p>
          <div className="divider m-0"></div>
          {spell.options.length > 0 && (
            <>
              <ul className="list-disc ">
                {spell.options.map((option, index) => (
                  <Fragment key={index}>
                    <li className="ml-4">
                      <P>{option}</P>
                    </li>
                  </Fragment>
                ))}
              </ul>
              <div className="divider m-0"></div>
            </>
          )}
          {spell.extendedTable.length > 0 && (
            <>
              <div className="bg-base-100">
                <JsonTable json={spell.extendedTable} />
              </div>
              <div className="divider m-0"></div>
            </>
          )}
          {spell.postTableData && (
            <>
              <p>
                <P>{spell.postTableData}</P>
              </p>
              <div className="divider m-0"></div>
            </>
          )}
          {spell.upcastInfo && (
            <>
              <p>
                <em>
                  <strong>At Higher Levels: </strong>
                </em>
                <P>{spell.upcastInfo}</P>
              </p>
              <div className="divider m-0"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpellSection;
