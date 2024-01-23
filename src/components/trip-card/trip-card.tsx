import { ITrip } from "../../types/trip.types";
import { FC } from "react";
import LinkButton from "../common/link-button/link-button";

type Props = {
    trip: ITrip
}

const TripCard:FC<Props> = ({trip}) => {
    const {image,title,duration,level,price, id} = trip
    return(
        <li data-test-id="trip-card" className="trip-card">
        <img
          data-test-id="trip-card-image"
          src={image}
          alt="trip photo"
        />
        <div className="trip-card__content">
          <div className="trip-info">
            <h3 data-test-id="trip-card-title" className="trip-info__title">
              {title}
            </h3>
            <div className="trip-info__content">
              <img className="trip-info__calendar-img"  src="/src/assets/images/calendar.svg" alt="calendar" />
              <span
                data-test-id="trip-card-duration"
                className="trip-info__duration"
              >
                <strong>{duration}</strong> days
              </span>
              <span data-test-id="trip-card-level" className="trip-info__level">
                {level}
              </span>
            </div>
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong
              data-test-id="trip-card-price-value"
              className="trip-price__value"
            >
              {price} $
            </strong>
          </div>
        </div>
        <LinkButton
          to={`/trip/${id}`}
          state={{trip}}
          children={`Discover a trip`}
          testId="trip-card-link"
        />
      </li>
    )
}

export default TripCard;