import { ChangeEvent, FC, FormEvent, useState } from "react";

import Button from "../../components/common/button/button";
import Input from "../../components/common/input/input";
import Label from "../../components/common/label/label";

import {
  formatDate,
  getTomorrowDate,
  isTomorrowOrLater,
} from "../../helpers/date.helpers";
import { ITrip } from "../../types/trip.types";
import TripInfo from "../../components/trip-info/trip-info";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IUser } from "../../types/user.types";
import { CreateBookingDto } from "../../types/booking.types";
import { createBooking } from "../../redux/slices/bookings/actions";

type Props = {
  trip: ITrip;
  onClose: () => void;
};

const TripPopup: FC<Props> = ({ trip, onClose }) => {
  const { title, duration, level, id } = trip;

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user) as IUser;

  const [guests, setGuests] = useState<number>(1);
  const [date, setDate] = useState(formatDate(getTomorrowDate().toISOString()));
  const [isNumberOfGuestsValid, setIsNumberOfGuestsValid] = useState(true);

  const validateNumberOfGuests = (guests: number) =>
    guests < 1 || guests > 10
      ? setIsNumberOfGuestsValid(false)
      : setIsNumberOfGuestsValid(true);

  const handleSetAndValidateDate = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    const isTomorrow = isTomorrowOrLater(date);
    isTomorrow
      ? setDate(date)
      : setDate(formatDate(getTomorrowDate().toISOString()));
  };

  const handleSetGuests = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    validateNumberOfGuests(value);
    setGuests(value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBooking: CreateBookingDto = {
      userId: user.id,
      tripId: id,
      guests,
      date,
    };
    dispatch(createBooking(newBooking));
    onClose();
  };

  return (
    <div>
      <div className="modal">
        <div data-test-id="book-trip-popup" className="book-trip-popup">
          <button
            onClick={onClose}
            data-test-id="book-trip-popup-close"
            className="book-trip-popup__close"
          >
            ×
          </button>
          <form
            onSubmit={handleFormSubmit}
            className="book-trip-popup__form"
            autoComplete="off"
          >
            <TripInfo title={title} duration={duration} level={level} />
            <Label className="input" name="Date">
              <Input
                value={date}
                onChange={handleSetAndValidateDate}
                testId="book-trip-popup-date"
                name="date"
                type="date"
                required
              />
            </Label>
            <Label
              className="input"
              name="Number of guests"
              isInputError={!isNumberOfGuestsValid}
              errorMessage="Only from 0 to 10 guests"
            >
              <Input
                onChange={handleSetGuests}
                value={`${guests}`}
                name="quests"
                testId="book-trip-popup-guests"
                type="number"
                required
              />
            </Label>
            <span className="book-trip-popup__total">
              Total:
              <output
                data-test-id="book-trip-popup-total-value"
                className="book-trip-popup__total-value"
              >
                {guests * trip.price}$
              </output>
            </span>
            <Button
              testId="book-trip-popup-submit"
              type="submit"
              disabled={!isNumberOfGuestsValid}
              children={"Book a trip"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripPopup;
