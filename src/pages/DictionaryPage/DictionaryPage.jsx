import WordList from "../../components/WordsList/WordsList";
import Dashboard from "../../components/Dashboard/Dashboard";
import Container from "../../components/Container/Container";
import { fetchWordsOwn } from "../../redax/words/operations";
import ActionMenu from "../../components/ActionMenu/ActionMenu";
import ModalDeleteWord from "../../components/ModalDeleteWord/ModalDeleteWord";
import EditWordForm from "../../components/EditWordForm/EditWordForm";
import { Toaster } from "react-hot-toast";
import useTableMenu from "../../hooks/useTableMenu";
import useWords from "../../hooks/useWords";

const DictionaryPage = () => {
  const {
    selectedRow,
    anchorEl,
    activeModal,
    openMenu,
    closeMenu,
    openModal,
    closeModal,
  } = useTableMenu();

  useWords(fetchWordsOwn);

  return (
    <Container>
      <Dashboard />

      {/* <DocumentTitle>Login</DocumentTitle> */}
      <WordList key="dictionary" onActionClick={openMenu} />

      {anchorEl && (
        <ActionMenu
          anchor={anchorEl}
          onOpenModalDelete={() => openModal("delete")}
          onOpenEditForm={() => openModal("edit")}
          onClose={closeMenu}
        />
      )}

      {activeModal === "delete" && (
        <ModalDeleteWord
          openModal={activeModal}
          onClose={closeModal}
          row={selectedRow}
        />
      )}
      {activeModal === "edit" && (
        <EditWordForm
          isOpen={activeModal}
          onClose={closeModal}
          row={selectedRow}
        />
      )}
      <Toaster />
    </Container>
  );
};

export default DictionaryPage;
