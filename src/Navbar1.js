import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./components/navbar.css";
import { Button } from "./components/Button.js";
function Navbar1() {
  const [click,setClick] = useState(false);
  function handleClick(){}
  function closeMenu(){}
    return(
        <div>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="navbar-logo" onClick={closeMenu}>
              WITS <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            </div>
            </nav>
            </div>
    )
}
export default Navbar1;