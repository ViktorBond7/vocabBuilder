import OrderForm from "../OrderForm/OrderForm";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import css from "./Reviews.module.css";

const Reviews = ({ camper }) => {
  return (
    <div className={css.container}>
      <div>
        <ReviewsItem camper={camper} className={css.containerComfortDet} />
      </div>
      <div className={css.containerForm}>
        <OrderForm />
      </div>
    </div>
  );
};

export default Reviews;
