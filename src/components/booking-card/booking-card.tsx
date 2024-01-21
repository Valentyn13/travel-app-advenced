import { FC } from "react"
import { IBooking } from "../../types/booking.types"
import { formatDate } from "../../helpers/date.helpers"

type Props ={
    booking: IBooking
}
const BookingCard:FC<Props> = ({booking}) => {
    const {guests, trip, date,totalPrice} = booking
 return(
    <li data-test-id="booking" className="booking">
    <h3 data-test-id="booking-title" className="booking__title">{trip.title}</h3>
    <span data-test-id="booking-guests" className="booking__guests">
      {guests} guests
    </span>
    <span data-test-id="booking-date" className="booking__date">
      { formatDate(date)}
    </span>
    <span data-test-id="booking-total" className="booking__total">
      {totalPrice} $
    </span>
    <button
      data-test-id="booking-cancel"
      className="booking__cancel"
      title="Cancel booking"
    >
      <span className="visually-hidden">Cancel booking</span>
      ×
    </button>
  </li>
 )
}

export default BookingCard;