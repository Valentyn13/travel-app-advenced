import { ITripList } from "../types/trip.types";

export const filterTrips = (
    trips: ITripList,
    filters: { title?: string; duration?: string; level?: string }
  ): ITripList => {
    return trips.filter(trip => {
      const titleMatch = !filters.title || trip.title.toLowerCase().includes(filters.title.toLowerCase());
      
      let durationMatch = true;
      if (filters.duration) {
        const courseDuration = trip.duration;
        switch (filters.duration) {
          case '0_x_5':
            durationMatch = courseDuration < 5;
            break;
          case '5_x_10':
            durationMatch = courseDuration >= 5 && courseDuration <= 10;
            break;
          case '10':
            durationMatch = courseDuration > 10;
            break;
          default:
            durationMatch = true;
        }
      }
  
      const levelMatch = !filters.level || trip.level === filters.level;
  
      return titleMatch && durationMatch && levelMatch;
    });
  }