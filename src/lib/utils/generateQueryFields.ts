import { RelationFieldOptions, SearchFieldOption } from "../types";

//very scuffed function to generate query fields from the Searchbar.tsx component
export const generateQueryFields = ({
  fields,
  relationalFields,
  additionalWhere = {},
}: {
  fields: SearchFieldOption[] | undefined;
  relationalFields: RelationFieldOptions[];
  additionalWhere?: any;
}) => {
  console.log(relationalFields);

  const res = {
    ...additionalWhere,
  };

  if (fields) {
    for (const field of fields) {
      const { data, key, enum: isEnum } = field;

      if (isEnum) {
        if (data === "NONE") continue;
        // @ts-ignore
        res[key] = { equals: data };
        continue;
      }
      // @ts-ignore
      const d = parseInt(data);
      console.log(d, typeof d == "number" ? "is number" : "is not number");
      if (!Number.isNaN(d)) {
        if (d === -1) continue;
        // @ts-ignore
        res[key] = { equals: d };
      } else if (typeof data === "string") {
        // @ts-ignore
        res[key] = { contains: data, mode: "insensitive" };
      }
    }
  }
  if (!relationalFields) return res;
  for (const field of relationalFields) {
    const { model, key, data } = field;

    // @ts-ignore
    res[model] = {
      [key]: {
        contains: data,
        mode: "insensitive",
      },
    };
  }
  console.log(res);
  return res;
};
