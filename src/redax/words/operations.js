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
          limit: 5,
          page,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteWord = createAsyncThunk(
  "words/deleteWord",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`words/delete/${_id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

export const editWord = createAsyncThunk(
  "word/editWord",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`words/edit/${id}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addWord = createAsyncThunk(
  "word/addWord",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("words/create", data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchWordsOwn = createAsyncThunk(
  "words/fetchWordsOwn",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("words/own", {
        params: {
          limit: 5,
          page,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
