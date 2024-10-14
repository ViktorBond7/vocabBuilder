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
      <ul>
        {visibleWords.length > 0 ? (
          visibleWords.map((item) => (
            <li key={item.id}>
              <p> item</p>
            </li>
          ))
        ) : (
          <h1>Create your first word😉</h1>
        )}
      </ul>
    </div>
  );
};

export default WordList;
