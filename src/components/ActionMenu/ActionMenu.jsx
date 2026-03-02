import { useDispatch } from "react-redux";
import { deleteWord } from "../../redax/words/operations";

const ActionMenu = ({ anchor, row, onClose }) => {
  const dispatch = useDispatch();
  if (!anchor) return null;

  // Отримуємо координати кнопки
  const rect = anchor.getBoundingClientRect();

  const style = {
    position: "absolute",
    top: `${rect.bottom + window.scrollY}px`, // Під кнопкою + прокрутка
    left: `${rect.left + window.scrollX - 80}px`, // Трохи вліво, щоб вирівняти
    zIndex: 1000,
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  // Вираховуємо позицію або використовуємо абсолютне позиціонування
  return (
    <div style={style}>
      <button
        onClick={() => {
          /* відкрити модалку редагування */
          console.log("id", row._id);

          onClose();
        }}
      >
        ✏️ Edit
      </button>
      <button
        onClick={async () => {
          await dispatch(deleteWord(row._id)).unwrap();
          onClose();
        }}
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default ActionMenu;
