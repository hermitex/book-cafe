import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Widget from "../widget/Widget";
import "./home.css";

import allIcon from "./assets/all.png";

function Home({ loggedUser }) {
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
    <div className="home-flex">
      <div className="side left">
        <Sidebar
          user={user || loggedUser}
          logout={handleLogout}
        />
        <div className="button">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="widget right">
        <Widget
          user={user}
          icon={allIcon}
          data={user.books.length}
          text="Available Books"
        />
        <Widget
          user={user}
          icon={allIcon}
          data={user.books.length}
          text="Viewed Books"
        />
        <Widget
          user={user}
          icon={allIcon}
          data={user.books.length}
          text="Pending Books"
        />
      </div>
    </div>
  );
}

export default Home;
