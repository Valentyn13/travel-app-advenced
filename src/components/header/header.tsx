import { Link } from "react-router-dom";

import { ROUTES } from "../../types/routes.types";
import HeaderNavigation from "../header-navigation/header-navigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link
          to={ROUTES.MAIN}
          data-test-id="header-logo"
          className="header__logo"
        >
          Travel App
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
