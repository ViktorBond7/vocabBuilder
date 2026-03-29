import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
  "words/fetchTasks",
  async (_, thunkAPI) => {
    try {
      console.log("Fetching tasks...");
      const response = await axios.get("words/tasks");
      // console.log("Fetched tasks:", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const sendAnswers = createAsyncThunk(
  "words/sendAnswers",
  async (data, thunkAPI) => {
    try {
      console.log("Sending answers...");
      const response = await axios.post("words/answers", data);
      console.log("Sent answers:", response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
