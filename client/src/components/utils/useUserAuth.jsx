import { useEffect, useState } from "react";

import React from "react";

function useUserAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function endSession(user) {}

  return [user, endSession];
}

export default useUserAuth;
