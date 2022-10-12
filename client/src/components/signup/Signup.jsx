import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="main">
    <div className="sub-main">
      <div className="sign">
        <h1>SIGN UP</h1>
      </div>
      <div className="signup">
              <h2> Have an account?{" "}
                <button type="button" className="btn">
                    Login
                </button>
              </h2>
            </div>

            <div className="form">
              <input
                type="text"
                name="name"
                placeholder="Enter your username................"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter you email............"
                required
              />
              <input
              type="text"
              name="name"
              placeholder="Nairobi..........."
              required
            />

            <input
              type="number"
              name="phone"
              placeholder="+254 123 456 789........."
              required
            />
              <input
                type="checkbox"
                name="password"
                placeholder="Remember Username..........."
                required
              />
            </div>

            <div className="button">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>

            <div className="text">
                <p>Register your book and swap it with a new one
                or perhaps create a new book lover. Participating in a
                book exchange also saves on ink and leaves a smaller
                environmental footprint than printing a book.</p>
            </div>

            <div className="copyright">
            <small>
              &copy; 2022 Nairobi <span> KENYA. </span> All rights reserved
            </small>
          </div>

      </div>
      </div>
  );
};

export default Signup;
