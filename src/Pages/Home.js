import React from "react";
import Back from '../assets/img/bg/banner-bg-1.jpg'
import {Link} from 'react-router-dom'
const Home = () => {
    return(
        <>
            <div className="home__banner">
            <div className="banner__slide swiper banner-slide">
                <div className="swiper-wrapper">
                    <div className="banner__slide-area swiper-slide" data-swiper-autoplay="6000">	
                        <div className="banner__slide-area-image" 
                            style={{
                                backgroundImage:`url(${Back})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover"
                            }}>    
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-8 order-last order-lg-first">
                                    <div className="banner__slide-content">
                                        <span className="subtitle__one" data-animation="fadeInLeft" data-delay=".4s">Welcome to GlamUp </span>
                                        <h1 data-animation="fadeInLeft" data-delay=".6s">Made for professionals by professionals</h1>
                                        <div className="banner__slide-content-button" data-animation="fadeInLeft" data-delay=".9s">
                                            <Link to="/sign-in" className="theme-banner-btn">Reserve your spot<i className="far fa-angle-double-right"></i></Link> 
                                            <Link to="/services" className="theme-border-btn">View all Services<i className="far fa-angle-double-right"></i></Link> 
                                        </div>
                                    </div>
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

export default Home;