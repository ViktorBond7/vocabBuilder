import { useState } from "react";
import ModalAddWord from "../ModalAddWord/ModalAddWord";
import FilterWords from "../FilterWords/FilterWords";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPageState,
  setCategory,
  setIsIrregular,
  setPage,
} from "../../redax/words/slice";
import CategorySelect from "../Categories/CategorySelect";
import {
  selectCategories,
  selectFilters,
  selectIsIrregular,
} from "../../redax/words/selectors";
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup";

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const currentCategory = useSelector(selectFilters).category;
  const categories = useSelector(selectCategories);
  const currentIsIrregular = useSelector(selectIsIrregular);

  const dispatch = useDispatch();

  const handleModal = () => {
    setIsOpenModal(true);
  };

  const handleChangeCategory = (event) => {
    const selectedCategory = event.target.value;
    dispatch(setCategory(selectedCategory));
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
      {currentCategory === "verb" && (
        <RadioButtonGroup
          onChange={(val) => dispatch(setIsIrregular(val.target.value))}
          value={currentIsIrregular}
        />
      )}
    </>
  );
};

export default Dashboard;
