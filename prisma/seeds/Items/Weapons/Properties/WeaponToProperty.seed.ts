import { WeaponPropertyIds } from './WeaponProperty.seed';
import { weaponIds } from '../Weapons.seed';
import { DamageTypes, Prisma } from '@prisma/client';

const WeaponToPropertySeed: Prisma.WeaponPropertyInstanceCreateManyInput[] = [
  {
    weaponId: weaponIds.club,
    propertyId: WeaponPropertyIds.Light,
  },
  {
    weaponId: weaponIds.dagger,
    propertyId: WeaponPropertyIds.Finesse,
  },
  {
    weaponId: weaponIds.dagger,
    propertyId: WeaponPropertyIds.Light,
  },
  {
    weaponId: weaponIds.dagger,
    propertyId: WeaponPropertyIds.Thrown,
    range: '20/60',
  },
  {
    weaponId: weaponIds.greatclub,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.handaxe,
    propertyId: WeaponPropertyIds.Light,
  },
  {
    weaponId: weaponIds.handaxe,
    propertyId: WeaponPropertyIds.Thrown,
    range: '20/60',
  },
  {
    weaponId: weaponIds.javelin,
    propertyId: WeaponPropertyIds.Thrown,
    range: '30/120',
  },

  {
    weaponId: weaponIds.lightHammer,
    propertyId: WeaponPropertyIds.Light,
  },
  {
    weaponId: weaponIds.lightHammer,
    propertyId: WeaponPropertyIds.Thrown,
    range: '20/60',
  },
  {
    weaponId: weaponIds.quarterstaff,
    propertyId: WeaponPropertyIds.Versatile,
    versatileDamage: { type: DamageTypes.BLUDGEONING, formula: '1d8' },
  },
  {
    weaponId: weaponIds.sickle,
    propertyId: WeaponPropertyIds.Light,
  },
  {
    weaponId: weaponIds.sickle,
    propertyId: WeaponPropertyIds.Finesse,
  },
  {
    weaponId: weaponIds.spear,
    propertyId: WeaponPropertyIds.Thrown,
    range: '20/60',
  },
  {
    weaponId: weaponIds.spear,
    propertyId: WeaponPropertyIds.Versatile,
    versatileDamage: { type: DamageTypes.PIERCING, formula: '1d8' },
  },
  {
    weaponId: weaponIds.crossbowLight,
    propertyId: WeaponPropertyIds.Ammunition,
    range: '80/320',
  },
  {
    weaponId: weaponIds.crossbowLight,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.dart,
    propertyId: WeaponPropertyIds.Finesse,
  },
  {
    weaponId: weaponIds.dart,
    propertyId: WeaponPropertyIds.Thrown,
    range: '20/60',
  },
  {
    weaponId: weaponIds.shortbow,
    propertyId: WeaponPropertyIds.Ammunition,
    range: '80/320',
  },
  {
    weaponId: weaponIds.shortbow,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.sling,
    propertyId: WeaponPropertyIds.Ammunition,
    range: '30/120',
  },
  {
    weaponId: weaponIds.battleaxe,
    propertyId: WeaponPropertyIds.Versatile,
    versatileDamage: { type: DamageTypes.SLASHING, formula: '1d10' },
  },
  {
    weaponId: weaponIds.glaive,
    propertyId: WeaponPropertyIds.Heavy,
  },
  {
    weaponId: weaponIds.glaive,
    propertyId: WeaponPropertyIds.Reach,
  },
  {
    weaponId: weaponIds.glaive,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.greataxe,
    propertyId: WeaponPropertyIds.Heavy,
  },
  {
    weaponId: weaponIds.greataxe,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.greatsword,
    propertyId: WeaponPropertyIds.Heavy,
  },
  {
    weaponId: weaponIds.greatsword,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.halberd,
    propertyId: WeaponPropertyIds.Heavy,
  },
  {
    weaponId: weaponIds.halberd,
    propertyId: WeaponPropertyIds.Reach,
  },
  {
    weaponId: weaponIds.halberd,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.lance,
    propertyId: WeaponPropertyIds.Reach,
  },
  {
    weaponId: weaponIds.longsword,
    propertyId: WeaponPropertyIds.Versatile,
    versatileDamage: { type: DamageTypes.SLASHING, formula: '1d10' },
  },
  {
    weaponId: weaponIds.maul,
    propertyId: WeaponPropertyIds.Heavy,
  },
  {
    weaponId: weaponIds.maul,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.pike,
    propertyId: WeaponPropertyIds.Heavy,
  },
  {
    weaponId: weaponIds.pike,
    propertyId: WeaponPropertyIds.Reach,
  },
  {
    weaponId: weaponIds.pike,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.rapier,
    propertyId: WeaponPropertyIds.Finesse,
  },
  {
    weaponId: weaponIds.scimitar,
    propertyId: WeaponPropertyIds.Finesse,
  },
  {
    weaponId: weaponIds.scimitar,
    propertyId: WeaponPropertyIds.Light,
  },
  {
    weaponId: weaponIds.shortsword,
    propertyId: WeaponPropertyIds.Finesse,
  },
  {
    weaponId: weaponIds.shortsword,
    propertyId: WeaponPropertyIds.Light,
  },
  {
    weaponId: weaponIds.trident,
    propertyId: WeaponPropertyIds.Thrown,
    range: '20/60',
  },
  {
    weaponId: weaponIds.trident,
    propertyId: WeaponPropertyIds.Versatile,
    versatileDamage: { type: DamageTypes.PIERCING, formula: '1d8' },
  },
  {
    weaponId: weaponIds.warPick,
    propertyId: WeaponPropertyIds.Versatile,
    versatileDamage: { type: DamageTypes.PIERCING, formula: '1d8' },
  },
  {
    weaponId: weaponIds.warhammer,
    propertyId: WeaponPropertyIds.Versatile,
    versatileDamage: { type: DamageTypes.BLUDGEONING, formula: '1d10' },
  },
  {
    weaponId: weaponIds.whip,
    propertyId: WeaponPropertyIds.Finesse,
  },
  {
    weaponId: weaponIds.whip,
    propertyId: WeaponPropertyIds.Reach,
  },
  {
    weaponId: weaponIds.blowgun,
    propertyId: WeaponPropertyIds.Ammunition,
    range: '25/100',
  },
  {
    weaponId: weaponIds.blowgun,
    propertyId: WeaponPropertyIds.Loading,
  },
  {
    weaponId: weaponIds.blowgun,
    propertyId: WeaponPropertyIds.Range,
  },
  {
    weaponId: weaponIds.crossbowHand,
    propertyId: WeaponPropertyIds.Ammunition,
    range: '30/120',
  },
  {
    weaponId: weaponIds.crossbowHand,
    propertyId: WeaponPropertyIds.Light,
  },
  {
    weaponId: weaponIds.crossbowHand,
    propertyId: WeaponPropertyIds.Loading,
  },
  {
    weaponId: weaponIds.crossbowHeavy,
    propertyId: WeaponPropertyIds.Ammunition,
    range: '100/400',
  },
  {
    weaponId: weaponIds.crossbowHeavy,
    propertyId: WeaponPropertyIds.Heavy,
  },
  {
    weaponId: weaponIds.crossbowHeavy,
    propertyId: WeaponPropertyIds.Loading,
  },
  {
    weaponId: weaponIds.crossbowHeavy,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
  {
    weaponId: weaponIds.longbow,
    propertyId: WeaponPropertyIds.Ammunition,
  },
  {
    weaponId: weaponIds.longbow,
    propertyId: WeaponPropertyIds.Ammunition,
    range: '150/600',
  },
  {
    weaponId: weaponIds.longbow,
    propertyId: WeaponPropertyIds.Heavy,
  },
  {
    weaponId: weaponIds.longbow,
    propertyId: WeaponPropertyIds.TwoHanded,
  },
];

export default WeaponToPropertySeed;
