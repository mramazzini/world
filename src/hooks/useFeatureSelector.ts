import { FeatureInfo } from '@/lib/types/modelInfo';
import { useAppSelector } from '@/store/hooks';
import { useCallback, useMemo } from 'react';

const useFeatureSelector = () => {
  const {
    features,
    levelsByClass: levels,
    level,
  } = useAppSelector((state) => state.sheet);
  const getMinlevel = useCallback((f: FeatureInfo) => {
    if (f.Effects.length === 0) return 0;
    return f.Effects.reduce(
      //get min
      (acc, cur) => Math.min(acc, cur.level),
      20
    );
  }, []);

  const sortFn = useCallback(
    (a: FeatureInfo, b: FeatureInfo) => {
      //sort by level
      return getMinlevel(a) - getMinlevel(b);
    },
    [getMinlevel]
  );

  const unlockedFeatures = useMemo(() => {
    const unlocked = {
      classes: features.classes.map((c) => {
        return {
          id: c.id,
          name: c.name,
          features: c.features
            .filter((f) => {
              return levels[c.id] >= (getMinlevel(f) || 0);
            }, [])
            .sort(sortFn),
        };
      }, []),
      species: {
        id: features.species.id,
        name: features.species.name,
        features: features.species.features
          .filter((f) => {
            return level >= (getMinlevel(f) || 0);
          })
          .sort(sortFn),
      },
      background: {
        id: features.background.id,
        name: features.background.name,
        features: features.background.features
          .filter((f) => {
            return level >= (getMinlevel(f) || 0);
          })
          .sort(sortFn),
      },
      subclasses: features.subclasses.map((s) => {
        return {
          id: s.id,
          classId: s.classId,
          name: s.name,
          features: s.features
            .filter((f) => {
              return levels[s.id] >= (getMinlevel(f) || 0);
            })
            .sort(sortFn),
        };
      }),
      subSpecies: {
        id: features.subSpecies.id,
        name: features.subSpecies.name,
        features: features.subSpecies.features
          .filter((f) => {
            return level >= (getMinlevel(f) || 0);
          })
          .sort(sortFn),
      },
      feats: features.feats.map((f) => {
        return {
          id: f.id,
          name: f.name,
          features: f.features
            .filter((f) => {
              return level >= (getMinlevel(f) || 0);
            })
            .sort(sortFn),
        };
      }),
    };

    return unlocked;
  }, [features, levels, level, sortFn, getMinlevel]);

  const lockedFeatures = useMemo(() => {
    //just filter features that are not in unlocked features
    return {
      classes: features.classes.map((c) => {
        return {
          name: c.name,
          features: c.features
            .filter((f) => {
              return !unlockedFeatures.classes
                .find((uf) => uf.name === c.name)
                ?.features.includes(f);
            })
            .sort(sortFn),
        };
      }, []),
      species: {
        name: features.species.name,
        features: features.species.features
          .filter((f) => {
            return !unlockedFeatures.species.features.includes(f);
          })
          .sort(sortFn),
      },
      background: {
        name: features.background.name,
        features: features.background.features
          .filter((f) => {
            return !unlockedFeatures.background.features.includes(f);
          })
          .sort(sortFn),
      },
      subclasses: features.subclasses.map((s) => {
        return {
          name: s.name,
          features: s.features
            .filter((f) => {
              return !unlockedFeatures.subclasses
                .find((uf) => uf.name === s.name)
                ?.features.includes(f);
            })
            .sort(sortFn),
        };
      }),
      subSpecies: {
        name: features.subSpecies.name,
        features: features.subSpecies.features
          .filter((f) => {
            return !unlockedFeatures.subSpecies.features.includes(f);
          })
          .sort(sortFn),
      },
      feats: features.feats.map((f) => {
        return {
          name: f.name,
          features: f.features
            .filter((f) => {
              return !unlockedFeatures.feats
                .find((uf) => uf.name === f.name)
                ?.features.includes(f);
            })
            .sort(sortFn),
        };
      }),
    };
  }, [features, unlockedFeatures, sortFn]);

  const flatList = useCallback(
    (type: 'all' | 'unlocked' | 'locked') => {
      switch (type) {
        case 'all':
          return [
            ...features.classes.flatMap((c) => c.features),
            ...features.species.features,
            ...features.background.features,
            ...features.subclasses.flatMap((s) => s.features),
            ...features.subSpecies.features,
            ...features.feats.flatMap((f) => f.features),
          ];
        case 'unlocked':
          return [
            ...unlockedFeatures.classes.flatMap((c) => c.features),
            ...unlockedFeatures.species.features,
            ...unlockedFeatures.background.features,
            ...unlockedFeatures.subclasses.flatMap((s) => s.features),
            ...unlockedFeatures.subSpecies.features,
            ...unlockedFeatures.feats.flatMap((f) => f.features),
          ];
        case 'locked':
          return [
            ...lockedFeatures.classes.flatMap((c) => c.features),
            ...lockedFeatures.species.features,
            ...lockedFeatures.background.features,
            ...lockedFeatures.subclasses.flatMap((s) => s.features),
            ...lockedFeatures.subSpecies.features,
            ...lockedFeatures.feats.flatMap((f) => f.features),
          ];
        default:
          return [
            ...features.classes.flatMap((c) => c.features),
            ...features.species.features,
            ...features.background.features,
            ...features.subclasses.flatMap((s) => s.features),
            ...features.subSpecies.features,
            ...features.feats.flatMap((f) => f.features),
          ];
      }
    },
    [features, lockedFeatures, unlockedFeatures]
  );

  const fromList = useCallback(
    (type: 'all' | 'locked' | 'unlocked') => {
      switch (type) {
        case 'all':
          return [
            ...features.classes,
            features.species,
            features.background,
            ...features.subclasses,
            features.subSpecies,
            ...features.feats,
          ].filter((f) => f.name !== '');
        case 'locked':
          return [
            ...lockedFeatures.classes,
            lockedFeatures.species,
            lockedFeatures.background,
            ...lockedFeatures.subclasses,
            lockedFeatures.subSpecies,
            ...features.feats,
          ].filter((f) => f.name !== '');
        case 'unlocked':
          return [
            ...unlockedFeatures.classes,
            unlockedFeatures.species,
            unlockedFeatures.background,
            ...unlockedFeatures.subclasses,
            unlockedFeatures.subSpecies,
            ...features.feats,
          ].filter((f) => f.name !== '');
        default:
          return [
            ...features.classes,
            features.species,
            features.background,
            ...features.subclasses,
            features.subSpecies,
            ...features.feats,
          ].filter((f) => f.name !== '');
      }
    },
    [features, lockedFeatures, unlockedFeatures]
  );

  return {
    features,
    unlockedFeatures,
    lockedFeatures,
    flatList,
    fromList,
  };
};

export default useFeatureSelector;
