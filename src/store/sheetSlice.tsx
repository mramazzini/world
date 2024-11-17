import { CharacterInfo } from '@/lib/types/modelInfo';
import { ArmorID, ToolID, WeaponID } from '@/lib/types/types';
import { Ability, Language, Skill } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SheetState {
  rawCharacter: CharacterInfo | null;
  diceLog: string[];
  toolProficiencies: ToolID[];
  weaponProficiencies: WeaponID[];
  armorProficiencies: ArmorID[];
  skillProficiencies: Skill[];
  skillExpertises: Skill[];
  languageProficiencies: Language[];
  savingThrowProficiencies: Ability[];
}

const initialState: SheetState = {
  rawCharacter: null,
  diceLog: [],
  toolProficiencies: [],
  weaponProficiencies: [],
  armorProficiencies: [],
  skillProficiencies: [],
  skillExpertises: [],
  languageProficiencies: [],
  savingThrowProficiencies: [],
};

const sheetSlice = createSlice({
  name: 'sheet',
  initialState,
  reducers: {
    setRawCharacter(state, action: PayloadAction<CharacterInfo>) {
      state.rawCharacter = action.payload;
    },
    applyPendingModel(state, action: PayloadAction<PrismaJson.ModelLink>) {
      if (state.rawCharacter) {
        state.rawCharacter.pendingLinks.push(action.payload);
      }
    },
  },
});

export const { setRawCharacter } = sheetSlice.actions;

export default sheetSlice.reducer;
