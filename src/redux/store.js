import { configureStore } from "@reduxjs/toolkit";
import campersSlice from "./campers/campersSlice";
import filterSlice from "./filters/slice";

export const store = configureStore({
  reducer: {
    campers: campersSlice,
    filters: filterSlice,
  },
});
