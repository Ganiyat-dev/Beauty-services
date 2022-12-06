import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isClient] = useState(true);
  const [msg] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //  const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post(`http://localhost:9090/api/auth/signin`, values, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     })
  //     console.log(response.data)

  //   }
  //  }

  const url = "http://localhost:9090/api/auth/signin";

  const [apierrors, setApiErrors] = useState("");
  const navigate = useNavigate();
  async function onSubmit(data, e) {
    console.log(data);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // Adding body or contents to send
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.responseMessage == "Bad credentials" || json.responseMessage == "Internal Server Error") {
          setApiErrors(json.responseMessage);
        } else {
          sessionStorage.setItem("userData", JSON.stringify(json));
          navigate(`/dashboard`);
        }
      });
  }                        

  return (
    <div id="Login_Main_Container">
      <div className="wrapper">
        <h2>Welcome Back</h2>

        <div className="form-container">
          {/* {msg ? (
            <>
              <p className="message error">Invalid Email or Password</p>
            </>
          ) : null} */}
          <div className="form-inner">
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p color="red"> {apierrors}</p>
                <div className="field">
                  <input
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Please fill in your email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                <p color="red">{errors.email?.message}</p>

                <div className="field">
                  <input
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: "Please fill in your password",
                      minLength: {
                        value: 8,
                        message: "The minimum first name length is 8",
                      },
                    })}
                  />
                </div>
                <p color="red">{errors.password?.message}</p>
                <div class="pass-link">
                  <Link to="#">Forgot password?</Link>
                </div>

                <div className="form-btn">
                  <input type="submit" value="Log in" />
                </div>

                <div className="signin-link">
                  Not a member? <Link to="/register">Proceed to Register</Link>
                </div>
              </form>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
