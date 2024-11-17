import {
  ChoiceModelId,
  ImproveAbilityScoreParams,
} from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateAbilityScoreImprovementChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  abilities: ImproveAbilityScoreParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: abilities,
    protocol: ChoiceProtocol.IMPROVE_ABILITY_SCORE,
    amountOfOptionToChoose: amount || 1,
  };
};
