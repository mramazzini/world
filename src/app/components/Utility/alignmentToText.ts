import { Alignment } from "@prisma/client";

export const alignmentToText = (alignment: Alignment): string => {
  return alignment.replaceAll("_", " ").toCapitalCase();
};
