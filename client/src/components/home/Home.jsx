import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

function Home() {
  let location = useLocation();
  const { state } = location;
  const user = state;
  console.log(user);
  return (
    <div className="grid-cols-2">
      <div className="side left">
        <Sidebar user={user} />
      </div>
      <div className="right">
        <div className="top">
          <div className="card">All books</div>
          <div className="card">Viewed books</div>
          <div className="card">Pending Exchanges</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
