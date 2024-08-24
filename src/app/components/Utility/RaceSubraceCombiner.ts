import { RaceInfo, SubRaceInfo } from "@/lib/types";
import { Race, RaceVariant } from "@prisma/client";

const RaceSubRaceCombiner = (original: RaceInfo, variant: SubRaceInfo) => {
  const res = {
    abilityScores: variant.abilityScores
      ? variant.abilityScores
      : original.abilityScores,

    age: variant.age ? variant.age : original.age,
    alignment: variant.alignment ? variant.alignment : original.alignment,
  };
  return res;
};
