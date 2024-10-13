import { useState } from "react";
import ModalShowMore from "../ModalScowMore/ModalScowMore";
import css from "./ShowMore.module.css";

const ShowMore = ({ camper }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={css.button} onClick={openModal}>
        Show more
      </button>
      {modalIsOpen && (
        <ModalShowMore
          isOpen={modalIsOpen}
          closeModal={closeModal}
          camper={camper}
        />
      )}
    </>
  );
};

export default ShowMore;
