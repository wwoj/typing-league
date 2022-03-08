import {React,useState} from 'react';
import RegisterForm from '../Components/RegisterFormStep1'
const LoginRegistrationForm =()=>{

  const [loginSignInStatus,changeLoginForm]= useState(true);


 
const loginForm = (
  <div className="container-login-form ds-flex-c-c ds-flex-dir-c">
    <div className="" style={{ width: "95%" }}>
      <form onSubmit={(event)=>{event.preventDefault()}}>
        <div className="login-form-row">
          <p className="login-text">Email</p>
          <input type="email" className="login-input-format" />
        </div>
        <div className="login-form-row">
          <p className="login-text">Password</p>
          <input type="password" className="login-input-format" autoComplete="off"/>
        </div>
        <div className="login-form-row">
          <input type="checkbox" /> <span>Remember me?</span>
        </div>
        <div className="login-form-row">
          <button
            type="submit"
            className="login-input-format wd-100 btn-login-action-sb"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
);

    return (
      <div className="page-container login-page" >
        <div className="login-1 ds-flex-c-c">
          <div className="box-shadow1 login-forms-container">
            <div className="ds-flex-sa-c">
              <button
                className={loginSignInStatus? "btn-login-action": "btn-login-action btn-login-action-inactive" }
                onClick={() => {
                  changeLoginForm(true)
                  console.log("Login form",loginSignInStatus);
                }}
                autoComplete="on"
              >
                Sign in
              </button>
              <button
                className= {loginSignInStatus? "btn-login-action btn-login-action-inactive": "btn-login-action" }
                onClick={() => {
                  changeLoginForm(false)
                  console.log("Registration form",loginSignInStatus);
                }}
                autoComplete="on"
              >
                Sing up
              </button>
            </div>
            {loginSignInStatus? loginForm:<RegisterForm/>}
            
          </div>
          <div className="pic-div"></div>
        </div>
      </div>
    );
}
export default LoginRegistrationForm;