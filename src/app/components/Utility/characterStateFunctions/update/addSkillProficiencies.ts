import { CharacterInfo } from "@/lib/utils/types/types";
import { Skill } from "@prisma/client";

export const addSkillProficiencies: PrismaJson.StateCallback = (
  char,
  c,
  from
) => {
  const skills = c as Skill[];
  const s = char.state as PrismaJson.CharacterState;
  return {
    ...s,
    proficiencies: {
      ...s.proficiencies,
      skills: skills,
      skillReasons: skills.map((skill) => ({
        reason: from,
        effect: "Proficient",
      })),
    },
  };
};
