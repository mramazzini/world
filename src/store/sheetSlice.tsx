import { CharacterInfo } from '@/lib/types/modelInfo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SheetState {
  rawCharacter: CharacterInfo | null;
  diceLog: string[];
  activeChoiceId: string | null;
  refreshPending: boolean;
}

const initialState: SheetState = {
  rawCharacter: null,
  diceLog: [],
  activeChoiceId: null,
  refreshPending: true,
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
  },
});

export const { setRawCharacter, setActiveChoiceId, setRefreshSheet } =
  sheetSlice.actions;

export default sheetSlice.reducer;
