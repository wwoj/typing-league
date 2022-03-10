
import {React,useState} from 'react';
import { NavLink } from "react-router-dom";
import RegisterForm from '../../Components/RegisterFormStep1';
const RegistrationForm =()=>{

    return (
      <div className="page-container login-page">
        <div className="login-1 ds-flex-c-c">
          <div className="box-shadow1 login-forms-container">
            <div className="ds-flex-sa-c">
              <div
                
              >
                Create new user
              </div>
            </div>
            
            <div>
                <RegisterForm/>
            </div>
            
          </div>
         
          <div className="pic-div"></div>
        </div>
      </div>
    );
}
export default RegistrationForm;