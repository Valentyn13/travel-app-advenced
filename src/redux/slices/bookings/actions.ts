import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  CreateBookingDto,
  IBooking,
  IBookingList,
} from "../../../types/booking.types";
import bookingApi from "../../../services/bookings.service";

interface cancelResponse {
  isDeleted: boolean;
  bookingId: string;
}

const getUserBookings = createAsyncThunk<IBookingList, void>(
  "user-bookings",
  async () => {
    const bookings = await bookingApi.getUserBookings();
    return bookings;
  }
);

const createBooking = createAsyncThunk<IBooking, CreateBookingDto>(
  "create-booking",
  async (data) => {
    const booking = await bookingApi.createBooking(data);
    return booking;
  }
);

const cancelBooking = createAsyncThunk<cancelResponse, string>(
  "cancel-booking",
  async (bookingId) => {
    const isDeleted = await bookingApi.cancelBooking(bookingId);
    return {
      isDeleted,
      bookingId,
    };
  }
);

export { getUserBookings, createBooking, cancelBooking };
