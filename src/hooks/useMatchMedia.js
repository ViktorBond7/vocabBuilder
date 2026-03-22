import { useState, useLayoutEffect } from "react";

const queries = [
  "(max-width: 767px)", // Mobile
  "(min-width: 768px) and (max-width: 1439px)", // Tablet
  "(min-width: 1440px)", // Desktop
];

const useMatchMedia = () => {
  // Створюємо медіа-ліст для кожного запиту
  const mediaQueryLists = queries.map((query) => window.matchMedia(query));

  // Функція для отримання поточних значень (true/false)
  const getValue = () => mediaQueryLists.map((mql) => mql.matches);

  const [values, setValues] = useState(getValue);

  useLayoutEffect(() => {
    const handler = () => setValues(getValue);

    // Додаємо слухач подій на зміну розміру вікна для кожного брейкпоїнта
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

    return () =>
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", handler),
      );
  }, []);

  // Повертаємо об'єкт зі зрозумілими назвами
  return {
    isMobile: values[0],
    isTablet: values[1],
    isDesktop: values[2],
  };
};

export default useMatchMedia;
