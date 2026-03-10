import { useDispatch } from "react-redux";
import css from "./FilterWords.module.scss";
import { setKeyword, setPage } from "../../redax/words/slice";
// import { selectKeyword } from "../../redax/words/selectors";
import { useState, useEffect } from "react";

const FilterWords = () => {
  const [inputValue, setInputValue] = useState(""); // локальний стан для швидкого вводу
  const dispatch = useDispatch();

  useEffect(() => {
    // 1. Встановлюємо таймер
    const handler = setTimeout(() => {
      dispatch(setKeyword(inputValue)); // оновлюємо Redux через 500мс
      dispatch(setPage(1)); // скидаємо сторінку при пошуку
    }, 300);

    // 2. Очищуємо таймер, якщо користувач знову почав друкувати
    return () => clearTimeout(handler);
  }, [inputValue, dispatch]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value.trim())}
      placeholder="Filter words..."
    />
  );
};

export default FilterWords;
