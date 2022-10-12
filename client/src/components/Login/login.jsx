import React from "react";
import "./login.css";
import LOGO from "../../assets/login.png";

const Login = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div className="login">
          <div className="dash">
            <h1>BOOK CAFE</h1>
            <img
              src={LOGO}
              alt="logo"
            />

            <div className="form">
              <input
                type="text"
                name="name"
                placeholder="Enter UserName................"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Password............"
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

            <div className="signup">
              <h2>
                Have no account?{" "}
                <button
                  type="button"
                  class="btn"
                  onclick="openSignUp()"
                >
                  Sign Up
                </button>
              </h2>
            </div>

            <div className="copyright">
              <small>
                &copy; 2022 Nairobi <span> KENYA. </span> All rights reserved
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
