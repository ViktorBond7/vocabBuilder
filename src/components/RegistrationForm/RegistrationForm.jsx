import { useDispatch } from "react-redux";

import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
// import toast from "react-hot-toast";
import { register } from "../../redax/auth/operations";

const userSchema = Yup.object().shape({
  name: Yup.string().required("This is a required field"),
  email: Yup.string().email().required("This is a required field"),
  password: Yup.string()
    .min(4, "Name must be at least 4 symb long")
    .max(20, "The name must be no more than 20 characters long")

    .required("This is a required field"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values))
          .unwrap()
          .then(() => {
            // toast.success("Successfully toasted!");
          })
          .catch(() => {
            // toast.error("This didn't work.");
          });
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <label htmlFor={nameId}>Name</label>
        <Field className={css.label} name="name" id={nameId} />
        <ErrorMessage className={css.errorName} name="name" component="span" />

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
  );
};

export default RegistrationForm;
