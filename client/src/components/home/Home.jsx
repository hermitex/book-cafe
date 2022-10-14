import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Widget from "../widget/Widget";
import "./home.css";

import allIcon from "./assets/all.png";
import BookList from "../book/BookList";
import useFetch from "../hooks/useFetch";

function Home({ loggedUser }) {
  let location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  const [user, setUser] = useState(state);
  const [books, setBooks] = useFetch();

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
          <div className="right-top">
            <Widget
              user={user}
              icon={allIcon}
              data={books && books.length}
              text="Available Books"
            />
            <Widget
              user={user}
              icon={allIcon}
              data={user && user.books.length}
              text="Viewed Books"
            />
            <Widget
              user={user}
              icon={allIcon}
              data={user && user.books.length}
              text="Pending Books"
            />
          </div>
          <div
            className="right-bottom"
            style={{ padding: "1rem 2rem" }}
          >
            <BookList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
