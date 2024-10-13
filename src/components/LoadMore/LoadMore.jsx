import { useSelector } from "react-redux";
import css from "./LoadMore.module.css";
import { selectHasMore, selectLoading } from "../../redux/campers/campersSlice";
import { selectFilteredLocation } from "../../redux/campers/selectors";

const LoadMore = ({ handleLoadMore }) => {
  const loading = useSelector(selectLoading);
  const hasMore = useSelector(selectHasMore);
  const filteredResults = useSelector(selectFilteredLocation);
  const hasResults = filteredResults.length > 0;

  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {hasMore && !loading && hasResults && (
        <button className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMore;
