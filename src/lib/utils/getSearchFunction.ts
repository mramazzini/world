"use server";
import { Pages } from "../types";
import * as functions from "../actions/db/read.actions";

const getSearchFunction = async (search: Pages): Promise<any> => {
  switch (search) {
    case Pages.Class:
      return functions.getClass;
    case Pages.SubClass:
      return functions.getSubClass;
    case Pages.Race:
      return functions.getRace;
    case Pages.SubRace:
      return functions.getSubRace;
    case Pages.Background:
      return functions.getBackground;
    case Pages.Feat:
      return functions.getFeat;
    case Pages.Spell:
      return functions.getSpell;

    default:
      console.warn("No search function found for", search);
      return functions.getClass;
  }
};

export default getSearchFunction;
