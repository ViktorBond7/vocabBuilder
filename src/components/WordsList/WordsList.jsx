import { useDispatch, useSelector } from "react-redux";
import css from "./WordsList.module.scss";
import {
  selectFilters,
  // selectLoading,
  selectPage,
  selectTotalPages,
  selectWords,
} from "../../redax/words/selectors";
import { useEffect } from "react";
import { fetchCategories } from "../../redax/words/operations";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Table from "../../components/Table/Table";

import { setPage } from "../../redax/words/slice";

const WordList = ({ fetchAction, onActionClick }) => {
  const dispatch = useDispatch();

  const results = useSelector(selectWords);
  const page = useSelector(selectPage);

  // const loading = useSelector(selectLoading);

  const totalPages = useSelector(selectTotalPages);

  const { keyword, category, isIrregular } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(
      fetchAction({
        page,
        keyword,
        category,
        isIrregular,
      }),
    );
  }, [dispatch, keyword, category, isIrregular, page]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Table results={results} onActionClick={onActionClick} />
      {results.length > 0 && (
        <CustomPagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default WordList;
