import { useDispatch, useSelector } from "react-redux";

import { selectWords } from "../../redax/words/selectors";
import { useEffect } from "react";
import { fetchWords } from "../../redax/words/operations";

const WordList = () => {
  const visibleWords = useSelector(selectWords);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  return (
    <div>
      <p>hello</p>
      <ul>
        {visibleWords.results && visibleWords.results.length > 0 ? (
          visibleWords.results.map((item) => <li key={item._id}>{item.en}</li>)
        ) : (
          <li>No words available</li>
        )}
      </ul>
    </div>
  );
};

export default WordList;
