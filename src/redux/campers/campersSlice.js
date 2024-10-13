import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./campersOps";

export const selectError = (state) => state.campers.error;
export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectHasMore = (state) => state.campers.hasMore;
export const selectPage = (state) => state.campers.page;
export const selectFavorites = (state) => state.campers.favorites;

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    error: null,
    hasMore: true,
    page: 1,
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },

  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    addFavorite(state, action) {
      if (!state.favorites.find((item) => item._id === action.payload._id)) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },

    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;

        const newItems = action.payload.filter(
          (item) =>
            !state.items.some((existingItem) => existingItem._id === item._id)
        );

        state.items = [...state.items, ...newItems];

        if (action.payload.length < 4) {
          state.hasMore = false;
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { incrementPage, addFavorite, removeFavorite } =
  campersSlice.actions;

export default campersSlice.reducer;
