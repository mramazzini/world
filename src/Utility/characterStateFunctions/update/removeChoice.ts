export const removeChoice = (state: PrismaJson.CharacterState, id: string) => {
  const newChoices = [...state.pendingChoices];
  const index = newChoices.findIndex((choice) => choice.id === id);
  newChoices.splice(index, 1);
  return {
    ...state,
    pendingChoices: [...newChoices],
  };
};
