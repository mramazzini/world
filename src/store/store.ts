'use client';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import characterReducer from './characterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      character: characterReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default makeStore;
