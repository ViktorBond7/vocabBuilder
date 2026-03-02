import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteWord } from "../../redax/words/operations";

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

Modal.setAppElement("#root");

const ModalEditDelete = ({ openModal, onClose, row }) => {
  const dispatch = useDispatch();

  const handleDeleteWord = async () => {
    try {
      await dispatch(deleteWord(row._id)).unwrap();

      onClose();
    } catch (error) {
      console.error("Помилка видалення:", error);
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
      <h2>Редагувати або видалити</h2>

      <p>Категорія: {row ? row._id : ""}</p>

      <button
        onClick={() => {
          //код для редагування
          console.log("Edit row:", row);
          onClose();
        }}
      >
        Змінити
      </button>

      <button onClick={handleDeleteWord}>Видалити</button>

      <button onClick={onClose}>Скасувати</button>
    </Modal>
  );
};

export default ModalEditDelete;
