import Modal from "react-modal";
import css from "./ModalAddWord.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ModalAddWord = ({ openModal, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div>ModalAddWord</div>

        <Formik
          initialValues={{ ua: "", en: "", picked: "" }}
          //   validate={(values) => {
          //     const errors = {};
          //     if (!values.email) {
          //       errors.email = "Required";
          //     } else if (
          //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //     ) {
          //       errors.email = "Invalid email address";
          //     }
          //     return errors;
          //   }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <Field name="ua" type="text" />
              <ErrorMessage name="ua" component="div" />
              <Field name="en" type="text" />
              <ErrorMessage name="en" component="div" />

              <Field as="select" name="wordType">
                <option value="">Choose</option>
                <option value="Verb">Verb</option>
                <option value="Noun">Noun</option>
                <option value="Adjective">Adjective</option>
              </Field>
              {values.wordType === "Verb" && (
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="picked" value="Regular" />
                    Regular
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="Irregular" />
                    Irregular
                  </label>
                </div>
              )}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default ModalAddWord;
