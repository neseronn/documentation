import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: NavigationState = {
  activePage: '/',
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<ActivePage>) => {
      state.activePage = action.payload;
    },
  },
});

export const { actions, reducer } = navigationSlice;
