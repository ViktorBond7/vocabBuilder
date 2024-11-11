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
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

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
        <Route
          path="/"
          element={
            <RestrictedRoute
              redirectTo="/dictionary"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/dictionary"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/dictionary"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/dictionary"
          element={
            <PrivateRoute redirectTo="/login" component={<WordList />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
