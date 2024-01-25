import { FC, useEffect } from "react";
import BookingList from "../../components/booking-list/booking-list";
import Preloader from "../../components/preloader/preloadert";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getUserBookings } from "../../redux/slices/bookings/actions";

const BookingsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { bookings, loading } = useAppSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getUserBookings());
  }, [dispatch]);

  return (
    <>
      {loading && <Preloader />}
      <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        <BookingList bookings={bookings} />
      </main>
    </>
  );
};

export default BookingsPage;
