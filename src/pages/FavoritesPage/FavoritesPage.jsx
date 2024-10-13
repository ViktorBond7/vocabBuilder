import { useSelector } from "react-redux";
import css from "./FavoritesPage.module.css";
import CamperItem from "../../components/CamperItem/CamperItem";
import { selectFavorites } from "../../redux/campers/campersSlice";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.container}>
      <h1>Favorites</h1>
      <ul className={css.fff}>
        {favorites.map((camper) => (
          <CamperItem key={camper._id} camper={camper} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
