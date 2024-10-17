import { Route, Routes } from "react-router-dom";
import "./App.css";
import WordList from "./pages/DictionaryPage/DictionaryPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
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
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
{
  /* <Route
          path="/register"
          element={
            <WordList redirectTo="/register" component={<RegistrationPage />} />
          }
        /> */
}
