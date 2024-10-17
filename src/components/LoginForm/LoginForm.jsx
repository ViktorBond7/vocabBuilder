import { useDispatch } from "react-redux";
import css from "./LoginForm.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { logIn } from "../../redax/auth/operations";
import { NavLink } from "react-router-dom";

const userSchema = Yup.object().shape({
  email: Yup.string().email().required("This is a required field"),
  password: Yup.string()
    .min(4, "Name must be at least 4 symb long")
    .max(20, "The name must be no more than 20 characters long")

    .required("This is a required field"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          dispatch(logIn(values))
            .unwrap()
            .then(() => {
              toast.success("Successfully!");
            })
            .catch(() => {
              toast.error("This didn't work.");
            });
          actions.resetForm();
        }}
      >
        <Form className={css.form} autoComplete="off">
          <label htmlFor={emailId}>Email</label>
          <Field
            className={css.label}
            name="email"
            placeholder="jane@acme.com"
            type="email"
            id={emailId}
          />
          <ErrorMessage
            className={css.errorEmail}
            name="email"
            component="span"
          />

          <label htmlFor={passwordId}>Password</label>
          <Field
            className={css.label}
            name="password"
            type="password"
            id={passwordId}
          />
          <ErrorMessage
            className={css.errorPassword}
            name="password"
            component="span"
          />

          <button className={css.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      <NavLink to="/register">Register</NavLink>
      <Toaster />
    </>
  );
};
export default LoginForm;
