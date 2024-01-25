import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { getAllTrips, getTripDetails } from "./actions";

import { ITrip, ITripList } from "../../../types/trip.types";

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
    builder.addCase(getAllTrips.fulfilled, (state, action) => {
      state.trips = [...action.payload];
      state.tripsLoading = false;
      state.error = null;
    });
    builder.addCase(getTripDetails.fulfilled, (state, action) => {
      state.current = action.payload;
      state.error = null;
      state.tripsLoading = false;
    });
    builder.addMatcher(
      isAnyOf(getAllTrips.pending, getTripDetails.pending),
      (state) => {
        state.error = null;
        state.tripsLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(getAllTrips.rejected, getTripDetails.rejected),
      (state, action) => {
        state.error = action.error;
        state.tripsLoading = false;
      }
    );
  },
});

export { reducer, actions, name };
