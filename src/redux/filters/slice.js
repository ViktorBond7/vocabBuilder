import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    loading: false,
    error: null,
    vehicleEquipment: [],
  },
  reducers: {
    changeFilter: (state, action) => {
      state.location = action.payload;
    },
    // addVehicle: (state, action) => {
    //   if (!state.vehicleEquipment.find((item) => item === action.payload)) {
    //     state.vehicleEquipment.push(action.payload);
    //   }
    // },
    addVehicle: (state, action) => {
      if (!state.vehicleEquipment.includes(action.payload)) {
        state.vehicleEquipment.push(action.payload);
      }
    },
    removeVehicle: (state, action) => {
      state.vehicleEquipment = state.vehicleEquipment.filter(
        (item) => item !== action.payload
      );
    },
    // toggleVehicle: (state, action) => {
    //   if (state.vehicleEquipment.includes(action.payload)) {
    //     state.vehicleEquipment = state.vehicleEquipment.filter(
    //       (item) => item !== action.payload
    //     );
    //   } else {
    //     state.vehicleEquipment.push(action.payload);
    //   }
    // },
  },
});

export const { changeFilter, removeVehicle, addVehicle } = filterSlice.actions;
export default filterSlice.reducer;
