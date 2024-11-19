import Info from '@/components/UI/Info';
import useAbility from '@/hooks/useAbilityScore';
import { useArmorClass } from '@/hooks/useArmorClass';
import useHitpoints from '@/hooks/useHitpoints';
import useInitiative from '@/hooks/useInitiative';
import useLevel from '@/hooks/useLevel';
import useModifier from '@/hooks/useModifier';
import useProficiency from '@/hooks/useProficiency';
import useSpeed from '@/hooks/useSpeed';
import AbilityToText from '@/lib/utils/AbilityToText';
import { useAppSelector } from '@/store/hooks';
import P from '@/Utility/FormatAndSanitize';
import ModelDisplay from '@/Utility/ModelDisplay';
import { Ability } from '@prisma/client';
import Link from 'next/link';
import { Fragment } from 'react';

const CharacterStatsTab = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);
  const armorClass = useArmorClass();
  const level = useLevel();
  const { maxhp, currenthp, temphp } = useHitpoints();
  const initiative = useInitiative();
  const { getSpeed, SpeedType } = useSpeed();
  const { getAbilityModifier } = useModifier();
  const abilityScores = useAbility();
  const {
    proficiencyBonus,
    toolGroups,
    toolIds,
    skillExpertises,
    skillProficiencies,
    savingThrows,
    weaponGroups,
    weaponIds,
    armorTypes,
    languages,
  } = useProficiency();
  return (
    character && (
      <div>
        <h2>Character Stats</h2>
        <p>View your character&apos;s stats</p>
        <div className="grid grid-cols-1 gap-4 my-4">
          <section className="bg-base-200 rounded-xl p-4 flex flex-col gap-4">
            <h3>Character Info</h3>

            <table className="table table-zebra table-xs bg-base-300 ">
              <thead>
                <tr className="bg-black/20">
                  <th>Attribute</th>
                  <th>Value</th>
                  <th>Wiki Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Class(es)</td>
                  <td>
                    {character.CharacterToClass?.map(
                      (characterClassData, index) => {
                        const last =
                          index === character.CharacterToClass.length - 1;
                        return (
                          <Fragment key={characterClassData.classId}>
                            <span className="capitalize">
                              {characterClassData.Class.name}
                            </span>
                            {!last && ', '}
                          </Fragment>
                        );
                      }
                    )}
                  </td>
                  <td>
                    {character.CharacterToClass?.map(
                      (characterClassData, index) => {
                        return (
                          <Link
                            href={`/class/${characterClassData.Class.slug}`}
                            key={characterClassData.classId}
                            target="_blank"
                            className="btn btn-xs btn-accent mr-2"
                          >
                            Read More -&gt;
                          </Link>
                        );
                      }
                    )}
                  </td>
                </tr>
                {character.SubClasses && character.SubClasses[0] && (
                  <tr>
                    <td>Subclass(es)</td>
                    <td>
                      {character.SubClasses?.map((subClassData) => (
                        <span key={subClassData.id} className="capitalize">
                          {subClassData.name}{' '}
                        </span>
                      ))}
                    </td>
                    <td>
                      <Link
                        href={`/subclass/${character.SubClasses[0].slug}`}
                        target="_blank"
                        className="btn btn-xs btn-accent"
                      >
                        Read More -&gt;
                      </Link>
                    </td>
                  </tr>
                )}
                <tr>
                  <td>Background</td>
                  <td>{character.Background?.name.replaceAll('_', ' ')}</td>
                  <td>
                    <Link
                      href={`/background/${character.Background?.slug}`}
                      target="_blank"
                      className="btn btn-xs btn-accent"
                    >
                      Read More -&gt;
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Species</td>
                  <td>{character.Species?.name.replaceAll('_', ' ')}</td>
                  <td>
                    <Link
                      href={`/species/${character.Species?.slug}`}
                      target="_blank"
                      className="btn btn-xs btn-accent"
                    >
                      Read More -&gt;
                    </Link>
                  </td>
                </tr>
                {character.SubSpecies && (
                  <tr>
                    <td>Subspecies</td>
                    <td>{character.SubSpecies?.name}</td>
                    <td>
                      <Link
                        href={`/subspecies/${character.SubSpecies?.slug}`}
                        target="_blank"
                        className="btn btn-xs btn-accent"
                      >
                        Read More -&gt;
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <table className="table table-zebra table-xs bg-base-300">
              <thead>
                <tr className="bg-black/20">
                  <th>Attribute</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{character.name}</td>
                  <td>Your character&apos;s name</td>
                </tr>
                <tr>
                  <td>Level</td>
                  <td>{level}</td>
                  <td>
                    Describes how powerful your character is. You gain levels as
                    your progress through the game
                  </td>
                </tr>
                <tr>
                  <td>Armor Class</td>
                  <td>{armorClass}</td>
                  <td>
                    How difficult it is for enemies to hit you. The higher the
                    better.
                  </td>
                </tr>
                <tr>
                  <td>Alignment</td>
                  <td>
                    {character.alignment.replaceAll('_', ' ').toCapitalCase()}
                  </td>
                  <td>Your character&apos;s moral compass.</td>
                </tr>
                <tr>
                  <td>Creature Type</td>
                  <td>
                    {character.Species?.creatureType
                      .toCapitalCase()
                      .replaceAll('_', ' ')}
                  </td>
                  <td>
                    The type of creature you are. Can impact certain spells.
                  </td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{character.Species?.size.toCapitalCase()}</td>
                  <td>How big or small your character is.</td>
                </tr>

                <tr>
                  <td>Max Hit Points</td>
                  <td>{maxhp}</td>
                  <td>
                    How much damage your character can take before they begin to
                    roll for death saves.
                  </td>
                </tr>
                <tr>
                  <td>Current Hit Points</td>
                  <td>{currenthp}</td>
                  <td>How much health your character currently has.</td>
                </tr>
                <tr>
                  <td>Temporary Hit Points</td>
                  <td>{temphp}</td>
                  <td>
                    Temporary hit points are a buffer that can absorb damage
                    before your character takes real damage.
                  </td>
                </tr>
                <tr>
                  <td>Initiative</td>
                  <td>
                    {initiative >= 0
                      ? `+ ${initiative}`
                      : `- ${Math.abs(initiative)} `}
                  </td>
                  <td>How quickly your character can react in combat.</td>
                </tr>
                <tr>
                  <td>Walking Speed</td>
                  <td>{getSpeed(SpeedType.WALK)} ft</td>
                  <td>How far your character can move in one action.</td>
                </tr>
                <tr>
                  <td>Running Speed</td>
                  <td>{getSpeed(SpeedType.RUN)} ft</td>
                  <td>
                    How far your character can move when you take the dash
                    action.
                  </td>
                </tr>
                <tr>
                  <td>Flying Speed</td>
                  <td>{getSpeed(SpeedType.FLY)} ft</td>
                  <td>How far your character can move when flying.</td>
                </tr>
                <tr>
                  <td>Swimming Speed</td>
                  <td>{getSpeed(SpeedType.SWIM)} ft</td>
                  <td>How far your character can move when swimming.</td>
                </tr>
                <tr>
                  <td>Climbing Speed</td>
                  <td>{getSpeed(SpeedType.CLIMB)} ft</td>
                  <td>How far your character can move when climbing.</td>
                </tr>
                <tr>
                  <td>Burrowing Speed</td>
                  <td>{getSpeed(SpeedType.BURROW)} ft</td>
                  <td>How far your character can move when burrowing.</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="bg-base-200 rounded-xl p-4">
            <h3>Ability Scores</h3>
            <table className="table table-zebra table-xs bg-base-300">
              <thead>
                <tr className="bg-black/20">
                  <th>Ability</th>
                  <th>Score</th>
                  <th>Modifier</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(Ability).map((ability) => (
                  <tr key={ability}>
                    <td>{AbilityToText(ability)}</td>
                    <td>{abilityScores[ability]}</td>
                    <td>
                      {getAbilityModifier(ability) >= 0
                        ? `+ ${getAbilityModifier(ability)}`
                        : `- ${Math.abs(getAbilityModifier(ability))}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className="bg-base-200 rounded-xl p-4">
            <h3>Feats</h3>
            <ul className="list-disc pl-4">
              {character.Feats?.map((feat) => (
                <li key={feat.id}>
                  <ModelDisplay model="Feat" id={feat.id} />
                </li>
              ))}
              {character.Feats?.length === 0 && (
                <li>
                  You have not selected any feats. Certain sites sell it at a
                  premium.
                </li>
              )}
            </ul>
          </section>
          <section className="bg-base-200 rounded-xl p-4">
            <div className="bg-base-300 p-4 rounded-xl">
              <h3 className="divider ">Proficiencies</h3>
              <p className="w-full text-center">
                Proficiency Bonus:{' '}
                <span className="text-accent font-bold text-xl">
                  + {proficiencyBonus}
                </span>
              </p>
            </div>{' '}
            <div className="divider"></div>
            <h4>
              Skills{' '}
              <Info tooltip="Skill Proficiencies allow you to add your proficiency bonus to skill checks." />{' '}
            </h4>
            <ul className="list-disc pl-4">
              {skillProficiencies.map((prof) => (
                <li key={prof}>
                  <P>{prof.toCapitalCase().replaceAll('_', ' ')}</P>
                </li>
              ))}
            </ul>{' '}
            <div className="divider"></div>
            <h4>
              Skill Expertise
              <Info tooltip="Skill Expertise allow you to add twice your proficiency bonus to skill checks." />
            </h4>
            <ul className="list-disc pl-4">
              {skillExpertises.map((prof) => (
                <li key={prof}>
                  <P>{prof.toCapitalCase().replaceAll('_', ' ')}</P>
                </li>
              ))}
              {skillExpertises.length === 0 && (
                <li>
                  You have no skill expertises. Being good at things is
                  overrated.
                </li>
              )}
            </ul>{' '}
            <div className="divider"></div>
            <h4>
              Tools{' '}
              <Info tooltip="Tool Proficiencies allow you to add your proficiency bonus to tool checks. You also gain situational advantage on certain checks, depending on the tool." />
            </h4>
            <ul className="list-disc pl-4">
              {toolIds.map((prof) => (
                <li key={prof}>
                  <ModelDisplay model="Tool" id={prof} />
                </li>
              ))}
              {toolGroups.map((prof) => (
                <li key={prof}>
                  <P>{prof.toCapitalCase().replaceAll('_', ' ')}</P>
                </li>
              ))}
              {toolIds.length === 0 && toolGroups.length === 0 && (
                <li>
                  You have not selected any tool proficiencies. You&apos;re
                  going to have to get creative.
                </li>
              )}
            </ul>{' '}
            <div className="divider"></div>
            <h4>
              Languages{' '}
              <Info tooltip="Language Proficiencies allows you to speak, read, write, and otherwise understand a given language." />
            </h4>
            <ul className="list-disc pl-4">
              {languages.map((prof) => (
                <li key={prof}>{prof.toCapitalCase().replaceAll('_', ' ')}</li>
              ))}
              {languages.length === 0 && (
                <li>
                  You have not selected any languages. Should have paid
                  attention in high school.
                </li>
              )}
            </ul>{' '}
            <div className="divider"></div>
            <h4>
              Weapons{' '}
              <Info tooltip="Weapon Proficiencies allows you to add your proficiency bonus to weapon attack rolls." />
            </h4>
            <ul className="list-disc pl-4">
              {weaponIds.map((prof) => (
                <li key={prof}>
                  <ModelDisplay model="Weapon" id={prof}></ModelDisplay>
                </li>
              ))}{' '}
              {weaponGroups.map((prof) => (
                <li key={prof}>{prof.toCapitalCase().replaceAll('_', ' ')}</li>
              ))}
              {weaponIds.length === 0 && weaponGroups.length === 0 && (
                <li>
                  You have not selected any weapon proficiencies. Fists it is.
                </li>
              )}
            </ul>{' '}
            <div className="divider"></div>
            <h4>
              Armor{' '}
              <Info tooltip="Armor Proficiency allows you to equip specific 'Armortypes'. Rather than giving you a buff, it prevents certain debuffs that get applied if you equip armor you are not proficient in." />
            </h4>
            <ul className="list-disc pl-4">
              {armorTypes.map((prof) => (
                <li key={prof}>{prof.toCapitalCase().replaceAll('_', ' ')}</li>
              ))}
              {armorTypes.length === 0 && (
                <li>
                  You have not selected any armor proficiencies. Try hiding
                  behind the barbarian.
                </li>
              )}
            </ul>{' '}
            <div className="divider"></div>
            <h4>
              Saving Throws
              <Info tooltip="Saving Throw Proficiencies allow you to add your proficiency bonus to saving throws of the selected ability." />
            </h4>
            <ul className="list-disc pl-4">
              {savingThrows.map((prof) => (
                <li key={prof}>{AbilityToText(prof)}</li>
              ))}
              {savingThrows.length === 0 && (
                <li>
                  You have not selected any saving throw proficiencies. Grim
                  Reaper says hi.
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>
    )
  );
};

export default CharacterStatsTab;
