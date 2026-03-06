import { useDispatch, useSelector } from "react-redux";
import { selectWords } from "../../redax/words/selectors";
import { useEffect, useState } from "react";
import { fetchWords } from "../../redax/words/operations";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Table from "../../components/Table/Table";

import ModalDeleteWord from "../ModalDeleteWord/ModalDeleteWord";
import ActionMenu from "../ActionMenu/ActionMenu";
import EditWordForm from "../EditWordForm/EditWordForm";

const WordList = () => {
  const dispatch = useDispatch();
  const { results, totalPages, page, perPage } = useSelector(selectWords);
  const [currentPage, setCurrentPage] = useState(page || 1);

  const [IsOpenModalDelete, setOpenModalDelete] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // Для позиціонування
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

  const onActionClick = (event, row) => {
    setAnchorEl(event.currentTarget); // Зберігаємо кнопку, на яку натиснули
    setSelectedRow(row);
  };

  const handleOpenModalDelete = () => {
    setAnchorEl(null); // Миттєво прибираємо якір (div зникає)

    // Даємо React час повністю "забути" про попередній стан DOM
    setTimeout(() => {
      setOpenModalDelete(true);
    }, 100);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Закриваємо меню
    setSelectedRow(null); // Скидаємо вибраний рядок
  };

  const closeModal = () => {
    setOpenModalDelete(false); // Закриваємо модальне вікно
    setSelectedRow(null); // Скидаємо вибраний рядок
  };

  useEffect(() => {
    dispatch(fetchWords(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <p>hello</p>
      <Table results={results} onActionClick={onActionClick} />
      <CustomPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {anchorEl && (
        <ActionMenu
          anchor={anchorEl}
          onOpenModalDelete={handleOpenModalDelete}
          onOpenEditForm={() => setIsOpenEditForm(true)}
          onClose={handleCloseMenu}
        />
      )}

      {IsOpenModalDelete && (
        <ModalDeleteWord
          openModal={IsOpenModalDelete}
          onClose={closeModal}
          row={selectedRow}
        />
      )}
      {isOpenEditForm && <EditWordForm />}
    </div>
  );
};

export default WordList;
