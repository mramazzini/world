import { AbilityToModifier } from "@/app/components/Utility/characterStateFunctions/calc/AbilityToModifier";
import { calculateLevel } from "@/app/components/Utility/characterStateFunctions/calc/calcLevel";
import P from "@/app/components/Utility/FormatAndSanitize";
import ModelDisplay from "@/app/components/Utility/ModelDisplay";
import { CharacterInfo } from "@/lib/utils/types/types";
import Link from "next/link";

interface Props {
  character: CharacterInfo;
}

const CharacterStatsTab = ({ character }: Props) => {
  return (
    character.state && (
      <div>
        <h2>Character Stats</h2>
        <p>View your character's stats</p>
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
                    {character.Classes?.map((classData) => (
                      <span key={classData.id} className="capitalize">
                        {classData.name}{" "}
                      </span>
                    ))}
                  </td>
                  <td>
                    {character.Classes?.map((classData) => (
                      <Link
                        href={`/class/${classData.name}`}
                        key={classData.id}
                        target="_blank"
                        className="btn btn-xs btn-accent"
                      >
                        Read More -&gt;
                      </Link>
                    ))}
                  </td>
                </tr>
                {character.SubClasses && character.SubClasses.length > 0 && (
                  <tr>
                    <td>Subclass(es)</td>
                    <td>
                      {character.SubClasses?.map((subClassData) => (
                        <span className="capitalize">{subClassData.name} </span>
                      ))}
                    </td>
                    <td>
                      {character.SubClasses?.map((subClassData) => (
                        <Link
                          href={`/subclass/${subClassData.name.replaceAll(
                            " ",
                            "-"
                          )}`}
                          key={subClassData.id}
                          target="_blank"
                          className="btn btn-xs btn-accent"
                        >
                          Read More -&gt;
                        </Link>
                      ))}
                    </td>
                  </tr>
                )}
                <tr>
                  <td>Background</td>
                  <td>{character.Background?.name.replaceAll("_", " ")}</td>
                  <td>
                    <Link
                      href={`/background/${character.Background?.name.replaceAll(
                        " ",
                        "-"
                      )}`}
                      target="_blank"
                      className="btn btn-xs btn-accent"
                    >
                      Read More -&gt;
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Species</td>
                  <td>{character.Species?.name.replaceAll("_", " ")}</td>
                  <td>
                    <Link
                      href={`/species/${character.Species?.name.replaceAll(
                        " ",
                        "-"
                      )}`}
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
                        href={`/subspecies/${character.SubSpecies?.name.replaceAll(
                          " ",
                          "-"
                        )}`}
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
                  <td>Your character's name</td>
                </tr>
                <tr>
                  <td>Level</td>
                  <td>{calculateLevel(character.state)}</td>
                  <td>
                    Describes how powerful your character is. You gain levels as
                    your progress through the game
                  </td>
                </tr>
                <tr>
                  <td>Armor Class</td>
                  <td>{character.state.armorClass}</td>
                  <td>
                    How difficult it is for enemies to hit you. The higher the
                    better.
                  </td>
                </tr>
                <tr>
                  <td>Alignment</td>
                  <td>
                    {character.alignment.replaceAll("_", " ").toCapitalCase()}
                  </td>
                  <td>Your character's moral compass.</td>
                </tr>
                <tr>
                  <td>Creature Type</td>
                  <td>
                    {character.Species?.creatureType
                      .toCapitalCase()
                      .replaceAll("_", " ")}
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
                  <td>{character.state.hp.max}</td>
                  <td>
                    How much damage your character can take before they begin to
                    roll for death saves.
                  </td>
                </tr>
                <tr>
                  <td>Initiative</td>
                  <td>
                    {character.state.initiative >= 0
                      ? `+ ${character.state.initiative}`
                      : `- ${Math.abs(character.state.initiative)} `}
                  </td>
                  <td>How quickly your character can react in combat.</td>
                </tr>
                <tr>
                  <td>Walking Speed</td>
                  <td>{character.state.speed.base} ft</td>
                  <td>How far your character can move in one action.</td>
                </tr>
                <tr>
                  <td>Running Speed</td>
                  <td>{character.state.speed.running} ft</td>
                  <td>
                    How far your character can move when you take the dash
                    action.
                  </td>
                </tr>
                <tr>
                  <td>Flying Speed</td>
                  <td>{character.state.speed.flying} ft</td>
                  <td>How far your character can move when flying.</td>
                </tr>
                <tr>
                  <td>Swimming Speed</td>
                  <td>{character.state.speed.swimming} ft</td>
                  <td>How far your character can move when swimming.</td>
                </tr>
                <tr>
                  <td>Climbing Speed</td>
                  <td>{character.state.speed.climbing} ft</td>
                  <td>How far your character can move when climbing.</td>
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
                {Object.entries(character.state.abilityScores).map(
                  ([key, value]) => (
                    <tr key={key}>
                      <td>{key.toCapitalCase()}</td>
                      <td>{value}</td>
                      <td>
                        {AbilityToModifier(value) >= 0
                          ? `+ ${AbilityToModifier(value)}`
                          : `- ${Math.abs(AbilityToModifier(value))}`}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </section>
          <section className="bg-base-200 rounded-xl p-4">
            <h3 className="divider">Proficiencies</h3>
            <h4 className="divider">Skills</h4>
            <ul className="list-disc pl-4">
              {character.state.proficiencies.skills.map((prof) => (
                <li key={prof}>
                  <P>{prof.toCapitalCase().replaceAll("_", " ")}</P>
                </li>
              ))}
            </ul>
            <h4 className="divider">Tools</h4>
            <ul className="list-disc pl-4">
              {character.state.proficiencies.tools.map((prof) => (
                <li key={prof}>
                  <ModelDisplay model="Tool" id={prof} />
                </li>
              ))}
            </ul>
            <h4 className="divider">Languages</h4>
            <ul className="list-disc pl-4">
              {character.state.proficiencies.languages.map((prof) => (
                <li key={prof}>{prof.toCapitalCase().replaceAll("_", " ")}</li>
              ))}
            </ul>
            <h4 className="divider">Weapons</h4>
            <ul className="list-disc pl-4">
              {character.state.proficiencies.weapons.map((prof) => (
                <li key={prof}>
                  <ModelDisplay model="Weapon" id={prof}></ModelDisplay>
                </li>
              ))}
            </ul>
            <h4 className="divider">Armor</h4>
            <ul className="list-disc pl-4">
              {character.state.proficiencies.armor.map((prof) => (
                <li key={prof}>{prof.toCapitalCase().replaceAll("_", " ")}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    )
  );
};

export default CharacterStatsTab;
