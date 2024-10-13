import { useDispatch, useSelector } from "react-redux";
import css from "./VehicleEquipment.module.css";
import { selectChangeVehicle } from "../../redux/filters/selectors";
import { addVehicle, removeVehicle } from "../../redux/filters/slice";
import { useCallback } from "react";

import Equipment from "../Equipment/Equipment";

const VehicleEquipment = () => {
  const dispatch = useDispatch();
  const visibleVehicle = useSelector(selectChangeVehicle);

  console.log("444444444444444", visibleVehicle);

  //   const handleVehicleClick = (label) => {
  //     dispatch(toggleVehicle(label));
  //   };
  const handleVehicleClick = useCallback(
    (label) => {
      if (visibleVehicle.includes(label)) {
        dispatch(removeVehicle(label));
      } else {
        dispatch(addVehicle(label));
      }
    },
    [visibleVehicle, dispatch]
  );

  return (
    <div className={css.equipmentList}>
      {Equipment.map((item) => (
        <label
          key={item.label}
          className={`${css.card} ${
            visibleVehicle.includes(item.label) ? css.selected : ""
          }`}
          //   onClick={() => handleVehicleClick(item.label)}
        >
          <input
            type="checkbox"
            checked={visibleVehicle.includes(item.label)}
            onChange={() => handleVehicleClick(item.label)}
            // onClick={() => handleVehicleClick(item.label)}
            className={css.hiddenCheckbox}
            readOnly // Чекбокс readonly, щоб він не генерував події
          />
          <div className={css.icon}>{item.icon}</div>
          <div className={css.label}>{item.label}</div>
        </label>
      ))}
    </div>
  );
};
export default VehicleEquipment;
