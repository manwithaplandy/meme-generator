import "./App.css";
import Meme from "./components/Meme";
import Inputs from "./components/Inputs";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Inputs />
      <Meme />
    </div>
  );
}

export default App;
