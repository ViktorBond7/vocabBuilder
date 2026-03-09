import { createSlice } from "@reduxjs/toolkit";
import { deleteWord, fetchWords, fetchWordsOwn } from "./operations";

const wordSlice = createSlice({
  name: "words",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchWords.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
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
        state.items = action.payload;
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
        console.log("action.payload787878", action.payload);
        console.log("JSON.parse(JSON.stringify(state))", JSON.parse(JSON.stringify(state)));

        state.loading = false;

        state.items.results = state.items.results.filter(
          (item) => item._id !== action.payload.id,
        );
      })
      .addCase(deleteWord.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default wordSlice.reducer;
