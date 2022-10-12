import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
// import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            index
            element={<Login />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
