import { Fragment } from 'react';
import Loading from '@/components/UI/Loading';
import { Ability, AssociatedModel } from '@prisma/client';
import Link from 'next/link';
import NewLineParse from '@/Utility/NewLineParse';
import ClassTable from '@/components/ClassInfo/ClassTable';
import P from '@/Utility/FormatAndSanitize';
import '@/lib/string.extensions';
import Info from '@/components/UI/Info';
import AbilityToText from '@/lib/utils/toText/AbilityToText';
import numPlace from '@/lib/utils/numPlace';
import FeatureList from '@/components/UI/Features/FeatureList';
import CommentSection from '@/components/CommentSection/CommentSection';
import { ClassInfo, FeatureWithClassColumn } from '@/lib/types/modelInfo';
import ClassProficiencies from '@/components/ClassInfo/ClassProficiencies';
import { SpellFocusToText } from '@/lib/utils/toText/SpellFocusToText';

const ClassPage = ({ classObj }: { classObj: ClassInfo }) => {
  const spellCastingFeatures = classObj.SpellcastingFeatures.sort((a, b) => {
    const minA = Math.min(...a.Effects.map((e) => e.level));
    const minB = Math.min(...b.Effects.map((e) => e.level));

    return minA - minB;
  });
  const lvls = classObj.abilityScoreLevels.sort((a, b) => a - b);
  const regularFeatures = classObj.Features.concat([
    {
      name: 'Ability Score Improvement',
      Effects: lvls.map((lvl) => {
        return {
          level: lvl,
          EffectGrantsGroup: [],
        };
      }, []) as unknown as FeatureWithClassColumn['Effects'],
      description: `When you reach ${numPlace(
        lvls[0]
      )} level, and again at ${lvls
        .map((l, i) => {
          if (i === 0) return;
          if (i === lvls.length - 1) return `and ${numPlace(l)} level,`;
          return numPlace(l);
        })
        .filter((l) => l !== undefined)
        .join(
          ', '
        )} you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.`,
    } as unknown as FeatureWithClassColumn,
    {
      name: `Subclass: ${classObj.subClassName}`,
      description: classObj.subClassDescription,
      Effects: classObj.subClassFeatureLevels.map((lvl) => {
        return {
          level: lvl,
          EffectGrantsGroup: [],
        };
      }, []) as unknown as FeatureWithClassColumn['Effects'],
      extendedTable: [
        {
          '': {
            headers: ['Subclass', 'Description'],
            links: classObj.SubClasses.map((subClass) => {
              return `/subclass/${subClass.slug}`;
            }),
            data: classObj.SubClasses.map((subClass) => {
              return {
                Subclass: subClass.name,
                Description: subClass.flavorText,
              };
            }),
          },
        },
      ],
    } as unknown as FeatureWithClassColumn,
  ]).sort((a, b) => {
    const minA = Math.min(
      ...(a.Effects ? a.Effects.map((e) => e.level) : [-1])
    );
    const minB = Math.min(
      ...(b.Effects ? b.Effects.map((e) => e.level) : [-1])
    );

    return minA - minB;
  });
  return (
    <main className="p-4 md:p-8">
      {!classObj && <Loading />}

      {classObj && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{classObj.name}</h1>
              <p className="italic pr-4">
                <NewLineParse>{classObj.description}</NewLineParse>
              </p>
              <p className="pt-4">
                Source:
                <span className="font-bold italic"> {classObj.source}</span>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={'btn btn-ghost border border-gray-500 w-full'}
                href={`/class`}
              >
                View all Classes -&gt;
              </Link>
            </div>
          </div>
          {classObj.MultiClassing && (
            <>
              <div className="divider"></div>
              <p>
                <P>{classObj.MultiClassing.multiclassingDescription}</P>
              </p>
            </>
          )}
          <div className="divider"></div>
          <div className="bg-base-300 p-4 rounded-xl ">
            <h2>
              {classObj.name.toCapitalCase()} Class Table{' '}
              <Info tooltip="The Class Table provides a general overview of what your class gains at each level." />
            </h2>
            <div className="divider m-0"></div>
            <ClassTable classObj={classObj} />
          </div>
          <div className="divider"></div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                Hitpoints{' '}
                <Info tooltip="Hitpoints determine how much damage your character is able to take. See also: Hit Dice" />
              </h2>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Hit Dice: </P>
                </span>
                <P>
                  1d{classObj.hitDie.toString()} per {classObj.name} level
                </P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Hit Points at 1st Level: </P>
                </span>
                <P>{classObj.hitDie.toString()} + your Constitution modifier</P>
              </p>
              <div className="divider m-0"></div>
              <p>
                <span className="font-bold">
                  <P>Hit Points at Higher Levels: </P>
                </span>
                <P>
                  1d{classObj.hitDie.toString()} (or{' '}
                  {(Math.ceil(classObj.hitDie / 2) + 1).toString()}) + your
                  Constitution modifier per {classObj.name} level after 1st
                </P>
              </p>
              <div className="divider m-0"></div>
            </div>
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <ClassProficiencies classObj={classObj} />
            </div>
            <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
              <h2 className="pb-0">
                Equipment{' '}
                <Info tooltip="In addition to other items you gain from your background, your character can start with the following equipment." />
              </h2>
              <div className="divider m-0"></div>
              <ul>
                {classObj.itemDescription.map((item, index) => (
                  <Fragment key={index}>
                    <li>
                      <P>{item}</P>
                    </li>
                    <div className="divider m-0"></div>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
          {classObj.SpellCasting && (
            <>
              <div className="divider"></div>
              <h2>
                Spellcasting{' '}
                <Info tooltip="This Class has the ability to cast spells, as described below." />
              </h2>{' '}
              <p className="text-base font-normal italic">
                <P>{classObj.SpellCasting.description}</P>
              </p>
              <div className="divider"></div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                  <h2 className="pb-0">
                    Spellcasting Ability{' '}
                    <Info tooltip="Your Spellcasting Ability determines which Ability Score your character utilizes to cast spells." />
                  </h2>
                  <div className="divider m-0"></div>
                  <p>
                    <P>
                      {classObj.SpellCasting.spellCastingAbilityDescription ||
                        ''}
                    </P>
                  </p>
                  <div className="divider m-0"></div>
                  <p>
                    <span className="font-bold">
                      <P>Spellcasting Ability: </P>
                    </span>
                    <P>
                      {AbilityToText(Ability[classObj.SpellCasting.ability])}
                    </P>
                  </p>
                  <div className="divider m-0"></div>

                  <p>
                    <span className="font-bold">
                      <P>Spell Save DC: </P>
                    </span>
                    <P>
                      8 + your proficiency bonus + your{' '}
                      {AbilityToText(Ability[classObj.SpellCasting.ability])}{' '}
                      modifier
                    </P>
                  </p>
                  <div className="divider m-0"></div>
                  <p>
                    <span className="font-bold">
                      <P>Spell Attack Modifier: </P>
                    </span>
                    <P>
                      your proficiency bonus + your{' '}
                      {AbilityToText(Ability[classObj.SpellCasting.ability])}{' '}
                      modifier
                    </P>
                  </p>
                  <div className="divider m-0"></div>
                </div>
                {classObj.SpellCasting.spellFocus && (
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <h2 className="pb-0">
                      Spellcasting Focus{' '}
                      <Info tooltip="Spellcasting Focuses allow the spellcaster to cast spells more freely. It removes the need for material components that do not specify a cost." />
                    </h2>
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        You can use a{' '}
                        {SpellFocusToText(classObj.SpellCasting.spellFocus)} as
                        a spellcasting focus for your {classObj.name} spells.
                      </P>
                    </p>

                    <div className="divider m-0"></div>
                    <div role="tablist" className="tabs tabs-bordered"></div>
                  </div>
                )}
                {classObj.SpellCasting.SpellList && (
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <h2 className="pb-0">
                      Spell List{' '}
                      <Info tooltip="The list of spells that this class can prepare and cast." />
                    </h2>
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        {classObj.SpellCasting.spellListDescription ||
                          `The ${classObj.name} class can cast spells from the ${classObj.SpellCasting.SpellList.name} Spell-list.`}
                      </P>
                      <Link
                        href={`/spell-list/${classObj.SpellCasting.SpellList?.slug}`}
                        className="btn btn-primary btn-sm mx-4"
                      >
                        View Spell List -&gt;
                      </Link>
                    </p>

                    <div className="divider m-0"></div>
                    <div role="tablist" className="tabs tabs-bordered"></div>
                  </div>
                )}

                {classObj.SpellCasting.castingSpellsDescription && (
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <h2 className="pb-0">
                      Casting Spells{' '}
                      <Info tooltip="Every Class has a unique manner in which they cast spells." />
                    </h2>
                    <div className="divider m-0"></div>
                    <p>
                      <P>{classObj.SpellCasting.castingSpellsDescription}</P>
                    </p>
                    <div className="divider m-0"></div>
                  </div>
                )}
                {classObj.SpellCasting.preparingSpellsDescription && (
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <h2 className="pb-0">
                      Preparing Spells{' '}
                      <Info tooltip="Every class has a unique manner in which they prepare their spells." />
                    </h2>
                    <div className="divider m-0"></div>
                    <p>
                      <P>{classObj.SpellCasting.preparingSpellsDescription}</P>
                    </p>
                    <div className="divider m-0"></div>
                  </div>
                )}
                {spellCastingFeatures && (
                  <FeatureList features={spellCastingFeatures} />
                )}
              </div>
            </>
          )}
          <div className="divider"></div>
          <h2>
            Class Features <Info tooltip="Features" />
          </h2>
          <div className="divider"></div>
          <FeatureList features={regularFeatures} />
          <CommentSection id={classObj.id} model={AssociatedModel.CLASS} />
        </>
      )}
    </main>
  );
};

export default ClassPage;
