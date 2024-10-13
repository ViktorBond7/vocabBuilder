import { useDispatch, useSelector } from "react-redux";
import IconSvg from "../IconSvg/IconSvg";
import css from "./Location.module.css";
import { selectLocationFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const Location = () => {
  const locationFilter = useSelector(selectLocationFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.locationContainer}>
      <label>Location</label>
      <div className={css.inputWrapper}>
        <input
          type="text"
          value={locationFilter}
          onChange={(evt) => dispatch(changeFilter(evt.target.value))}
        />
        <IconSvg
          iconName="icon-location"
          width="20"
          height="20"
          className={css.icon}
        />
      </div>
    </div>
  );
};

export default Location;
