import { ChangeEvent, Dispatch, FC, useState } from "react";

import TripList from "../../components/trip-list/trip-list";
import TripFilter from "../../components/tip-filter/trip-filter";

import { filterTrips } from "../../helpers/filter.helpers";
import { ITripList } from "../../types/trip.types";
import { DURATION } from "../../types/filter.types";

type Props = {
  trips: ITripList;
  onTripsChange: Dispatch<React.SetStateAction<ITripList>>;
};

const MainPage: FC<Props> = ({ trips }) => {
  const [durationValue, setDurationValue] = useState<string>(DURATION.UNACTIVE);
  const [levelValue, setLevelValue] = useState<string>("");
  const [titleValue, setTitleValue] = useState<string>("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setTitleValue(title);
  };

  const handleDurationChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const duration = e.target.value;
    setDurationValue(duration);
  };

  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const level = e.target.value;
    setLevelValue(level);
  };

  return (
    <main>
      <TripFilter
        titleValue={titleValue}
        handleDurationChange={handleDurationChange}
        handleLevelChange={handleLevelChange}
        handleTitleChange={handleTitleChange}
      />
      <TripList
        trips={filterTrips(trips, {
          title: titleValue,
          duration: durationValue,
          level: levelValue,
        })}
      />
    </main>
  );
};

export default MainPage;
