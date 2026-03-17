// src/components/header/index.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Close mobile menu
  const closeMenu = () => {
    const navbar = document.getElementById("navbarMenu");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };
  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="/assets/img/green GIT without TM.png"
            alt="logo"
            height="40"
          />
        </a>
        {/* Phone Number */}
        <a
          href="tel:+918090400401"
          className="fornt_call fw-bold text-dark text-decoration-none d-lg-none"
        >
          +91 80904 00401
        </a>

        {/* Mobile Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="services"
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="how-it-works"
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                How It Works
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                className="nav-link"
                to="pricing"
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                 onClick={closeMenu}
              >
                Pricing
              </Link>
            </li> */}

            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonials"
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
              >
                Reviews
              </Link>
            </li>

            <li className="nav-item ms-3 fornt_call">+91 80904 00401</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
