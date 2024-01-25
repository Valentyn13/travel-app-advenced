import LinkButton from "../common/link-button/link-button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signOut } from "../../redux/slices/user/user.slice";
import { ROUTES } from "../../types/routes.types";

const ProfileList = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
      <li
        data-test-id="header-profile-nav-username"
        className="profile-nav__item"
      >
        {user?.fullName}
      </li>
      <li className="profile-nav__item">
        <LinkButton
          onClick={handleSignOut}
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
