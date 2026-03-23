import { useState } from "react";
import ModalAddWord from "../ModalAddWord/ModalAddWord";
import FilterWords from "../FilterWords/FilterWords";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setIsIrregular } from "../../redax/words/slice";
import CategorySelect from "../Categories/CategorySelect";
import { selectCategories, selectFilters } from "../../redax/words/selectors";
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup";
import css from "./Dashboard.module.scss";
import IconSvg from "../IconSvg/IconSvg";

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { category: currentCategory, isIrregular: currentIsIrregular } =
    useSelector(selectFilters);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  const handleModal = () => {
    setIsOpenModal(true);
  };

  const handleChangeCategory = (event) => {
    const selectedCategory = event.target.value;
    dispatch(setCategory(selectedCategory));
  };

  return (
    <div className={css.container}>
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
      <button className={css.btnAdd} onClick={handleModal}>
        Add word <IconSvg name="icon-plus" className={css.icon} />
      </button>
    </div>
  );
};

export default Dashboard;
