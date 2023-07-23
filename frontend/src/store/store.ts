import { configureStore } from '@reduxjs/toolkit';
import { articlesSlice } from './articlesSlice';
import { filtersSlice } from './filtersSlice';
import { navigationSlice } from './navigationSlice';

export const store = configureStore({
  reducer: {
    articles: articlesSlice.reducer,
    filters: filtersSlice.reducer,
    navigation: navigationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
