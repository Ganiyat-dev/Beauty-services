import React from "react";

const Services = () => {
    return(
        <>
            <div className="page type-page hentry">
				<div className="page-content-body">

					<section className="services-hero">
						<div className="container">
							<div className="row">
								<div className="section-content">
									<h1>Our Services</h1>
									<ol className="breadcrumb">
										<li><a href="#">Home</a></li>
										<li className="active">Services</li>
									</ol>
								</div>
							</div>
						</div>
					</section>
					
					<section className="services-list">
						<div className="container">
							<div className="row">
								<div className="services-list-item">
									<div className="col-md-5">
										<div className="services-list-img">
											<img src="images/services-img-1.jpg" alt="image" />
										</div>
									</div>
									<div className="col-md-7">
										<div className="services-list-info">
											<h2><a href="#"><strong>Facial Makeup</strong> Treatment</a></h2>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </li>
												<li>Euismod tincidunt ut laoreet dolore magna aliquam </li>
											</ul>
											<a href="#" className="primary-button">Learn More</a>
										</div>
									</div>
								</div>
								<div className="services-list-item">
									<div className="col-md-5">
										<div className="services-list-img">
											<img src="images/services-img-2.jpg" alt="image" />
										</div>
									</div>
									<div className="col-md-7">
										<div className="services-list-info">
											<h2><a href="#"><strong>Eye Makeup</strong> Treatment</a></h2>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </li>
												<li>Euismod tincidunt ut laoreet dolore magna aliquam </li>
											</ul>
											<a href="#" className="primary-button">Learn More</a>
										</div>
									</div>
								</div>
								<div className="services-list-item">
									<div className="col-md-5">
										<div className="services-list-img">
											<img src="images/services-img-3.jpg" alt="image" />
										</div>
									</div>
									<div className="col-md-7">
										<div className="services-list-info">
											<h2><a href="#"><strong>Hair Makeup</strong> Treatment</a></h2>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
											<ul>
												<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </li>
												<li>Euismod tincidunt ut laoreet dolore magna aliquam </li>
											</ul>
											<a href="#" className="primary-button">Learn More</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section className="testimonials">
						<div className="container">
							<div className="row">
								<div id="testimonial-slider" className="carousel slide" data-ride="carousel">
									<div className="carousel-inner" role="listbox">
										<div className="item active left">
											<p>Mina Service is awesome! Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
											<div className="carousel-caption">
												<img src="images/testimonial-author.jpg" alt="image"/>
												<strong>
													Cynthia Nelson
													<span>customer</span>
												</strong>
											</div>
										</div>
										<div className="item next left">
											<p>Mina Service is awesome! Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
											<div className="carousel-caption">
												<img src="images/testimonial-author.jpg" alt="image" />
												<strong>
													Cynthia Nelson
													<span>customer</span>
												</strong>
											</div>
										</div> 
										<div className="item">
											<p>Mina Service is awesome! Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
											<div className="carousel-caption">
												<img src="images/testimonial-author.jpg" alt="image" />
												<strong>
													Cynthia Nelson
													<span>customer</span>
												</strong>
											</div>
										</div>
									</div>
									<ol className="carousel-indicators">
										<li data-target="#testimonial-slider" data-slide-to="0" className=""></li>
										<li data-target="#testimonial-slider" data-slide-to="1" className="active"></li>
										<li data-target="#testimonial-slider" data-slide-to="2" className=""></li>
									</ol>
								</div>
							</div>
						</div>
					</section>

				</div>
			</div>
        </>
    )
}

export default Services;