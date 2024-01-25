import { ChangeEvent, FC, useEffect, useState } from "react";

import Preloader from "../../components/preloader/preloadert";
import TripList from "../../components/trip-list/trip-list";
import TripFilter from "../../components/tip-filter/trip-filter";

import { filterTrips } from "../../helpers/filter.helpers";
import { DURATION } from "../../types/filter.types";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAuthenticatedUser } from "../../redux/slices/user/actions";
import { ROUTES } from "../../types/routes.types";
import { getAllTrips } from "../../redux/slices/trips/actions";

const MainPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, error, loading } = useAppSelector((state) => state.user);
  const { trips, tripsLoading } = useAppSelector((state) => state.trips);

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

  useEffect(() => {
    if (!user && !loading) {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate(ROUTES.SIGN_IN);
        return;
      }
      dispatch(getAuthenticatedUser());
    }

    if (error) navigate(ROUTES.SIGN_IN);
  }, [dispatch, user, error, loading, navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && user) dispatch(getAllTrips());
  }, [dispatch, loading, user]);

  return (
    <>
      {(loading || tripsLoading) && <Preloader />}
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
    </>
  );
};

export default MainPage;
