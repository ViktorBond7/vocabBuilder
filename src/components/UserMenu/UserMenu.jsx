import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import css from "./UserMenu.module.scss";
import { selectUser } from "../../redax/auth/selectors";
import { logOut } from "../../redax/auth/operations";
import { NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import IconSvg from "../IconSvg/IconSvg";

const UserMenu = () => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector(selectUser);

  const buildClassName = ({ isActive }) =>
    clsx(css.link, isActive && css.activeLink);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []); // Залежності порожні, бо функція не залежить від поточного стану

  // Функція для ЗАКРИТТЯ (виправляємо true на false)
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []); // Теж порожні залежності

  return (
    <div className={css.wrapper}>
      <div className={css.navigation}>
        <NavLink to="/dictionary" className={buildClassName}>
          Dictionary
        </NavLink>
        <NavLink to="/recommend" className={buildClassName}>
          Recommend
        </NavLink>
        <NavLink to="/training" className={buildClassName}>
          Training
        </NavLink>
      </div>

      <p className={css.username}>{user.name}</p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>

      <button className={css.burgerBtn} onClick={() => setIsMenuOpen(true)}>
        <IconSvg name="icon-Nav" className={css.icon} />
      </button>

      {isMenuOpen && <MobileMenu onClose={closeMenu} user={user.name} />}
    </div>
  );
};

export default UserMenu;
