"use client";
import {
  ArmorInfo,
  SubClassInfo,
  ToolInfo,
  WeaponInfo,
} from "@/lib/utils/types/types";
import {
  memoizeGetArmor,
  memoizeGetItem,
  memoizeGetSubclass,
  memoizeGetTool,
  memoizeGetWeapon,
} from "./globalCache";
import { useEffect, useState } from "react";
interface Props {
  model: "Weapon" | "Armor" | "Tool" | "Subclass" | "Item";
  id: number;
}

const ModelDisplay = ({ model, id }: Props) => {
  const [data, setData] = useState<
    WeaponInfo | ArmorInfo | ToolInfo | SubClassInfo | null
  >(null);

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
      case "Subclass":
        memoizeGetSubclass(id).then((res) => setData(res));
        break;
      case "Item":
        memoizeGetItem(id).then((res) => setData(res));
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
    case "Subclass":
      return <>{data.name}</>;
    case "Item":
      return <>{data.name}</>;
  }
};

export default ModelDisplay;
