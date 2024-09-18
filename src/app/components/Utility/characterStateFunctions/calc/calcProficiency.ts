export const calcProficiency = (level: number): number => {
  return Math.ceil(level / 4) + 1;
};
