import { Route, Routes } from "react-router-dom";
import "./App.css";
import WordList from "./pages/DictionaryPage/DictionaryPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistrationPage />} />
      <Route
        path="/register"
        element={
          <WordList redirectTo="/words" component={<RegistrationPage />} />
        }
      />
    </Routes>
  );
}

export default App;
