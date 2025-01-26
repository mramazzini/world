//Center point for the state management of the character sheet

import useFeatureGroup from './useFeatureGroup';
import useFeatures from './useFeatures';
import useHitpoints from './useHitpoints';
import useAbility from './useAbilityScore';
import useCharacterChoices from './useCharacterChoices';
import useCharacterEffects from './useCharacterEffects';
import useLevel from './useLevel';
import useLoadout from '../useLoadout';
import useModifier from '../useModifier';
import useMulticlass from './useMulticlass';
import useProficiency from './useProficiency';
import useSpellcaster from './useSpellcaster';
import usePrimaryClass from './usePrimaryClass';
import { useArmorClass } from './useArmorClass';
import useInitiative from './useInitiative';
import useHitdie from './useHitdie';
import useInventory from './useInventory';
import useSpeed from '../useSpeed';
import useResources from './useResources';
import useUnarmedStrike from './useUnarmedStrike';
import useCombinedSpecies from './useCombinedSpecies';
import useLevelByClass from './useLevelByClass';
import useSenses from './useSenses';

const useCharacterLogic = () => {
  useCharacterEffects();
  useArmorClass();
  useCharacterChoices();
  useCombinedSpecies();
  useAbility();
  useFeatureGroup();
  useFeatures();
  useHitdie();
  useHitpoints();
  useInitiative();
  useInventory();
  useLevel();
  useLoadout();
  useModifier();
  useMulticlass();
  useProficiency();
  useSpeed();
  useSpellcaster();
  useResources();
  useUnarmedStrike();
  usePrimaryClass();
  useLevelByClass();
  useSenses();
};

export default useCharacterLogic;
