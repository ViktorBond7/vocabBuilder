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
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
      state.filters.isIrregular = null;
      state.page = 1;
    },
    setIsIrregular(state, action) {
      state.filters.isIrregular = action.payload;
      state.page = 1;
    },
    resetPageState(state) {
      state.page = 1;
      state.items = [];
      state.totalPages = 0;
      state.filters = { keyword: "", category: "", isIrregular: null };
    },
  },

  extraReducers: (builder) =>
    builder

      .addCase(fetchWords.fulfilled, (state, action) => {
        console.log("actionAll", action);
        state.loading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchWords.rejected, (state, action) => {
        if (action.error.name === "AbortError") return;
      })

      .addCase(fetchWordsOwn.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchWordsOwn.rejected, (state, action) => {
        if (action.error.name === "AbortError") return;
      })

      .addCase(deleteWord.fulfilled, (state, action) => {
        state.loading = false;

        state.items = state.items.filter(
          (item) => item._id !== action.payload.id,
        );
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

      .addCase(addWord.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })

      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = false;
        },
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state) => {
          state.loading = false;
          state.error = true;
        },
      ),
});

export const {
  setKeyword,
  setPage,
  setCategory,
  setIsIrregular,
  resetPageState,
} = wordSlice.actions;

export default wordSlice.reducer;
