import { useState } from "react";

import ModalAddWord from "../ModalAddWord/ModalAddWord";
import FilterWords from "../FilterWords/FilterWords";

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    console.log("Відкриваємо модальне вікно для додавання слова");
    setIsOpenModal(true);
  };

  return (
    <>
      <button onClick={handleModal}>add word</button>
      {isOpenModal && (
        <ModalAddWord
          openModal={isOpenModal}
          closeModal={() => setIsOpenModal(false)}
        />
      )}

      <FilterWords />
    </>
  );
};

export default Dashboard;
