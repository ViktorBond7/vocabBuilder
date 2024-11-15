import { createSlice } from "@reduxjs/toolkit";
import { deleteWord, fetchWords } from "./operations";

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

      .addCase(deleteWord.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      // .addCase(deleteWord.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.items = state.items.filter(
      //     (item) => item._id !== action.payload._id
      //   );
      // })
      .addCase(deleteWord.fulfilled, (state, action) => {
        state.loading = false;
        const idToRemove =
          action.payload._id || action.payload.id || action.payload; // Обробка різних варіантів
        state.items = state.items.filter((item) => item._id !== idToRemove);
      })
      .addCase(deleteWord.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export default wordSlice.reducer;
