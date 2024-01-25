import { FC } from "react";

import BookingCard from "../booking-card/booking-card";
import { IBookingList } from "../../types/booking.types";
import { sortByDate } from "../../helpers/date.helpers";

type Props = {
  bookings: IBookingList;
};

const BookingList: FC<Props> = ({ bookings }) => {
  const sortedBookings = sortByDate(bookings);
  return (
    <ul className="bookings__list">
      {sortedBookings.map((booking) => {
        return <BookingCard key={booking.id} booking={booking} />;
      })}
    </ul>
  );
};

export default BookingList;
