import { useSelector } from "react-redux";
import css from "./AppBar.module.scss";
import { selectIsLoggedIn } from "../../redax/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
// import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
export default AppBar;
