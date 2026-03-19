import WordList from "../../components/WordsList/WordsList";
import Dashboard from "../../components/Dashboard/Dashboard";
import Container from "../../components/Container/Container";
import { addWordWithRecommend, fetchWords } from "../../redax/words/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetPageState } from "../../redax/words/slice";
import toast, { Toaster } from "react-hot-toast";

const RecommendPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetPageState());
    };
  }, [dispatch]);

  const handleAddWord = async (row) => {
    try {
      await dispatch(addWordWithRecommend(row._id)).unwrap();
      toast.success("Word added to your dictionary!");
    } catch (err) {
      toast.error(err || "Failed to add word");
    }
  };

  return (
    <Container>
      <Dashboard />

      {/* <DocumentTitle>Login</DocumentTitle> */}
      <WordList
        key="recommend"
        fetchAction={fetchWords}
        onActionClick={(_, row) => handleAddWord(row)}
      />
      <Toaster />
    </Container>
  );
};
export default RecommendPage;
