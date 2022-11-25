import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './booking.css'
// import Form from 'react-bootstrap/Form';

const Booking = () => {
    const [form, setForm] = useState(true);
    

  return (
    <>
        <div className="wrapper">
            <div className="title-text">
                <div className="title signup-client">
                Booking Details
                </div>
            </div>


        <div className="form-container">
        
            <div className="form-inner">
                <div >
                <form  action="#" className={`${!form && 'd-none'}`}>
                <div className='name-field' >
                     <div className="field">
                        <input type="text" placeholder="First Name" required />
                     </div>
                     <div className="field">
                        <input type="text" placeholder="Last Name" required />
                     </div>
                  </div>
                  <div className="field">
                     <input type="text" placeholder="Phone Number" required />
                  </div>

                  <div className="field">
                     <input type="text" placeholder="House number and street" required />
                  </div>
                  <div className='name-field'>
                  <div className="field">
                     <input type="text" placeholder="City" required />
                  </div>
                  <div className="field">
                        <select className="form-select form-select-lg" aria-label="Default select example">
                        <option selected>Select State</option>
                        <option value="lagos">Lagos</option>
                        <option value="abuja">Abuja</option>
                        <option value="oyo">Oyo</option>
                        <option value="enugu">Enugu</option>
                        </select>
                  </div>
                  </div>

                  <div className="field">
                     <input type="text" placeholder="Phone Number" required />
                  </div>

                  <div className="field-date">
                  <label for="appt">Choose Date and Time for your Appointment</label>
                     <input type="datetime-local" placeholder="Choose Date" required />
                  </div>

                  <div className="field btn">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Confirm" />
                  </div>

                  {/* <div className="signup-link">
                     <Link to="/sign-in">Confirm</Link>
                  </div> */}
               </form>
            </div>
                
            </div>
         </div>
        </div>
      
    </>
 )
}

export default Booking