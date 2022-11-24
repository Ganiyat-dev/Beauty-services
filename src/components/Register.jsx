import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
// import Form from 'react-bootstrap/Form';

const Register = () => {
    const [form, setForm] = useState(true);
    

  return (
    <>
        <div className="wrapper">
        <h2>Create an Account</h2>
            <div className="title-text">
                <div className="title signup-client">
                Register as
                </div>

                <div className="title signup">
                Register as
                </div>

            </div>
    
            <div className="slide-controls">
               <input type="radio" name="slide" id="signup-client" checked />
               <input type="radio" name="slide" id="signup-mua" />

               <label for="login" className="slide signup-client" onClick={()=>setForm(true) }>Client</label>
               <label for="signup" className="slide signup-mua" onClick={()=>setForm(false) }>Makeup Artist</label>
               <div className="slider-tab"></div>
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
                     <input type="email" placeholder="Email Address" required />
                  </div>

                  <div className="field">
                     <input type="password" placeholder="Password" required />
                  </div>

                  <div className="field">
                     <input type="password" placeholder="Confirm password" required />
                  </div>

                  <div className="field btn">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Signup" />
                  </div>

                  <div className="signup-link">
                     Already a member? <Link to="/sign-in">Proceed to Login</Link>
                  </div>
               </form>
            </div>

           
                <form className={form && 'd-none'}>
                  <div className='name-field' >
                     <div className="field">
                        <input type="text" placeholder="First Name" required />
                     </div>
                     <div className="field">
                        <input type="text" placeholder="Last Name" required />
                     </div>
                  </div>
                  <div className="field">
                     <input type="text" placeholder="Gender" required />
                  </div>
                  <div className="field">
                     <input type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                     <input type="password" placeholder="Password" required />
                  </div>
                  <div className="field">
                     <input type="password" placeholder="Confirm password" required />
                  </div>
                  <div className="field btn">
                     <div className="btn-layer"></div>
                     <input type="submit" value="Signup" />
                  </div>
                  <div className="signup-link">
                     Already a member? <Link to="/sign-in">Proceed to Login</Link>
                  </div>
               </form>
                
            </div>
         </div>
        </div>
      
    </>
 )
}

export default Register