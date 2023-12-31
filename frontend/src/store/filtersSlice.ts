import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IFiltersState = {
  category: null,
  tags: [],
  searchQuery: '',
  sort: 'create_data',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, { payload }: PayloadAction<number | null>) => {
      state.category = payload;
    },
    toggleTag: (state, { payload }: PayloadAction<string>) => {
      if (state.tags.length < 3 && !state.tags.includes(payload)) {
        state.tags.push(payload);
        console.log(state.tags);
      } else if (state.tags.includes(payload)) {
        state.tags = state.tags.filter((tag) => tag !== payload);
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { actions, reducer } = filtersSlice;
