import { FC, useEffect, useState } from "react";
import BookingList from "../../components/booking-list/booking-list";
import Preloader from "../../components/preloader/preloadert";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserBookings } from "../../redux/slices/bookings/actions";
import { ToastContainer } from "react-toastify";
import { toastifyEmitter } from "../../helpers/toastify-emmiter.helper";

const BookingsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { bookings, loading } = useAppSelector((state) => state.bookings);

  const [isCancelingSucces, setIsCancelingSucces] = useState<
    "succes" | "error" | "default"
  >("default");

  useEffect(() => {
    dispatch(getUserBookings());
  }, [dispatch]);

  useEffect(() => {
    toastifyEmitter(
      isCancelingSucces,
      "Booking was canceled",
      "Error while canceling booking"
    );
    setIsCancelingSucces("default");
  }, [isCancelingSucces]);

  return (
    <>
      {loading && <Preloader />}
      <ToastContainer />
      <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        <BookingList
          bookings={bookings}
          setIsCancelingSucces={setIsCancelingSucces}
        />
      </main>
    </>
  );
};

export default BookingsPage;
