import { Link } from 'react-router-dom';
import { ROUTES } from '../../types/routes.types';

import './styles.css'

const Header = () => {
    return(
        <header className="header">
        <div className="header__inner">
                <Link to={ROUTES.MAIN} data-test-id="header-logo" className="header__logo">
                    Travel App
                </Link>
          <nav data-test-id="header-nav" className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                    <Link
                    to={ROUTES.BOOKINGS}
                    data-test-id="header-bookings-link"
                    className="nav-header__inner"
                    >
                    <span className="visually-hidden">Bookings</span>
                    <img src='/src/assets/images/briefcase.svg' alt="bookings" />
                    </Link>
              </li>
              <li className="nav-header__item" title="Profile">
                <div
                  data-test-id="header-profile-nav"
                  className="nav-header__inner profile-nav"
                  tabIndex={0}
                >
                  <span className="visually-hidden">Profile</span>
                  <img src="/src/assets/images/user.svg" alt="profile" />
                  <ul
                    data-test-id="header-profile-nav-list"
                    className="profile-nav__list"
                  >
                    <li data-test-id="header-profile-nav-username" className="profile-nav__item">John Doe</li>
                    <li className="profile-nav__item">
                      <Link
                        to={ROUTES.SIGN_IN}
                        data-test-id="header-profile-nav-sign-out"
                        className="profile-nav__sign-out button"
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header;