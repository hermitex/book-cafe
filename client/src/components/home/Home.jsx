import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

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
    <div className="grid-cols-2">
      <div className="side left">
        <Sidebar user={user || loggedUser} />
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
