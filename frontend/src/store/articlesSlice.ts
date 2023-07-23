import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface IArticlesState {
  articles: IArticle[];
  selectedArticle: IArticleFull | null;
  isLoading: boolean;
  error: null | string;
}

const initialState: IArticlesState = {
  articles: [],
  selectedArticle: null,
  isLoading: false,
  error: null,
};

interface IParams {
  category: number | null;
  tags: string[];
}

export const fetchArticles = createAsyncThunk<IArticle[], IParams>(
  'articles/fetchArticles',
  async (args, thunkApi) => {
    const { category, tags } = args;
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/articles/?${
          category !== null ? `category=${category}` : ''
        }&${tags.length > 0 ? `tags=` + tags.join(',') : ''}`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchArticleById = createAsyncThunk<IArticleFull, string | undefined>(
  'articles/fetchArticleById',
  async (id, thunkApi) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/articles/${id}`);
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
        state.error = action.payload;
        state.articles = [] as IArticle[];
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<IArticleFull>) => {
          state.isLoading = false;
          state.selectedArticle = action.payload;
        }
      )
      .addCase(fetchArticleById.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
        state.selectedArticle = {} as IArticleFull;
      });
  },
});
