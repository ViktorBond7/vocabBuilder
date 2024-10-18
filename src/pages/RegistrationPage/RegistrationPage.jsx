// import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import { NavLink } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.scss";
const RegistratioPage = () => {
  return (
    <div className={css.container}>
      {/* <DocumentTitle>Registration</DocumentTitle> */}
      <RegistrationForm />
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default RegistratioPage;
