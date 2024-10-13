import IconSvg from "../IconSvg/IconSvg";
import RetingLocation from "../RetingLocation/RetingLocation";
import css from "./ModalScowMore.module.css";
import Modal from "react-modal";
import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import clsx from "clsx";
import { formatPrice } from "../../utils/formatPrice";

const customStyles = {
  content: {
    width: "982px",
    height: "auto",
    margin: "auto",
    padding: "30px",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const buildLinkClass = (isActive) => clsx(css.button, isActive && css.active);

const ModalShowMore = ({ camper, isOpen, closeModal }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "A":
        return <Features camper={camper} />;
      case "B":
        return <Reviews camper={camper} />;
      default:
        return <div></div>;
    }
  };

  if (!isOpen || !camper) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.modalContent}>
        <div className={css.containerHeader}>
          <h2>{camper.name}</h2>
          <button className={css.btn} onClick={closeModal}>
            <IconSvg
              iconName="icon-clous"
              width="32"
              height="32"
              className={css.iconns}
            />
          </button>
        </div>
        <RetingLocation camper={camper} />

        <p>{`€${formatPrice(camper.price)}`}</p>

        <div className={css.containerImg}>
          {camper.gallery.map((imgSrc, index) => (
            <img
              key={index}
              className={css.camperImg}
              src={imgSrc}
              alt={camper.name}
            />
          ))}
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.containerButton}>
          <button
            className={buildLinkClass(activeComponent === "A")}
            onClick={() => setActiveComponent("A")}
          >
            Features
          </button>
          <button
            className={buildLinkClass(activeComponent === "B")}
            onClick={() => setActiveComponent("B")}
          >
            Reviews
          </button>
        </div>

        <div>{renderComponent()}</div>
      </div>
    </Modal>
  );
};

export default ModalShowMore;
