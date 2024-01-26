import { Dispatch, FC, SetStateAction } from "react";

import { IBooking } from "../../types/booking.types";
import { formatDate } from "../../helpers/date.helpers";
import { useAppDispatch } from "../../redux/hooks";
import { cancelBooking } from "../../redux/slices/bookings/actions";

type Props = {
  booking: IBooking;
  setIsCancelingSucces: Dispatch<
    SetStateAction<"error" | "succes" | "default">
  >;
};

const BookingCard: FC<Props> = ({ booking, setIsCancelingSucces }) => {
  const { guests, trip, date, totalPrice, id } = booking;
  const dispatch = useAppDispatch();

  const handleCancelBooking = () => {
    dispatch(cancelBooking(id))
      .unwrap()
      .then(() => setIsCancelingSucces("succes"))
      .catch(() => setIsCancelingSucces("error"));
  };

  return (
    <li data-test-id="booking" className="booking">
      <h3 data-test-id="booking-title" className="booking__title">
        {trip.title}
      </h3>
      <span data-test-id="booking-guests" className="booking__guests">
        {guests} guests
      </span>
      <span data-test-id="booking-date" className="booking__date">
        {formatDate(date)}
      </span>
      <span data-test-id="booking-total" className="booking__total">
        {totalPrice} $
      </span>
      <button
        onClick={handleCancelBooking}
        data-test-id="booking-cancel"
        className="booking__cancel"
        title="Cancel booking"
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
};

export default BookingCard;
