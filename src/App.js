import React from "react";
import "./App.css";
import Simple from "./components/Simple";
import Complex from "./components/Complex";

function App() {
  return (
    <div className="main">
      <p>Click to see the miracle</p>
      <Simple />
      <Complex />
    </div>
  );
}

export default App;
