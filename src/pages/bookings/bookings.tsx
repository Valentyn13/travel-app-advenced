const BookingsPage = () => {
    return(
        <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        <ul className="bookings__list">
          <li data-test-id="booking" className="booking">
            <h3 data-test-id="booking-title" className="booking__title">Iceland</h3>
            <span data-test-id="booking-guests" className="booking__guests">
              2 guests
            </span>
            <span data-test-id="booking-date" className="booking__date">
              2024-07-13
            </span>
            <span data-test-id="booking-total" className="booking__total">
              14000 $
            </span>
            <button
              data-test-id="booking-cancel"
              className="booking__cancel"
              title="Cancel booking"
            >
              <span className="visually-hidden">Cancel booking</span>
              ×
            </button>
          </li>
          <li data-test-id="booking" className="booking">
            <h3 data-test-id="booking-title" className="booking__title">Iceland</h3>
            <span data-test-id="booking-guests" className="booking__guests">
              2 guests
            </span>
            <span data-test-id="booking-date" className="booking__date">
              2024-09-30
            </span>
            <span data-test-id="booking-total" className="booking__total">
              14000 $
            </span>
            <button
              data-test-id="booking-cancel"
              className="booking__cancel"
              title="Cancel booking"
            >
              <span className="visually-hidden">Cancel booking</span>
              ×
            </button>
          </li>
          <li data-test-id="booking" className="booking">
            <h3 data-test-id="booking-title" className="booking__title">Iceland</h3>
            <span data-test-id="booking-guests" className="booking__guests">
              2 guests
            </span>
            <span data-test-id="booking-date" className="booking__date">
              2024-10-11
            </span>
            <span data-test-id="booking-total" className="booking__total">
              14000 $
            </span>
            <button
              data-test-id="booking-cancel"
              className="booking__cancel"
              title="Cancel booking"
            >
              <span className="visually-hidden">Cancel booking</span>
              ×
            </button>
          </li>
        </ul>
      </main>
    )
}

export default BookingsPage;