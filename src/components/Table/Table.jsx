import DataTable from "react-data-table-component";
// import ModalDeleteWord from "../ModalDeleteWord/ModalDeleteWord";
// import { useState } from "react";
// import ActionMenu from "../ActionMenu/ActionMenu";
// import EditWordForm from "../EditWordForm/EditWordForm";

const Table = ({ results, onActionClick }) => {
  const collums = [
    {
      name: "word",
      selector: (row) => row.ua,
      sortable: true,

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
        <button onClick={(e) => onActionClick(e, row)}>...</button>
      ),
    },
  ];

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
    </>
  );
};
export default Table;
