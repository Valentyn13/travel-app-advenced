import { useParams } from "react-router";
import { FC, useEffect, useState } from "react";

import TripPopup from "./trip-popup";
import Button from "../../components/common/button/button";
import TripInfo from "../../components/trip-info/trip-info";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getTripDetails } from "../../redux/slices/trips/actions";
import Preloader from "../../components/preloader/preloadert";


const TripDeteilsPage: FC = () => {
  const {tripId} = useParams()
  const dispatch = useAppDispatch()

  const details = useAppSelector(state => state.trips.current)
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const handleOpenBookModal = () => setIsBookModalOpen(true);
  const handleCloseBookModal = () => setIsBookModalOpen(false);

  useEffect(() => {
    dispatch(getTripDetails((tripId) as string))
  
  },[dispatch,tripId])

  return (
    <main className="trip-page">
      {details && (
      <>
      <h1 className="visually-hidden">Travel App</h1>
      <div className="trip">
        <img
          data-test-id="trip-details-image"
          src={details.image}
          className="trip__img"
          alt="trip photo"
        />
        <div className="trip__content">
          <TripInfo title={details.title} duration={details.duration} level={details.level}/>
          <div
            data-test-id="trip-details-description"
            className="trip__description"
          >
            {details.description}
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong
              data-test-id="trip-details-price-value"
              className="trip-price__value"
            >
              {details.price} $
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
          trip={details}
          onClose={handleCloseBookModal}
        />
      )}
      <Preloader/>
      </>
      )}

    </main>
  );
};

export default TripDeteilsPage;
