import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import React from "react";
import "./App.css";
import {MovieContextData} from "./context/context";

function App() {
  return (
    <MovieContextData>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
    </MovieContextData>
  );
}

export default App;
