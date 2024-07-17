import { officialSources } from "../types";

export const isOfficialContent = (str: string) => {
  return officialSources.includes(str);
};
