export const calculateLevel = (state: PrismaJson.CharacterState) => {
  return state.classLevels.reduce((acc, cur) => acc + cur.level, 0);
};
