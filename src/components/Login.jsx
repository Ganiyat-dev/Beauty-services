
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";


const Login = () => {
   const [isClient] = useState(true);
   const [msg] = useState("");

  return (
    <div id="Login_Main_Container">
      <div className="wrapper">
        <h2>Welcome Back</h2>


        <div className="form-container">
          {msg ? (
            <>
              <p className="message error">Invalid Email or Password</p>
            </>
          ) : null}
          <div className="form-inner">
            {isClient ? (
              <>
                <form>
                  <div className="field">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                     
                    />
                  </div>

                  <div className="field">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                    />

                  </div>
                  <div class="pass-link">
                      <Link to="#">Forgot password?</Link>
                  </div>

                  <div className="form-btn">
                    <input type="submit" value="Log in" />
                  </div>

                  <div className="signin-link">
                    Not a member?{" "}
                    <Link to="/register">Proceed to Register</Link>
                  </div>
                </form>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
