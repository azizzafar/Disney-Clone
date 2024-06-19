import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Details from "./components/Details";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Render Header component within BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element= {<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
