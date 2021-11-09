import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import MainContainer from "./Components/Container/MainContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <MainContainer />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
