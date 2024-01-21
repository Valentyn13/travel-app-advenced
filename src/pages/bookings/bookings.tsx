import { FC } from "react";
import { IBookingList } from "../../types/booking.types";
import BookingList from "../../components/booking-list/booking-list";

type Props = {
  bookings: IBookingList
}

const BookingsPage:FC<Props> = ({bookings}) => {
    return(
        <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        <BookingList bookings={bookings}/>
      </main>
    )
}

export default BookingsPage;