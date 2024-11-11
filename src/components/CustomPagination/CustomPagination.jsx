import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import css from "./CustomPagination.module.scss";
const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Відображаємо першу сторінку
    pageNumbers.push(
      <button
        key={`page-1`}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        1
      </button>
    );

    // Якщо поточна сторінка більше 4, додаємо три крапки після першої сторінки
    if (currentPage > 4) {
      pageNumbers.push(<span key={`dots-start`}>...</span>);
    }

    // Відображаємо сторінки навколо поточної сторінки (від currentPage - 1 до currentPage + 1)
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);
    console.log("max", startPage);
    console.log("min", endPage);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={`page-${i}`}
          onClick={() => onPageChange(i)}
          disabled={currentPage === i}
          className={currentPage === i ? css.active : ""}
        >
          {i}
        </button>
      );
    }

    // Якщо між поточною сторінкою і останньою сторінкою є більше ніж одна сторінка, додаємо три крапки
    if (currentPage < totalPages - 2) {
      pageNumbers.push(<span key={`dots-end`}>...</span>);
    }

    // Додаємо останню сторінку
    pageNumbers.push(
      <button
        key={`page-${totalPages}`}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        {totalPages}
      </button>
    );

    return pageNumbers;
  };
  return (
    <div className={css.pagination}>
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </button>
    </div>
  );
};
export default CustomPagination;
