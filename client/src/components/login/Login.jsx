import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import Copyright from "../Copyright/Copyright";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
      const response = await fetch("/login");
      const data = await response.json();
      setUser(data);
      setData({ username: "", password: "" });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div className="login">
          <div className="dash">
            <h1 className="login-title">BOOK CAFE</h1>
            <div className="logo">
              <img
                width="100%"
                src={logo}
                alt="logo"
              />
            </div>

            <div className="form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username................"
                  required
                  value={data.username}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password............"
                  required
                  value={data.password}
                  onChange={handleChange}
                />

                <div className="button">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>

                <div className="signup">
                  <small>
                    Have no account?{" "}
                    <button
                      type="submit"
                      className="btn"
                    >
                      Sign Up
                    </button>
                  </small>
                </div>
              </form>
            </div>

            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
