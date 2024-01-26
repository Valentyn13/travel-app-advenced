import { Dispatch, FC, SetStateAction } from "react";

import BookingCard from "../booking-card/booking-card";
import { IBookingList } from "../../types/booking.types";
import { sortByDate } from "../../helpers/date.helpers";

type Props = {
  bookings: IBookingList;
  setIsCancelingSucces: Dispatch<
    SetStateAction<"error" | "succes" | "default">
  >;
};

const BookingList: FC<Props> = ({ bookings, setIsCancelingSucces }) => {
  const sortedBookings = sortByDate(bookings);
  return (
    <ul className="bookings__list">
      {sortedBookings.map((booking) => {
        return (
          <BookingCard
            key={booking.id}
            booking={booking}
            setIsCancelingSucces={setIsCancelingSucces}
          />
        );
      })}
    </ul>
  );
};

export default BookingList;
