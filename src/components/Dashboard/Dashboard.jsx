import { useState } from "react";

import ModalAddWord from "../ModalAddWord/ModalAddWord";

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    console.log("Відкриваємо модальне вікно для додавання слова");
    setIsOpenModal(true);
  };

  return (
    <>
      <button onClick={handleModal}>add word</button>
      <ModalAddWord
        openModal={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
      />
    </>
  );
};

export default Dashboard;
