import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWords = createAsyncThunk(
  "words/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("words/categories");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
