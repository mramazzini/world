import { getSubclassesByClass } from "@/lib/actions/db/subclass/read.actions";
import { ClassID } from "@/lib/types";

export const generateSubclassChoice = async (
  classId: ClassID
): Promise<PrismaJson.SubclassChoice> => {
  const subclasses = await getSubclassesByClass(classId);
  const subclassChoices: PrismaJson.SubclassChoice = {
    choices: [
      {
        numberOfChoices: 1,
        options: subclasses.map((subclass) => subclass.id),
      },
    ],
  };
  return subclassChoices;
};
