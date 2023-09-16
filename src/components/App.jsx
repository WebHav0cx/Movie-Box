import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../pages/Movies";
import HomePage from "../pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
