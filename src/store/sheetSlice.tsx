import { CharacterInfo } from '@/lib/types/modelInfo';
import { CharacterState } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SheetState {
  rawCharacter: CharacterInfo | null;
  state: CharacterState | null;
  diceLog: string[];
  activeChoiceId: string | null;
  refreshPending: boolean;
  activeSpellCastingClassId: string | null;
}

const initialState: SheetState = {
  rawCharacter: null,
  diceLog: [],
  activeChoiceId: null,
  refreshPending: true,
  state: null,
  activeSpellCastingClassId: null,
};

const sheetSlice = createSlice({
  name: 'sheet',
  initialState,
  reducers: {
    setRawCharacter(state, action: PayloadAction<CharacterInfo>) {
      state.rawCharacter = action.payload;
    },
    setActiveChoiceId(state, action: PayloadAction<string | null>) {
      state.activeChoiceId = action.payload;
    },
    setRefreshSheet(state, action: PayloadAction<boolean>) {
      state.refreshPending = action.payload;
    },
    setCharacterState(state, action: PayloadAction<CharacterState>) {
      state.state = action.payload;
    },
    setActiveSpellCastingClassId(state, action: PayloadAction<string | null>) {
      state.activeSpellCastingClassId = action.payload;
    },
  },
});

export const {
  setRawCharacter,
  setActiveChoiceId,
  setRefreshSheet,
  setCharacterState,
  setActiveSpellCastingClassId,
} = sheetSlice.actions;

export default sheetSlice.reducer;
