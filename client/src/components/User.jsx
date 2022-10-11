import React, { useEffect } from "react";

function User() {
  useEffect(() => {
    fetch("/users")
      .then((response) => response.json)
      .then((data) =>
        console.log("I am not sure if we got any users yet...", data)
      );
  }, []);

  return <div>User</div>;
}

export default User;
