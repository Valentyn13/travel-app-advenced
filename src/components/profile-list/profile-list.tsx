import { ROUTES } from "../../types/routes.types";
import LinkButton from "../common/link-button/link-button";

const ProfileList = () => {
  return (
    <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
      <li
        data-test-id="header-profile-nav-username"
        className="profile-nav__item"
      >
        John Doe
      </li>
      <li className="profile-nav__item">
        <LinkButton
          to={ROUTES.SIGN_IN}
          testId="header-profile-nav-sign-out"
          aditionClassNames="profile-nav__sign-out"
          children={"Sign Out"}
        />
      </li>
    </ul>
  );
};

export default ProfileList;
