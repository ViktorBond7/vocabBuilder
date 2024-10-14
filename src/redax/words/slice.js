import { createSlice } from "@reduxjs/toolkit";
import { fetchWords } from "./operations";

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
        state.loading = true;
        state.error = true;
      }),
});

export default wordSlice.reducer;
