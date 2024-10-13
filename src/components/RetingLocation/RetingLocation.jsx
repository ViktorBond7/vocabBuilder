import IconSvg from "../IconSvg/IconSvg";
import css from "./RetingLocation.module.css";
const RetingLocation = ({ camper }) => {
  return (
    <div className={css.ratingLocation}>
      <p className={css.pageRating}>
        <IconSvg
          iconName="icon-asterisk"
          width="16"
          height="16"
          className={css.asterisk}
        />
        {camper.rating}({camper.reviews ? camper.reviews.length : 0}
        reviews)
      </p>
      <p className={css.pageLocation}>
        <IconSvg
          iconName="icon-location"
          width="16"
          height="16"
          className={css.iconns}
        />
        {camper.location}
      </p>
    </div>
  );
};
export default RetingLocation;
