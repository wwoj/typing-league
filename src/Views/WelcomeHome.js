
import {React,useState} from 'react';
import LoginForm from '../Components/LoginRegistration/LoginForm'
const LoginPage =()=>{

    return (
      <div className="page-container login-page">
        <div className="login-1 ds-flex-c-c">      
            <LoginForm/>            
          <div className="pic-div"></div>
        </div>
      </div>
    );
}
export default LoginPage;