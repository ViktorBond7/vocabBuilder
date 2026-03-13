import { useDispatch } from "react-redux";
import WordList from "../../components/WordsList/WordsList";
import Dashboard from "../../components/Dashboard/Dashboard";
import Container from "../../components/Container/Container";

const DictionaryPage = () => {
  return (
    <Container>
      <Dashboard />

      {/* <DocumentTitle>Login</DocumentTitle> */}
      <WordList />
    </Container>
  );
};
export default DictionaryPage;
