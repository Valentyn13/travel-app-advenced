import { useLocation } from "react-router";
import { Dispatch, FC, SetStateAction, useState } from "react";

import TripPopup from "./trip-popup";
import Button from "../../components/common/button/button";
import { IBookingList } from "../../types/booking.types";
import { ITrip } from "../../types/trip.types";
import TripInfo from "../../components/trip-info/trip-info";

type ITripDetails = {
  trip: ITrip;
};

type Props = {
  bookings: IBookingList;
  setBookings: Dispatch<SetStateAction<IBookingList>>;
};

const TripDeteilsPage: FC<Props> = ({ bookings, setBookings }) => {
  const location = useLocation();
  const { trip } = location.state as ITripDetails;
  const { title, image, description, duration, price, level } = trip;

  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const handleOpenBookModal = () => setIsBookModalOpen(true);
  const handleCloseBookModal = () => setIsBookModalOpen(false);

  return (
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
          <TripInfo title={title} duration={duration} level={level}/>
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
            children={"Book a trip"}
            testId="trip-details-button"
            aditionClassNames="trip__button"
          />
        </div>
      </div>
      {isBookModalOpen && (
        <TripPopup
          trip={trip}
          onClose={handleCloseBookModal}
          bookings={bookings}
          setBookings={setBookings}
        />
      )}
    </main>
  );
};

export default TripDeteilsPage;
