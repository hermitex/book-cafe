import React from "react";

function Sidebar({ user }) {
  console.log(user);
  return (
    <div className="h-screen bg-green-600 w-32">
      <h1>Welcome, {user.username}!</h1>
    </div>
  );
}

export default Sidebar;
