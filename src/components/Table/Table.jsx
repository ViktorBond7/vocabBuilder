import DataTable from "react-data-table-component";
import ModalDeleteWord from "../ModalDeleteWord/ModalDeleteWord";
import { useState } from "react";
import ActionMenu from "../ActionMenu/ActionMenu";
import EditWordForm from "../EditWordForm/EditWordForm";

const Table = ({ results }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // Для позиціонування
  const [isOpenEditForm, setIsOpenEditForm] = useState(false); // Стан модального вікна

  console.log("anchorEl", anchorEl);

  const handleOpenPopover = (event, row) => {
    setAnchorEl(event.currentTarget); // Зберігаємо кнопку, на яку натиснули
    setSelectedRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const collums = [
    {
      name: "word",
      selector: (row) => row.ua,
      sortable: true,
      width: "300px",

      conditionalCellStyles: [
        {
          when: (row) => row.ua,
          style: {
            backgroundColor: "lightblue", // Задає колір фону для стовпця
            color: "darkblue", // Задає колір тексту для стовпця
          },
        },
      ],
    },
    {
      name: "translation",
      selector: (row) => row.en,
      sortable: true,
    },
    {
      name: "category",
      selector: (row) => row.category,
    },
    {
      name: "cat",
      cell: (row) => (
        <button onClick={(e) => handleOpenPopover(e, row)}>...</button>
      ),
    },
  ];

  const closeModal = () => {
    setIsOpen(false); // Закриваємо модальне вікно
    setSelectedRow(null); // Скидаємо вибраний рядок
  };

  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "red",
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "red",
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "red",
        },
        "&:last-child": {
          overflow: "visible", // Дозволяємо меню виходити за межі комірки
          position: "relative",
        },
      },
    },
  };

  return (
    <>
      <DataTable
        title="Word List"
        columns={collums}
        data={results} // data from redux
        customStyles={customStyles}
      />
      {/* Якщо anchorEl існує — показуємо маленьке меню */}

      <ActionMenu
        anchor={anchorEl}
        onOpenModalDelete={() => setIsOpen(true)}
        onOpenEditForm={() => setIsOpenEditForm(true)}
        onClose={handleClose}
      />

      {modalIsOpen && (
        <ModalDeleteWord
          openModal={modalIsOpen}
          onClose={closeModal}
          row={selectedRow}
        />
      )}
      {isOpenEditForm && <EditWordForm />}
    </>
  );
};
export default Table;
