import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import css from "./Table.module.scss";
import useMatchMedia from "../../hooks/useMatchMedia";
import IconSvg from "../IconSvg/IconSvg";

const Table = ({ results, onActionClick }) => {
  const param = useLocation();
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const collums = [
    {
      name: "word",
      selector: (row) => row.ua,
      sortable: true,
      minWidth: "85px",
      grow: 2,

      wrap: true,

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
      minWidth: "85px",
      wrap: true,
      grow: 2,
    },
    {
      name: "category",
      selector: (row) => row.category,
      minWidth: "85px",
      wrap: true,
      grow: 1,
    },
    {
      name: "",
      minWidth: "38px",
      grow: 1,
      wrap: false,
      cell: (row) => {
        if (param.pathname === "/recommend") {
          return (
            <button
              className={css.btnAr}
              onClick={(e) => onActionClick(e, row)}
            >
              {isMobile ? (
                <IconSvg name="icon-switch-horizontal" className={css.iconAr} />
              ) : (
                <div className={css.btnAdd}>
                  Add to dictionary
                  <IconSvg
                    name="icon-switch-horizontal"
                    className={css.iconAr}
                  />
                </div>
              )}
            </button>
          );
        }

        return (
          <button className={css.btnAr} onClick={(e) => onActionClick(e, row)}>
            ...
          </button>
        );
      },
    },
  ];

  const customStyles = {
    header: {
      style: {},
    },

    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "#dbdbdb",
        backgroundColor: "rgba(133, 170, 159, 0.1)",
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "#dbdbdb",
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: "#dbdbdb",
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
