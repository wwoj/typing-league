
import React from 'react';
import { NavLink } from "react-router-dom";
import LoginComponent from './LoginComponent'
const Home =(props) =>{
    return (
      <div className="box-shadow1 login-forms-container">
        <div className="ds-flex-sa-c login-header-container">
          <h3 className='h3-login-header'>Sign in</h3>
        </div>
        <div className="container-login-form ds-flex-c-c ds-flex-dir-c">
          <div className="" style={{ width: "95%" }}>
            <div className="ds-flex-sa-c"></div>

            <LoginComponent token={props.token} setToken={props.setToken} setUserData={props.setUserData} />
          </div>
        </div>
      </div>
    );
} 
export default Home;