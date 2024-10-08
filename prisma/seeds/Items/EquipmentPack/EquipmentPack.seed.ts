import { Prisma, PrismaClient } from "@prisma/client";
import { itemIds } from "../ItemIds";
const db = new PrismaClient();

const EquipmentPackSeed: Prisma.EquipmentPackCreateManyInput[] = [
  {
    id: 1,
    name: "Burglar's Pack",
    itemsQuantity: [
      {
        item: itemIds.backpack,
        quantity: 1,
      },
      {
        item: itemIds.ballBearingsBag,
        quantity: 1,
      },
      {
        item: itemIds.stringTenFeet,
        quantity: 1,
      },
      {
        item: itemIds.bell,
        quantity: 1,
      },
      {
        item: itemIds.candle,
        quantity: 5,
      },
      {
        item: itemIds.crowbar,
        quantity: 1,
      },
      {
        item: itemIds.hammer,
        quantity: 1,
      },
      {
        item: itemIds.piton,
        quantity: 10,
      },
      {
        item: itemIds.lanternHooded,
        quantity: 1,
      },
      {
        item: itemIds.oilFlask,
        quantity: 2,
      },
      {
        item: itemIds.rations,
        quantity: 5,
      },
      {
        item: itemIds.tinderBox,
        quantity: 1,
      },
      {
        item: itemIds.waterskin,
        quantity: 1,
      },
      {
        item: itemIds.hempRope,
        quantity: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Diplomat's Pack",
    itemsQuantity: [
      {
        item: itemIds.chest,
        quantity: 1,
      },
      {
        item: itemIds.caseMapOrScroll,
        quantity: 2,
      },
      {
        item: itemIds.fineClothes,
        quantity: 1,
      },
      {
        item: itemIds.ink,
        quantity: 1,
      },
      {
        item: itemIds.inkPen,
        quantity: 1,
      },
      {
        item: itemIds.lamp,
        quantity: 1,
      },
      {
        item: itemIds.oilFlask,
        quantity: 2,
      },
      {
        item: itemIds.paper,
        quantity: 5,
      },
      {
        item: itemIds.perfume,
        quantity: 1,
      },
      {
        item: itemIds.sealingWax,
        quantity: 1,
      },
      {
        item: itemIds.soap,
        quantity: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Dungeoneer's Pack",
    itemsQuantity: [
      {
        item: itemIds.backpack,
        quantity: 1,
      },
      {
        item: itemIds.crowbar,
        quantity: 1,
      },
      {
        item: itemIds.hammer,
        quantity: 1,
      },
      {
        item: itemIds.piton,
        quantity: 10,
      },
      {
        item: itemIds.torch,
        quantity: 10,
      },
      {
        item: itemIds.tinderBox,
        quantity: 1,
      },
      {
        item: itemIds.rations,
        quantity: 10,
      },
      {
        item: itemIds.waterskin,
        quantity: 1,
      },
      {
        item: itemIds.hempRope,
        quantity: 1,
      },
    ],
  },
  {
    id: 4,
    name: "Entertainer's Pack",
    itemsQuantity: [
      {
        item: itemIds.backpack,
        quantity: 1,
      },
      {
        item: itemIds.bedroll,
        quantity: 1,
      },
      {
        item: itemIds.costumeClothes,
        quantity: 2,
      },
      {
        item: itemIds.candle,
        quantity: 5,
      },
      {
        item: itemIds.rations,
        quantity: 5,
      },
      {
        item: itemIds.waterskin,
        quantity: 1,
      },
      {
        item: itemIds.disguiseKit,
        quantity: 1,
      },
    ],
  },
  {
    id: 5,
    name: "Explorer's Pack",
    itemsQuantity: [
      {
        item: itemIds.backpack,
        quantity: 1,
      },
      {
        item: itemIds.bedroll,
        quantity: 1,
      },
      {
        item: itemIds.messKit,
        quantity: 1,
      },
      {
        item: itemIds.tinderBox,
        quantity: 1,
      },
      {
        item: itemIds.torch,
        quantity: 10,
      },
      {
        item: itemIds.rations,
        quantity: 10,
      },
      {
        item: itemIds.waterskin,
        quantity: 1,
      },
      {
        item: itemIds.hempRope,
        quantity: 1,
      },
    ],
  },
  {
    id: 6,
    name: "Priest's Pack",
    itemsQuantity: [
      {
        item: itemIds.backpack,
        quantity: 1,
      },
      {
        item: itemIds.blanket,
        quantity: 1,
      },
      {
        item: itemIds.candle,
        quantity: 10,
      },
      {
        item: itemIds.tinderBox,
        quantity: 1,
      },
      {
        item: itemIds.almsBox,
        quantity: 1,
      },
      {
        item: itemIds.blockOfIncense,
        quantity: 2,
      },
      {
        item: itemIds.vestments,
        quantity: 1,
      },
      {
        item: itemIds.rations,
        quantity: 2,
      },
      {
        item: itemIds.waterskin,
        quantity: 1,
      },
    ],
  },
  {
    id: 7,
    name: "Scholar's Pack",
    itemsQuantity: [
      {
        item: itemIds.backpack,
        quantity: 1,
      },
      {
        item: itemIds.book,
        quantity: 1,
      },
      {
        item: itemIds.ink,
        quantity: 1,
      },
      {
        item: itemIds.inkPen,
        quantity: 1,
      },
      {
        item: itemIds.parchment,
        quantity: 10,
      },
      {
        item: itemIds.bagOfSand,
        quantity: 1,
      },
      {
        item: itemIds.smallKnife,
        quantity: 1,
      },
    ],
  },
  {
    id: 8,
    name: "Monster Hunter's Pack",
    itemsQuantity: [
      {
        item: itemIds.chest,
        quantity: 1,
      },
      {
        item: itemIds.crowbar,
        quantity: 1,
      },
      {
        item: itemIds.hammer,
        quantity: 1,
      },
      {
        item: itemIds.woodenStake,
        quantity: 3,
      },
      {
        item: itemIds.emblem,
        quantity: 1,
      },
      {
        item: itemIds.holyWaterFlask,
        quantity: 1,
      },
      {
        item: itemIds.manacles,
        quantity: 1,
      },
      {
        item: itemIds.steelMirror,
        quantity: 1,
      },
      {
        item: itemIds.oilFlask,
        quantity: 1,
      },
      {
        item: itemIds.tinderBox,
        quantity: 1,
      },
      {
        item: itemIds.torch,
        quantity: 3,
      },
    ],
  },
];

const equipmentPackIds = {
  burglar: 1,
  diplomat: 2,
  dungeoneer: 3,
  entertainer: 4,
  explorer: 5,
  priest: 6,
  scholar: 7,
  monster: 8,
};

export { EquipmentPackSeed, equipmentPackIds };
