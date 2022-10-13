import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.png";
import Copyright from "../Copyright/Copyright";
import { NavLink } from "react-router-dom";
import Alert from "../alert/Alert";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setErrors(null);
    const { name } = event.target;
    const { value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      const user = await response.json();
      if (response.ok) {
        setSuccess("Logged in successfully!");
        setData({ username: "", password: "" });
        setTimeout(() => {
          navigate("/home", { state: user });
        }, 2000);
      } else {
        setErrors(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div className="login">
          <div className="dash">
            {errors !== null ? (
              <div
                style={{
                  color: "orange",
                  padding: "0.1rem",
                  margin: "1rem 0",
                }}
              >
                {errors.error}
              </div>
            ) : null}

            {success !== null ? (
              <div
                style={{
                  color: "green",
                  padding: "0.1rem",
                  margin: "1rem 0",
                }}
              >
                {success}
              </div>
            ) : null}

            <h1 className="login-title underline">BOOK CAFE</h1>
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
                    Login
                  </button>
                </div>

                <div className="signup">
                  <small>Have no account? </small>
                  <NavLink to="/signup">
                    <button
                      type="submit"
                      className="btn"
                    >
                      Sign Up
                    </button>
                  </NavLink>
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
