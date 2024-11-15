import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUserToken } from "../auth/selectors";

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

// export const deleteWord = createAsyncThunk(
//   "words/deleteWord",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`words/delete/${id}`);
//       console.log("hghghgghghghghghghghgh", response);
//       console.log("Response status:", response.status);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);

//     }
//   }
// );

export const deleteWord = createAsyncThunk(
  "words/deleteWord",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`words/delete/${id}`);
      return response.data;
    } catch (error) {
      // Викидає помилку, якщо статус відповіді не є 2xx
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const editWord = createAsyncThunk(
  "word/editWord",
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`words/edit/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
