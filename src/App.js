import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Accueil, NotFound } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
