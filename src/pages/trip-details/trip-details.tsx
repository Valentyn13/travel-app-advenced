import { useLocation } from "react-router";
 import { ITrip } from "../../types/trip.types";
import { Dispatch, FC, SetStateAction, useState } from "react";
import TripPopup from "./trip-popup";
import { IUser } from "../../types/user.types";
import { IBookingList } from "../../types/booking.types";
import Button from "../../components/common/button/button";

type ITripDetails ={
  trip: ITrip
}

type Props = {
  user:null|IUser;
  bookings:IBookingList
  setBookings: Dispatch<SetStateAction<IBookingList>>
}

const TripDeteilsPage:FC<Props> = ({user, bookings, setBookings}) => {

  const location = useLocation()

  const {trip} = location.state as ITripDetails
  const {title, image, description, duration, price, level} = trip

  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  const handleOpenBookModal = () => {
    setIsBookModalOpen(true)
  }
  const handleCloseBookModal = () => {
    setIsBookModalOpen(false)
  }

    return(
        <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img
            data-test-id="trip-details-image"
            src={image}
            className="trip__img"
            alt="trip photo"
          />
          <div className="trip__content">
            <div className="trip-info">
              <h3 data-test-id="trip-details-title" className="trip-info__title">
                {title}
              </h3>
              <div className="trip-info__content">
              <img className="trip-info__calendar-img" src="/src/assets/images/calendar.svg" alt="calendar" />
                <span
                  data-test-id="trip-details-duration"
                  className="trip-info__duration"
                >
                  <strong>{duration}</strong> days
                </span>
                <span data-test-id="trip-details-level" className="trip-info__level">
                  {level}
                </span>
              </div>
            </div>
            <div
              data-test-id="trip-details-description"
              className="trip__description"
            >
              {description}
            </div>
            <div className="trip-price">
              <span>Price</span>
              <strong
                data-test-id="trip-details-price-value"
                className="trip-price__value"
              >
                {price} $
              </strong>
            </div>
            <Button
              onClick={handleOpenBookModal}
              children={'Book a trip'}
              testId="trip-details-button"
              aditionClassNames="trip__button"
            />
          </div>
        </div>
        {isBookModalOpen && (
        <TripPopup 
        trip={trip} 
        onClose={handleCloseBookModal}
        user={user}
        bookings={bookings}
        setBookings={setBookings}
        />)}
      </main>
    )
}

export default TripDeteilsPage;