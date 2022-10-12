import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<User />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
