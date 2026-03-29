import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, sendAnswers } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    answers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.tasks;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(sendAnswers.fulfilled, (state, action) => {
        console.log("Received answers in slice:", action.payload);
        state.loading = false;
        state.answers = action.payload;
      }),
});

export default tasksSlice.reducer;
