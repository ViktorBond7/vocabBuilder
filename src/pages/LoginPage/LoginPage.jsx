// import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={css.container}>
      {/* <DocumentTitle>Login</DocumentTitle> */}
      <LoginForm />
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
    </div>
  );
};
export default LoginPage;
