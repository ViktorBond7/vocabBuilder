import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import css from "./UserMenu.module.scss";
import { selectUser } from "../../redax/auth/selectors";
import { logOut } from "../../redax/auth/operations";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const buildClassName = ({ isActive }) =>
    clsx(css.link, isActive && css.activeLink);

  return (
    <div className={css.wrapper}>
      <NavLink to="/dictionary" className={buildClassName}>
        Dictionary
      </NavLink>
      <NavLink to="/recommend" className={buildClassName}>
        Recommend
      </NavLink>
      <NavLink to="/training" className={buildClassName}>
        Training
      </NavLink>

      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
