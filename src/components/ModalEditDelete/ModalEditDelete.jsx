import { useState } from "react";

import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteWord } from "../../redax/words/operations";
// import { deleteWord } from "../../redax/words/operations";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

// const ModalEditDelete = ({ openModal, closeModal, row }) => {
//   let subtitle;
//     const [modalIsOpen, setIsOpen] = useState(false);

//   function afterOpenModal() {
//     references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   return (
//     <div>
//       <Modal
//         isOpen={openModal}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         <button onClick={closeModal}>close</button>
//         <div>I am a modal</div>
//         <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button>
//           <button>inside</button>
//           <button>the modal</button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default ModalEditDelete;
const ModalEditDelete = ({ openModal, onClose, row }) => {
  //   let id = row._id;
  //   console.log("nbbbbbbbbbbbbbbb", id);
  //   const { ua, en, category } = row;
  const dispatch = useDispatch();

  const handleDeleteWord = () => {
    dispatch(deleteWord(row._id));
    onClose();
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
      <p>Слово: {row ? row.ua : ""}</p>
      <p>Переклад: {row ? row.en : ""}</p>
      <p>Категорія: {row ? row.category : ""}</p>
      <p>Категорія: {row ? row._id : ""}</p>

      <button
        onClick={() => {
          // Ваш код для редагування
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
