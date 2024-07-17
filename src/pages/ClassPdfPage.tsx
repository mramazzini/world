"use client";
import React, { useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

import { PDFViewer } from "@react-pdf/renderer";

import { ClassInfo, Levels, SpellLevels } from "@/lib/types";
import { getClass } from "@/lib/actions/db/read.actions";
import { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import "@/lib/string.extensions";
import numberArray from "@/lib/utils/numberArray";
import numPlace from "@/lib/utils/numPlace";
import { italic } from "@uiw/react-md-editor";
import AbilityToText from "@/lib/utils/AbilityToText";
import Link from "next/link";
// The 'theme' object is your Tailwind theme config

function findFourthAsteriskIndex(str: string) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      count++;
      if (count === 4) {
        return i;
      }
    }
  }

  return -1; // Return -1 if there are less than 4 asterisks
}

const ClassPdfPage = () => {
  const router = usePathname();
  const className = router.split("/")[2];
  const [classData, setClassData] = useState<ClassInfo | null>(null);
  const [styles, setStyles] = useState(
    StyleSheet.create({
      table: {
        width: "100%",
      },
      row: {
        display: "flex",
        flexDirection: "row",
        borderTop: "1px solid #EEE",
      },
      header: {
        borderTop: "none",
      },
      bold: {
        fontWeight: "bold",
      },
      col: {
        width: "33%",
        fontSize: 10,

        paddingHorizontal: 2,
      },

      pcol: {
        width: "100px",
        fontSize: 10,

        textAlign: "left",
        paddingHorizontal: 2,
      },
      lcol: {
        width: "100px",
        fontSize: 10,

        textAlign: "left",
        paddingHorizontal: 2,
      },
      scol: {
        width: "2%",
        fontSize: 10,
        textAlign: "left",
        paddingHorizontal: 0,
      },
      italics: {
        fontStyle: "italic",
      },
    })
  );
  useEffect(() => {
    getClass(className).then((res) => {
      setClassData(res);
      if (!res) return;
      //calculate the percentage width of each column based on the fields in a class
      let count = 1;
      const spells = res.spellCaster && res.casterType && res.displaySpellList;
      console.log(spells);
      //levels proficieny and features will have their own css
      count += res?.customFields.length || 0;
      count += res?.cantripsKnown.find((c) => c > 0) ? 1 : 0;
      count += res?.spellsKnown.find((c) => c > 0) ? 1 : 0;
      setStyles(
        StyleSheet.create({
          table: {
            width: "100%",
          },
          row: {
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #EEE",
          },
          header: {
            borderTop: "none",
          },
          bold: {
            fontWeight: "bold",
          },

          pcol: {
            width: "10%",
            fontSize: 10,

            textAlign: "left",
            paddingHorizontal: 4,
          },
          lcol: {
            width: "10%",
            fontSize: 10,

            textAlign: "left",
            paddingHorizontal: 4,
          },
          col: {
            width: `${spells ? 62 : 80 / count}%`,
            fontSize: 10,
            flex: 1,
            textAlign: "left",
            paddingHorizontal: 4,
          },
          scol: {
            width: "2%",
            fontSize: 10,
            textAlign: "left",
            paddingHorizontal: 0,
          },
          italics: {
            fontStyle: "italic",
          },
        })
      );
      console.log(`${80 / count}%`);
    });
  }, [className]);

  return classData ? (
    <>
      <Link className=" btn  m-4 text-blue-500" href={`/class/${className}`}>
        &lt;- Back to Class
      </Link>
      {/* Download pdf */}

      <PDFViewer className="w-screen h-screen">
        <Document>
          <Page size="A4" style={{ padding: 40 }}>
            <View>
              <Text style={{ fontSize: 24, marginBottom: 10 }}>
                {classData.name.toCapitalCase()}
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 20 }}>
                {classData.description}
              </Text>
              {classData.multiclassing && (
                <Text style={{ fontSize: 12, marginBottom: 20 }}>
                  {classData.multiclassing}
                </Text>
              )}
            </View>
            {/* Table */}
            <View style={styles.table}>
              <View style={[styles.row, styles.bold, styles.header]}>
                <Text style={styles.lcol}>Level</Text>
                <Text style={styles.pcol}>PB</Text>
                <Text style={styles.col}>Features</Text>
                {classData.customFields.map((field) => (
                  <Text key={field.id} style={styles.col}>
                    {field.name}
                  </Text>
                ))}
                {classData.cantripsKnown.find((c) => c > 0) && (
                  <Text style={styles.col}>Cantrips Known</Text>
                )}
                {classData.spellsKnown.find((c) => c > 0) && (
                  <Text style={styles.col}>Spells Known</Text>
                )}
                {classData.spellCaster &&
                  classData.displaySpellList &&
                  numberArray(1, 9).map((num) => (
                    <Text key={num} style={styles.scol}>
                      {num}
                    </Text>
                  ))}
              </View>
              {numberArray(1, 20).map((level) => (
                <View key={level} style={styles.row}>
                  <Text style={styles.lcol}>{level}</Text>
                  <Text style={styles.pcol}>+{Math.ceil(level / 4) + 1}</Text>
                  <View style={styles.col}>
                    {classData.Features.filter(
                      (feature) => feature.levels.includes(level) && feature
                    ).map((feature) => (
                      <Text key={`feature-${feature.name}`}>
                        - {feature.name}{" "}
                      </Text>
                    ))}
                    {classData.subfeatLevels.includes(level) && (
                      <Text>- {classData.subClassName} Feature</Text>
                    )}
                    {/* ASI */}
                    {classData.abilityScoreLevels.includes(level) && (
                      <Text key={`level-${level}`}>
                        - Ability Score Improvement{" "}
                      </Text>
                    )}
                  </View>
                  {/* Custom Fields */}
                  {classData.customFields.map((field) => {
                    const lvl = `level${level}` as Levels;
                    const value = field[lvl];
                    return (
                      <Text style={styles.col} key={field.id}>
                        {value || "-"}
                      </Text>
                    );
                  })}
                  {/* Cantrips Known */}
                  {classData.cantripsKnown.find((c) => c > 0) && (
                    <Text style={styles.col}>
                      {classData.cantripsKnown[level - 1] || "-"}
                    </Text>
                  )}
                  {/* Spells Known */}
                  {classData.spellsKnown.find((c) => c > 0) && (
                    <Text style={styles.col}>
                      {classData.spellsKnown[level - 1] || "-"}
                    </Text>
                  )}
                  {/* Spell Slots */}
                  {classData.casterType &&
                    classData.spellCaster &&
                    classData.displaySpellList &&
                    numberArray(1, 9).map((spellSlotLevel) => {
                      //get the key "level1" "level2" etc
                      const key = `level${level}` as SpellLevels;
                      if (classData.casterType)
                        return (
                          <Text key={spellSlotLevel} style={styles.scol}>
                            {classData.casterType[key][spellSlotLevel] || "-"}
                          </Text>
                        );
                    })}
                </View>
              ))}
            </View>
          </Page>
          <Page size="A4" style={{ padding: 40 }}>
            <View>
              <Text style={{ fontSize: 14, marginBottom: 10 }}>Hitpoints</Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>
                Hit Die: 1d{classData.hitDie} per {classData.name} level
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>
                Hit Points at 1st Level: {classData.hitDie} + your Constitution
                modifier
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>
                Hit Points at Higher Levels: 1d{classData.hitDie} (or{" "}
                {Math.ceil(classData.hitDie / 2) + 1}) + your Constitution
                modifier per {classData.name} level after 1st
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, marginBottom: 10, marginTop: 10 }}>
                Proficiencies
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>
                Armor:{" "}
                {classData.armor.map((s) => s.toCapitalCase()).join(", ") ||
                  "None"}
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>
                Weapons:{" "}
                {classData.weapons.map((s) => s.toCapitalCase()).join(", ") ||
                  "None"}
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>
                Tools:{" "}
                {classData.tools.map((s) => s.toCapitalCase()).join(", ") ||
                  "None"}
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>
                Saving Throws:{" "}
                {classData.savingThrows
                  .map((s) => AbilityToText(s))
                  .join(", ") || "None"}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, marginBottom: 10, marginTop: 10 }}>
                Equipment
              </Text>
              {classData.equipment.map((equip, index) => (
                <Text key={index} style={{ fontSize: 12, marginBottom: 2 }}>
                  - {equip}
                </Text>
              ))}
            </View>
            <View>
              <Text style={{ fontSize: 14, marginBottom: 10, marginTop: 10 }}>
                Skills
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 2 }}>
                Choose {classData.skillChoiceCount} from the following list of
                skills:
              </Text>
              {classData.skills.map((skill, index) => (
                <Text key={index} style={{ fontSize: 12, marginBottom: 2 }}>
                  - {skill.toCapitalCase().replaceAll("_", " ")}
                </Text>
              ))}
            </View>
            <View>
              <Text style={{ fontSize: 14, marginBottom: 10, marginTop: 10 }}>
                Class Features
              </Text>
              {numberArray(1, 20).map((level) => {
                const feat = classData.Features.filter((feature) =>
                  feature.levels.find((lvl) => lvl === level)
                );
                if (
                  feat.length == 0 &&
                  classData.subfeatLevels[0] != level &&
                  classData.abilityScoreLevels[0] != level
                )
                  return;
                // need to render each feature, but when the level hits abilityScoreLevels[0], print the ASI feature
                // when the level hits subfeatLevels[0], print the subclass feature
                if (
                  classData.subfeatLevels[0] === level ||
                  classData.abilityScoreLevels[0] === level ||
                  feat.find((f) => f.levels[0] === level)
                )
                  return (
                    <View key={level}>
                      {classData.abilityScoreLevels[0] === level && (
                        <View>
                          <Text style={{ fontSize: 12, marginBottom: 2 }}>
                            Ability Score Improvement
                          </Text>
                          <Text style={{ fontSize: 10, marginBottom: 10 }}>
                            When you reach{" "}
                            {numPlace(classData.abilityScoreLevels[0])} level,
                            and again at{" "}
                            {[...classData.abilityScoreLevels] // make copy since we dont want to mutate the original
                              .map((lvl, index) => {
                                if (index == 0) return; //remove the first element since its referenced above
                                if (
                                  index ==
                                  classData.abilityScoreLevels.length - 1
                                )
                                  // last element needs to be "and"
                                  return (
                                    <Text key={index}>
                                      and {numPlace(lvl)}{" "}
                                    </Text>
                                  );
                                return (
                                  <Text key={index}>{numPlace(lvl)}, </Text>
                                );
                              })}{" "}
                            level, you can increase one ability score of your
                            choice by 2, or you can increase two ability scores
                            of your choice by 1.
                          </Text>
                        </View>
                      )}
                      {classData.subfeatLevels[0] === level && (
                        <View>
                          <Text style={{ fontSize: 12, marginBottom: 2 }}>
                            {classData.subClassName} - Subclass
                          </Text>
                          <Text style={{ fontSize: 10, marginBottom: 10 }}>
                            When you reach{" "}
                            {numPlace(classData.subfeatLevels[0])} level,{" "}
                            {classData.subClassDesc}
                          </Text>
                          <Text style={{ fontSize: 10, marginBottom: 10 }}>
                            Your choice grants you features at {numPlace(level)}{" "}
                            level and again at{" "}
                            {[...classData.subfeatLevels] // make copy since we dont want to mutate the original
                              .slice(1) //remove the first element since its referenced above
                              .map((lvl, index) => {
                                if (index == classData.subfeatLevels.length - 2)
                                  // 2 because we removed the first element
                                  // last element needs to be "and"
                                  return (
                                    <Text key={index}>
                                      and {numPlace(lvl)}{" "}
                                    </Text>
                                  );
                                return (
                                  <Text key={index}>{numPlace(lvl)}, </Text>
                                );
                              })}
                            level.
                          </Text>
                        </View>
                      )}
                      {feat.map((feature) => {
                        return (
                          <View key={`feature-${feature.id}-${level}`}>
                            <Text style={{ fontSize: 12, marginBottom: 2 }}>
                              {feature.name}:
                            </Text>
                            <Text style={{ fontSize: 10, marginBottom: 10 }}>
                              {feature.description}
                            </Text>
                            {feature.options && (
                              <View
                                style={{
                                  paddingHorizontal: 10,
                                }}
                              >
                                {feature.options.map((option, index) => (
                                  <Text
                                    key={index}
                                    style={{
                                      fontSize: 10,
                                      marginBottom: 10,
                                    }}
                                  >
                                    {option}
                                  </Text>
                                ))}
                              </View>
                            )}
                          </View>
                        );
                      })}
                    </View>
                  );
              })}
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  ) : (
    <span className="loading p-4" />
  );
};

export default ClassPdfPage;
