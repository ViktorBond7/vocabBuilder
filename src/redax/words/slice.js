import { createSlice } from "@reduxjs/toolkit";
import {
  addWord,
  deleteWord,
  editWord,
  fetchWords,
  fetchWordsOwn,
} from "./operations";

const wordSlice = createSlice({
  name: "words",
  initialState: {
    items: [],
    keyword: "",
    totalPages: 0,
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setKeyword(state, action) {
      console.log("setKeyword action.payload", action.payload);
      state.keyword = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
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
        console.log("fetchWordsOwn.fulfilled action.payload", action.payload);
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
      }),
});

export const { setKeyword, setPage } = wordSlice.actions;

export default wordSlice.reducer;
