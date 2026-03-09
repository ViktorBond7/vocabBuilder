import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import css from "./CustomPagination.module.scss";

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  // 1. Якщо сторінок 0 або 1, пагінація не потрібна
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    const range = 1; // Скільки сторінок показувати навколо поточної

    for (let i = 1; i <= totalPages; i++) {
      // Завжди додаємо першу, останню та сторінки в радіусі 'range' від поточної
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - range && i <= currentPage + range)
      ) {
        pages.push(i);
      }
      // Додаємо null (або '...'), якщо є розрив у цифрах
      else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className={css.pagination}>
      {/* Кнопка "Назад" */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {/* Рендеримо числа */}
      {getPages().map((page, index) => {
        if (page === "...") {
          return (
            <span key={`dots-${index}`} className={css.dots}>
              ...
            </span>
          );
        }

        return (
          <button
            key={`page-${page}`} // Тепер ключі точно унікальні
            onClick={() => onPageChange(page)}
            className={currentPage === page ? css.active : ""}
          >
            {page}
          </button>
        );
      })}

      {/* Кнопка "Вперед" */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default CustomPagination;
