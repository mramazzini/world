export const FeatureInfoIncludeTemplate = {
  columnedFeatures: true,
  Effects: {
    include: {
      Choices: true,
      EffectToSpell: {
        include: {
          Spell: true,
        },
      },
      EffectGrantsGroup: {
        include: {
          FeaturesToChooseFrom: {
            include: {
              columnedFeatures: true,
              Effects: {
                include: {
                  Choices: true,
                  EffectToSpell: {
                    include: {
                      Spell: true,
                    },
                  },
                  EffectToResource: {
                    include: {
                      Resource: true,
                    },
                  },
                },
              },
            },
          },
          FeatureGroup: {
            include: {
              FeaturesInGroup: {
                include: {
                  columnedFeatures: true,
                  Effects: {
                    include: {
                      Choices: true,
                      EffectToSpell: {
                        include: {
                          Spell: true,
                        },
                      },
                      EffectToResource: {
                        include: {
                          Resource: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      EffectToResource: {
        include: {
          Resource: true,
        },
      },
    },
  },
};
