"use client";

import numPlace from "@/lib/utils/numPlace";
//takes a class object and returns a formatted display of the class
import numberArray from "@/lib/utils/numberArray";
import { Class, Feature, SubClass } from "@prisma/client";

interface Props {
  classObj: Class;
  features: Feature[];
  subClasses: SubClass[];
}

function ClassDisplay({ classObj, features, subClasses }: Props) {
  return (
    <div className="p-4">
      <h1>{classObj.name}</h1>
      <h2>Hitpoints</h2>
      <p>Hit Die: {classObj.hitDie}</p>
      <p>
        Hitpoints at 1st Level: {classObj.hitDie} + your Constitution modifier
      </p>
      <p>
        Hitpoints at Higher Levels: 1d{classObj.hitDie} (or{" "}
        {Math.floor(classObj.hitDie / 2) + 1}) + your Constitution modifier per{" "}
        {classObj.name} level after 1st
      </p>
      <h2>Proficiencies</h2>
      <p>
        <span className="font-bold">Armor: </span>
        {classObj.armor.join(", ")}
      </p>
      <p>
        <span className="font-bold">Weapons: </span>
        {classObj.weapons.join(", ")}
      </p>
      <p>
        <span className="font-bold">Tools: </span>
        {classObj.tools.join(", ")}
      </p>
      <p>
        <span className="font-bold">Saving Throws: </span>
        {classObj.savingThrows.join(", ")}
      </p>
      <h2>Equipment</h2>
      <ul className="list-disc p-4">
        {classObj.equipment.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h2>Skills</h2>
      <p>
        Choose {classObj.skillChoiceCount} from the following list of skills:
      </p>
      <ul className="list-disc p-4">
        {classObj.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
      <table className="table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Proficiency Bonus</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          {numberArray(1, 20).map((num) => (
            <tr key={num}>
              <td>{num}</td>
              <td>+{Math.ceil(num / 4) + 1}</td>
              <td>
                {features
                  .filter((feature) => feature.levels.includes(num) && feature)
                  .map((feature) => {
                    //if the feature is the second level of the same feature type, just do feature (x2)

                    const lvlIndex = feature.levels.findIndex(
                      (lvl) => lvl === num
                    );

                    return (
                      <div key={`feature-${feature.id}-${num}`}>
                        {feature.name}
                        {lvlIndex > 0 ? ` (x${lvlIndex + 1})` : null}
                      </div>
                    );
                  })}
                {classObj.subfeatLevels.includes(num) ? (
                  <div>
                    <div>Subclass Feature</div>
                  </div>
                ) : null}
                {classObj.ASILevels.includes(num) ? (
                  <div>
                    <div>Ability Score Improvement</div>
                  </div>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Class Features</h2>
      <ul>
        {numberArray(1, 20).map((num) => {
          //grab features for the current level
          const feat = features.filter((feature) =>
            feature.levels.find((lvl) => lvl === num)
          );
          if (
            feat.length == 0 &&
            classObj.subfeatLevels[0] != num &&
            classObj.ASILevels[0] != num
          )
            return null;

          //need to render each feature, but when the level hits ASILevels[0], print the ASI feature
          // when the level hits subfeatLevels[0], print the subclass feature

          return (
            <li key={num}>
              <h3>Level {num}</h3>
              {classObj.subfeatLevels[0] === num && (
                <div>
                  <h4>{classObj.subClassName}</h4>
                  <p>
                    When you reach {numPlace(classObj.subfeatLevels[0])} level,{" "}
                    {classObj.subClassDesc}
                  </p>
                  <p>
                    Your choice grants you features at {numPlace(num)} level and
                    again at{" "}
                    {[...classObj.subfeatLevels] // make copy since we dont want to mutate the original
                      .slice(1) //remove the first element since its referenced above
                      .map((lvl, index) => {
                        if (index == classObj.subfeatLevels.length - 2)
                          // 2 because we removed the first element
                          // last element needs to be "and"
                          return `and ${numPlace(lvl)}`;
                        return numPlace(lvl);
                      })
                      .join(", ")}{" "}
                    level.
                  </p>
                </div>
              )}
              {classObj.ASILevels[0] === num && (
                <div>
                  <h4>Ability Score Improvement</h4>
                  <p>
                    When you reach {numPlace(classObj.ASILevels[0])} level, and
                    again at{" "}
                    {[...classObj.ASILevels] // make copy since we dont want to mutate the original
                      .slice(1) //remove the first element since its referenced above
                      .map((lvl, index) => {
                        if (index == classObj.ASILevels.length - 2)
                          // 2 because we removed the first element
                          // last element needs to be "and"
                          return `and ${numPlace(lvl)}`;
                        return numPlace(lvl);
                      })
                      .join(", ")}{" "}
                    level, you can increase one ability score of your choice by
                    2, or you can increase two ability scores of your choice by
                    1.
                    <br />
                    As normal, you can't increase an ability score above 20
                    using this feature.
                  </p>
                </div>
              )}

              <ul>
                {feat.map((feature) => (
                  <li key={feature.id}>
                    <h4>{feature.name}</h4>
                    <p>{feature.desc}</p>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClassDisplay;
