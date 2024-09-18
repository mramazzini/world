"use client";
import { ArmorInfo, ToolInfo, WeaponInfo } from "@/lib/types";
import {
  memoizeGetArmor,
  memoizeGetTool,
  memoizeGetWeapon,
} from "./globalCache";
import { useEffect, useState } from "react";
interface Props {
  model: "Weapon" | "Armor" | "Tool";
  id: number;
}

const ModelDisplay = ({ model, id }: Props) => {
  const [data, setData] = useState<WeaponInfo | ArmorInfo | ToolInfo | null>(
    null
  );

  useEffect(() => {
    switch (model) {
      case "Weapon":
        memoizeGetWeapon(id).then((res) => setData(res));
        break;
      case "Armor":
        memoizeGetArmor(id).then((res) => setData(res));
        break;
      case "Tool":
        memoizeGetTool(id).then((res) => setData(res));
        break;
    }
  }, [model, id]);

  if (!data) return "Loading...";
  switch (model) {
    case "Weapon":
      const d = data as WeaponInfo;
      return <>{d.name}</>;
    case "Armor":
      return <>{data.name}</>;
    case "Tool":
      return <>{data.name}</>;
  }
};

export default ModelDisplay;
