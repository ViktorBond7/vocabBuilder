import Modal from "react-modal";
import css from "./WellDoneModal.module.scss";

const WellDoneModal = ({ openModal, onClose, answers }) => {
  console.log("Answers in WellDoneModal:", answers);
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      contentLabel="Edit or Delete"
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
      <div className={css.modalContent}>
        <p className={css.titleWellDone}>Well done!</p>
        <div className={css.answersWrapper}>
          <p className={css.correctTitle}>Correct Answers:</p>
          <p className={css.incorrectTitle}>Mistakes:</p>
          {answers?.filter((answer) => answer.isDone).length > 0 ? (
            <ul className={css.correctAnswers}>
              {answers
                .filter((answer) => answer.isDone)
                .map((answer) => (
                  <li key={answer._id}>{answer.en}</li>
                ))}
            </ul>
          ) : (
            <p className={css.noAnswers}>No correct answers yet!</p>
          )}
          {answers?.filter((answer) => answer.isDone === false).length > 0 ? (
            <ul className={css.incorrectAnswers}>
              {answers
                .filter((answer) => answer.isDone === false)
                .map((answer) => (
                  <li key={answer._id}>{answer.en}</li>
                ))}
            </ul>
          ) : (
            <p className={css.noAnswers}>No incorrect answers yet!</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default WellDoneModal;
