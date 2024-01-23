import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./pages/layout/layout";
import MainPage from "./pages/main/main";
import SignUpPage from "./pages/sign-up/sign-up";
import SignInPage from "./pages/sign-in/sign-in";
import TripDeteilsPage from "./pages/trip-details/trip-details";
import BookingsPage from "./pages/bookings/bookings";

import { BOOKINGS, TRIPS } from "./data/data";
import { IBookingList } from "./types/booking.types";
import { IUser } from "./types/user.types";
import { ITripList } from "./types/trip.types";
import { ROUTES } from "./types/routes.types";

const App =() => {
  const [trips, setTrips] = useState<ITripList>(TRIPS)
  const [bookings, setBookings] = useState<IBookingList>(BOOKINGS)
  const [user, setUser] = useState<null|IUser>(null)

  return (
    <>
      <Routes>
          <Route path={ROUTES.MAIN} element={<Layout/>}>
              <Route index element={<MainPage onTripsChange={setTrips} trips={trips}/>}/>
              <Route path={ROUTES.SIGN_UP} element={<SignUpPage setUser={setUser}/>}/>
              <Route path={ROUTES.SIGN_IN} element={<SignInPage setUser={setUser}/>}/>
              <Route path={ROUTES.TRIP_DETAILS} element={<TripDeteilsPage bookings={bookings} setBookings={setBookings} user={user}/>}/>
              <Route path={ROUTES.BOOKINGS} element={<BookingsPage setBookings={setBookings} bookings={bookings}/>}/>
              <Route path="*" element={<Navigate to={ROUTES.MAIN}/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
