import { configureStore } from "@reduxjs/toolkit";
import {reducer as bookingsReducer} from './slices/bookings/bookings.slice'
import {reducer as tripsReducer} from './slices/trips/trips.slice'
import { reducer as userReducer } from './slices/user/user.slice'
export const store = configureStore({
    reducer:{
        bookings:bookingsReducer,
        trips:tripsReducer,
        user: userReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch