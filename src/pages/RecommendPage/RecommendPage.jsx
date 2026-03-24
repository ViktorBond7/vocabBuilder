import WordList from "../../components/WordsList/WordsList";
import Dashboard from "../../components/Dashboard/Dashboard";
import Container from "../../components/Container/Container";
import { addWordWithRecommend, fetchWords } from "../../redax/words/operations";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import useWords from "../../hooks/useWords";

const RecommendPage = () => {
  const dispatch = useDispatch();

  useWords(fetchWords);

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
        onActionClick={(_, row) => handleAddWord(row)}
      />
      <Toaster />
    </Container>
  );
};
export default RecommendPage;
