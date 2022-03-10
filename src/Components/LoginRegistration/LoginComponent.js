import {React, useState,useRef,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { loginUserService } from '../../Services/LoginUser/loginUser';


// import {checkMailAvailable} from '../Services/mailCheck';
// import Loader from './loader';
const RegisterStep1 = (props)=>{
    // CHecked
const [showPassword, setShowPassword] = useState(false);
const [user,setUser]=useState({"Mail":"","Password":""});
//

  const [passwordValidation,checkPasswordValication]=useState();

  const [capslockStatus,changeCapsLockStatus]=useState();



  const passwordInput = useRef(null);
const updateState = (e)=>{
   let id = e.target.id;
   let value = e.target.value;
   switch (id) {
     case "Password":
       setUser({
         ...user,
         'Password': value,
       });
       break;
       case "Mail":
       setUser({
         ...user,
         'Mail': value,
       });
       break;
   }
   
}
  
const DetectCapsLock = (event)=>{
  if(event.getModifierState("CapsLock"))
  {
    changeCapsLockStatus(true);
  }
  else{
    changeCapsLockStatus(false);
  }
  const asd = event.target.id;
}
const loginUser = ()=>{

}
  

return (
  <section>
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="login-form-row">
        <p className="login-text">Email</p>
        <input
          type="text"
          id="Mail"
          className="login-input-format register-input-text wd-input-text wd-input-text-padding"
          onKeyUpCapture={(e)=>{
            console.log(e.target.id)
            updateState(e);
        }}
        />
      </div>
      <div className="login-form-row">
        <p className="login-text">Password</p>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            className={`login-password-input-text register-input-text           
          `}
          id="Password"
            ref={passwordInput}
            onKeyUpCapture={(e)=>{
                updateState(e);
            }}
            onKeyDown={DetectCapsLock}
            defaultValue={props.userPassword}
            autoComplete="off"
          />
          <button
            className={`btn-password-show ${showPassword ? "show-password" : ""}`}
            onClick={()=>{
                console.log("Show pass")
                setShowPassword(!showPassword)
            }}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
        
        {capslockStatus ? (
          <div className="wrong-password ">CAPSLOCK ACTIVE</div>
        ) : null}
      </div>

      <div className="login-form-row ds-flex-sb-c">
        <button
          id="btnRegNext"
          type="button"
          className="login-input-format wd-100 btn-login-action-sb btn-reg-step wd-input-text-padding"
          onClick={()=>{
            console.log("Login user")
            var formData = new FormData();
            formData.append("mail", user.Mail);
            formData.append("password",user.Password );
            loginUserService(formData)
              .then((res) => {
                // Save to local storage or session storage
                sessionStorage.setItem("UserLogged:",JSON.stringify(res));
                console.log("Result", typeof res, res);
              })
              .catch((e) => console.warn("Not ok"));
          }}
        >
          Log in
        </button>
      </div>
      <div className="login-form-row ds-flex-sb-c">
        <div>
          <p className="p-login">Not signed yet?</p>
          <p className="p-login">Create new account!</p>
        </div>
        <NavLink end to="/registration">
          <button
            id="registerUser"
            type="button"
            className="login-input-format wd-100 btn-login-action-sb btn-register wd-input-text-padding"
          >
            Register new user
          </button>
        </NavLink>
        
      </div>
      {/* { props.pageStatus.loading? <Loader/>:""} */}
    </form>
  </section>
);
}
export default RegisterStep1;