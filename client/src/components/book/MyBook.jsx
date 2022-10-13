import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Widget from "../widget/Widget";
import "./home.css";

import BookList from "../book/BookList";

function MyBook({ loggedUser }) {
  let location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  const [user, setUser] = useState(state);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      navigate("/login");
      setUser(null);
    });
  };

  return (
    <div className="wrapper">
      <div className="home-flex">
        <div className="side left">
          <Sidebar
            user={user || loggedUser}
            logout={handleLogout}
          />
        </div>
        <div
          className="widget right"
          style={{
            width: "85vw",
          }}
        >
          <div
            className="right-bottom"
            style={{ padding: "0.5rem 2rem" }}
          >
            <div
              className="my-books-title"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#2d2f31",
                padding: "1rem 0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <h1 style={{ color: "#fff" }}>My Books</h1>
              <NavLink to="/new-book">
                <button
                  className="btn-primary"
                  style={{ padding: "0.2rem 1.5rem", fontSize: "1rem" }}
                >
                  Add Book
                </button>
              </NavLink>
            </div>

            <BookList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBook;
