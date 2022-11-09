import React from "react";
import { Link } from "react-router-dom";
import currencySymbol from 'currency-symbol';

const Plan = () => {
    return (
        <>
              <div className="price__two section-padding">
        <div className="container">
			<div className="row mb-65">
				<div className="col-xl-12">
					<div className="price__two-title">
						<div className="blog__area-title">
							<span className="subtitle__two">Offer</span>
							<span className="subtitle__one">Our Offer</span>
							<h2>Our Offer & Price</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30" >
					<div className="price__two-item">
						<div className="price__two-item-content">
							<h4>Basic Plan</h4>
							<p>Weekends Only St</p>
							<h2>&#8358; 10000<span>2 Sessions</span></h2>
						</div>						
						<div className="price__two-item-btn mb-30">
							<Link to="/sign-up" className="theme-border-btn">Choose your plan</Link>
						</div>						
						<div className="price__two-item-list">
							<ul>
								<li><i className="far fa-check"></i>Foundation Application</li>
								<li><i className="far fa-check"></i>Highlighting and COntour</li>
								<li><i className="far fa-check"></i>Eye Brow</li>
								<li><i className="far fa-check"></i>Eye Lashes</li>
							</ul>
						</div>						
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 col-md-6 md-mb-30" >
					<div className="price__two-item">
						<div className="price__two-item-content">
							<h4>Popular Plan</h4>
							<p>Weekends Only</p>
							<h2>&#8358; 20000<span>3 Sessions</span></h2>
						</div>						
						<div className="price__two-item-btn mb-30">
							<Link to="/sign-up" className="theme-border-btn">Choose your plan</Link>
						</div>						
						<div className="price__two-item-list">
							<ul>
								<li><i className="far fa-check"></i>Foundation Application</li>
								<li><i className="far fa-check"></i>Highlighting and COntour</li>
								<li><i className="far fa-check"></i>Eye Brow</li>
								<li><i className="far fa-check"></i>Eye Lashes</li>
							</ul>
						</div>						
					</div>
				</div>
				<div className="col-xl-4 col-lg-4 col-md-6" >
					<div className="price__two-item">
						<div className="price__two-item-content">
							<h4>Advance Plan</h4>
							<p>Weekends Only</p>
							<h2>&#8358;40000<span>5 Sessions</span></h2>
						</div>						
						<div className="price__two-item-btn mb-30">
							<Link to="/sign-up" className="theme-border-btn">Choose your plan</Link>
						</div>						
						<div className="price__two-item-list">
							<ul>
								<li><i className="far fa-check"></i>Foundation Application</li>
								<li><i className="far fa-check"></i>Highlighting and COntour</li>
								<li><i className="far fa-check"></i>Eye Brow</li>
								<li><i className="far fa-check"></i>Eye Lashes</li>
							</ul>
						</div>						
					</div>
				</div>
			</div>
        </div>
    </div>

        </>
    )
}

export default Plan;