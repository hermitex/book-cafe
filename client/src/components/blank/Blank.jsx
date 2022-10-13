import React from "react";
import { NavLink } from "react-router-dom";

function Blank() {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundColor: "gray",
          height: "15vh",
          width: "90%",
          marginBottom: "1rem",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p>Ooop! Seems we don't have any books yet.</p>
      </div>
      <div className="button">
        <NavLink to="/new-book">
          <button
            type="button"
            className="btn btn-primary"
          >
            Add Book
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Blank;
