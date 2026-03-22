import css from "./MobileMenu.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redax/auth/operations";
import IconSvg from "../IconSvg/IconSvg";
import clsx from "clsx";

const MobileMenu = ({ onClose, user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const buildClassName = ({ isActive }) =>
    clsx(css.link, isActive && css.activeLink);

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={css.header}>
          <p className={css.pageN}>{user}</p>
          <button className={css.burgerBtn} onClick={onClose}>
            <IconSvg name="icon-close" className={css.icon} />
          </button>
        </div>
        <div className={css.navigation}>
          <NavLink
            to="/dictionary"
            onClick={onClose}
            className={buildClassName}
          >
            Dictionary
          </NavLink>
          <NavLink to="/recommend" onClick={onClose} className={buildClassName}>
            Recommend
          </NavLink>
          <NavLink to="/training" onClick={onClose} className={buildClassName}>
            Training
          </NavLink>
          <button
            className={css.logOutBtn}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Log out
            <IconSvg name="icon-switch-horizontal" className={css.iconAr} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
