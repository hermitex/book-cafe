import React from "react";

function Widget({ user, text, icon, data }) {
  console.log(user);
  return (
    <div
      style={{
        backgroundColor: "rgb(73, 180, 230)",
        height: "25vh",
        padding: "1.5rem 1rem",
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "5px 7px 7px 5px rgb(207, 207, 207)",
      }}
    >
      <div className="top">
        <img
          style={{
            width: "3vw",
          }}
          src={icon}
          alt={user.username}
        />
      </div>
      <div className="bottom">
        <h1>{data}</h1>
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default Widget;
