import WordList from "../../components/WordsList/WordsList";
import Dashboard from "../../components/Dashboard/Dashboard";
import Container from "../../components/Container/Container";
import { addWordWithRecommend, fetchWords } from "../../redax/words/operations";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetPageState } from "../../redax/words/slice";
import toast, { Toaster } from "react-hot-toast";

const RecommendPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedRow) return;
    const addWord = async () => {
      try {
        await dispatch(addWordWithRecommend(selectedRow._id)).unwrap();
        toast.success("add word");
      } catch (err) {
        toast.error(err || "Failed to add word");
      }
    };
    addWord();
  }, [dispatch, selectedRow]);

  useEffect(() => {
    return () => {
      dispatch(resetPageState());
    };
  }, [dispatch]);

  return (
    <Container>
      <Dashboard />

      {/* <DocumentTitle>Login</DocumentTitle> */}
      <WordList fetchAction={fetchWords} onSelectWord={setSelectedRow} />
      <Toaster />
    </Container>
  );
};
export default RecommendPage;
