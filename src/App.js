import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import PrivateRouteConnexion from "./components/PrivateRouteConnexion";

import { AuthProvider } from "./contexts/AuthContext";

import { Accueil, NotFound, Connexion } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Accueil />} />
          </Route>
          <Route path="/" element={<PrivateRouteConnexion />}>
            <Route exact path="/connexion" element={<Connexion />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
