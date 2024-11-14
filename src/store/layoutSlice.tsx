import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
  showNav: boolean;
  hasPageMaxWidth: boolean;
  showFooter: boolean;
}

const initialState: LayoutState = {
  showNav: true,
  hasPageMaxWidth: true,
  showFooter: true,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setShowNav(state, action: PayloadAction<boolean>) {
      state.showNav = action.payload;
    },
    setShowFooter(state, action: PayloadAction<boolean>) {
      state.showFooter = action.payload;
    },
    setHasPageMaxWidth(state, action: PayloadAction<boolean>) {
      state.hasPageMaxWidth = action.payload;
    },
  },
});

export const { setShowFooter, setShowNav, setHasPageMaxWidth } =
  layoutSlice.actions;

export default layoutSlice.reducer;
