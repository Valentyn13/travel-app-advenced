import { createSlice } from "@reduxjs/toolkit";
import { ITrip, ITripList } from "../../../types/trip.types";
import { getAllTrips, getTripDetails } from "./actions";

type State = {
  trips: ITripList;
  current: ITrip | null;
  tripsLoading: boolean;
  error: unknown | null;
};

const initialState: State = {
  trips: [],
  current: null,
  tripsLoading: false,
  error: null,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: "trips",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTrips.pending, (state) => {
      state.tripsLoading = true;
      state.error = null;
    });
    builder.addCase(getAllTrips.fulfilled, (state, action) => {
      state.trips = [...action.payload];
      state.tripsLoading = false;
      state.error = null;
    });
    builder.addCase(getAllTrips.rejected, (state, action) => {
      state.error = action.error;
      state.tripsLoading = false;
    });
    builder.addCase(getTripDetails.pending, (state) => {
      state.error = null;
      state.tripsLoading = true;
    });
    builder.addCase(getTripDetails.fulfilled, (state, action) => {
      state.current = action.payload;
      state.error = null;
      state.tripsLoading = false;
    });
    builder.addCase(getTripDetails.rejected, (state, action) => {
      state.error = action.error;
      state.tripsLoading = false;
    });
  },
});

export { reducer, actions, name };
