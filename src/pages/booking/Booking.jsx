import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { bookingBody, bookingValidate } from "../../utils/schema/bookingSchema";
import "./booking.scss";
import AlertDialog from "./BookingModal";
import TransitionAlerts from "./Modal";

const Booking = () => {
  // const [isClient] = useState(true);
  const [msg] = useState("");
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const handleClick = () => {
    setOpen(false);
  };
  const bookingForm = useFormik({
    initialValues: bookingBody,
    validationSchema: bookingValidate,
    onSubmit: onBookingFormSubmit,
  });

  function onBookingFormSubmit(values) {
    console.log("values of values", values);
    setOpen(true);
  }

  const [openmodal, setOpenModal] = useState(false);
  const handleClose = () => {
    setOpenModal(false);
  };
  const userDataVariable = JSON.parse(sessionStorage.getItem("userData"));

  const url = `http://localhost:9090/api/v1/appointment/${userDataVariable.appUser.id}/${id}`;

  const [apierrors, setApiErrors] = useState("");

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
        if (json.responseMessage == "Bad Request" || json.responseMessage == "Internal Server Error" ) {
          setApiErrors(json.responseMessage);
        } else {
          // sessionStorage.setItem("userData", JSON.stringify(json));
          // navigate(`/dashboard`);
          setOpenModal(true);
        }
      });
  }

  // var date = new Date();

  return (
    <>
      <AlertDialog handleClose={handleClose} openmodal={openmodal} />
      <div className="Booking_Main_container">
        <div className="wrapper">
          <h2>Booking Details</h2>
          <div className="form-container">
            {/* {msg ? (
            <>
              <p className="message error">Invalid Email or Password</p>
            </>
          ) : null} */}
            <div className="form-inner">
              {Object.entries(userDataVariable).length > 0 ? (
                <>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TransitionAlerts
                      open={open}
                      handleClick={handleClick}
                      text="Your Booking is Successful!"
                    />
                    <div className="name-field">
                      <div className="field">
                        <input
                          type="text"
                          value={userDataVariable.appUser.firstName}
                          {...register("firstName")}
                        />
                      </div>

                      <div className="field">
                        <input
                          type="text"
                          value={userDataVariable.appUser.lastName}
                          {...register("lastName")}
                        />
                      </div>
                    </div>

                    <div className="name-field">
                      <div className="field">
                        <input
                          type="text"
                          value={userDataVariable.appUser.phoneNumber}
                          {...register("phoneNumber")}
                          // placeholder="Phone Number"
                          // name="phoneNumber"
                          // onChange={bookingForm.handleChange}
                        />
                      </div>

                      <div className="field">
                        <select
                          className="form-select form-select-lg"
                          name="gender"
                          // onChange={bookingForm.handleChange}
                          value={userDataVariable.appUser.gender}
                          {...register("gender")}
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
                        
                        // onChange={bookingForm.handleChange}
                        {...register("streetAddress")}
                        value={userDataVariable.appUser.streetAddress}
                      />
                    </div>

                    <div className="name-field">
                      <div className="field">
                        <input
                          type="text"
                          placeholder="City"
                        
                          {...register("city")}
                          // onChange={bookingForm.handleChange}
                          value={userDataVariable.appUser.city}
                        />
                      </div>

                      <div className="field">
                        <select
                          className="form-select form-select-lg"
                      
                          placeholder="State"
                          {...register("state")}
                          // onChange={bookingForm.handleChange}
                          value={userDataVariable.appUser.state}
                        >
                          <option defaultValue="">Select State</option>
                          <option value="lagos">Lagos</option>
                          <option value="abuja">Abuja</option>
                          <option value="oyo">Oyo</option>
                          <option value="enugu">Enugu</option>
                        </select>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="appt">
                        Choose Date and Time for your Appointment
                      </label>
                      <input
                        type="datetime-local"
                        placeholder="Choose Date"
                        // name="bookingDate"
                        id="meeting-time"
                        //  value="2022-12-06T00:00"
                        min="2022-12-06T00:00"
                        max="2040-06-14T00:00"
                        // onChange={bookingForm.handleChange}
                        {...register("startDate")}
                        // value={bookingForm.values.bookingDate}
                        required
                      />

                      <p className="invalid-data">
                        {bookingForm.errors.startDate &&
                        bookingForm.touched.startDate
                          ? bookingForm.errors.startDate
                          : null}
                      </p>
                    </div>

                    <div className="form-btn">
                      <button id="btn-submit" type="submit">
                        {" "}
                        Confirm Booking
                      </button>
                    </div>
                  </form>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
