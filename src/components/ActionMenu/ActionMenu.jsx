import Modal from "react-modal";
import css from "./ActionMenu.module.scss";

const ActionMenu = ({ anchor, onClose, onOpenModalDelete, onOpenEditForm }) => {
  if (!anchor) return null;

  const isOpen = Boolean(anchor); // Відкриваємо меню, якщо anchor існує
  const rect = anchor.getBoundingClientRect();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Edit or Delete"
      overlayClassName={css.overlay}
      className={css.wraperBtn}
      style={{
        content: {
          position: "absolute",
          top: `${rect.bottom + window.scrollY}px`,
          left: `${rect.left + window.scrollX - 50}px`,
          right: "auto",
          bottom: "auto",
        },
      }}
    >
      <div className={css.wraperBtn}>
        <button
          onClick={() => {
            onOpenEditForm();
          }}
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => {
            onOpenModalDelete();
          }}
        >
          🗑️ Delete
        </button>
      </div>
    </Modal>
  );
};

export default ActionMenu;
