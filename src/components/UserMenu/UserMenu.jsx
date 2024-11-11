import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.scss";
import { selectUser } from "../../redax/auth/selectors";
import { logOut } from "../../redax/auth/operations";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <NavLink to="/dictionary">Diktionary</NavLink>

      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
