import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <div>
      <nav className="navbar bg-blue-600">
        <div className="navbar-container">
          <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="navbar-logo" onClick={closeMenu}>
            WITS <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-links"
                // onClick={() => handleNavigation("/Home")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                // onClick={() => handleNavigation("/Services")}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                // onClick={() => handleNavigation("/Products")}
              >
                Products
              </Link>
            </li>

          </ul>
          {/* {button && <Button buttonStyle="btn--outline">Sign Up</Button>} */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
