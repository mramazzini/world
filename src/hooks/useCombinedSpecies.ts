import { SubSpeciesWithFeaturesAndChoices } from '@/lib/types/modelInfo';
import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

const useCombinedSpecies = () => {
  const character = useAppSelector((state) => state.sheet.rawCharacter);

  const combinedSpecies = useMemo(() => {
    if (!character) return null;
    const species = character.Species;
    const subSpecies = character.SubSpecies;
    if (!subSpecies) return species;
    if (!species) return subSpecies;
    type SubSpecies = Omit<
      SubSpeciesWithFeaturesAndChoices,
      'createdAt' | 'updatedAt'
    >;
    type Species = Omit<
      SubSpeciesWithFeaturesAndChoices,
      'createdAt' | 'updatedAt'
    >;

    // Ensure `fields` only contains keys that exist on both `subSpecies` and `species`
    const fields: (keyof SubSpecies & keyof Species)[] = [
      'abilityScoreDescription',
      'age',
      'alignment',
      'blindSight',
      'blindSightDescription',
      'burrowSpeed',
      'burrowSpeedDescription',
      'climbDescription',
      'climbSpeed',
      'creatureType',
      'darkvision',
      'darkvisionDescription',
      'flightDescription',
      'flightSpeed',
      'freeAbilityScoreImprovements',
      'freeLanguages',
      'languageDescription',
      'size',
      'sizeDescription',
      'speed',
      'speedDescription',
      'swimDescription',
      'swimSpeed',
      'tremorSense',
      'tremorSenseDescription',
      'trueSight',
      'trueSightDescription',
      'Choices',
    ];

    // Assuming subSpecies and species are typed correctly:
    const result = fields.reduce(
      (acc: Partial<SubSpecies & Species>, field) => {
        if (subSpecies[field]) {
          // @ts-expect-error - TS is not smart enough to know that `field` is a key of `SubSpecies`
          acc[field] = subSpecies[field];
        } else {
          // @ts-expect-error - TS is not smart enough to know that `field` is a key of `Species`
          acc[field] = species[field];
        }
        return acc;
      },
      {}
    );

    //That or i am not smart enough to understand TS

    return result;
  }, [character]);

  return combinedSpecies;
};

export default useCombinedSpecies;
