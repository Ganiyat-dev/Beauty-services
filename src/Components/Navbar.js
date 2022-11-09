import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png'

const Navbar = () => {
    return(
    <>
	<div className="header__sticky one">
		<div className="header__area">
			<div className="container custom__container">
				<div className="header__area-menubar">
					<div className="header__area-menubar-left">
						<div className="header__area-menubar-left-logo">
							<Link to="/"><img src={Logo} alt="" /></Link>						
							<div className="responsive-menu"></div>
						</div>
						<div className="header__area-menubar-left-contact">
							<div className="header__area-menubar-left-contact-icon">
                                <i class="bi bi-telephone-outbound-fill"></i>
							</div>						
							<div className="header__area-menubar-left-contact-info">
								<h6><a href="tel:+125(895)658">Hotline +234 78482277</a></h6>
							</div>
						</div>
					</div>
					<div className="header__area-menubar-right">
						<div className="header__area-menubar-right-menu menu-responsive">						
							<ul id="mobilemenu">
								<li><Link to="/">Home</Link>
								</li>
								<li className="menu-item-has-children"><a href="#">Pages</a>
									<ul className="sub-menu">
										<li><Link to="/about">About</Link></li>
										<li><Link to="/team">Team</Link></li>
										<li><Link to="/services">Services</Link></li>
									</ul>
								</li>
								<li><Link to="/plan">Plan</Link>
								</li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
						<div className="header__area-menubar-right-box">
							<div className="header__area-menubar-right-box-btn">
								<Link to="/sign-up" className="theme-banner-btn">Get Started</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
    )
}


export default Navbar;