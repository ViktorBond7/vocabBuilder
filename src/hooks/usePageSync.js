import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectPage } from "../redax/words/selectors";
import { setPage } from "../redax/words/slice";

const usePageSync = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const page = useSelector(selectPage);

  useEffect(() => {
    // Щоразу, коли змінюється URL (шлях), ми скидаємо сторінку
    dispatch(setPage(1));

    // Можна також скинути результати, якщо хочеш повної чистоти
    // dispatch(resetPageState());
  }, [dispatch, location.pathname]);

  return page;
};

export default usePageSync;
