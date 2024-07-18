"use client";
import { useState, useEffect } from "react";
import { DamageTypes, Weapon } from "@prisma/client";
import Input from "../UI/Input";
import List from "../UI/List";

import P from "../Utility/FormatAndSanitize";

//item rarity type
type Rarity = "Common" | "Uncommon" | "Rare" | "Very Rare" | "Legendary";

const ItemGeneratorForm = () => {
  const [item, setItem] = useState<{
    weaponTemplate?: Weapon;
    rarity?: Rarity;
  }>();

  const [weapons, setWeapons] = useState<Weapon[]>([]);

  useEffect(() => {
    getWeapon().then((weapons) => setWeapons(weapons));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item);
  };

  if (!weapons) return <span className="loading">Loading...</span>;
  console.log(item);

  return (
    <form onSubmit={handleSubmit}>
      <div className="divider"></div>
      <div className="flex flex-row items-center justify-start">
        <Input<string>
          data={item?.weaponTemplate?.name as string}
          name="Weapon Base"
          setData={(name) =>
            setItem({
              ...item,
              weaponTemplate: weapons.find((weapon) => weapon.name === name),
            })
          }
          options={weapons.map((weapon) => weapon.name)}
        />
        <Input<Rarity>
          data={item?.rarity as Rarity}
          name="Rarity"
          setData={(rarity) => setItem({ ...item, rarity })}
          options={["Common", "Uncommon", "Rare", "Very Rare", "Legendary"]}
        />
      </div>

      <div className="divider"></div>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Generate Item
      </button>
    </form>
  );
};

export default ItemGeneratorForm;
