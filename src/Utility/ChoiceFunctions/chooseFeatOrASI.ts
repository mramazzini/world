import { getFeats } from '@/lib/actions/db/feat/read.actions';
import { ASIorFeat } from '@/lib/types/types';
import { Ability } from '@prisma/client';
import { v4 } from 'uuid';

export const chooseASIorFeat: PrismaJson.StateCallback = async (
  char,
  c,
  from
) => {
  if (c.length != 1) {
    throw new Error('Invalid Length');
  }
  const selection = c[0] as ASIorFeat;
  const s = char.state as PrismaJson.CharacterState;
  if (selection === ASIorFeat.Feat) {
    const feats = await getFeats();
    return {
      ...s,
      pendingChoices: [
        ...s.pendingChoices,
        {
          id: v4(),
          choice: {
            choices: [
              {
                numberOfChoices: 1,
                options: feats.map((f) => f.id),
              },
            ],
          } as PrismaJson.FeatChoice,
          model: 'Feat' as PrismaJson.ChoiceModel,
          from,
          description: "Choose your character's feat.",
          callbackProtocol: 'FeatSelection',
        },
      ],
    };
  } else {
    return {
      ...s,
      pendingChoices: [
        ...s.pendingChoices,
        {
          id: v4(),
          choice: {
            choices: [
              {
                abilities: Object.values(Ability),
                options: [1, 1],
              },
              {
                abilities: Object.values(Ability),
                options: [2],
              },
            ],
          } as PrismaJson.AbilityScoreChoice,
          model: 'AbilityScore',
          from,
          description: "Choose your character's ability score bonuses.",
          callbackProtocol: 'AbilityScoreIncrease',
        },
      ],
    };
  }
};
