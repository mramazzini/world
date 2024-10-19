export const refreshPassivePerception = (
  state: PrismaJson.CharacterState
): PrismaJson.CharacterState => {
  console.log("pp", state);
  const perception = state.abilityScores.WIS;
  const perceptionMod = Math.floor((perception - 10) / 2);
  const passivePerception = 10 + perceptionMod;

  return {
    ...state,
    passivePerception,
    passivePerceptionReasons: [
      {
        reason: "Base Passive Perception",
        effect: 10,
      },
      {
        reason: "Wisdom Modifier",
        effect:
          perceptionMod >= 0
            ? `+ ${perceptionMod}`
            : `- ${Math.abs(perceptionMod)}`,
      },
    ],
  };
};
