import {  useState } from "react";
import { Navigate, Route, Routes  } from "react-router-dom";

import Layout from "./pages/layout/layout";
import MainPage from "./pages/main/main";
import SignUpPage from "./pages/sign-up/sign-up";
import SignInPage from "./pages/sign-in/sign-in";
import TripDeteilsPage from "./pages/trip-details/trip-details";
import BookingsPage from "./pages/bookings/bookings";

import { BOOKINGS } from "./data/data";
import { IBookingList } from "./types/booking.types";
import { ROUTES } from "./types/routes.types";
import PrivateRoute from "./components/private-route/private-rote";
import { useAppSelector } from "./redux/hooks";


const App =() => {

  const user = useAppSelector(state => state.user.user)
  
  const [bookings, setBookings] = useState<IBookingList>(BOOKINGS)

  return (
    <>
      <Routes>
          <Route path={ROUTES.MAIN} element={<Layout/>}>
              <Route index element={
                  <MainPage/>
                }/>
              <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>}/>
              <Route path={ROUTES.SIGN_IN} element={<SignInPage/>}/>
              <Route path={ROUTES.TRIP_DETAILS} element={
                <PrivateRoute user={user} redirectPath={ROUTES.SIGN_IN}>
                  <TripDeteilsPage bookings={bookings} setBookings={setBookings}/>
                </PrivateRoute>
                }/>
              <Route path={ROUTES.BOOKINGS} element={
                <PrivateRoute user={user} redirectPath={ROUTES.SIGN_IN}>
                  <BookingsPage setBookings={setBookings} bookings={bookings}/>
                </PrivateRoute>
              }/>
              <Route path="*" element={
                  <Navigate to={ROUTES.MAIN}/>
              }/>
          </Route>
      </Routes>
    </>
  )
}

export default App
