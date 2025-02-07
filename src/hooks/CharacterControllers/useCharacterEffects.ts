import { useCallback, useEffect, useMemo } from 'react';
import { ChainType, WeaponGroup } from '@prisma/client';
import { EffectInfo } from '@/lib/types/modelInfo';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import useFeatureSelector from '../useFeatureSelector';
import { setActiveEffects } from '@/store/sheetSlice';
import useLoadout from '../useLoadout';
import { weaponInWeaponGroup } from '@/lib/utils/weaponGroups';

//need to build the chain of effects
const useCharacterEffects = () => {
  const {
    activeFeaturesFromGroups,
    levelsByClass,
    activeEffects: storedActiveEffects,
    equippedArmor,
    equippedShield,
    equippedWeapons,
    level,
    combinedSpecies,
  } = useAppSelector((state) => state.sheet);
  const { unlockedFeatures } = useFeatureSelector();
  const dispatch = useAppDispatch();
  const { equippedState } = useLoadout();

  const activeEffects = useMemo(() => {
    const active = [] as EffectInfo[];

    //classes and subclasses use classlevel
    //species and background use character level

    for (const _class of unlockedFeatures.classes) {
      for (const feature of _class.features) {
        switch (feature.effectChainType) {
          case ChainType.NONE:
            if (feature.Effects.length !== 1) {
              console.error('Invalid effect chain on effect', feature);
              break;
            }
            active.push(feature.Effects[0]);
            break;
          case ChainType.ADD:
            for (const effect of feature.Effects) {
              if (effect.level <= levelsByClass[_class.id]) {
                active.push(effect);
              }
            }
            break;
          case ChainType.REPLACE: {
            //find the highest level effect that is less than or equal to the class level
            let highest = 0;
            let highestEffect = null as EffectInfo | null;
            for (const effect of feature.Effects) {
              if (
                effect.level <= levelsByClass[_class.id] &&
                effect.level > highest
              ) {
                highest = effect.level;
                highestEffect = effect;
              }
            }
            if (highestEffect) {
              active.push(highestEffect);
            }
            break;
          }
          default:
            console.error('Invalid effect chain type');
            break;
        }
      }
    }

    //combinedSpecies
    for (const feature of combinedSpecies?.Features || []) {
      switch (feature.effectChainType) {
        case ChainType.NONE:
          if (feature.Effects.length !== 1) {
            console.error('Invalid effect chain on effect', feature);
            break;
          }
          active.push(feature.Effects[0]);
          break;
        case ChainType.ADD:
          for (const effect of feature.Effects) {
            if (effect.level <= level) {
              active.push(effect);
            }
          }
          break;
        case ChainType.REPLACE: {
          //find the highest level effect that is less than or equal to the class level
          let highest = 0;
          let highestEffect = null as EffectInfo | null;
          for (const effect of feature.Effects) {
            if (effect.level <= level && effect.level > highest) {
              highest = effect.level;
              highestEffect = effect;
            }
          }
          if (highestEffect) {
            active.push(highestEffect);
          }
          break;
        }
        default:
          console.error('Invalid effect chain type');
          break;
      }
    }

    //background
    for (const feature of unlockedFeatures.background.features) {
      switch (feature.effectChainType) {
        case ChainType.NONE:
          if (feature.Effects.length !== 1) {
            console.error('Invalid effect chain on effect', feature);
            break;
          }
          active.push(feature.Effects[0]);
          break;
        case ChainType.ADD:
          for (const effect of feature.Effects) {
            if (effect.level <= level) {
              active.push(effect);
            }
          }
          break;
        case ChainType.REPLACE: {
          //find the highest level effect that is less than or equal to the class level
          let highest = 0;
          let highestEffect = null as EffectInfo | null;
          for (const effect of feature.Effects) {
            if (effect.level <= level && effect.level > highest) {
              highest = effect.level;
              highestEffect = effect;
            }
          }
          if (highestEffect) {
            active.push(highestEffect);
          }
          break;
        }
        default:
          console.error('Invalid effect chain type');
          break;
      }
    }

    return active;
  }, [unlockedFeatures, levelsByClass, level, combinedSpecies]);

  const verifyPrerequisites = useCallback(
    (prerequisites: PrismaJson.Prerequisite): boolean => {
      const evaluateCondition = (
        condition: PrismaJson.PrerequisiteData
      ): boolean => {
        // Implement individual checks for each property here

        const isBlacklist = condition.blackList;

        if (condition.minLevel !== undefined) {
          // Check character's level
        }
        if (condition.Class !== undefined) {
          // Check character's class
        }
        if (condition.SubClass !== undefined) {
          // Check character's subclass
        }
        if (condition.Species !== undefined) {
          // Check character's species
        }
        if (condition.SubSpecies !== undefined) {
          // Check character's subspecies
        }
        if (condition.Background !== undefined) {
          // Check character's background
        }
        if (condition.Feat !== undefined) {
          // Check character's feats
        }
        if (condition.minAbilityScore !== undefined) {
          // Check ability scores
        }
        if (condition.Spellcaster !== undefined) {
          // Check if character is a spellcaster
        }
        if (condition.hasASpell !== undefined) {
          // Check if character has any spells
        }
        if (condition.Spell !== undefined) {
          // Check specific spell
        }
        if (condition.weaponProficiency !== undefined) {
          // Check weapon proficiency
        }
        if (condition.martialWeaponProficiency !== undefined) {
          // Check martial weapon proficiency
        }
        if (condition.simpleWeaponProficiency !== undefined) {
          // Check simple weapon proficiency
        }
        if (condition.armorProficiency !== undefined) {
          // Check armor proficiency
        }
        if (condition.lightArmorProficiency !== undefined) {
          // Check light armor proficiency
        }
        if (condition.mediumArmorProficiency !== undefined) {
          // Check medium armor proficiency
        }
        if (condition.heavyArmorProficiency !== undefined) {
          // Check heavy armor proficiency
        }
        if (condition.toolProficiency !== undefined) {
          // Check tool proficiency
        }
        if (condition.skillProficiency !== undefined) {
          // Check skill proficiency
        }
        if (condition.isWearingArmor !== undefined) {
          if (condition.isWearingArmor && !equippedArmor) {
            // Check if character is wearing armor
            if (!isBlacklist) return false;
          }
          if (!condition.isWearingArmor && equippedArmor) {
            // Check if character is not wearing armor

            if (!isBlacklist) return false;
          }
        }
        if (
          condition.equippedState &&
          equippedState !== condition.equippedState
        ) {
          if (!isBlacklist) return false;
        }

        if (condition.isHoldingShield && equippedShield === undefined) {
          // Check if character is holding a shield
          if (!isBlacklist) return false;
        }

        if (condition.isWieldingWeaponGroup !== undefined) {
          // Check if character is wielding a weapon group
          const valid = equippedWeapons.some((itemWeaponInfo) => {
            return weaponInWeaponGroup(
              itemWeaponInfo.Weapon,
              condition.isWieldingWeaponGroup as WeaponGroup
            );
          });
          if (!valid) {
            if (!isBlacklist) return false;
          }
        }

        return true; // Return the result of the evaluation
      };

      const evaluatePrerequisites = (
        prerequisites: PrismaJson.Prerequisite[]
      ): boolean => {
        for (const prerequisite of prerequisites) {
          const { protocol, data } = prerequisite;
          if (data.some((p) => 'protocol' in p)) {
            // Recursively evaluate nested prerequisites
            const result = evaluatePrerequisites(
              data as PrismaJson.Prerequisite[]
            );
            if (protocol === 'AND' && !result) {
              return false; // Short-circuit if AND protocol fails
            }
            if (protocol === 'OR' && result) {
              return true; // Short-circuit if OR protocol succeeds
            }
          } else {
            // Evaluate individual conditions
            if (protocol === 'AND') {
              const allConditionsMet = (
                data as PrismaJson.PrerequisiteData[]
              ).every(evaluateCondition);
              return allConditionsMet; // Short-circuit if AND protocol fails
            }
            if (protocol === 'OR') {
              const anyConditionMet = (
                data as PrismaJson.PrerequisiteData[]
              ).some(evaluateCondition);
              return anyConditionMet; // Short-circuit if OR protocol succeeds
            }
          }
        }

        // Default return based on the protocol
        const hasORProtocol = prerequisites.some(
          (prerequisite) => prerequisite.protocol === 'OR'
        );
        if (hasORProtocol) {
          return false; // Default for OR: no conditions met
        }

        return true; // Default for AND: all conditions passed (or no conditions exist)
      };

      return evaluatePrerequisites([prerequisites]);
    },
    [equippedState, equippedArmor, equippedShield, equippedWeapons]
  );

  useEffect(() => {
    const active = [...activeEffects];

    for (const feature of activeFeaturesFromGroups) {
      for (const effect of feature.Effects) {
        if (active.some((active) => active.id === effect.id)) {
          continue;
        }
        active.push(effect);
      }
    }
    const activeAndValid = active.filter((effect) => {
      if (effect.preRequisite) {
        return verifyPrerequisites(effect.preRequisite);
      }
      return true;
    });

    const arraysAreDifferent =
      activeAndValid.length !== storedActiveEffects.length ||
      activeAndValid.some(
        (effect) =>
          !storedActiveEffects.some((active) => active.id === effect.id)
      ) ||
      storedActiveEffects.some(
        (active) => !activeAndValid.some((effect) => effect.id === active.id)
      );

    if (arraysAreDifferent) {
      dispatch(setActiveEffects([...activeAndValid]));
    }
  }, [
    unlockedFeatures,
    levelsByClass,
    dispatch,
    activeFeaturesFromGroups,
    activeEffects,
    storedActiveEffects,
    verifyPrerequisites,
  ]);
};

export default useCharacterEffects;
