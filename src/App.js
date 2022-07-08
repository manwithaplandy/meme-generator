import "./App.css";
import Meme from "./components/Meme";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;
