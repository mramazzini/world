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

export const ItemInfoTemplate = {
  include: {
    ItemWeaponData: {
      include: {
        Weapon: {
          include: {
            ammunition: true,
            SpecialProperties: {
              include: {
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
                    EffectGrantsGroup: {
                      include: {
                        FeatureGroup: true,
                      },
                    },
                  },
                },
              },
            },
            WeaponPropertyInstance: {
              include: {
                Property: true,
              },
            },
          },
        },
      },
    },
    Spell: true,
    Features: {
      include: {
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
            EffectGrantsGroup: {
              include: {
                FeatureGroup: true,
              },
            },
          },
        },
      },
    },
    Armor: {
      include: {
        Features: {
          include: {
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
                EffectGrantsGroup: {
                  include: {
                    FeatureGroup: true,
                  },
                },
              },
            },
          },
        },
      },
    },
    Tool: {
      include: {
        Features: {
          include: {
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
                EffectGrantsGroup: {
                  include: {
                    FeatureGroup: true,
                  },
                },
              },
            },
          },
        },
      },
    },
    AmmunitionFor: true,

    EquipmentPack: {
      include: {
        items: true,
      },
    },
    User: {
      select: {
        username: true,
      },
    },
  },
};
