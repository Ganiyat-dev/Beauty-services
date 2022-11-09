import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const SignUp = () =>  {
  const [form, setForm] = useState(true);
  return (
    <>
      <div>
        <h2>Create an Account</h2>
        <p> Already have an account?
          <Link to="/sign-in">Proceed to sign in</Link> 
        </p>
          <div classNameName="my-3">
              <h5>Register as </h5>
                <div>
                  <button onClick={()=>setForm(true) }>Client</button>
                  <button onClick={()=>setForm(false) }>Makeup Artist</button>
                </div>
          </div>

      <Form className={!form && 'd-none'}>
      <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label> First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Fist Name" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label> Last Name </Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" required/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label> Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control type="password" placeholder="Enter Password" required/>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGroupPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control type="password" placeholder="Enter Password" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGroupPassword">
              <Form.Label> Confirm Password </Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" required/>
          </Form.Group>
        </Row>

            <div className="mb-2 form-floating">
                <input type="password" name="cpassword" id="cpassword" className="form-control" placeholder="Confrim password" required />
                <label for="cpassword">Confrim Password</label>
            </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </Form>

      <div className={form && 'd-none'}>
      <div className="mb-2 form-floating">
            <input type="text" name="bizName" id="bizName" className="form-control" placeholder="Makeup Professional" required />
            <label for="bizName"> Name</label>
        </div>
        <div className="mb-2 form-floating">
            <input type="email" className="form-control" name="email" id="email" placeholder="example@gmail.com" required />
            <label for="email">Email </label>
        </div>
        <div className="mb-2 form-floating">
            <input type="tel" name="phone" className="form-control" id="phone" placeholder="08012345678" required />
            <label for="phone">Phone Number</label>
        </div>
        <div className="mb-2 form-floating">
            <input type="password" className="form-control" placeholder="Enter Password" name="password" id="password" required />
            <label for="password">Password</label>
        </div>
        <div className="mb-2 form-floating">
            <input type="password" name="cpassword" className="form-control" placeholder="Confrim Password" id="cpassword" required />
            <label for="cpassword">Confrim Password</label>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </div>
    </>
  )

}

export default SignUp;