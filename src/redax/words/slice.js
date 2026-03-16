import { createSlice } from "@reduxjs/toolkit";
import {
  addWord,
  deleteWord,
  editWord,
  fetchCategories,
  fetchWords,
  fetchWordsOwn,
} from "./operations";

const wordSlice = createSlice({
  name: "words",
  initialState: {
    items: [],
    categories: [],
    filters: { keyword: "", category: "", isIrregular: null },
    totalPages: 0,
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setKeyword(state, action) {
      state.filters.keyword = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
    setIsIrregular(state, action) {
      state.filters.isIrregular = action.payload;
    },
    resetPageState(state) {
      state.page = 1;
      state.items = [];
      state.totalPages = 0;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchWords.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.page;
      })
      .addCase(fetchWords.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(fetchWordsOwn.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchWordsOwn.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
        state.page = action.payload.page;
      })
      .addCase(fetchWordsOwn.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(deleteWord.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.loading = false;

        state.items = state.items.filter(
          (item) => item._id !== action.payload.id,
        );
      })
      .addCase(deleteWord.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(editWord.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(editWord.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.items.findIndex(
          (item) => item._id === action.payload._id,
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(editWord.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(addWord.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addWord.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addWord.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const {
  setKeyword,
  setPage,
  setCategory,
  setIsIrregular,
  resetPageState,
} = wordSlice.actions;

export default wordSlice.reducer;
