import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Booking = ()=> {
    return (
    <div className="container">
		<div className="book">
			<h4>Booking Details</h4>
		</div>
		<Form>
			<Row className="mb-3">
			<Form.Group as={Col} controlId="formGridEmail">
				<Form.Label> First Name</Form.Label>
				<Form.Control type="text"  required/>
			</Form.Group>

			<Form.Group as={Col} controlId="formGridPassword">
				<Form.Label> Last Name </Form.Label>
				<Form.Control type="text" required/>
			</Form.Group>
			</Row>
			<Row className="mb-3">
			<Form.Group as={Col} controlId="formGroupPassword">
				<Form.Label> Phone Number </Form.Label>
				<Form.Control type="number" required/>
			</Form.Group>
			</Row>
			<Row className="mb-3">
			<Form.Group as={Col} controlId="formGridEmail">
				<Form.Label>Address</Form.Label>
				<Form.Control type="email" required/>
			</Form.Group>
			</Row>
				<div class="all__sidebar-item">
					<h5>Your Plan</h5>
					<div class="all__sidebar-item-cart">
						<ul>
							<li>Basic plan <span>&#8358; 10000</span></li>
							<li> 2 Sessions</li>
							<li>Total<span>&#8358; 10000</span></li>
						</ul>
					</div>
				</div>

			<button className="theme-btn" type="submit">Proceed to Checkout</button>
		</Form>
	
	</div>
    )
}

export default Booking;