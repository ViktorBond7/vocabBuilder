import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWords = createAsyncThunk(
  "words/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("words/all", {
        params: {
          limit: 7,
          page: page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWord = createAsyncThunk(
  "words/deleteWord",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`words/delete/${id}`);
      console.log("hghghgghghghghghghghgh", response);
      console.log("Response status:", response.status);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
