import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
  "words/fetchTasks",
  async (_, thunkAPI) => {
    try {
      console.log("Fetching tasks...");
      const response = await axios.get("words/tasks");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchAnswers = createAsyncThunk(
  "words/fetchAnswers",
  async (data, thunkAPI) => {
    try {
      console.log("Fetching answers...");
      const response = await axios.post("words/answers", data);
      // console.log("Fetched answers:", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
