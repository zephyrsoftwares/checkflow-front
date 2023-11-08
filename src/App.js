import React from "react";
import logo from "./assets/images/logo.svg";
import text from "./assets/images/text.svg";

import "./assets/styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="350" className="App-logo mb-9" alt="logo" />
        <img src={text} width="350" alt="Site en construction." />
      </header>
    </div>
  );
}

export default App;
