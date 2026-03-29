import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, sendAnswers } from "../../redax/tasks/operations";
import { selectAnswers, selectTasks } from "../../redax/tasks/selektors";
import { Field, Form, Formik } from "formik";
import Container from "../../components/Container/Container";
import toast, { Toaster } from "react-hot-toast";
import css from "./TrainingPage.module.scss";
import WellDoneModal from "../../components/WellDoneModal/WellDoneModal";

const TrainingPage = () => {
  const dispatch = useDispatch();
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const answers = useSelector(selectAnswers);

  const tasks1 = useSelector(selectTasks);
  console.log("userAnswers", userAnswers);
  const tasks2 = tasks1.slice(0, 3); // Limit to 5 tasks for training
  const tasks3 = tasks1.slice(20, 23);
  const tasks = [...tasks2, ...tasks3];
  const isLast = currentTaskIndex === tasks.length - 1;

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (!tasks || tasks.length === 0) {
    return <h2>Loading tasks...</h2>;
  }

  const handleTaskChange = (values) => {
    if (isLast) return;

    const currentTask = tasks[currentTaskIndex];
    const fullAnswer = {
      ua: values.ua?.trim() || "",
      en: values.en?.trim() || "",
      _id: currentTask._id,
      task: currentTask.task,
    };

    if (fullAnswer.ua || fullAnswer.en) {
      setUserAnswers((prevAnswers) => [...prevAnswers, fullAnswer]);
    }

    setCurrentTaskIndex((prevIndex) => prevIndex + 1);
    toast.success("Moving to the next task.");
  };

  return (
    <Container>
      <h1 className={css.title}>TrainingPage</h1>
      <Formik
        enableReinitialize={true}
        initialValues={{
          ua: `${tasks[currentTaskIndex]?.ua || ""}`,
          en: `${tasks[currentTaskIndex]?.en || ""}`,
        }}
        onSubmit={(values, { resetForm }) => {
          const finalAnswer = {
            ...values,
            _id: tasks[currentTaskIndex]._id,
            task: tasks[currentTaskIndex].task,
          };

          const allAnswers = [...userAnswers, finalAnswer];

          setUserAnswers(allAnswers);

          dispatch(sendAnswers(allAnswers));
          resetForm();
          setOpenModal(true);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className={css.form}>
            <label htmlFor="ua">UA</label>
            <Field name="ua" as="textarea" className="form-textarea" />
            <label htmlFor="en">EN</label>

            <Field name="en" as="textarea" className="form-textarea" />
            {/* <ErrorMessage name="email" component="div" /> */}

            {/* <ErrorMessage name="password" component="div" /> */}
            <div className={css.buttonsWrapper}>
              <button
                type="button"
                className={css.nextBtn}
                onClick={() => handleTaskChange(values)}
                disabled={isLast}
              >
                Next →
              </button>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {openModal && answers.length > 0 && (
        <WellDoneModal
          openModal={openModal}
          onClose={() => setOpenModal(false)}
          answers={answers}
        />
      )}
      <Toaster />
    </Container>
  );
};

export default TrainingPage;
// [
//   {
//     _id: "64c2d54d2afb66061c3bd0a2",
//     en: "know-knew-known",
//     ua: "знати",
//     task: "en",
//   },
// ];

// validate={(values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = "Invalid email address";
//   }
//   return errors;
// }}

// const loading = useSelector(selectTasksLoading);
// const error = useSelector(selectTasksError);
