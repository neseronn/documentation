import { configureStore } from '@reduxjs/toolkit';
import { articlesSlice } from './articlesSlice';
import { filtersSlice } from './filtersSlice';

export const store = configureStore({
  reducer: { articles: articlesSlice.reducer, filters: filtersSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
