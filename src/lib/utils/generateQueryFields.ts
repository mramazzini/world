import { RelationFieldOptions, SearchFieldOption } from './types/types';

//very scuffed function to generate query fields from the Searchbar.tsx component
export const generateQueryFields = ({
  fields,
  relationalFields,
  additionalWhere = {},
}: {
  fields: SearchFieldOption[] | undefined;
  relationalFields: RelationFieldOptions[];
  additionalWhere?: Record<string, unknown>;
}) => {
  const res = {
    ...additionalWhere,
  };

  if (fields) {
    for (const field of fields) {
      const { data, key, enum: isEnum } = field;

      if (isEnum) {
        if (data === 'NONE') continue;
        res[key] = { equals: data };
        continue;
      }
      //@ts-expect-error - We intentionally want to check if the data is a number
      const d = parseFloat(data);
      if (!Number.isNaN(d)) {
        if (d === -1) continue;
        res[key] = { equals: d };
      } else if (typeof data === 'string') {
        res[key] = { contains: data, mode: 'insensitive' };
      }
    }
  }
  if (!relationalFields) return res;
  for (const field of relationalFields) {
    const { model, key, data } = field;

    res[model] = {
      [key]: {
        contains: data,
        mode: 'insensitive',
      },
    };
  }
  return res;
};
