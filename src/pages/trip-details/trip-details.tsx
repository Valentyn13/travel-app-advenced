import { useNavigate, useParams } from "react-router";
import { FC, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Preloader from "../../components/preloader/preloadert";
import TripPopup from "./trip-popup";
import Button from "../../components/common/button/button";
import TripInfo from "../../components/trip-info/trip-info";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getTripDetails } from "../../redux/slices/trips/actions";

import { ROUTES } from "../../types/routes.types";
import { toastifyEmitter } from "../../helpers/toastify-emmiter.helper";
import { getAuthenticatedUser } from "../../redux/slices/user/actions";
import { IUser } from "../../types/user.types";

const TripDeteilsPage: FC = () => {
  const { tripId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const details = useAppSelector((state) => state.trips.current);
  const isLoading = useAppSelector((state) => state.trips.tripsLoading);
  const [isBookingSucces, setIsBookingSucces] = useState<
    "error" | "succes" | "default"
  >("default");
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  const handleOpenBookModal = () => setIsBookModalOpen(true);
  const handleCloseBookModal = () => setIsBookModalOpen(false);

  useEffect(() => {
    dispatch(getTripDetails(tripId as string))
      .unwrap()
      .catch(() => navigate(ROUTES.SIGN_IN));
    dispatch(getAuthenticatedUser())
      .unwrap()
      .then((user) => setUser(user))
      .catch(() => navigate(ROUTES.SIGN_IN));
  }, [dispatch, tripId, navigate]);

  useEffect(() => {
    toastifyEmitter(
      isBookingSucces,
      "New booking was added",
      "Error while adding booking"
    );
    setIsBookingSucces("default");
  }, [isBookingSucces]);
  return (
    <main className="trip-page">
      {isLoading && <Preloader />}
      <ToastContainer />
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
              <TripInfo
                title={details.title}
                duration={details.duration}
                level={details.level}
              />
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
              user={user}
              trip={details}
              onClose={handleCloseBookModal}
              setIsBookingSucces={setIsBookingSucces}
            />
          )}
        </>
      )}
    </main>
  );
};

export default TripDeteilsPage;
