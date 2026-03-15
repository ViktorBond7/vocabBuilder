import WordList from "../../components/WordsList/WordsList";
import Dashboard from "../../components/Dashboard/Dashboard";
import Container from "../../components/Container/Container";
import { addWordWithRecommend, fetchWords } from "../../redax/words/operations";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const RecommendPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  console.log("RecommendPage: selectedRow", selectedRow);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedRow) return;
    dispatch(addWordWithRecommend(selectedRow._id));
  }, [dispatch, selectedRow]);

  return (
    <Container>
      <Dashboard />

      {/* <DocumentTitle>Login</DocumentTitle> */}
      <WordList fetchAction={fetchWords} onSelectWord={setSelectedRow} />
    </Container>
  );
};
export default RecommendPage;
