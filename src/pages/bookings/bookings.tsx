import BookingList from "../../components/booking-list/booking-list";
import { Dispatch, FC, SetStateAction } from "react";
import { IBookingList } from "../../types/booking.types";

type Props = {
  bookings: IBookingList;
  setBookings: Dispatch<SetStateAction<IBookingList>>;
};

const BookingsPage: FC<Props> = ({ bookings, setBookings }) => {
  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <BookingList setBookings={setBookings} bookings={bookings} />
    </main>
  );
};

export default BookingsPage;
