import { useSelector } from "react-redux";
import css from "./AppBar.module.scss";
import { selectIsLoggedIn } from "../../redax/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
// import AuthNav from "../AuthNav/AuthNav";
import Container from "../Container/Container";
import useTheme from "../../hooks/useTheme";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { theme, toggleTheme } = useTheme(); // Log the current theme for debugging

  return (
    <header className={css.header}>
      <Container>
        <div className={css.wraper}>
          <Navigation />
          <div className={css.controls}>
            <button
              type="button"
              className={css.themeBtn}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀ Light" : "🌙 Dark"}
            </button>
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
            {isLoggedIn && <UserMenu />}
          </div>
        </div>
      </Container>
    </header>
  );
};
export default AppBar;
