import { width } from "@fortawesome/free-solid-svg-icons/fa1";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
// import ModalDeleteWord from "../ModalDeleteWord/ModalDeleteWord";
// import { useState } from "react";
// import ActionMenu from "../ActionMenu/ActionMenu";
// import EditWordForm from "../EditWordForm/EditWordForm";

const Table = ({ results, onActionClick }) => {
  const param = useLocation();

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
            width: "20px",
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
      name: "",
      cell: (row) => {
        if (param.pathname === "/recommend") {
          return (
            <button onClick={(e) => onActionClick(e, row)}>
              Add to dictionary +
            </button>
          );
        }

        return <button onClick={(e) => onActionClick(e, row)}>...</button>;
      },
    },
  ];

  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
        // backgroundColor: "red",
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
        responsive
      />
    </>
  );
};
export default Table;
