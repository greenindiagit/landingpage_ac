// src/components/header/index.jsx
import React, { useEffect, useState } from "react";

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
              <a className="nav-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#how">How It Works</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#reviews">Reviews</a>
            </li>

            <li className="nav-item ms-3 fornt_call">
             
               +91 80904 00401
              
            </li>

          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Header;