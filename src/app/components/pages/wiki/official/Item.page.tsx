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
import { ArmorType, ItemTypes, Rarity } from "@prisma/client";
import { itemIds } from "../../../../../../prisma/seeds/Items/ItemIds";
import JsonTable from "@/app/components/Utility/JsonTable";
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
                  <span
                    key={index}
                    className="badge badge-accent font-bold mr-1"
                  >
                    {type.toCapitalCase().replaceAll("_", " ")}
                  </span>
                ))}
                {item.rarity == Rarity.COMMON ? (
                  <span className="badge badge-primary font-bold mr-1">
                    Common
                  </span>
                ) : item.rarity == Rarity.UNCOMMON ? (
                  <span className="badge badge-success font-bold mr-1">
                    Uncommon
                  </span>
                ) : item.rarity == Rarity.RARE ? (
                  <span className="badge badge-warning font-bold mr-1">
                    Rare
                  </span>
                ) : item.rarity == Rarity.VERY_RARE ? (
                  <span className="badge badge-danger font-bold mr-1">
                    Very Rare
                  </span>
                ) : item.rarity == Rarity.LEGENDARY ? (
                  <span className="badge badge-error font-bold mr-1">
                    Legendary
                  </span>
                ) : (
                  ""
                )}
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
                    <P>
                      {item.cost
                        ? `${item.cost.quantity} ${item.cost.unit}`
                        : item.rarity == Rarity.COMMON
                        ? `50-100 ^${itemIds.goldPiece}{gp}^`
                        : item.rarity == Rarity.UNCOMMON
                        ? `101-500 ^${itemIds.goldPiece}{gp}^`
                        : item.rarity == Rarity.RARE
                        ? `501-5000 ^${itemIds.goldPiece}{gp}^`
                        : item.rarity == Rarity.VERY_RARE
                        ? `5,001-50,000 ^${itemIds.goldPiece}{gp}^`
                        : item.rarity == Rarity.LEGENDARY
                        ? `50,001+ ^${itemIds.goldPiece}{gp}^`
                        : ""}{" "}
                    </P>
                  </li>
                  <li className="ml-4">
                    <span className="font-bold">Weight:</span>{" "}
                    {item.weight
                      ? `${item.weight.quantity} ${item.weight.unit}`
                      : "N/A"}
                  </li>
                  <li className="ml-4">
                    <span className="font-bold">Rarity:</span>{" "}
                    {item.rarity.toCapitalCase()}
                  </li>
                  {item.AmmunitionFor && item.AmmunitionFor.length > 0 && (
                    <li className="ml-4">
                      <span className="font-bold">Ammunition For:</span>{" "}
                      {item.AmmunitionFor.map((ammo, index) =>
                        item.AmmunitionFor &&
                        item.AmmunitionFor.length - 1 == index ? (
                          <span key={index}>
                            <P>{`^${ammo.id.toString()}{${ammo.name}}^`}</P>{" "}
                          </span>
                        ) : (
                          <span key={index}>
                            <P>{`^${ammo.id.toString()}{${ammo.name}}^`}</P>
                            {", "}
                          </span>
                        )
                      )}
                    </li>
                  )}
                  {item.types.includes(ItemTypes.CONTAINER) && (
                    <li className="ml-4">
                      <span className="font-bold">Capacity:</span>{" "}
                      <P>
                        {item.capacity
                          ? `${item.capacity.quantity} ${item.capacity.unit}${
                              item.capacity.quantity > 1 ? "s" : ""
                            }`
                          : item.customItemCapacity
                          ? `${item.customItemCapacity.quantity} ^${
                              item.customItemCapacity.item
                            }{}^${
                              item.customItemCapacity.quantity > 1 ? "s" : ""
                            }`
                          : ""}
                      </P>
                    </li>
                  )}
                </ul>
                <div className="divider m-0"></div>
              </div>
            </div>
            {item.features.length > 0 && (
              <>
                <div className="divider"></div>
                <h2>
                  Features{" "}
                  <Info
                    tooltip={`This item has features that can be used in various ways.`}
                  />
                </h2>
                <div className="divider "></div>
                <FeatureList features={item.features} />
              </>
            )}
            <div className="divider mb-0"></div>
          </div>
          <div className="divider "></div>
          {item.types.includes(ItemTypes.ARCANE_FOCUS) ? (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                <h2 className="pb-0">
                  Arcane Focus{" "}
                  <Info tooltip="This item can be used as an arcane focus for spellcasting." />
                </h2>
                <div className="divider "></div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        An arcane focus is a special item designed to channel
                        the power of arcane spells.
                      </P>
                    </p>
                    <br />
                    <p>
                      <P>
                        A character can use the arcane focus in place of the
                        components specified for a spell. But if a cost is
                        indicated for a component, a character must have that
                        specific component before he or she can cast the spell.
                      </P>
                    </p>
                    <div className="divider m-0"></div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
              <div className="divider"></div>
            </>
          ) : item.types.includes(ItemTypes.HOLY_SYMBOL) ? (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                <h2 className="pb-0">
                  Holy Symbol{" "}
                  <Info tooltip="This item can be used as a holy symbol for spellcasting." />
                </h2>
                <div className="divider "></div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        A holy symbol is a representation of a god or pantheon.
                        It might be an amulet depicting a symbol representing a
                        deity, the same symbol carefully engraved or inlaid as
                        an emblem on a shield, or a tiny box holding a fragment
                        of a sacred relic.
                      </P>
                    </p>
                    <br />
                    <p>
                      <P>
                        A character can use the holy symbol in place of the
                        components specified for a spell. But if a cost is
                        indicated for a component, a character must have that
                        specific component before he or she can cast the spell.
                      </P>
                    </p>
                    <div className="divider m-0"></div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
              <div className="divider"></div>
            </>
          ) : item.types.includes(ItemTypes.DRUIDIC_FOCUS) ? (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                <h2 className="pb-0">
                  Druidic Focus{" "}
                  <Info tooltip="This item can be used as a druidic focus for spellcasting." />
                </h2>
                <div className="divider "></div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        A druidic focus might be a sprig of mistletoe or holly,
                        a wand or scepter made of yew or another special wood, a
                        staff drawn whole out of a living tree, or a totem
                        object incorporating feathers, fur, bones, and teeth
                        from sacred animals.
                      </P>
                    </p>
                    <br />
                    <p>
                      <P>
                        A character can use the holy symbol in place of the
                        components specified for a spell. But if a cost is
                        indicated for a component, a character must have that
                        specific component before he or she can cast the spell.
                      </P>
                    </p>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
              <div className="divider"></div>
            </>
          ) : (
            item.types.includes(ItemTypes.COMPONENT_POUCH) && ""
          )}
          {item.EquipmentPack && (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                <h2 className="pb-0">
                  Equipment Pack{" "}
                  <Info tooltip="Equipment packs are a collection of items, bundled up in a convenient way." />
                </h2>
                <div className="divider "></div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <div className="divider m-0"></div>
                    <p className="p-4 bg-base-300 rounded-t-xl">
                      <P>
                        When you acquire this Equipment Pack, you gain the
                        following items.
                      </P>
                    </p>
                    <div className="bg-base-300">
                      <JsonTable
                        json={[
                          {
                            "": {
                              headers: ["Item", "Quantity"],
                              headersLength: [15, 85],
                              data: [
                                ...item.EquipmentPack.itemsQuantity.map(
                                  (item, i) => {
                                    return {
                                      Item: `^${item.item}{}^`,
                                      Quantity: item.quantity.toString(),
                                    };
                                  }
                                ),
                              ],
                            },
                          },
                        ]}
                      />
                    </div>
                    <div className="divider m-0"></div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
              <div className="divider"></div>
            </>
          )}
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
                    <h2 className="pb-0">Spell Scroll</h2>
                    <div className="divider m-0"></div>
                    <p>
                      <P>
                        A spell scroll bears the words of a single spell,
                        written in a mystical cipher. If the spell is on your
                        class&apos;s spell list, you can read the scroll and
                        cast its spell without providing any material
                        components. Otherwise, the scroll is unintelligible.
                        Casting the spell by reading the scroll requires the
                        spell&apos;s normal casting time. Once the spell is
                        cast, the words on the scroll fade, and it crumbles to
                        dust. If the casting is interrupted, the scroll is not
                        lost.\n\nIf the spell is on your class&apos;s spell list
                        but of a higher level than you can normally cast, you
                        must make an ability check using your spellcasting
                        ability to determine whether you cast it successfully.
                        The DC equals 10 + the spell&apos;s level. On a failed
                        check, the spell disappears from the scroll with no
                        other effect.
                      </P>
                    </p>
                    <br />
                    <p>
                      <P>
                        If the spell is on your class&apos;s spell list but of a
                        higher level than you can normally cast, you must make
                        an ability check using your spellcasting ability to
                        determine whether you cast it successfully. The DC
                        equals 10 + the spell&apos;s level. On a failed check,
                        the spell disappears from the scroll with no other
                        effect.
                      </P>
                    </p>
                    <br />
                    <p>
                      <P>
                        Once the spell is cast, the words on the scroll fade,
                        and the scroll itself crumbles to dust.
                      </P>
                    </p>
                    <br />
                    <p>
                      <P>
                        A wizard spell on a spell scroll can be copied just as
                        spells in spellbooks can be copied. When a spell is
                        copied from a spell scroll, the copier must succeed on
                        an Intelligence (Arcana) check with a DC equal to 10 +
                        the spell&apos;s level. If the check succeeds, the spell
                        is successfully copied. Whether the check succeeds or
                        fails, the spell scroll is destroyed.
                      </P>
                    </p>
                  </div>

                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <h2 className="pb-0">Cast Spell: {item.Spell.name}</h2>
                    <div className="divider m-0"></div>
                    <P>
                      This item can be used to cast the spell: %
                      {item.Spell.id.toString()}
                      {`{${item.Spell.name}}`}%.
                    </P>
                    <div className="divider m-0"></div>
                  </div>
                </div>
                <div className="divider mb-0"></div>
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
                      {item.Weapon.ammunition && (
                        <li className="ml-4">
                          <span className="font-bold">Ammunition:</span>{" "}
                          <P>{`^${item.Weapon.ammunition.id}{${item.Weapon.ammunition.name}}^`}</P>
                        </li>
                      )}
                    </ul>
                    <div className="divider m-0"></div>
                  </div>{" "}
                  {item.Weapon.properties.some((w) => w.special) && (
                    <>
                      <div className="divider m-0"></div>
                      {item.Weapon.properties.map((prop, index) => {
                        return prop.special?.map((special, index) => (
                          <Feature key={index} feature={special} />
                        ));
                      })}
                      <div className="divider m-0"></div>
                    </>
                  )}
                </div>
                <div className="divider mb-0" />
              </div>
              <div className="divider "></div>
            </>
          )}
          {item.types.includes(ItemTypes.CURRENCY) && (
            <>
              <div className="bg-base-300 rounded-xl p-4">
                <h2 className="pb-0">
                  Currency{" "}
                  <Info tooltip="This item is classified as currency." />
                </h2>
                <div className="divider "></div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-base-200 rounded-xl p-4 max-w-1/3">
                    <div className="divider m-0"></div>
                    <ul className="list-disc ">
                      <li className="ml-4">
                        <span className="font-bold">Value:</span>{" "}
                        <P>
                          The most basic type of treasure is money, including
                          copper pieces (cp), silver pieces (sp), electrum
                          pieces (ep), gold pieces (gp), and platinum pieces
                          (pp). Fifty coins of any type weigh 1 pound.
                        </P>
                      </li>
                      <div className="divider m-0"></div>
                      <li className="ml-4">
                        <span className="font-bold">Exchange Rate:</span>
                        <div className="divider m-0"></div>
                        <div className="bg-base-300">
                          <JsonTable
                            json={[
                              {
                                "": {
                                  headers: [
                                    "Coin",
                                    "Cp",
                                    "Sp",
                                    "Ep",
                                    "Gp",
                                    "Pp",
                                  ],
                                  headersLength: [15, 15, 15, 15, 15, 15],
                                  data: [
                                    {
                                      Coin: "Copper (cp)",
                                      Cp: "1",
                                      Sp: "1/10",
                                      Ep: "1/5",
                                      Gp: "1/100",
                                      Pp: "1/1000",
                                    },
                                    {
                                      Coin: "Silver (sp)",
                                      Cp: "10",
                                      Sp: "1",
                                      Ep: "1/5",
                                      Gp: "1/10",
                                      Pp: "1/100",
                                    },
                                    {
                                      Coin: "Electrum (ep)",
                                      Cp: "50",
                                      Sp: "5",
                                      Ep: "1",
                                      Gp: "1/2",
                                      Pp: "1/20",
                                    },
                                    {
                                      Coin: "Gold (gp)",
                                      Cp: "100",
                                      Sp: "10",
                                      Ep: "2",
                                      Gp: "1",
                                      Pp: "1/10",
                                    },
                                    {
                                      Coin: "Platinum (pp)",
                                      Cp: "1000",
                                      Sp: "100",
                                      Ep: "50",
                                      Gp: "10",
                                      Pp: "1",
                                    },
                                  ],
                                },
                              },
                            ]}
                          />
                        </div>
                      </li>
                    </ul>
                    <div className="divider m-0"></div>
                  </div>
                </div>
                <div className="divider mb-0"></div>
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
                      {item.Tool.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="bg-base-200 rounded-xl p-4 max-w-1/3"
                        >
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
