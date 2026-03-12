import { Field } from "formik";
import RadioButtonGroup from "../RadioButtonGroup/RadioButtonGroup";

const CategorySelect = ({ categories, value, onChange, name }) => {
  const formattedCategories = (category) =>
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <select name={name} value={value} onChange={onChange} id="words-select">
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

export default CategorySelect;
