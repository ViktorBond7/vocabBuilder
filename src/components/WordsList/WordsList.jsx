import { useDispatch, useSelector } from "react-redux";
import css from "./WordsList.module.scss";
import {
  selectFilters,
  // selectLoading,
  selectPage,
  selectTotalPages,
  selectWords,
} from "../../redax/words/selectors";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../redax/words/operations";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Table from "../../components/Table/Table";

import {
  resetPageState,
  setIsIrregular,
  setPage,
} from "../../redax/words/slice";

const WordList = ({ fetchAction, setAnchorEl = null, onSelectWord }) => {
  const dispatch = useDispatch();

  const results = useSelector(selectWords);
  const page = useSelector(selectPage);

  // const loading = useSelector(selectLoading);

  const totalPages = useSelector(selectTotalPages);

  const { keyword, category, isIrregular } = useSelector(selectFilters);

  const onActionClick = (event, row) => {
    if (setAnchorEl) {
      setAnchorEl(event.currentTarget); // Встановлюємо елемент для позиціонування меню
    }
    onSelectWord(row);
  };

  useEffect(() => {
    dispatch(fetchAction({ page, keyword, category, isIrregular }));
  }, [dispatch, keyword, category, isIrregular, fetchAction, page]);

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
