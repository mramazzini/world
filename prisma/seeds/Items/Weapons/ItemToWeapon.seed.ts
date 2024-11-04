import { Prisma } from '@prisma/client';
import { itemIds } from '../ItemIds';
import { weaponIds } from './Weapons.seed';

const ItemToWeaponSeed: Prisma.ItemWeaponDataCreateManyInput[] = [
  {
    itemId: itemIds.club,
    weaponId: weaponIds.club,
  },
  {
    itemId: itemIds.dagger,
    weaponId: weaponIds.dagger,
  },
  {
    itemId: itemIds.greatclub,
    weaponId: weaponIds.greatclub,
  },
  {
    itemId: itemIds.handaxe,
    weaponId: weaponIds.handaxe,
  },
  {
    itemId: itemIds.javelin,
    weaponId: weaponIds.javelin,
  },
  {
    itemId: itemIds.lightHammer,
    weaponId: weaponIds.lightHammer,
  },
  {
    itemId: itemIds.mace,
    weaponId: weaponIds.mace,
  },
  {
    itemId: itemIds.quarterstaff,
    weaponId: weaponIds.quarterstaff,
  },
  {
    itemId: itemIds.sickle,
    weaponId: weaponIds.sickle,
  },
  {
    itemId: itemIds.spear,
    weaponId: weaponIds.spear,
  },
  {
    itemId: itemIds.crossbowLight,
    weaponId: weaponIds.crossbowLight,
  },
  {
    itemId: itemIds.dart,
    weaponId: weaponIds.dart,
  },
  {
    itemId: itemIds.shortbow,
    weaponId: weaponIds.shortbow,
  },
  {
    itemId: itemIds.sling,
    weaponId: weaponIds.sling,
  },
  {
    itemId: itemIds.battleaxe,
    weaponId: weaponIds.battleaxe,
  },
  {
    itemId: itemIds.flail,
    weaponId: weaponIds.flail,
  },
  {
    itemId: itemIds.glaive,
    weaponId: weaponIds.glaive,
  },
  {
    itemId: itemIds.greataxe,
    weaponId: weaponIds.greataxe,
  },
  {
    itemId: itemIds.greatsword,
    weaponId: weaponIds.greatsword,
  },
  {
    itemId: itemIds.halberd,
    weaponId: weaponIds.halberd,
  },
  {
    itemId: itemIds.lance,
    weaponId: weaponIds.lance,
  },
  {
    itemId: itemIds.longsword,
    weaponId: weaponIds.longsword,
  },
  {
    itemId: itemIds.maul,
    weaponId: weaponIds.maul,
  },
  {
    itemId: itemIds.morningstar,
    weaponId: weaponIds.morningstar,
  },
  {
    itemId: itemIds.pike,
    weaponId: weaponIds.pike,
  },
  {
    itemId: itemIds.rapier,
    weaponId: weaponIds.rapier,
  },
  {
    itemId: itemIds.scimitar,
    weaponId: weaponIds.scimitar,
  },
  {
    itemId: itemIds.shortsword,
    weaponId: weaponIds.shortsword,
  },
  {
    itemId: itemIds.trident,
    weaponId: weaponIds.trident,
  },
  {
    itemId: itemIds.warPick,
    weaponId: weaponIds.warPick,
  },
  {
    itemId: itemIds.warhammer,
    weaponId: weaponIds.warhammer,
  },
  {
    itemId: itemIds.whip,
    weaponId: weaponIds.whip,
  },
  {
    itemId: itemIds.blowgun,
    weaponId: weaponIds.blowgun,
  },
  {
    itemId: itemIds.crossbowHand,
    weaponId: weaponIds.crossbowHand,
  },
  {
    itemId: itemIds.crossbowHeavy,
    weaponId: weaponIds.crossbowHeavy,
  },
  {
    itemId: itemIds.longbow,
    weaponId: weaponIds.longbow,
  },
  {
    itemId: itemIds.net,
    weaponId: weaponIds.net,
  },
  {
    itemId: itemIds.daggerOfVenom,
    weaponId: weaponIds.dagger,
  },
];

export default ItemToWeaponSeed;
