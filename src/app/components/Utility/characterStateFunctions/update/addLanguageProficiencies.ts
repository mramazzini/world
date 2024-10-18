import { CharacterInfo } from "@/lib/utils/types/types";
import { Language } from "@prisma/client";

export const addLanguageProficiencies: PrismaJson.StateCallback = (
  char,
  c,
  from
) => {
  const s = char.state as PrismaJson.CharacterState;
  const languages = c as Language[];
  return {
    ...s,
    proficiencies: {
      ...s.proficiencies,
      languages: languages,
      languageReasons: languages.map((language) => ({
        reason: from,
        effect: "Proficient",
      })),
    },
  };
};
