import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/campersOps";
import css from "./CampersPage.module.css";
import Filters from "../../components/Filters/Filters";
import LoadMore from "../../components/LoadMore/LoadMore";
import { incrementPage, selectPage } from "../../redux/campers/campersSlice";

const CamperPage = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div>
      <div className={css.container}>
        <Filters />
        <CamperList />
      </div>
      <LoadMore className={css.button} handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default CamperPage;
