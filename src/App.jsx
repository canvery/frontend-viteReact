import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import StickyNotes from "./components/StickyNotes";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stickynotes" element={<StickyNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
