import { FC } from "react";

import LinkButton from "../common/link-button/link-button";
import { ITrip } from "../../types/trip.types";
import TripInfo from "../trip-info/trip-info";

type Props = {
  trip: ITrip;
};

const TripCard: FC<Props> = ({ trip }) => {
  const { image, title, duration, level, price, id } = trip;
  return (
    <li data-test-id="trip-card" className="trip-card">
      <img data-test-id="trip-card-image" src={image} alt="trip photo" />
      <div className="trip-card__content">
        <TripInfo title={title} duration={duration} level={level}/>
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
        state={{ trip }}
        children={`Discover a trip`}
        testId="trip-card-link"
      />
    </li>
  );
};

export default TripCard;
