import { Ability, Choice } from '@prisma/client';
import ChoiceResolverButton from '../../ChoiceResolverButton';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { DBMetadata } from '@/lib/types/metadata';
import Link from 'next/link';
import { FeatID } from '@/lib/types/types';
import { getFeatsMetadata } from '@/lib/actions/db/feat/read.actions';
import { linkCharacterToFeat } from '@/lib/actions/db/character/update.actions';
import { useAppSelector } from '@/store/hooks';
import AbilityGroupResolver, {
  AbilityPinner,
} from '../AbilityScoreResolvers/AbilityGroupResolver';
import { FeatOrASIOutput } from '@/lib/types/protocols';

const SetFeatOrASIResolver = ({ choice }: { choice: Choice }) => {
  //choose between a feat or an ASI improvement
  const [feats, setFeats] = useState<DBMetadata[]>([]);
  const [selectedFeat, setSelectedFeat] = useState<FeatID>('');
  const characterID = useAppSelector((state) => state.sheet.rawCharacter?.id);

  useEffect(() => {
    const fetchFeats = async () => {
      const res = await getFeatsMetadata();
      setFeats(res);
    };
    fetchFeats();
  }, []);

  const transformPins = useCallback((pin: AbilityPinner[]): FeatOrASIOutput => {
    return {
      featOrASI: 'asi',
      abilityScoreValues: pin.map((p) => {
        return {
          ability: p.assignedAbility as Ability,
          value: p.value,
        };
      }),
    };
  }, []);

  const beforeSubmit = useCallback(async () => {
    //link subclass to character
    if (!characterID) return false;
    try {
      if (!selectedFeat) return false;
      await linkCharacterToFeat(characterID, selectedFeat);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }, [characterID, selectedFeat]);

  const output: FeatOrASIOutput = useMemo(() => {
    return {
      featOrASI: 'feat',
      featId: selectedFeat,
    };
  }, [selectedFeat]);

  return (
    <div>
      <h3>Choose a Feat or ability score improvement.</h3>
      <p>
        You can choose to either take a feat, increase one ability score by 2,
        or two ability scores by 1.
      </p>
      <div className="divider"></div>
      <div className="p-4 bg-base-300 rounded-xl border-gray-500 border">
        <ul className="flex flex-col gap-2">
          {feats.map((feat) => (
            <li
              key={feat.id}
              className="form-control flex flex-row w-full gap-4 "
            >
              <input
                type="radio"
                id={feat.id}
                className="checkbox"
                name="subclass"
                onChange={() => setSelectedFeat(feat.id)}
                checked={selectedFeat === feat.id}
              />
              <label htmlFor={feat.id}>
                <Link
                  className="hover:link text-primary"
                  target="_blank"
                  href={`/subclass/${feat.slug}`}
                >
                  {feat.name} -&gt;
                </Link>
              </label>
            </li>
          ))}
        </ul>
        <ChoiceResolverButton
          choiceId={choice.id}
          selected={output}
          disabled={!selectedFeat}
          beforeSubmit={beforeSubmit}
        />
      </div>
      <div className="divider">OR</div>
      <div className="bg-base-300 rounded-xl border border-gray-500 p-4">
        <AbilityGroupResolver
          abilitiesToChooseFrom={Object.values(Ability)}
          increaseAmounts={[1, 1]}
          choice={choice}
          valueFilter={transformPins}
        />
      </div>
    </div>
  );
};

export default SetFeatOrASIResolver;
