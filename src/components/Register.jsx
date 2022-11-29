
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { useFormik } from "formik";
import {
  clientBody,
  clientValidate,
  trainerBody,
  trainerValidate,
} from "../utils/schema/registerSchema";
import service from "../services/service";
import TransitionAlerts from "../pages/booking/Modal";

const Register = () => {
  const [isClient, setIsClient] = useState(true);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick =()=>{
    setOpen(false)
  }

  const clientForm = useFormik({
    initialValues: clientBody,
    validationSchema: clientValidate,
    onSubmit: onClientSubmit,
  });

  function onClientSubmit(values) {
    setMsg("");
    setOpen(true);
    service.doRegisterClient(values).then(
      (res) => {
        clientForm.resetForm();
      },
      (err) => service.handleRegisterError(err, setMsg)
    );
  }

  const trainerForm = useFormik({
    initialValues: trainerBody,
    validationSchema: trainerValidate,
    onSubmit: onTrainerFormSubmit,
  });

  function onTrainerFormSubmit(values) {
    // setMsg("");
    setOpen(true)
    service.doRegisterTrainer(values).then(
      (res) => {
        trainerForm.resetForm();
      },
      (err) => service.handleRegisterError(err, setMsg)
    );
  }

  return (
    <div id="Register_Main_Container">
      <div className="wrapper">
        <h2>Create an Account</h2>

        <div className="slide-controls">
          <label
            className={`${isClient && "active"} slide`}
            onClick={() => {
              setIsClient(true);
              setMsg("")
              clientForm.handleReset();
            }}
          >
            Client
          </label>

          <label
            className={`${!isClient && "active"} slide`}
            onClick={() => {
              setMsg("")
              setIsClient(false);
              trainerForm.handleReset();
            }}
          >
            Makeup Artist
          </label>
        </div>

        <div className="form-container">
          {msg ? (
            <>
              <p className="message error">Email is already in use</p>
            </>
          ) : null}
          <div className="form-inner">
            {isClient ? (
              <>
                <form onSubmit={clientForm.handleSubmit}>
                <TransitionAlerts open={open} handleClick={handleClick} text="Registration Sucessful, Check your mail to activate your account!"/>
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
                        {clientForm.errors.firstName &&
                        clientForm.touched.firstName
                          ? clientForm.errors.firstName
                          : null}
                      </div>
                    </div>

                    <div className="field">
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={clientForm.values.lastName}
                        name="lastName"
                        onChange={clientForm.handleChange}
                      />
                      <div className="invalid-form-data">
                        {clientForm.errors.lastName &&
                        clientForm.touched.lastName
                          ? clientForm.errors.lastName
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="name-field">
                    <div className="field">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={clientForm.values.phoneNumber}
                        name="phoneNumber"
                        onChange={clientForm.handleChange}
                      />

                      <div className="invalid-form-data">
                        {clientForm.errors.phoneNumber &&
                        clientForm.touched.phoneNumber
                          ? clientForm.errors.phoneNumber
                          : null}
                      </div>
                    </div>

                    <div className="field">
                      <select
                        className="form-select form-select-lg"
                        name="gender"
                        value={clientForm.values.gender}
                        onChange={clientForm.handleChange}
                      >
                        <option defaultValue="">Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>

                      <div className="invalid-form-data">
                        {clientForm.errors.gender && clientForm.touched.gender
                          ? clientForm.errors.gender
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="text"
                      placeholder="House number and street"
                      value={clientForm.values.streetAddress}
                      name="streetAddress"
                      onChange={clientForm.handleChange}
                    />

                    <div className="invalid-form-data">
                      {clientForm.errors.streetAddress &&
                      clientForm.touched.streetAddress
                        ? clientForm.errors.streetAddress
                        : null}
                    </div>
                  </div>

                  <div className="name-field">
                    <div className="field">
                      <input
                        type="text"
                        placeholder="City"
                        value={clientForm.values.city}
                        name="city"
                        onChange={clientForm.handleChange}
                      />

                      <div className="invalid-form-data">
                        {clientForm.errors.city && clientForm.touched.city
                          ? clientForm.errors.city
                          : null}
                      </div>
                    </div>

                    <div className="field">
                      <select
                        className="form-select form-select-lg"
                        name="state"
                        value={clientForm.values.state}
                        onChange={clientForm.handleChange}
                      >
                        <option defaultValue="">Select State</option>
                        <option value="lagos">Lagos</option>
                        <option value="abuja">Abuja</option>
                        <option value="oyo">Oyo</option>
                        <option value="enugu">Enugu</option>
                      </select>

                      <div className="invalid-form-data">
                        {clientForm.errors.state && clientForm.touched.state
                          ? clientForm.errors.state
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={clientForm.values.email}
                      onChange={clientForm.handleChange}
                    />

                    <div className="invalid-form-data">
                      {clientForm.errors.email && clientForm.touched.email
                        ? clientForm.errors.email
                        : null}
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={clientForm.values.password}
                      onChange={clientForm.handleChange}
                    />

                    <div className="invalid-form-data">
                      {clientForm.errors.password && clientForm.touched.password
                        ? clientForm.errors.password
                        : null}
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      name="password2"
                      value={clientForm.values.password2}
                      onChange={clientForm.handleChange}
                    />

                    <div className="invalid-form-data">
                      {clientForm.errors.password2 &&
                      clientForm.touched.password2
                        ? clientForm.errors.password2
                        : null}
                    </div>
                  </div>

                  <div className="form-btn">
                    <input type="submit" value="Sign up" />
                  </div>

                  <div className="signup-link">
                    Already a member?{" "}
                    <Link to="/sign-in">Proceed to Login</Link>
                  </div>
                </form>
              </>
            ) : null}

            {!isClient ? (
              <>
                <form onSubmit={trainerForm.handleSubmit}>
                  <div className="name-field">
                    <div className="field">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={trainerForm.values.firstName}
                        name="firstName"
                        onChange={trainerForm.handleChange}
                      />

                      <div className="invalid-form-data">
                        {trainerForm.errors.firstName &&
                        trainerForm.touched.firstName
                          ? trainerForm.errors.firstName
                          : null}
                      </div>
                    </div>

                    <div className="field">
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={trainerForm.values.lastName}
                        name="lastName"
                        onChange={trainerForm.handleChange}
                      />
                      <div className="invalid-form-data">
                        {trainerForm.errors.lastName &&
                        trainerForm.touched.lastName
                          ? trainerForm.errors.lastName
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="name-field">
                    {/* <div className="field">
                      <input
                        type="file"
                        placeholder="Enter Licence"
                        value={trainerForm.values.license}
                        name="license"
                        onChange={trainerForm.handleChange}
                      />

                      <div className="invalid-form-data">
                        {trainerForm.errors.license &&
                        trainerForm.touched.license
                          ? trainerForm.errors.license
                          : null}
                      </div>
                    </div> */}
                      <div className="field">
                      <input
                        className="form-select form-select-lg"
                        placeholder="Enter Specialized Area"
                        name="specialization"
                        value={trainerForm.values.specialization}
                        onChange={trainerForm.handleChange}
                      />
    

                      <div className="invalid-form-data">
                        {trainerForm.errors.specialization && trainerForm.touched.specialization
                          ? trainerForm.errors.specialization
                          : null}
                      </div>
                    </div>

                    <div className="field">
                      <input
                        type="number"
                        placeholder="Enter years of experience"
                        value={trainerForm.values.yearsOfExperience}
                        name="yearsOfExperience"
                        onChange={trainerForm.handleChange}
                      />

                      <div className="invalid-form-data">
                        {trainerForm.errors.yearsOfExperience &&
                        trainerForm.touched.yearsOfExperience
                          ? trainerForm.errors.yearsOfExperience
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="name-field">
                    <div className="field">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={trainerForm.values.phoneNumber}
                        name="phoneNumber"
                        onChange={trainerForm.handleChange}
                      />

                      <div className="invalid-form-data">
                        {trainerForm.errors.phoneNumber &&
                        trainerForm.touched.phoneNumber
                          ? trainerForm.errors.phoneNumber
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      value={trainerForm.values.email}
                      onChange={trainerForm.handleChange}
                    />

                    <div className="invalid-form-data">
                      {trainerForm.errors.email && trainerForm.touched.email
                        ? trainerForm.errors.email
                        : null}
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={trainerForm.values.password}
                      onChange={trainerForm.handleChange}
                    />

                    <div className="invalid-form-data">
                      {trainerForm.errors.password &&
                      trainerForm.touched.password
                        ? trainerForm.errors.password
                        : null}
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      name="password2"
                      value={trainerForm.values.password2}
                      onChange={trainerForm.handleChange}
                    />

                    <div className="invalid-form-data">
                      {trainerForm.errors.password2 &&
                      trainerForm.touched.password2
                        ? trainerForm.errors.password2
                        : null}
                    </div>
                  </div>

                  <input type="submit" value="Sign up" />

                  <div className="signup-link">
                    Already a member?{" "}
                    <Link to="/sign-in">Proceed to Login</Link>
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

export default Register;
