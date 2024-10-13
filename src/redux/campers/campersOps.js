import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66bdcaa374dfc195586d9dcb.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/campers", {
        params: {
          limit: 4,
          page: page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
