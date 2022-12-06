import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";
import Home from "../pages/home/Home";
import Gallery from "../pages/gallery/Gallery";
import Plan from "../pages/plans/Plans";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import Register from "./Register";

const Navbar = () => {
  const userDataVariable = JSON.parse(sessionStorage.getItem("userData"));
  const handleLogout = () => {
    sessionStorage.clear();
  }
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="conatiner nav__container">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__Nav" : "hide__Nav"}`}
        >
          {/* {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })} */}
          <Link to="/" >
            Home
          </Link>
          <Link to="/gallery" >
            Gallery
          </Link>
          <Link to="/plans" >
            Plan
          </Link>
          <Link to="/services" >
            Services
          </Link>
          <Link to="/contact" >
            Contact
          </Link>
        {
 userDataVariable?.appUser.enabled ? <Link to="/" onClick={handleLogout} >
 
 Logout
</Link>  :<Link to="/register" >
 Register
</Link>
        }
         
        
        
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
