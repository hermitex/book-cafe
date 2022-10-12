import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
// import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
