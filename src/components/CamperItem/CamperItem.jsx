import { useDispatch, useSelector } from "react-redux";
import IconSvg from "../IconSvg/IconSvg";
import RetingLocation from "../RetingLocation/RetingLocation";
import ShowMore from "../ShowMore/ShowMore";

import css from "./CamperItem.module.css";
import { formatPrice } from "../../utils/formatPrice";
import {
  addFavorite,
  removeFavorite,
  selectFavorites,
} from "../../redux/campers/campersSlice";

const CamperItem = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((fav) => fav._id === camper._id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper._id));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  return (
    <li className={css.item}>
      <div className={css.containerImg}>
        <img
          className={css.camperIcon}
          src={camper.gallery[0]}
          alt={camper.name}
        />
      </div>
      <div>
        <div className={css.itemHeader}>
          <p>{camper.name}</p>
          <p className={css.pagePrice}>
            {/* €{camper.price} */}
            {`€${formatPrice(camper.price)}`}
            <button
              className={css.buttonFavorites}
              onClick={handleFavoriteClick}
            >
              <IconSvg
                iconName="icon-favorite"
                width="24"
                height="24"
                className={isFavorite ? css.iconnsRed : css.iconns}
              />
            </button>
          </p>
        </div>
        <RetingLocation camper={camper} />
        <p className={css.page}>{camper.description}</p>
        <ul className={css.optionalList}>
          <li className={css.camperOpcion}>
            <IconSvg
              iconName="icon-adults"
              width="20"
              height="20"
              className={css.iconns1}
            />
            {camper.adults} adults
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-automatic"
              width="20"
              height="20"
              className={css.iconns}
            />
            {camper.transmission}
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg iconName="icon-petrol" width="20" height="20" />
            {camper.engine}
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-kitchen"
              width="20"
              height="20"
              className={css.iconns}
            />{" "}
            kitchen
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-beds"
              width="20"
              height="20"
              className={css.iconns}
            />{" "}
            {camper.details.beds} beds
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-conditioner"
              width="20"
              height="20"
              className={css.iconns}
            />{" "}
            {camper.details.airConditioner ? "AC" : "-"}
          </li>
        </ul>
        <ShowMore camper={camper} />
      </div>
    </li>
  );
};

export default CamperItem;
