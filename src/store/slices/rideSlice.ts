import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  ride: null,
};

export const rideSlice = createSlice({
  name: 'ride',
  initialState,
  reducers: {
    setRide: (state, action) => {
      state.ride = action.payload;
    },
  }
});

export const {setRide} = rideSlice.actions;

export const selectRide = (state) => state.ride.ride;


export default rideSlice.reducer;