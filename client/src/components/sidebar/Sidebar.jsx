import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar({ user, logout }) {
  console.log(user);
  return (
    <div
      style={{
        backgroundColor: "green",
        minHeight: "100vh",
        width: "15vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: "1rem",
      }}
    >
      <div className="top">
        <div className="title">
          <h1>BOOK CAFE</h1>
        </div>

        <nav>
          <label for="touch">
            {/* <small>Welcome, {user.username}!</small> */}
            <span className="sidebar-span">
              <div
                className="avatar-container"
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "grey",
                  borderRadius: "100%",
                  textAlign: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src=""
                  alt={user.username}
                />
              </div>{" "}
            </span>
          </label>
          <input
            type="checkbox"
            id="touch"
          />

          <ul class="slide">
            <div
              className="inner"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="top">
                <li>
                  <NavLink to="">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="">Categories</NavLink>
                </li>
                <li>
                  <NavLink to="">Library</NavLink>
                </li>
              </div>
              <div className="bottom">
                <li>
                  <NavLink to="">Settings</NavLink>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </div>
      <div className="bottom">
        <button
          className="btn-primary"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
