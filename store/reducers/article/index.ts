import { ArticleStateType } from './type';
import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { APIResponse } from '../../../types/api-response.type';
import { Article } from '../../../types/article.type';

const url = 'https://next.api.whathebyte.com/posts';

const initialState: ArticleStateType = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    clearArticles: (state) => {
      state.data = initialState.data;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.data = {
          articles: action.payload.data,
          pagination: action.payload.pagination,
        };
        state.isLoading = false;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error);
      })
      .addCase(refetchArticles.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(
        refetchArticles.fulfilled,
        (state, action) => {
          state.data = {
            articles: [
              ...state.data.articles,
              ...action.payload.data,
            ],
            pagination: action.payload.pagination,
          };
          state.isLoading = false;
        }
      )
      .addCase(
        refetchArticles.rejected,
        (state, action) => {
          state.isLoading = false;
          console.log(action.error);
        }
      ),
});

export const { clearArticles } = articleSlice.actions;

export default articleSlice.reducer;

export const fetchArticles = createAsyncThunk(
  '/article/fetchArticles',
  async (_, { rejectWithValue }) => {
    try {
      const query = { limit: 10 };
      const queryParams = new URLSearchParams(
        query as any
      ).toString();
      const response = await fetch(`${url}?${queryParams}`);
      const data: APIResponse<Article[]> =
        await response.json();

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const refetchArticles = createAsyncThunk(
  '/article/refetchArticles',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      const data: APIResponse<Article[]> =
        await response.json();

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
