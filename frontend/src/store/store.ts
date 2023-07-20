import { configureStore } from '@reduxjs/toolkit';
import { articlesSlice } from './articlesSlice';

export const store = configureStore({
  reducer: { articles: articlesSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
