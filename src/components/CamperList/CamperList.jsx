import { useSelector } from "react-redux";
// import { selectFilteredLocation } from "../../redux/campers/selectors";
import css from "./CamperList.module.css";
import CamperItem from "../CamperItem/CamperItem";
import { selectError } from "../../redux/campers/campersSlice";
import { selectFilterVehicle } from "../../redux/filters/selectors";
// import { selectFilterVehicle } from "../../redux/filters/selectors";

const CamperList = () => {
  // const campers = useSelector(selectCampers);

  // const filteredLocation = useSelector(selectFilteredLocation);
  // console.log("filteredLocation", filteredLocation);

  const filterVehicle = useSelector(selectFilterVehicle);
  console.log(" filterVehicle111111111111", filterVehicle);
  const error = useSelector(selectError);

  return (
    <>
      {error && (
        <p>Oops, there was an error, please try reloading!!! {error}</p>
      )}
      <ul className={css.list}>
        {filterVehicle.map((camper) => (
          <CamperItem key={camper._id} camper={camper} />
        ))}
      </ul>
    </>
  );
};

export default CamperList;
