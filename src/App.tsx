import { Navigate, Route, Routes } from "react-router-dom"
import { ROUTES } from "./types/routes.types"
import Layout from "./pages/layout/layout"
import MainPage from "./pages/main/main"
import SignUpPage from "./pages/sign-up/sign-up"
import SignInPage from "./pages/sign-in/sign-in"
import TripDeteilsPage from "./pages/trip-details/trip-details"
import BookingsPage from "./pages/bookings/bookings"
import { useState } from "react"
import { ITripList } from "./types/trip.types"
import { BOOKINGS, TRIPS } from "./data/data"
import { IBookingList } from "./types/booking.types"

const App =() => {
  const [trips, setTrips] = useState<ITripList>(TRIPS)
  const [bookings, setBookings] = useState<IBookingList>(BOOKINGS)

  return (
    <>
      <Routes>
          <Route path={ROUTES.MAIN} element={<Layout/>}>
              <Route index element={<MainPage onTripsChange={setTrips} trips={trips}/>}/>
              <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>}/>
              <Route path={ROUTES.SIGN_IN} element={<SignInPage/>}/>
              <Route path={ROUTES.TRIP_DETAILS} element={<TripDeteilsPage/>}/>
              <Route path={ROUTES.BOOKINGS} element={<BookingsPage setBookings={setBookings} bookings={bookings}/>}/>
              <Route path="*" element={<Navigate to={ROUTES.MAIN}/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
