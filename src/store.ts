import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { countriesApi } from './services/apiService';
import { uiSlice } from './features/uiSlice/uiSlice';
import { weatherApi } from './services/weatherApi';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware).concat(weatherApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
