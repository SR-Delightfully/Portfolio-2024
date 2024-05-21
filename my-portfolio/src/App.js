import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <h1> Hello World </h1>
            </div>
          }
        />

        <Route
          path="/about"
          element={
            <div className="app">
              <h1> About </h1>
            </div>
          }
        />

        <Route
          path="/gallery"
          element={
            <div className="app">
              <h1> Gallery </h1>
            </div>
          }
        />

        <Route
          path="/coding"
          element={
            <div className="app">
              <h1> Coding </h1>
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div className="app">
              <h1> Contact </h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
