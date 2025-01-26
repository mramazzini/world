import { CharacterFeatures } from '@/lib/types/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setFeatures } from '@/store/sheetSlice';
import { useEffect } from 'react';

const useFeatures = () => {
  const { rawCharacter: character } = useAppSelector((state) => state.sheet);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const _class =
      character?.CharacterToClass.map((c) => {
        return {
          id: c.classId,
          name: c.Class.name,
          features: c.Class.Features.concat(c.Class.SpellcastingFeatures || []),
        };
      }) || [];
    const species = {
      id: character?.Species?.id || '',
      name: character?.Species?.name || '',
      features: character?.Species?.Features || [],
    };
    const background = {
      id: character?.Background?.id || '',
      name: character?.Background?.name || '',
      features: character?.Background?.Features || [],
    };
    const subclass =
      character?.SubClasses?.map((s) => {
        return {
          id: s.id,
          classId: s.classId,
          name: s.name,
          features: s.Features,
        };
      }) || [];
    const subSpecies = {
      id: character?.SubSpecies?.id || '',
      name: character?.SubSpecies?.name || '',
      features: character?.SubSpecies?.Features || [],
    };

    const features: CharacterFeatures = {
      classes: _class,
      species,
      background,
      subclasses: subclass,
      subSpecies,
    };

    dispatch(setFeatures(features));
  }, [character, dispatch]);
};

export default useFeatures;
