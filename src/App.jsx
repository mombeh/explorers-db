import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import React from "react";
import "./App.css";
import MovieContextData from "./context/context";

function App() {
  return (
    <MovieContextData>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </MovieContextData>
  );
}

export default App;
