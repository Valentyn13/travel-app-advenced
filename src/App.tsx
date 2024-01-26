import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./pages/layout/layout";
import MainPage from "./pages/main/main";
import SignUpPage from "./pages/sign-up/sign-up";
import SignInPage from "./pages/sign-in/sign-in";
import TripDeteilsPage from "./pages/trip-details/trip-details";
import BookingsPage from "./pages/bookings/bookings";

import { ROUTES } from "./types/routes.types";
import PrivateRoute from "./components/private-route/private-rote";

import "react-toastify/ReactToastify.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route
            path={ROUTES.TRIP_DETAILS}
            element={
              <PrivateRoute redirectPath={ROUTES.SIGN_IN}>
                <TripDeteilsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.BOOKINGS}
            element={
              <PrivateRoute redirectPath={ROUTES.SIGN_IN}>
                <BookingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute redirectPath={ROUTES.SIGN_IN}>
                <Navigate to={ROUTES.MAIN} />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
