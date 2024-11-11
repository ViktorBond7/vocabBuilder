import DataTable from "react-data-table-component";
import ModalEditDelete from "../ModalEditDelete/ModalEditDelete";
import { useState } from "react";

const Table = ({ results }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

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
            // border: "2px solid darkblue",
            // width: "30px",
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
        <button onClick={() => handleButtonClick(row)}>...</button>
      ),
    },
  ];
  const handleButtonClick = (row) => {
    setIsOpen(true);
    setSelectedRow(row);
  };

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
      },
    },
  };

  return (
    <>
      <DataTable
        title="Word List"
        columns={collums}
        data={results} // дані з бекенду
        customStyles={customStyles}
      />
      <ModalEditDelete
        openModal={modalIsOpen}
        onClose={closeModal}
        row={selectedRow}
      />
    </>
  );
};
export default Table;

// const customStyles = {
//   header: {
//     style: {
//       backgroundColor: "#f1f1f1",
//       fontSize: "16px",
//       fontWeight: "bold",
//     },
//   },
//   rows: {
//     style: {
//       minHeight: "72px",
//     },
//   },
//   headCells: {
//     style: {
//       paddingLeft: "8px",
//       paddingRight: "8px",
//     },
//   },
//   cells: {
//     style: {
//       paddingLeft: "8px",
//       paddingRight: "8px",
//     },
//   },
// };

// const customStyles = {
//   pagination: {
//     style: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "10px",
//     },
//     pageButtonsStyle: {
//       border: "1px solid #ddd",
//       borderRadius: "6px",
//       padding: "5px 10px",
//       margin: "0 5px",
//       cursor: "pointer",
//       transition: "0.3s",
//       backgroundColor: "#fff",
//       color: "#333",
//       "&:hover": {
//         backgroundColor: "#f1f1f1",
//       },
//       "&:focus": {
//         outline: "none",
//         backgroundColor: "#8FA9A2",
//         color: "#fff",
//       },
//     },
//     activePageStyle: {
//       backgroundColor: "#8FA9A2",
//       color: "#fff",
//     },
//   },
// };
