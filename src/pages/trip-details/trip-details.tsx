import { useLocation } from "react-router";
 import { ITrip } from "../../types/trip.types";

type ITripDetails ={
  trip: ITrip
}

const TripDeteilsPage = () => {

  const location = useLocation()
 //  const { tripId } = useParams()

  const {trip} = location.state as ITripDetails
  const {title, image, description, duration, price, level} = trip
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
            <button
              data-test-id="trip-details-button"
              className="trip__button button"
            >
              Book a trip
            </button>
          </div>
        </div>
      </main>
    )
}

export default TripDeteilsPage;