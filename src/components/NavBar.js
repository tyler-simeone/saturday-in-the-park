import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
// import "./NavBar.css";

const NavBar = () => {
  
    return (
      <header className="header">
        
        <div className="NavList">
            <ul>
                <li>Park Areas</li>
                <li>Itinerary</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>
      </header>
    );
  };
  
  export default withRouter(NavBar);