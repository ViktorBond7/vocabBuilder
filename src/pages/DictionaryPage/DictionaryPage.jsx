import { useDispatch, useSelector } from "react-redux";
import { selectWords } from "../../redax/words/selectors";
import { useEffect, useState } from "react";
import { fetchWords } from "../../redax/words/operations";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Table from "../../components/Table/Table";
import ModalEditDelete from "../../components/ModalEditDelete/ModalEditDelete";

const WordList = () => {
  const dispatch = useDispatch();
  const { results, totalPages, page, perPage } = useSelector(selectWords);
  const [currentPage, setCurrentPage] = useState(page || 1);
  console.log(results);

  useEffect(() => {
    dispatch(fetchWords(currentPage)); // Отримати дані для поточної сторінки
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page); // Змінити поточну сторінку при кліку
  };

  return (
    <div>
      <p>hello</p>
      <Table results={results} />
      <CustomPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default WordList;
