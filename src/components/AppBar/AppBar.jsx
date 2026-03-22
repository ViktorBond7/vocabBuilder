import { useSelector } from "react-redux";
import css from "./AppBar.module.scss";
import { selectIsLoggedIn } from "../../redax/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
// import AuthNav from "../AuthNav/AuthNav";
import Container from "../Container/Container";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Container>
        <div className={css.wraper}>
          <Navigation />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          {isLoggedIn && <UserMenu />}
        </div>
      </Container>
    </header>
  );
};
export default AppBar;
