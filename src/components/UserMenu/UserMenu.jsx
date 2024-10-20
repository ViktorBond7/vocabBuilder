import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.scss";
import { selectUser } from "../../redax/auth/selectors";
import { logOut } from "../../redax/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
