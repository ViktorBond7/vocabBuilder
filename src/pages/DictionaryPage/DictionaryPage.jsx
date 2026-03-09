import { useDispatch } from "react-redux";
import WordList from "../../components/WordsList/WordsList";
import Dashboard from "../../components/Dashboard/Dashboard";

const DictionaryPage = () => {
  return (
    <div>
      <Dashboard />

      {/* <DocumentTitle>Login</DocumentTitle> */}
      <WordList />
    </div>
  );
};
export default DictionaryPage;
