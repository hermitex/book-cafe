import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Copyright from "../Copyright/Copyright";
import "./Signup.css";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    location: "",
    password: "",
  });

  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Accept-Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const user = await response.json();
      setUser(user);

      setData({
        username: "",
        email: "",
        phone: "",
        location: "",
        password: "",
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="inner-wrapper">
        <div className="sign">
          <h1>SIGN UP</h1>
        </div>
        <div className="signup">
          <small> Have an account? </small>
          <NavLink to="/login">
            <button
              type="button"
              className="btn"
            >
              Login
            </button>
          </NavLink>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Enter your username................"
              required
              onChange={handleChange}
              value={data.username}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter you email............"
              required
              onChange={handleChange}
              value={data.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter you password............"
              required
              onChange={handleChange}
              value={data.password}
            />
            <input
              type="text"
              name="location"
              placeholder="Nairobi..........."
              required
              onChange={handleChange}
              value={data.location}
            />

            <input
              type="tel"
              name="phone"
              placeholder="+254 123 456 789........."
              required
              onChange={handleChange}
              value={data.phone}
            />

            <div className="button">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="text">
          <small>
            Register your book and swap it with a new one or perhaps create a
            new book lover. Participating in a book exchange also saves on ink
            and leaves a smaller environmental footprint than printing a book.
          </small>
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default Signup;
