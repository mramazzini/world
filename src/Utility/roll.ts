export const roll = (num: number, die: number, plus: number = 0): number => {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += Math.floor(Math.random() * die) + 1;
  }
  return total + plus;
};
