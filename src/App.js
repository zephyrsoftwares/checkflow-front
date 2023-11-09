import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Engagement from "./pages/engagement";
import Connexion from "./pages/connexion";
import Reglages from "./pages/reglages";
import Accueil from "./pages/accueil";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/reglages" element={<Reglages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
