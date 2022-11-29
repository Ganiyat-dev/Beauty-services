import { useFormik } from "formik";
import React, { useState } from "react";
import { bookingBody, bookingValidate } from "../../utils/schema/bookingSchema";
import "./booking.scss";
import TransitionAlerts from "./Modal";

const Booking = () => {
  const [isClient] = useState(true);
  const [msg] = useState("");
  const [open, setOpen] = useState(false);
  
const handleClick =()=>{
  setOpen(false)
}
  const bookingForm = useFormik({
    initialValues: bookingBody,
    validationSchema: bookingValidate,
    onSubmit: onBookingFormSubmit,
  });

  function onBookingFormSubmit(values) {
    console.log("values of values", values);
    setOpen(true)
  }

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
                <form onSubmit={bookingForm.handleSubmit}>
                <TransitionAlerts open={open} handleClick={handleClick} text="Your Booking is Successful!"/>
                  <div className="name-field">
                    <div className="field">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        onChange={bookingForm.handleChange}
                        value={bookingForm.values.firstName}
                      />

                      <p className="invalid-data">
                        {bookingForm.errors.firstName &&
                        bookingForm.touched.firstName
                          ? bookingForm.errors.firstName
                          : null}
                      </p>
                    </div>

                    <div className="field">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={bookingForm.handleChange}
                        value={bookingForm.values.lastName}
                      />

                      <p className="invalid-data">
                        {bookingForm.errors.lastName &&
                        bookingForm.touched.lastName
                          ? bookingForm.errors.lastName
                          : null}
                      </p>
                    </div>
                  </div>

                  <div className="name-field">
                    <div className="field">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        onChange={bookingForm.handleChange}
                        value={bookingForm.values.phoneNumber}
                      />

                      <p className="invalid-data">
                        {bookingForm.errors.phoneNumber &&
                        bookingForm.touched.phoneNumber
                          ? bookingForm.errors.phoneNumber
                          : null}
                      </p>
                    </div>

                    <div className="field">
                      <select
                        className="form-select form-select-lg"
                        name="gender"
                        onChange={bookingForm.handleChange}
                        value={bookingForm.values.gender}
                      >
                        <option defaultValue="">Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>

                      <p className="invalid-data">
                        {bookingForm.errors.gender && bookingForm.touched.gender
                          ? bookingForm.errors.gender
                          : null}
                      </p>
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="text"
                      placeholder="House number and street"
                      name="streetAddress"
                      onChange={bookingForm.handleChange}
                      value={bookingForm.values.streetAddress}
                    />

                    <p className="invalid-data">
                      {bookingForm.errors.streetAddress &&
                      bookingForm.touched.streetAddress
                        ? bookingForm.errors.streetAddress
                        : null}
                    </p>
                  </div>

                  <div className="name-field">
                    <div className="field">
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={bookingForm.handleChange}
                        value={bookingForm.values.city}
                      />

                      <p className="invalid-data">
                        {bookingForm.errors.city && bookingForm.touched.city
                          ? bookingForm.errors.city
                          : null}
                      </p>
                    </div>

                    <div className="field">
                      <select
                        className="form-select form-select-lg"
                        name="state"
                        onChange={bookingForm.handleChange}
                        value={bookingForm.values.state}
                      >
                        <option defaultValue="">Select State</option>
                        <option value="lagos">Lagos</option>
                        <option value="abuja">Abuja</option>
                        <option value="oyo">Oyo</option>
                        <option value="enugu">Enugu</option>
                      </select>

                      <p className="invalid-data">
                        {bookingForm.errors.state && bookingForm.touched.state
                          ? bookingForm.errors.state
                          : null}
                      </p>
                    </div>
                  </div>

                  <div className="field">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      onChange={bookingForm.handleChange}
                      value={bookingForm.values.email}
                    />

                    <p className="invalid-data">
                      {bookingForm.errors.email && bookingForm.touched.email
                        ? bookingForm.errors.email
                        : null}
                    </p>
                  </div>
                  <div className="field">
                    <label htmlFor="appt">
                      Choose Date and Time for your Appointment
                    </label>
                    <input
                      type="datetime-local"
                      placeholder="Choose Date"
                      min={"2022-11-28T00:00"}
                      name="bookingDate"
                      onChange={bookingForm.handleChange}
                      value={bookingForm.values.bookingDate}
                    />

                    <p className="invalid-data">
                      {bookingForm.errors.bookingDate &&
                      bookingForm.touched.bookingDate
                        ? bookingForm.errors.bookingDate
                        : null}
                    </p>
                  </div>

                  <div className="form-btn">
                    <input
                      // onClick={() => setOpen(true)}
                      type="submit"
                      value="Confrim Booking"
                    />
                  </div>
{/* 
                  <button type="submit"> Confirm Booking</button> */}
                </form>
                {/* <div className={`${!open && "dis-none"}  modal`}>
                  <h1 className="book">Your booking is Successful</h1>
                  <button onClick={() => setOpen(true)} className="btn-ok">
                    {" "}
                    OK{" "}
                  </button>
                </div> */}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
