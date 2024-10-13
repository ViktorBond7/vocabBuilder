// import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./OrderForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(20, "The name must be no more than 20 characters long")
    .required("This is a required field"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This is a required field"),
  bookingDate: Yup.date().required("Please select a booking date"),
  comment: Yup.string().max(200, "Comment must be less than 200 characters"),
});

const OrderForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        bookingDate: "",
        comment: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.page}>
          <h2>Book your campervan now</h2>
          <p>Stay connected! We are always ready to help you.</p>
        </div>
        <div className={css.formGroup}>
          <Field className={css.input} name="name" placeholder="Name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formGroup}>
          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.formGroup}>
          <Field
            className={css.input}
            type="date"
            name="bookingDate"
            placeholder="Booking Date"
          />
          <ErrorMessage
            className={css.error}
            name="bookingDate"
            component="span"
          />
        </div>

        <div className={css.formGroup}>
          <Field
            className={css.textarea}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage className={css.error} name="comment" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default OrderForm;
