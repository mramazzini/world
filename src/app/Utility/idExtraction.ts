import { Prisma } from "@prisma/client";

export const getPotentialItemsFromClass = (
  classObj: Prisma.ClassCreateManyInput
): number[] => {
  const items: number[] = [];
  const equipment = classObj.equipment;
  const def = equipment.default;
  const choices = equipment.choices;
  def &&
    def.forEach((item) => {
      items.push(item.item);
    });

  choices &&
    choices.forEach((choice) => {
      choice.options.forEach((selection) => {
        selection.forEach((item) => {
          items.push(item.item);
        });
      });
    });

  //remove duplicates
  const filtered = items
    .filter((item, index) => items.indexOf(item) === index)
    .sort((a, b) => a - b);
  return filtered;
};
