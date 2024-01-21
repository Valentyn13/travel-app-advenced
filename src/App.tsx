import { Navigate, Route, Routes } from "react-router-dom"
import { ROUTES } from "./types/routes.types"
import Layout from "./pages/layout/layout"
import MainPage from "./pages/main/main"
import SignUpPage from "./pages/sign-up/sign-up"
import SignInPage from "./pages/sign-in/sign-in"
import TripDeteilsPage from "./pages/trip-details/trip-details"
import BookingsPage from "./pages/bookings/bookings"

const App =() => {
  return (
    <>
      <Routes>
          <Route path={ROUTES.MAIN} element={<Layout/>}>
              <Route index element={<MainPage/>}/>
              <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>}/>
              <Route path={ROUTES.SIGN_IN} element={<SignInPage/>}/>
              <Route path={ROUTES.TRIP_DETAILS} element={<TripDeteilsPage/>}/>
              <Route path={ROUTES.BOOKINGS} element={<BookingsPage/>}/>
              <Route path="*" element={<Navigate to={ROUTES.MAIN}/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
