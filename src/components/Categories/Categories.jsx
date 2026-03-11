import { useDispatch, useSelector } from "react-redux";
import { selectCategories, selectFilters } from "../../redax/words/selectors";
import { setCategory, setPage } from "../../redax/words/slice";

const Categories = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(selectFilters).category;

  const categories = useSelector(selectCategories);
  const formattedCategories = (category) =>
    category.charAt(0).toUpperCase() + category.slice(1);

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    dispatch(setCategory(selectedCategory));
    dispatch(setPage(1)); // скидаємо сторінку при пошуку
  };

  return (
    <>
      <select
        name="words"
        id="words-select"
        value={currentCategory}
        onChange={handleChange}
      >
        <option value="">Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {formattedCategories(category)}
          </option>
        ))}
      </select>
    </>
  );
};

export default Categories;
