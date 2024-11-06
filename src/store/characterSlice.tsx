import { CharacterInfo } from '@/lib/types/modelInfo';
import { Alignment } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CharacterInfo = {
  id: 9999,
  name: '',
  alignment: Alignment.TRUE_NEUTRAL,
  backgroundId: 1,
  speciesId: 1,
  subSpeciesId: 1,
  User: {
    id: 1,
    username: '',
  },
  Classes: [],
  SubClasses: [],
  Feats: [],
  Species: null,
  SubSpecies: null,
  Background: null,
  userId: 1,
  imageURL: '',
  state: null,
  campaignId: null,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<CharacterInfo>) {
      Object.assign(state, action.payload);
    },
    setCharacterState(state, action: PayloadAction<PrismaJson.CharacterState>) {
      state.state = action.payload;
    },
    setImageUrl(state, action: PayloadAction<string>) {
      if (!state) {
        return;
      }
      state = {
        ...state,
        imageURL: action.payload,
      };
    },
  },
});

export const { setCharacter, setCharacterState, setImageUrl } =
  characterSlice.actions;

export default characterSlice.reducer;
