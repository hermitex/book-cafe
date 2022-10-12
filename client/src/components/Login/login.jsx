import React from "react";
import "./login.css"
import LOGO from "../../assets/login.png"
import {FaUserCheck} from "react-icons/fa"
import {FaKey} from "react-icons/fa"



const Login = ( ) => {
    return (
        <div className="login">
                <div className="dash">
                <h1>BOOK CAFE</h1>
                <img src = { LOGO} alt="logo" />

        <div className="form">
             <FaUserCheck /><input type="text" name="name" placeholder="Enter Your Name" required />
                <FaKey /><input type="email" name="email" placeholder="Enter Password........" required />
         </div>

         <div className="button">
                <button type="submit" className="btn btn-primary">Submit</button>
        </div>

        <div className="signup">
                <h2>Have no account? <span>Sign Up</span></h2>
        </div>

        <div className="copyright">
            <small>&copy; 2022 Nairobi <span> KENYA. </span> All rights reserved</small>
        </div>

                </div>
                </div>



    )
}

export default Login
