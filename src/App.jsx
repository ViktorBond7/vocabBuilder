import { Route, Routes } from "react-router-dom";
import "./App.css";
import WordList from "./pages/DictionaryPage/DictionaryPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redax/auth/operations";
import { selectIsRefreshing } from "./redax/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Refreshihg user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route
          path="/register"
          element={
            <WordList redirectTo="/words" component={<RegistrationPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
