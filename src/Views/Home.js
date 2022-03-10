
import React from 'react';
import { NavLink } from "react-router-dom";

const home =() =>{
    return (
      <div className="page-container">
        <div className="carousel-container box-shadow2">
          Home page here
          <NavLink end to="/dashboard">
            Dashboard
          </NavLink>
        </div>
      </div>
    );
} 
export default home;