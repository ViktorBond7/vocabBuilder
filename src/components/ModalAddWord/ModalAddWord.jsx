import Modal from "react-modal";
import css from "./ModalAddWord.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addWord } from "../../redax/words/operations";
import CategorySelect from "../Categories/CategorySelect";
import { selectCategories } from "../../redax/words/selectors";

const ModalAddWord = ({ openModal, closeModal }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

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
          initialValues={{ ua: "", en: "", isIrregular: false, category: "" }}
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
          onSubmit={async (values, { setSubmitting }) => {
            const wordData = { ...values };
            if (wordData.category !== "verb") {
              delete wordData.isIrregular; // Видаляємо поле, якщо категорія не "verb"
            }
            try {
              await dispatch(addWord(wordData)).unwrap();
              alert("Word added successfully!");

              closeModal();
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            } catch (error) {
              if (error === "Such a word exists") {
                alert("Таке слово вже існує");
                return;
              }
              alert("Failed to add word: " + error);
            }
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <Field name="ua" type="text" />
              <ErrorMessage name="ua" component="div" />
              <Field name="en" type="text" />
              <ErrorMessage name="en" component="div" />

              <Field name="category">
                {({ children }) => (
                  <CategorySelect categories={categories} {...children} />
                )}
              </Field>

              {values.category === "verb" && (
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="isIrregular" value={false} />
                    Regular
                  </label>
                  <label>
                    <Field type="radio" name="isIrregular" value={true} />
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

{
  /* <Field as="select" name="category">
                <option value="">Choose</option>
                <option value="verb">Verb</option>
                <option value="noun">Noun</option>
                <option value="adjective">Adjective</option>
              </Field> */
}
