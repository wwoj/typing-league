import {React,useState} from 'react';
import { NavLink } from "react-router-dom";

const RegisterStep4 = (props)=>{

 
return (
  <section>
    <div className="login-form-row ">
    <div className="login-input-format wd-input-text wd-input-text-padding register-text-conf" style={{textAlign:"center"}}>
        User successfully created!
      </div>
      
      
      
      <div className="login-form-row ds-flex-sb-c">
      <NavLink className="wd-100 " end to="/">
        <button
          id="finish"
          type="button"
          className="login-input-format wd-100 btn-login-action-sb btn-reg-step wd-input-text-padding"
        >
          Finish
        </button>
        
          </NavLink>
      </div>
    </div>
    
  </section>
);
}
export default RegisterStep4;