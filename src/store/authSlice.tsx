import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  userId: number | null;
  loggedIn: boolean;
}

const initialState: AuthState = {
  userId: null,
  loggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.userId = null;
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
