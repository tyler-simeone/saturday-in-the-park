import React from "react";
import { withRouter, Link } from "react-router-dom";
// import "./NavBar.css";

const NavBar = () => {
  
    return (
      <header className="header">
        
        <div className="NavList">
            <ul>
                <li><Link to="/">Park Areas</Link></li>
                <li><Link to="/myitinerary">Itinerary</Link></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </div>
      </header>
    );
  };
  
  export default withRouter(NavBar);