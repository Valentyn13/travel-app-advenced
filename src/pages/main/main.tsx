import { Dispatch, FC } from "react";
import TripList from "../../components/trip-list/trip-list";
import { ITripList } from "../../types/trip.types";

type Props = {
  trips:ITripList,
  onTripsChange:Dispatch<React.SetStateAction<ITripList>>
}

const MainPage:FC<Props> = ({trips}) => {
    return(
        <main>
        <h1 className="visually-hidden">Travel App</h1>
        <section className="trips-filter">
          <h2 className="visually-hidden">Trips filter</h2>
          <form className="trips-filter__form" autoComplete="off">
            <label className="trips-filter__search input">
              <span className="visually-hidden">Search by name</span>
              <input
                data-test-id="filter-search"
                name="search"
                type="search"
                placeholder="search by title"
              />
            </label>
            <label className="select">
              <span className="visually-hidden">Search by duration</span>
              <select data-test-id="filter-duration" name="duration">
                <option value="">duration</option>
                <option value="0_x_5">&lt; 5 days</option>
                <option value="5_x_10">&lt; 10 days</option>
                <option value="10">&ge; 10 days</option>
              </select>
            </label>
            <label className="select">
              <span className="visually-hidden">Search by level</span>
              <select data-test-id="filter-level" name="level">
                <option value="">level</option>
                <option value="easy">easy</option>
                <option value="moderate">moderate</option>
                <option value="difficult">difficult</option>
              </select>
            </label>
          </form>
        </section>
          <TripList trips={trips}/>
      </main>
    )
}

export default MainPage;