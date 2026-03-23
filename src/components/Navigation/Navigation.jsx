import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import css from "./Navigation.module.scss";
// import { selectIsLoggedIn } from "../../redax/auth/selectors";

const Navigation = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        VocabBuilder
      </NavLink>
    </nav>
  );
};
export default Navigation;
