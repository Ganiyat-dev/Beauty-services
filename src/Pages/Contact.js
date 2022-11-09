import React from "react";

const Contact = () => {
    return (
        <>
            	<div className="contact__area section-padding pb-0">
		<div className="container">
			<div className="row mb-60">
				<div className="col-xl-5 col-lg-6">
					<div className="contact__area-title">
                        <span className="subtitle__one">Contact</span>
						<h2>Need Yor any help Contact with Us</h2> 
                    </div>
                    <div className="contact__area-info">
                        <div className="contact__area-info-item">
                            <div className="contact__area-info-item-icon">
                                <i className="far fa-phone-alt"></i>
                            </div>
                            <div className="contact__area-info-item-content">
								<span>Emergency Help</span>
                                <h5><a href="tel:+123(458)896895">+123 ( 458 ) 896 895</a></h5>
                            </div>
                        </div>
                        <div className="contact__area-info-item">
                            <div className="contact__area-info-item-icon">
                                <i className="fal fa-envelope"></i>
                            </div>
                            <div className="contact__area-info-item-content">
								<span>Quick Email</span>
                                <h5><a href="mailto:support@gamil.com">support@gamil.com</a></h5>
                            </div>
                        </div>
                        <div className="contact__area-info-item">
                            <div className="contact__area-info-item-icon">
                                <i className="far fa-map-marker-alt"></i>
                            </div>
                            <div className="contact__area-info-item-content">
								<span>Office Address</span>
                                <h5><a href="#">Lagos, Nigeria</a></h5>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<div className="contact__area-bottom">
						<div className="contact__area-bottom-form page">
							<form action="#">
								<div className="row">
									<div className="col-sm-12 mb-30">
										<div className="contact__area-bottom-form-item">
											<input type="text" name="name" placeholder="Your Name" required="required" /> </div>
									</div>
									<div className="col-sm-12 mb-30">
										<div className="contact__area-bottom-form-item">
											<input type="text" name="email" placeholder="Email Address" required="required" /> </div>
									</div>
									<div className="col-sm-12 mb-30">
										<div className="contact__area-bottom-form-item">
											<input type="text" name="subject" placeholder="Subject" required="required" /> </div>
									</div>
									<div className="col-sm-12 mb-30">
										<div className="contact__area-bottom-form-item">
											<textarea name="message" rows="5" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="contact__area-bottom-form-item">
											<button className="theme-banner-btn" type="submit">Submit Now<i className="far fa-angle-double-right"></i></button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="contact__area-bottom-map">
            
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63435.63523793208!2d3.4308096!3d6.429081600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1667902314799!5m2!1sen!2sng" loading="lazy"></iframe>
		</div>
	</div>
        </>
    )
}

export default Contact;