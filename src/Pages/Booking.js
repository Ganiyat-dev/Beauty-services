import React from "react";
import { Link } from "react-router-dom";


const Booking = ()=> {
    return (
        <>
                
        <div className="checkout__area section-padding">
        <div className="container">
			<form action="#">
            <div className="row">
				<div className="col-xl-8 col-lg-8 lg-mb-30">
					<div className="checkout__area-left">
						<div className="checkout__area-left-top">
							<span>Returning Client? <Link to="/sign-in">Check here to Sign in </Link></span>
						</div>
					</div>
					<h4 className="pt-60 pb-60">Billing Details</h4>
					<div className="checkout__area-left-form">
						<div className="row">
							<div className="col-md-6 mb-30">
								<div className="checkout__area-left-form-list">
									<label>First Name</label>
									<input type="text" placeholder="Enter your First Name" />
								</div>
							</div>
							<div className="col-md-6 md-mb-30">
								<div className="checkout__area-left-form-list">
									<label>Last Name</label>
									<input type="text" placeholder="Enter your Last Name" />
								</div>
							</div>
							<div className="col-md-12 mb-30">
								<div className="checkout__area-left-form-list">
									<label>Street Address</label>
									<input type="text" placeholder="House number and Street name" />
								</div>
							</div>
							<div className="col-md-12 mb-30">
								<div className="checkout__area-left-form-list">
									<label>City</label>
									<input type="text" placeholder="Town City" />
								</div>
							</div>								
							<div className="col-md-12 mb-30">
								<div className="checkout__area-left-form-select">
									<label>State</label>
									<select name="select" data-background="assets/img/icon/down-arrow.png">											
										<option value="">Lagos</option>
										<option value="">Abuja</option>
										<option value="">Rivers</option>
										<option value="">Ogun</option>
										<option value="">Oyo</option>
										<option value="">Kwara</option>
										<option value="">Enugu</option>
									</select>
								</div>
							</div>
							<div className="col-md-12 mb-30">
								<div className="checkout__area-left-form-list">
									<label>Email Address</label>
									<input type="email" placeholder="Email address:" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="checkout__area-left-form-list">
									<label>Phone Number</label>
									<input type="text" placeholder="Phone" />
								</div>
							</div>
							<div className="col-md-12 pt-60 pb-60">
								<h3>Additional Information (Optional)</h3>
							</div>
							<div className="col-md-12">
								<div className="checkout__area-left-form-list">
									<textarea name="message" placeholder="Notes about Your Information"></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-4">
                    <div className="all__sidebar">
                        <div className="all__sidebar-item">
                            <h5>Your Booking Details</h5>
                            <div className="all__sidebar-item-cart">
                                <ul>
									<li>Plan X   1<span></span></li>
									<li> X   1<span></span></li>
									<li>Total<span></span></li>
                                </ul>
                            </div>
							<button className="theme-btn" type="submit">Proceed to Checkout</button>
                        </div>
                    </div>						
				</div>
            </div>
			</form>
        </div>
    </div>
        </>
    )
}

export default Booking;