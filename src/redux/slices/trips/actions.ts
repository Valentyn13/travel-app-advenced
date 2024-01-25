import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITrip, ITripList } from "../../../types/trip.types";
import tripApi from "../../../services/trips.service";

const getAllTrips = createAsyncThunk<ITripList, void>("get-all", async () => {
  const trips = await tripApi.getAllTrips();
  return trips;
});

const getTripDetails = createAsyncThunk<ITrip, string>(
  "get-details",
  async (tripId) => {
    const trip = await tripApi.getTripDetails(tripId);
    return trip;
  }
);

export { getAllTrips, getTripDetails };
