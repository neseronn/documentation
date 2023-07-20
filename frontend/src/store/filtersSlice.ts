import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IFiltersState = {
  category: null,
  tags: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, { payload }: PayloadAction<number>) => {
      state.category = payload;
    },
    toggleTag: (state, { payload }: PayloadAction<string>) => {
      state.tags.includes(payload)
        ? state.tags.push(payload)
        : (state.tags = state.tags.filter((tag) => tag !== payload));
    },
  },
});

export const { actions, reducer } = filtersSlice;
