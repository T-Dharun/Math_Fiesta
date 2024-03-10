import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    const a = document.querySelector("body");
    if (!nav) {
      a.classList.add("setBlur");
    } else {
      a.classList.remove("setBlur");
    }
  };
  function setNavRest() {
    const a = document.querySelector(".navbar-small");
    a.classList.add("navbar-small-reactive");
  }
  return (
    <>
      <nav className="nav">
        <header className="navbar">
          <div className="navbar-large">
            <h2>MathFiesta</h2>
            <ul className="navbar-contents">
              <Link to="/" className="navbar-link">
                <li>Home</li>
              </Link>
              <Link to="/events" className="navbar-link">
                <li>Events</li>
              </Link>
              <Link to="/about" className="navbar-link">
                <li>About</li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="navbar-button">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
          <div
            className={
              nav
                ? "navbar-small navbar-small-active"
                : "navbar-small navbar-small-reactive"
            }
          >
            <ul>
              <Link className="navbar-link" to="/">
                <li onClick={setNavRest}>Home</li>
              </Link>
              <Link className="navbar-link" to="/events">
                <li onClick={setNavRest}>Events</li>
              </Link>
              <Link to="/about" className="navbar-link">
                <li onClick={setNavRest}>About</li>
              </Link>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
}
export default Navbar;
