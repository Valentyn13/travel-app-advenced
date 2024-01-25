import httpApi from "./http.service";
import { BASE_URL } from "./constants/constants";

import { ITrip, ITripList } from "../types/trip.types";

class TripApi {
  #getAll = "/trips";
  #getDetails = "/trips/";

  async getAllTrips(): Promise<ITripList> {
    return httpApi.load(`${BASE_URL}${this.#getAll}`, {
      method: "GET",
      payload: null,
      hasAuth: true,
      contentType: "application/json",
    });
  }

  async getTripDetails(tripId: string): Promise<ITrip> {
    return httpApi.load(`${BASE_URL}${this.#getDetails}${tripId}`, {
      method: "GET",
      payload: null,
      hasAuth: true,
      contentType: "application/json",
    });
  }
}

const tripApi = new TripApi();
export default tripApi;
