const numberArray = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const numberObj = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => ({ id: start + i }));
export default numberArray;
