import { ChangeEvent, FC } from "react";
import { DURATION, LEVEL } from "../../types/filter.types";

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
          <label className="trips-filter__search input">
            <span className="visually-hidden">Search by name</span>
            <input
              value={titleValue}
              onChange={handleTitleChange}
              data-test-id="filter-search"
              name="search"
              type="search"
              placeholder="search by title"
            />
          </label>
          <label className="select">
            <span className="visually-hidden">Search by duration</span>
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
          </label>
          <label className="select">
            <span className="visually-hidden">Search by level</span>
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
          </label>
        </form>
      </section>
    </>
  );
};

export default TripFilter;
