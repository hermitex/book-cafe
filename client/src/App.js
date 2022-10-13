import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./components/book/BookDetails";
import MyBookList from "./components/book/MyBookList";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import NewBook from "./components/new/NewBook";
import Signup from "./components/signup/Signup";
// import User from "./components/User";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

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
            element={<Home loggedUser={user} />}
          />

          <Route
            path="/new-books"
            element={<NewBook />}
          />

          <Route
            path="/book-details"
            element={<BookDetails />}
          />

          <Route
            path="/my-books"
            element={<MyBookList />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
