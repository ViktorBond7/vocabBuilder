import css from "./MobileMenu.module.scss";
import spriteHref from "../../img/symbol-defs.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const MobileMenu = ({ onClose, user }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.menuContent}>
        <div className={css.header}>
          <p>{user}</p>
          <button className={css.burgerBtn} onClick={onClose}>
            <svg className={css.icon}>
              <use href={`${spriteHref}#icon-close`}></use>
            </svg>
          </button>
        </div>
        <div className={css.navigation}>
          <NavLink to="/dictionary">Dictionary</NavLink>
          <NavLink to="/recommend">Recommend</NavLink>
          <NavLink to="/training">Training</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
