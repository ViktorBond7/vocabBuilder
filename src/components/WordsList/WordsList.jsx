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
import { useLocation } from "react-router-dom";

const WordList = ({ fetchAction, setAnchorEl = null, onSelectWord }) => {
  const dispatch = useDispatch();

  const results = useSelector(selectWords);

  // const loading = useSelector(selectLoading);

  const totalPages = useSelector(selectTotalPages);

  const [currentPage, setCurrentPage] = useState(1);

  const { keyword, category, isIrregular } = useSelector(selectFilters);

  const onActionClick = (event, row) => {
    if (setAnchorEl) {
      setAnchorEl(event.currentTarget); // Встановлюємо елемент для позиціонування меню
    }
    onSelectWord(row);
  };

  useEffect(() => {
    dispatch(
      fetchAction({ page: currentPage, keyword, category, isIrregular }),
    );
  }, [dispatch, currentPage, keyword, category, isIrregular, fetchAction]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(setIsIrregular(null));
  }, [dispatch, category]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Table results={results} onActionClick={onActionClick} />
      {results.length > 0 && (
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default WordList;
