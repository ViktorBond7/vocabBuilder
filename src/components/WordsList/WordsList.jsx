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

  const handleOpenModal = (target) => {
    setAnchorEl(null);
    target(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Закриваємо меню
    setSelectedRow(null); // Скидаємо вибраний рядок
  };

  const closeModal = (target) => {
    target(false); // Закриваємо модальне вікно
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
      <Table results={results} onActionClick={onActionClick} />
      <CustomPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {anchorEl && (
        <ActionMenu
          anchor={anchorEl}
          onOpenModalDelete={() => handleOpenModal(setOpenModalDelete)}
          onOpenEditForm={() => handleOpenModal(setIsOpenEditForm)}
          onClose={handleCloseMenu}
        />
      )}

      {IsOpenModalDelete && (
        <ModalDeleteWord
          openModal={IsOpenModalDelete}
          onClose={() => closeModal(setOpenModalDelete)}
          row={selectedRow}
        />
      )}
      {isOpenEditForm && (
        <EditWordForm
          isOpen={isOpenEditForm}
          onClose={() => closeModal(setIsOpenEditForm)}
          row={selectedRow}
        />
      )}
    </div>
  );
};

export default WordList;
