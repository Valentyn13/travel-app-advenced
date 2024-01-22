import { ChangeEvent, Dispatch, FC, useState } from "react";
import TripList from "../../components/trip-list/trip-list";
import { ITripList } from "../../types/trip.types";
import { DURATION, LEVEL } from "../../types/filter.types";
import { filterTrips } from "../../helpers/filter.helpers";

type Props = {
  trips:ITripList,
  onTripsChange:Dispatch<React.SetStateAction<ITripList>>
}

const MainPage:FC<Props> = ({trips}) => {

  const [durationValue, setDurationValue] = useState<string>(DURATION.UNACTIVE)
  const [levelValue, setLevelValue] = useState<string>('')

  const [titleValue, setTitleValue] = useState<string>('')

  const handleTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setTitleValue(title)
  }

  const handleDurationChange = (e:ChangeEvent<HTMLSelectElement>) => {
    const duration = e.target.value
    setDurationValue(duration)
  }

  const handleLevelChange = (e:ChangeEvent<HTMLSelectElement>) => {
    const level = e.target.value
    setLevelValue(level)
  }

    return(
        <main>
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
              <select onChange={handleDurationChange} data-test-id="filter-duration" name="duration">
                <option value={DURATION.UNACTIVE}>duration</option>
                <option value={DURATION.LESS_THAN_FIVE}>&lt; 5 days</option>
                <option value={DURATION.FIVE_TO_TEN}>&lt; 10 days</option>
                <option value={DURATION.MORE_OR_EQUAL_TEN}>&ge; 10 days</option>
              </select>
            </label>
            <label className="select">
              <span className="visually-hidden">Search by level</span>
              <select onChange={handleLevelChange} data-test-id="filter-level" name="level">
                <option value={LEVEL.UNACTIVE}>level</option>
                <option value={LEVEL.EASY}>easy</option>
                <option value={LEVEL.MODERATE}>moderate</option>
                <option value={LEVEL.DIFFICULT}>difficult</option>
              </select>
            </label>
          </form>
        </section>
          <TripList trips={filterTrips(trips,{title:titleValue,duration:durationValue,level:levelValue})}/>
      </main>
    )
}

export default MainPage;