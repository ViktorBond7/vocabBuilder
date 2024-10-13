import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import css from "./Filters.module.css";
const Filters = () => {
  return (
    <div className={css.container}>
      <Location />
      <VehicleEquipment />
    </div>
  );
};

export default Filters;
