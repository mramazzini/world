'use client';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import sheetReducer from './sheetSlice';
import layoutReducer from './layoutSlice';
import workshopReducer from './workshopSlice';
import workshopMiddleware from './middleware/WorkshopMiddleware';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      sheet: sheetReducer,
      layout: layoutReducer,
      workshop: workshopReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(workshopMiddleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default makeStore;
