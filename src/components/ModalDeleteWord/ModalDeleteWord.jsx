import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteWord } from "../../redax/words/operations";
import css from "./ModalDeleteWord.module.scss";

const ModalDeleteWord = ({ openModal, onClose, row }) => {
  const dispatch = useDispatch();

  const handleDeleteWord = async () => {
    try {
      await dispatch(deleteWord(row._id)).unwrap();

      onClose();
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
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
      <h2>
        Probably you want to delete: <br /> <span>{`"${row.en}"`}</span>
      </h2>

      <div className={css.wraperBtn}>
        <button className={css.btn} onClick={handleDeleteWord}>
          Delete
        </button>

        <button className={css.btn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ModalDeleteWord;

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
