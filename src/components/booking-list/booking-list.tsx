import { Dispatch, FC, SetStateAction } from "react"
import { IBookingList } from "../../types/booking.types"
import BookingCard from "../booking-card/booking-card"
import { sortByDate } from "../../helpers/date.helpers"

type Props = {
    bookings: IBookingList
    setBookings: Dispatch<SetStateAction<IBookingList>>
}

const BookingList:FC<Props> = ({bookings, setBookings}) => {
    const sortedBookings = sortByDate(bookings)
    return(
        <ul className="bookings__list">
            {sortedBookings.map(booking => {
                return <BookingCard bookings={bookings} key={booking.id} setBookings={setBookings} booking={booking}/>
            })}
        </ul>
    )
}

export default BookingList;