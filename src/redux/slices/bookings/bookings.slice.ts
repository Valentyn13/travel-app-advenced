import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { cancelBooking, createBooking, getUserBookings } from "./actions";

import { IBookingList } from "../../../types/booking.types";

type State = {
  bookings: IBookingList;
  loading: boolean;
  error: null | unknown;
};

const initialState: State = {
  bookings: [],
  loading: false,
  error: null,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: "bookings",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserBookings.fulfilled, (state, action) => {
      state.bookings = [...action.payload];
      state.error = null;
      state.loading = false;
    });
    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.bookings.push(action.payload);
      state.error = null;
      state.loading = false;
    });
    builder.addCase(cancelBooking.fulfilled, (state, action) => {
      const { isDeleted, bookingId } = action.payload;
      if (isDeleted) {
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== bookingId
        );
      }
      state.loading = false;
      state.error = null;
    });
    builder.addMatcher(
      isAnyOf(
        getUserBookings.pending,
        createBooking.pending,
        cancelBooking.pending
      ),
      (state) => {
        state.error = null;
        state.loading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        getUserBookings.rejected,
        createBooking.rejected,
        cancelBooking.rejected
      ),
      (state, action) => {
        state.error = action.error;
        state.loading = false;
      }
    );
  },
});

export { actions, reducer, name };
