import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { useFormik } from "formik";
import { clientBody, clientValidate } from "../utils/schema/registerSchema";

const Register = () => {
  const [isClient, setIsClient] = useState(true);

  const clientForm = useFormik({
    initialValues: clientBody,
    validationSchema: clientValidate,
    onSubmit: onClientSubmit,
  });

  function onClientSubmit(values) {
    console.log(JSON.stringify(values.null, 2));
  }

  const [data, setDaata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    gender: "",
  });

  const submitClient = async (event) => {
    event.preventDefault();

    console.log("This is the data", data);

    const client = await axios.post(
      `http://localhost:9090/api/v1/client`,
      data,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(client.data);
  };

  const handleChange = (prop) => (event) => {
    setDaata({ ...data, [prop]: event.target.value });
  };

  const [mdata, setMdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    yearsOfExperience: "",
    license: "",
    password: "",
  });

  const submitTrainer = async (event) => {
    event.preventDefault();

    console.log("This is the data", mdata);

    const trainer = await axios.post(
      `http://localhost:9090/api/v1/mua`,
      mdata,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(trainer.data);
  };

  const handleTrainerChange = (prop) => (event) => {
    setMdata({ ...mdata, [prop]: event.target.value });
  };

  return (
    <div id="Register_Main_Container">
      <div className="wrapper">
        <h2>Create an Account</h2>

        <div className="slide-controls">
          <label
            className={`${isClient && "active"} slide`}
            onClick={() => setIsClient(true)}
          >
            Client
          </label>

          <label
            className={`${!isClient && "active"} slide`}
            onClick={() => setIsClient(false)}
          >
            Makeup Artist
          </label>
        </div>

        <div className="form-container">
          <div className="form-inner">
            <form onSubmit={onClientSubmit}>
              <div className="name-field">
                <div className="field">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={clientForm.values.firstName}
                    name="firstName"
                    onChange={clientForm.handleChange}
                  />

                  <div className="invalid-form-data">
                    {clientForm.errors.firstName && clientForm.touched.firstName
                      ? clientForm.errors.firstName
                      : null}
                    error
                  </div>
                </div>

                <div className="field">
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={data.lastName}
                    onChange={handleChange("lastName")}
                  />
                </div>
              </div>
              <div className="name-field">
                <div className="field">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={data.phoneNumber}
                    onChange={handleChange("phoneNumber")}
                  />
                </div>
                <div className="field">
                  <select
                    className="form-select form-select-lg"
                    aria-label="Default select example"
                    value={data.gender}
                    onChange={handleChange("gender")}
                  >
                    <option defaultChecked>Gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <input
                  type="text"
                  placeholder="House number and street"
                  required
                  value={data.streetAddress}
                  onChange={handleChange("streetAddress")}
                />
              </div>
              <div className="name-field">
                <div className="field">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={data.city}
                    onChange={handleChange("city")}
                  />
                </div>
                <div className="field">
                  <select
                    className="form-select form-select-lg"
                    aria-label="Default select example"
                    value={data.state}
                    onChange={handleChange("state")}
                  >
                    <option defaultChecked>Select State</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="oyo">Oyo</option>
                    <option value="enugu">Enugu</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={data.email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={data.password}
                  onChange={handleChange("password")}
                />
              </div>

              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>

              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Sign up" />
              </div>

              <div className="signup-link">
                Already a member? <Link to="/sign-in">Proceed to Login</Link>
              </div>
            </form>

            <form onSubmit={submitTrainer}>
              <div className="name-field">
                <div className="field">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={mdata.firstName}
                    onChange={handleTrainerChange("firstName")}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={mdata.lastName}
                    onChange={handleTrainerChange("lastName")}
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={mdata.phoneNumber}
                  onChange={handleTrainerChange("phoneNumber")}
                />
              </div>

              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  value={mdata.email}
                  onChange={handleTrainerChange("email")}
                />
              </div>
              <div className="name-field">
                <div className="field">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    placeholder="Year of Experience"
                    required
                    value={mdata.yearsOfExperience}
                    onChange={handleTrainerChange("yearsOfExperience")}
                  />
                </div>

                <div className="field-lisc">
                  <input id="for" type="file" title="Upload License" />
                  <label htmlFor="for"> Click to upload License</label>
                </div>
              </div>

              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={mdata.password}
                  onChange={handleTrainerChange("password")}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Sign up" />
              </div>
              <div className="signup-link">
                Already a member? <Link to="/sign-in">Proceed to Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
