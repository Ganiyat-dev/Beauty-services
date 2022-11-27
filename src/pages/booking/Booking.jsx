import React, { useState } from "react";
import "./booking.scss";


const Booking = () => {
  const [isClient] = useState(true);
  const [msg] = useState("");

  return (
    <div className="Booking_Main_container">
      <div className="wrapper">
      <h2>Booking Details</h2>
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
                <div className="name-field">
                  <div className="field">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                    />
                  </div>

                  <div className="field">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                    />
                  </div>
                </div>

                <div className="name-field">
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                    />
                  </div>

                  <div className="field">
                    <select
                      className="form-select form-select-lg"
                      name="gender"
                    >
                      <option defaultValue="">Select gender</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <input
                    type="text"
                    placeholder="House number and street"
                    name="streetAddress"
                  />
                </div>

                <div className="name-field">
                  <div className="field">
                    <input type="text" placeholder="City" name="city" />
                  </div>

                  <div className="field">
                    <select className="form-select form-select-lg" name="state">
                      <option defaultValue="">Select State</option>
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
                    name="email"
                  />
                </div>
                <div className="field">
                  <label for="appt">
                    Choose Date and Time for your Appointment
                  </label>
                  <input
                    type="datetime-local"
                    placeholder="Choose Date"
                    required
                  />
                </div>

                <div className="form-btn">
                  <input type="submit" value="Confrim Booking" />
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

export default Booking;
