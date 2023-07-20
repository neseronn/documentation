import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  articles: [] as IArticle[],
  isLoading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk<IArticle[]>(
  'articles/fetchArticles',
  async (_, thunkApi) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/articles/`);
      const data = await response.json();
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          state.isLoading = false;
          state.articles = action.payload;
        }
      )
      .addCase(fetchArticles.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.articles = [] as IArticle[];
      });
  },
});
