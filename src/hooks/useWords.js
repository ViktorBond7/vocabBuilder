import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPageState } from "../redax/words/slice";
import { selectFilters, selectPage } from "../redax/words/selectors";
import { fetchCategories } from "../redax/words/operations";

const useWords = (fetchAction) => {
  const dispatch = useDispatch();
  const { keyword, category, isIrregular } = useSelector(selectFilters);
  const page = useSelector(selectPage);

  useEffect(() => {
    return () => {
      dispatch(resetPageState());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const promise = dispatch(
      fetchAction({
        page,
        keyword,
        category,
        isIrregular,
      }),
    );

    return () => {
      promise.abort();
    };
  }, [dispatch, keyword, category, isIrregular, page, fetchAction]);
};

export default useWords;
