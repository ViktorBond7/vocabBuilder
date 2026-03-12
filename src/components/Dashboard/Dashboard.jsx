import { useState } from "react";
import ModalAddWord from "../ModalAddWord/ModalAddWord";
import FilterWords from "../FilterWords/FilterWords";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPage } from "../../redax/words/slice";
import CategorySelect from "../Categories/CategorySelect";
import { selectCategories, selectFilters } from "../../redax/words/selectors";

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const currentCategory = useSelector(selectFilters).category;
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleModal = () => {
    console.log("Відкриваємо модальне вікно для додавання слова");
    setIsOpenModal(true);
  };

  const handleChangeCategory = (event) => {
    const selectedCategory = event.target.value;
    dispatch(setCategory(selectedCategory));
    dispatch(setPage(1)); // скидаємо сторінку при пошуку
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
      <CategorySelect
        categories={categories}
        value={currentCategory}
        onChange={handleChangeCategory}
        name="category"
      />
    </>
  );
};

export default Dashboard;
