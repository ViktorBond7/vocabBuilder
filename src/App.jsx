import { Suspense } from "react";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CamperPage from "./pages/CampersPage/CampersPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CamperPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
