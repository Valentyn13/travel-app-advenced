import { BASE_URL } from "./constants/constants";
import httpApi from "./http.service";

import {
  CreateBookingDto,
  IBooking,
  IBookingList,
} from "../types/booking.types";

class BookingApi {
  #apiPath = "/bookings";

  async getUserBookings(): Promise<IBookingList> {
    return httpApi.load(`${BASE_URL}${this.#apiPath}`, {
      method: "GET",
      payload: null,
      hasAuth: true,
      contentType: "application/json",
    });
  }

  async createBooking(booking: CreateBookingDto): Promise<IBooking> {
    return httpApi.load(`${BASE_URL}${this.#apiPath}`, {
      method: "POST",
      payload: JSON.stringify(booking),
      hasAuth: true,
      contentType: "application/json",
    });
  }

  async cancelBooking(bookingId: string): Promise<boolean> {
    return httpApi.load(`${BASE_URL}${this.#apiPath}/${bookingId}`, {
      method: "DELETE",
      payload: null,
      hasAuth: true,
      contentType: "application/json",
    });
  }
}

const bookingApi = new BookingApi();

export default bookingApi;
