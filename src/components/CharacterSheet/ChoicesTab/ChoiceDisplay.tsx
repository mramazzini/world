import useCharacterChoices from '@/hooks/useCharacterChoices';
import { ChoiceProtocolToText } from '@/lib/utils/toText/ChoiceProtocolToText';
import { useAppSelector } from '@/store/hooks';
import P from '@/Utility/FormatAndSanitize';
import { ChoiceProtocol } from '@prisma/client';
import { useMemo } from 'react';
import ChoiceResolverController from './ChoiceResolverController';
import Link from 'next/link';

const ChoiceDisplay = () => {
  const { selectedChoice } = useCharacterChoices();
  const classes = useAppSelector(
    (state) => state.sheet.rawCharacter?.CharacterToClass
  )?.map((c) => {
    return { name: c.Class.name, id: c.classId, slug: c.Class.slug };
  });
  const species = useAppSelector((state) => state.sheet.rawCharacter?.Species);
  const subSpecies = useAppSelector(
    (state) => state.sheet.rawCharacter?.SubSpecies
  );
  const background = useAppSelector(
    (state) => state.sheet.rawCharacter?.Background
  );

  const choiceParentInfo = useMemo(() => {
    if (!selectedChoice) return null;
    if (selectedChoice.classId) {
      const _class = classes?.find((c) => c.id === selectedChoice.classId);
      if (!_class) return null;
      return {
        model: 'class',
        name: _class.name,
        slug: _class.slug,
      };
    } else if (selectedChoice.subSpeciesId) {
      return {
        model: 'subspecies',
        name: subSpecies?.name,
        slug: subSpecies?.slug,
      };
    } else if (selectedChoice.speciesId) {
      return {
        model: 'species',
        name: species?.name,
        slug: species?.slug,
      };
    } else if (selectedChoice.backgroundId) {
      return {
        model: 'background',
        name: background?.name,
        slug: background?.slug,
      };
    }
    return null;
  }, [selectedChoice]);

  if (!selectedChoice) return null;

  return (
    <div className="bg-base-200 rounded-xl p-4">
      <h3 className="divider">
        <p className="text-center text-xl font-bold">
          {choiceParentInfo ? (
            <Link
              target="_blank"
              href={`/${choiceParentInfo.model}/${choiceParentInfo.slug}`}
              className="hover:link-primary text-primary hover:link"
            >
              {choiceParentInfo.name} -&gt;
            </Link>
          ) : (
            <span>Selected Choice</span>
          )}
        </p>
      </h3>
      <p className="text-center">
        <P>{selectedChoice.description}</P>
      </p>

      <div className="divider"></div>
      <ChoiceResolverController choice={selectedChoice} />
    </div>
  );
};

export default ChoiceDisplay;
