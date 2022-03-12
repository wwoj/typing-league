
import {React,useState} from 'react';
import { NavLink } from "react-router-dom";
import RegisterForm from '../../Components/RegisterUser/RegisterFormStep1';
const RegistrationForm =()=>{

    return (
      <div className="page-container login-page">
        <div className="login-1 ds-flex-c-c">
          <div className="box-shadow1 login-forms-container">
            <div className="ds-flex-sa-c login-header-container">
              <h3 className="h3-login-header">Sign in</h3>
            </div>

            <div>
              <RegisterForm />
            </div>
            <div className="ds-flex-dir-c">
              <div className="login-form-row ds-flex-sb-c">
                <div className='wd-45'>
                  <p className="p-login">Have already account?</p>
                  <p className="p-login">Go to login!</p>
                </div>
                <NavLink end to="/"  className='wd-45'>
                  <button
                    id="registerUser"
                    type="button"
                    className="login-input-format wd-100 btn-login-action-sb btn-register wd-input-text-padding"
                  >
                    Login
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default RegistrationForm;