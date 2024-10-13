import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/campersSlice";

export const selectLocationFilter = (state) => state.filters.location;

export const selectChangeVehicle = (state) => state.filters.vehicleEquipment;

export const selectFilterVehicle = createSelector(
  [selectCampers, selectChangeVehicle],
  (campers, filter) => {
    if (filter.length === 0) {
      return campers; // Повертаємо всі camper, якщо немає фільтрів
    }

    const filteredCampers = campers.filter((camper) => {
      // Перевірка збігу по transmission (engineMatches)
      const engineMatches = filter.some(
        (filterItem) =>
          camper.transmission &&
          camper.transmission.toLowerCase().includes(filterItem.toLowerCase())
      );

      // Перевірка збігу по kitchen і TV у details (detailsMatches)
      const detailsMatches = filter.some(
        (filterItem) =>
          (camper.details.kitchen === true &&
            filterItem.toLowerCase() === "kitchen") ||
          (camper.details.TV === true && filterItem.toLowerCase() === "tv")
      );

      // Логіка для одного фільтра
      if (filter.length === 1) {
        return engineMatches || detailsMatches; // Якщо є тільки один фільтр, перевіряємо або по transmission, або по details
      }

      // Логіка для двох і більше фільтрів
      if (filter.length > 1) {
        return engineMatches && detailsMatches; // Якщо є більше одного фільтра, перевіряємо, що обидві умови виконуються одночасно
      }

      return false; // Якщо фільтрів немає або не задовольняє умовам
    });

    return filteredCampers;
  }
);
