import { officialSources } from "../globalVars";

export const isOfficialContent = (str: string) => {
  return officialSources.includes(str);
};
