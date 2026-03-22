import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import css from "./Table.module.scss";
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
      minWidth: "90px",
      // minWidth: "50px",

      // conditionalCellStyles: [
      //   {
      //     when: (row) => row.ua,
      //     style: {
      //       // backgroundColor: "lightblue",
      //       color: "darkblue", // Задає колір тексту для стовпця
      //       width: "20px",
      //     },
      //   },
      // ],
    },
    {
      name: "translation",
      selector: (row) => row.en,
      sortable: true,
      minWidth: "90px",
    },
    {
      name: "category",
      selector: (row) => row.category,
      minWidth: "98px",
    },
    {
      name: "",
      minWidth: "38px",
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
        // minHeight: "56px",
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
    <div className={css.container}>
      <DataTable
        // title="Word List"
        columns={collums}
        data={results} // data from redux
        customStyles={customStyles}
        responsive
      />
    </div>
  );
};
export default Table;
