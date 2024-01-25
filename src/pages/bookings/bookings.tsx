import BookingList from "../../components/booking-list/booking-list";
import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";


const BookingsPage: FC = () => {
  const bookings = useAppSelector(state => state.bookings.bookings)
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <BookingList bookings={bookings} />
    </main>
  );
};

export default BookingsPage;
