import Modal from "react-modal";
import css from "./ModalAddWord.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addWord } from "../../redax/words/operations";
import CategorySelect from "../Categories/CategorySelect";
import { selectCategories } from "../../redax/words/selectors";
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup";
import toast from "react-hot-toast";

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
            top: "40%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#85aa9f",
            color: "#f8f8f8",
          },
        }}
      >
        <h2 className={css.title}>Add word</h2>

        <Formik
          initialValues={{ ua: "", en: "", isIrregular: null, category: "" }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.ua) {
          //     errors.ua = "Required";
          //   } else if (!/^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u.test(values.ua)) {
          //     errors.ua = "Invalid ua";
          //   }
          //   console.log(errors);
          //   toast.error(errors || "Fill out the form");
          //   return errors;
          // }}
          onSubmit={async (values, { setSubmitting }) => {
            const wordData = { ...values };

            if (wordData.category !== "verb") {
              delete wordData.isIrregular; // Видаляємо поле, якщо категорія не "verb"
            }
            try {
              await dispatch(addWord(wordData)).unwrap();
              toast.success("Word added successfully!");

              closeModal();
            } catch (error) {
              if (error === "Such a word exists") {
                toast.error("Such a word exists");
                return;
              }
              alert("Failed to add word: " + error);
            }
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className={css.form}>
              <label>Ukrainian</label>
              <Field name="ua" type="text" />
              <ErrorMessage name="ua" component="div" />
              <label>English</label>
              <Field name="en" type="text" />
              <ErrorMessage name="en" component="div" />

              <Field name="category">
                {({ field }) => (
                  <CategorySelect categories={categories} {...field} />
                )}
              </Field>

              {values.category === "verb" && (
                <div>
                  <Field name="isIrregular">
                    {({ field }) => <RadioButtonGroup {...field} />}
                  </Field>
                </div>
              )}

              <button className={css.btn} type="submit" disabled={isSubmitting}>
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
