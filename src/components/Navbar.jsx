import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridR, CgClose } from "react-icons/cg";
import logo from "../images/logo/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(
    function () {
      if (isOpen) document.body.style.overflow = "hidden";
      if (!isOpen) document.body.style.overflow = "visible";
    },
    [isOpen]
  );

  function handleNavToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="nav">
        <div className="nav__logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Car Rental logo"
              className="nav__logo-container__img"
            />
          </Link>
        </div>
        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vehicle-models">Vehicle Models</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/our-team">Our Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav__buttons">
          <Link className="nav__buttons--sign-in">Sign In</Link>
          <Link className="btn-primary nav__buttons--register">Register</Link>
        </div>
        <div className="nav__mobile-toggle">
          <CgMenuGridR
            className="nav__mobile-toggle__icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>

      <nav className={`mobile-nav ${isOpen ? "open-nav" : ""}`}>
        <CgClose className="mobile-nav__icon" onClick={handleNavToggle} />
        <ul className="mobile-nav__links">
          <li>
            <Link to="/" onClick={handleNavToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleNavToggle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/vehicle-models" onClick={handleNavToggle}>
              Vehicle Models
            </Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={handleNavToggle}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/our-team" onClick={handleNavToggle}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavToggle}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="btn-primary mobile-login">Register</Link>
          </li>
          <li>
            <Link className="mobile-login">Sign In</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
