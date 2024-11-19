import {
  ChoiceModelId,
  SetLanguageProficiencyParams,
} from '@/lib/types/protocols';
import { ChoiceProtocol, Prisma } from '@prisma/client';

export const generateLanguageProficiencyChoice = (
  id: string,
  modelId: string,
  model: ChoiceModelId,
  description: string,
  languages: SetLanguageProficiencyParams,
  amount?: number
): Prisma.ChoiceCreateManyInput => {
  return {
    id,
    [model]: modelId,
    description,
    fetchParams: languages,
    amountOfOptionToChoose: amount || 1,
    protocol: ChoiceProtocol.SET_LANGUAGE_PROFICIENCY,
  };
};
