import { ChangeEvent, FC } from "react";
import { DURATION, LEVEL } from "../../types/filter.types";
import Input from "../common/input/input";
import Label from "../common/label/label";

type Props = {
    titleValue:string
    handleTitleChange:(e: ChangeEvent<HTMLInputElement>) => void
    handleDurationChange:(e: ChangeEvent<HTMLSelectElement>) => void
    handleLevelChange:(e: ChangeEvent<HTMLSelectElement>) => void
}

const TripFilter:FC<Props> = ({titleValue, handleDurationChange, handleLevelChange, handleTitleChange}) => {
  return (
    <>
      <h1 className="visually-hidden">Travel App</h1>
      <section className="trips-filter">
        <h2 className="visually-hidden">Trips filter</h2>
        <form className="trips-filter__form" autoComplete="off">
          <Label className="input" name="Search by name" headingClass="visually-hidden">
          <Input
              value={titleValue}
              onChange={handleTitleChange}
              testId="filter-search"
              name="search"
              type="search"
              placeholder="search by title"
            />
          </Label>
          <Label className="select" headingClass="visually-hidden" name="Search by duration">
          <select
              onChange={handleDurationChange}
              data-test-id="filter-duration"
              name="duration"
            >
              <option value={DURATION.UNACTIVE}>duration</option>
              <option value={DURATION.LESS_THAN_FIVE}>&lt; 5 days</option>
              <option value={DURATION.FIVE_TO_TEN}>&lt; 10 days</option>
              <option value={DURATION.MORE_OR_EQUAL_TEN}>&ge; 10 days</option>
            </select>
          </Label>
          <Label className="select" headingClass="visually-hidden" name="Search by level">
          <select
              onChange={handleLevelChange}
              data-test-id="filter-level"
              name="level"
            >
              <option value={LEVEL.UNACTIVE}>level</option>
              <option value={LEVEL.EASY}>easy</option>
              <option value={LEVEL.MODERATE}>moderate</option>
              <option value={LEVEL.DIFFICULT}>difficult</option>
            </select>
          </Label>
        </form>
      </section>
    </>
  );
};

export default TripFilter;
