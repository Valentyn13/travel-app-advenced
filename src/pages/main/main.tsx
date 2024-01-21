const MainPage = () => {
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
        <section className="trips">
          <h2 className="visually-hidden">Trips List</h2>
          <ul className="trip-list">
            <li data-test-id="trip-card" className="trip-card">
              <img
                data-test-id="trip-card-image"
                src="/src/assets/images/iceland.jpg"
                alt="trip photo"
              />
              <div className="trip-card__content">
                <div className="trip-info">
                  <h3 data-test-id="trip-card-title" className="trip-info__title">
                    Iceland
                  </h3>
                  <div className="trip-info__content">
                    <span
                      data-test-id="trip-card-duration"
                      className="trip-info__duration"
                    >
                      <strong>15</strong> days
                    </span>
                    <span data-test-id="trip-card-level" className="trip-info__level">
                      easy
                    </span>
                  </div>
                </div>
                <div className="trip-price">
                  <span>Price</span>
                  <strong
                    data-test-id="trip-card-price-value"
                    className="trip-price__value"
                  >
                    7000 $
                  </strong>
                </div>
              </div>
              <a data-test-id="trip-card-link" href="./trip.html" className="button">
                Discover a trip
              </a>
            </li>
          </ul>
        </section>
      </main>
    )
}

export default MainPage;