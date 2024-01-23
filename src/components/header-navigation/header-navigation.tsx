import ProfileList from "../profile-list/profile-list";
import { Link } from "react-router-dom";
import { ROUTES } from "../../types/routes.types";

const HeaderNavigation = () => {
  return (
    <nav data-test-id="header-nav" className="header__nav">
      <ul className="nav-header__list">
        <li className="nav-header__item" title="Bookings">
          <Link
            to={ROUTES.BOOKINGS}
            data-test-id="header-bookings-link"
            className="nav-header__inner"
          >
            <span className="visually-hidden">Bookings</span>
            <img src="/public/images/briefcase.svg" alt="bookings" />
          </Link>
        </li>
        <li className="nav-header__item" title="Profile">
          <div
            data-test-id="header-profile-nav"
            className="nav-header__inner profile-nav"
            tabIndex={0}
          >
            <span className="visually-hidden">Profile</span>
            <img src="/public/images/user.svg" alt="profile" />
            <ProfileList />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
