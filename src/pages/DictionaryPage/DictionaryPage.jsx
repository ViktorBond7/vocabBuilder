import { useDispatch } from "react-redux";
import WordList from "../../components/WordsList/WordsList";
import Dashboard from "../../components/Dashboard/Dashboard";
import Container from "../../components/Container/Container";
import { fetchWordsOwn } from "../../redax/words/operations";
import { useState } from "react";
import ActionMenu from "../../components/ActionMenu/ActionMenu";
import ModalDeleteWord from "../../components/ModalDeleteWord/ModalDeleteWord";
import EditWordForm from "../../components/EditWordForm/EditWordForm";

const DictionaryPage = () => {
  const [IsOpenModalDelete, setOpenModalDelete] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // Для позиціонування
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);

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

  return (
    <Container>
      <Dashboard />

      {/* <DocumentTitle>Login</DocumentTitle> */}
      <WordList
        fetchAction={fetchWordsOwn}
        setAnchorEl={setAnchorEl}
        onSelectWord={setSelectedRow}
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
    </Container>
  );
};
export default DictionaryPage;
