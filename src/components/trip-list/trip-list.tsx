import { FC } from "react";

import TripCard from "../trip-card/trip-card";
import { ITripList } from "../../types/trip.types";

type Props = {
  trips: ITripList;
};
const TripList: FC<Props> = ({ trips }) => {
  return (
    <section className="trips">
      <h2 className="visually-hidden">Trips List</h2>
      <ul className="trip-list">
        {trips.map((trip) => {
          return <TripCard key={trip.id} trip={trip} />;
        })}
      </ul>
    </section>
  );
};

export default TripList;
