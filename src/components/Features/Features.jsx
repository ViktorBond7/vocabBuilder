import ComfortDetails from "../ComfortDetails/ComfortDetails";
import OrderForm from "../OrderForm/OrderForm";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import css from "./Features.module.css";

const Features = ({ camper }) => {
  return (
    <div className={css.container}>
      <div>
        <ComfortDetails className={css.containerComfortDet} camper={camper} />
        <VehicleDetails camper={camper} />
      </div>
      <div className={css.containerForm}>
        <OrderForm />
      </div>
    </div>
  );
};

export default Features;
