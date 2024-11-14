'use client';
import {
  ArmorInfo,
  FeatInfo,
  ItemInfo,
  SubClassInfo,
  ToolInfo,
  WeaponInfo,
} from '@/lib/types/modelInfo';
import {
  memoizeGetArmor,
  memoizeGetFeat,
  memoizeGetItem,
  memoizeGetSubclass,
  memoizeGetTool,
  memoizeGetWeapon,
} from './Indexed/globalCache';
import { useEffect, useState } from 'react';
interface Props {
  model: 'Weapon' | 'Armor' | 'Tool' | 'Subclass' | 'Item' | 'Feat';
  id: string;
}

const ModelDisplay = ({ model, id }: Props) => {
  const [data, setData] = useState<
    | WeaponInfo
    | ArmorInfo
    | ToolInfo
    | SubClassInfo
    | ItemInfo
    | FeatInfo
    | null
  >(null);

  useEffect(() => {
    switch (model) {
      case 'Weapon':
        memoizeGetWeapon({
          query: id,
          type: 'id',
        }).then((res) => setData(res));
        break;
      case 'Armor':
        memoizeGetArmor({
          query: id,
          type: 'id',
        }).then((res) => setData(res));
        break;
      case 'Tool':
        memoizeGetTool({
          query: id,
          type: 'id',
        }).then((res) => setData(res));
        break;
      case 'Subclass':
        memoizeGetSubclass({
          query: id,
          type: 'id',
        }).then((res) => setData(res));
        break;
      case 'Item':
        memoizeGetItem({
          query: id,
          type: 'id',
        }).then((res) => setData(res));
        break;
      case 'Feat':
        memoizeGetFeat({
          query: id,
          type: 'id',
        }).then((res) => setData(res));
    }
  }, [model, id]);

  if (!data) return 'Loading...';
  switch (model) {
    case 'Weapon': {
      const d = data as WeaponInfo;
      return <>{d.name}</>;
    }
    case 'Armor':
      return <>{data.name}</>;
    case 'Tool':
      return <>{data.name}</>;
    case 'Subclass':
      return <>{data.name}</>;
    case 'Item':
      return <>{data.name}</>;
    case 'Feat':
      return <>{data.name}</>;
  }
};

export default ModelDisplay;
