import { useMemo } from 'react';
import useModifier from './useModifier';
import { Skill } from '@prisma/client';

const usePassivePerception = () => {
  const { getSkillModifier } = useModifier();
  const passivePerception = useMemo(() => {
    return 10 + getSkillModifier(Skill.PERCEPTION);
  }, [getSkillModifier]);

  return passivePerception;
};

export default usePassivePerception;
