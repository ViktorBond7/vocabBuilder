import Modal from "react-modal";

import { useDispatch } from "react-redux";
import css from "./EditWordForm.module.scss";
import { editWord } from "../../redax/words/operations";
import { useState } from "react";
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

const EditWordForm = ({ isOpen, onClose, row }) => {
  // Створюємо стан і одразу заповнюємо його даними з row
  const [formData, setFormData] = useState({
    en: row?.en || "",
    ua: row?.ua || "",
    category: row?.category || "",
  });
  console.log("Редагування слова:", row); // Виводимо поточні дані для перевірки
  const dispatch = useDispatch();
  // Універсальний обробник для всіх інпутів

  const handleChange = (e) => {
    console.log("Зміна в полі:", e.target.name, "Новий текст:", e.target.value);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Зупиняємо перезавантаження сторінки
    dispatch(editWord({ id: row._id, data: formData }));
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={customStyles}
    >
      <form onSubmit={onSubmit} className={css.form}>
        <div className={css.wrepperInput}>
          <input
            name="ua"
            value={formData.ua}
            onChange={handleChange}
            placeholder="Ukrainian"
            required
          />
        </div>

        <div className={css.wrepperInput}>
          <input
            name="en"
            value={formData.en}
            onChange={handleChange}
            placeholder="English"
            required
          />
        </div>

        <div className={css.wrepperBtn}>
          <button type="submit" className={css.btn}>
            Save
          </button>
          <button type="button" className={css.btn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditWordForm;
