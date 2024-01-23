import { Link } from 'react-router-dom';
import { ROUTES } from '../../types/routes.types';

import './styles.css'
import LinkButton from '../common/link-button/link-button';

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
                      <LinkButton
                        to={ROUTES.SIGN_IN}
                        testId='header-profile-nav-sign-out'
                        aditionClassNames='profile-nav__sign-out'
                        children={'Sign Out'}
                      />
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