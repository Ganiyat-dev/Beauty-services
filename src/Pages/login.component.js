import React from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'

const Login = () => {
  return (
    <>
      <div>
        <Form>
          <p> Not a member yet?
            <Link to="/sign-up">Proceed to Register</Link> 
          </p>
          <h3>Welcome Back</h3>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" className="form-control"  placeholder="Enter email"/>
            </Form.Group>

            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input  type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>

              <p className="forgot-password text-right">
                <a href='#'>Forgot password?</a>
              </p>
        </Form>

      </div>
     
    </>
 
  )
}


export default Login;