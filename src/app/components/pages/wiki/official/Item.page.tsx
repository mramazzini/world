import Info from "@/app/components/UI/Info";
import Loading from "@/app/components/UI/Loading";
import P from "@/app/components/Utility/FormatAndSanitize";
import NewLineParse from "@/app/components/Utility/NewLineParse";
import { ItemInfo, Property } from "@/lib/types";
import Link from "next/link";
import { WeaponProperties } from "@/lib/globalVars";
import Tooltip from "@/app/components/Utility/Tooltip";
import Feature from "@/app/components/UI/Feature";
import FeatureList from "@/app/components/UI/FeatureList";
import { ArmorType } from "@prisma/client";
interface Props {
  item: ItemInfo | null;
}
const ItemPage = ({ item }: Props) => {
  const propertyTooltip = (prop: PrismaJson.WeaponProperty) => {
    const tooltip = (
      <Tooltip
        element={`${prop.property.name}${
          prop.range
            ? ` (${prop.range}${prop.maxRange ? `, ${prop.maxRange}` : ""})`
            : ""
        }${
          prop.versatileDamage
            ? ` (${prop.versatileDamage.numberOfDice}d${prop.versatileDamage.dice})`
            : ""
        }`}
      >
        {prop.property.description}
      </Tooltip>
    );
    return tooltip;
  };
  return (
    <main className="p-4 md:p-8">
      {!item && <Loading />}

      {item && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col md:w-4/5">
              <h1>{item.name || "Class Name"}</h1>
              <p className="mb-4">
                {item.types.map((type, index) => (
                  <span key={index} className="badge badge-accent font-bold">
                    {type.toCapitalCase().replaceAll("_", " ")}
                  </span>
                ))}
              </p>
              <p className="italic pr-4">
                <NewLineParse>{item.description}</NewLineParse>
              </p>
            </div>
            <div className="flex justify-start items-start md:items-end my-2 flex-col ">
              {/* go back */}
              <Link
                className={"btn btn-ghost border border-gray-500 w-full"}
                href={`/item`}
              >
                View all Items -&gt;
              </Link>
            </div>
          </div>
          <div className="divider"></div>
          <div className="bg-base-300 rounded-xl p-4">
            <h2 className="pb-0">Basic Info </h2>
            <div className="divider "></div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                <div className="divider m-0"></div>
                <ul className="list-disc ">
                  <li className="ml-4">
                    <span className="font-bold">Value:</span>{" "}
                    {item.cost
                      ? `${item.cost.quantity} ${item.cost.unit}`
                      : "N/A"}{" "}
                  </li>
                  <li className="ml-4">
                    <span className="font-bold">Weight:</span>{" "}
                    {item.weight
                      ? `${item.weight.quantity} ${item.weight.unit}`
                      : "N/A"}
                  </li>
                </ul>
                <div className="divider m-0"></div>
              </div>
            </div>
            <div className="divider "></div>
            {item.features.length > 0 && (
              <>
                <h2>
                  Features{" "}
                  <Info
                    tooltip={`This item has features that can be used in various ways.`}
                  />
                </h2>
                <div className="divider "></div>
                <FeatureList features={item.features} />
                <div className="divider "></div>
              </>
            )}
          </div>
          <div className="divider "></div>
          {item.Armor && (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                <h2 className="pb-0">
                  Armor Information{" "}
                  <Info tooltip="This item is classified as armor, and gains the following traits." />
                </h2>
                <div className="divider "></div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <div className="divider m-0"></div>
                    <ul className="list-disc ">
                      <li className="ml-4">
                        <span className="font-bold">AC:</span>{" "}
                        {item.Armor.armorType === ArmorType.SHIELDS && "+"}
                        {item.Armor.armorClass}
                        {item.Armor.armorType == ArmorType.LIGHT
                          ? " + Dex modifier"
                          : item.Armor.armorType == ArmorType.MEDIUM
                          ? " + Dex modifier (max 2)"
                          : item.Armor.armorType == ArmorType.HEAVY
                          ? ""
                          : ""}
                      </li>
                      <div className="divider m-0"></div>
                      <li className="ml-4">
                        <span className="font-bold">Armor Type:</span>{" "}
                        {item.Armor.armorType.toCapitalCase()}
                      </li>
                      <div className="divider m-0"></div>
                      <li className="ml-4">
                        <span className="font-bold">Proficiency:</span>{" "}
                        <P>
                          Only those proficient in the armor’s use know how to
                          wear it effectively. Your class gives you proficiency
                          with certain types of armor. If you wear armor that
                          you lack proficiency with, you have disadvantage on
                          any ability check, saving throw, or Attack roll that
                          involves Strength or Dexterity, and you can’t cast
                          Spells.
                        </P>
                      </li>
                    </ul>
                    <div className="divider m-0"></div>
                  </div>
                </div>
                <div className="divider" />
                {item.Armor.features.length > 0 && (
                  <>
                    <h2>
                      Armor Features{" "}
                      <Info
                        tooltip={`When a character is proficient in ${item.Armor.name}, they gain the following features.`}
                      />
                    </h2>
                    <div className="divider "></div>
                    <FeatureList features={item.Armor.features} />
                    <div className="divider "></div>
                  </>
                )}
              </div>
              <div className="divider "></div>
            </>
          )}
          {item.Spell && (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                <h2 className="pb-0">
                  Spell{" "}
                  <Info tooltip="This item can cast a spell, as described below." />
                </h2>
                <div className="divider "></div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <div className="divider m-0"></div>
                    <P>
                      This item can be used to cast the spell: %
                      {item.Spell.id.toString()}
                      {`{${item.Spell.name}}`}%.
                    </P>
                    <div className="divider m-0"></div>
                  </div>
                </div>
                <div className="divider "></div>
              </div>
              <div className="divider "></div>
            </>
          )}
          {item.Weapon && (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                <h2 className="pb-0">
                  Weapon Information{" "}
                  <Info tooltip="This item is classified as a weapon, and gains the following traits." />
                </h2>
                <div className="divider "></div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <div className="divider m-0"></div>
                    <ul className="list-disc ">
                      <li className="ml-4">
                        <span className="font-bold">Damage:</span>{" "}
                        {item.Weapon.damage.length > 0
                          ? item.Weapon.damage.map((d, index) => {
                              if (!item.Weapon) return null;
                              if (index == item.Weapon.damage.length - 1) {
                                return (
                                  <span key={index}>
                                    {d.numberOfDice}d{d.dice}{" "}
                                    {d.type.toCapitalCase()}
                                  </span>
                                );
                              }
                              return (
                                <span key={index}>
                                  {d.numberOfDice}d{d.dice}{" "}
                                  {d.type.toCapitalCase()},{" "}
                                </span>
                              );
                            })
                          : "N/A"}
                      </li>
                      <li className="ml-4">
                        <span className="font-bold">Properties:</span>{" "}
                        {item.Weapon.properties.map((prop, index) => {
                          if (!item.Weapon) return null;
                          if (index == item.Weapon.properties.length - 1) {
                            return (
                              <span key={index}> {propertyTooltip(prop)}</span>
                            );
                          }
                          return (
                            <span key={index}>{propertyTooltip(prop)}, </span>
                          );
                        })}
                      </li>
                    </ul>
                    <div className="divider m-0"></div>
                  </div>{" "}
                  {item.Weapon.properties.some((w) => w.special) && (
                    <>
                      <div className="divider "></div>
                      {item.Weapon.properties.map((prop, index) => {
                        return prop.special?.map((special, index) => (
                          <Feature key={index} feature={special} />
                        ));
                      })}
                      <div className="divider "></div>
                    </>
                  )}
                </div>
              </div>
              <div className="divider "></div>
            </>
          )}
          {item.Tool && (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                {item.Tool.skills.length > 0 && (
                  <>
                    <h2>
                      {item.Tool.name} Skills{" "}
                      <Info
                        tooltip={`When a character is proficient in ${item.Tool.name}, certain situations will grant advantage on skill checks.`}
                      />
                    </h2>
                    <div className="divider "></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {item.Tool.skills.map((skill) => (
                        <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                          <h2 className="pb-0">
                            Advantage:{" "}
                            <P>
                              {skill.skill.replaceAll("_", " ").toCapitalCase()}
                            </P>
                          </h2>
                          <div className="divider m-0"></div>

                          <p>
                            <P>{skill.description}</P>
                          </p>

                          <div className="divider m-0"></div>
                        </div>
                      ))}
                    </div>
                    <div className="divider "></div>
                  </>
                )}
                {item.Tool.features.length > 0 && (
                  <>
                    <h2>
                      Tool Features{" "}
                      <Info
                        tooltip={`When a character is proficient in ${item.Tool.name}, they gain the following features.`}
                      />
                    </h2>
                    <div className="divider "></div>
                    <FeatureList features={item.Tool.features} />
                    <div className="divider "></div>
                  </>
                )}
              </div>
            </>
          )}
        </>
      )}
    </main>
  );
};

export default ItemPage;
