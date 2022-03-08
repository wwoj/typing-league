import {React, useState,useRef,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {checkMailAvailable} from '../Services/mailCheck';
const RegisterStep1 = (props)=>{
  const [mailValidation,checkMailValication]=useState();
  const [mailPatterValid,setMailPatterValid] =useState();
  const [passwordValidation,checkPasswordValication]=useState();

  const [capslockStatus,changeCapsLockStatus]=useState();
  const [showPassword,changeShowPassword]=useState();


  const [passwordHint,changePasswordHintClass]=useState("password-hint");


  const passwordInput = useRef(null);
  const btnNext = useRef(null);
  const PasswordValidation = (checkingText)=>{
   
        if ( checkingText.length <= 2) {
          checkPasswordValication(false);
          return;
        }
        else{
          checkPasswordValication(true);

        }
 
    
        return;
  }
  useEffect(() => {
   
    if(passwordValidation && mailValidation && mailPatterValid)
    {
      let asd = btnNext.current.id;
      props.updStepReg(asd)
    }
}, [passwordValidation,mailValidation]);
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
const ShowPasswordText = (event)=>
{
  !showPassword? changeShowPassword(true):changeShowPassword(false);
  const inputtype = passwordInput.current.type;

}
const CheckMailStatus = function(){
  let mailPatterStatus=false;
  const userObject = {
    "mail": props.userMail
  }
  mailPatterStatus= ValidateEmail(userObject.mail);// Checinkg th format of email
  setMailPatterValid(mailPatterStatus);
  return checkMailAvailable(userObject).then((result) => {
    checkMailValication(result);
  });
  
}
const ValidateEmail=(elementValue)=>{      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue); 
} 
return (
  <section>
    <div className="login-form-row">
      <p className="login-text">Email</p>
      <input
        type="email"
        className="login-input-format register-input-text wd-input-text wd-input-text-padding"
        onKeyUpCapture={props.mailChanging}
        defaultValue={props.userMail}
        // required
      />
    </div>
    <div
      className={`password-hint ${
        mailValidation === false ? "wrong-password" : "hidde-element"
      }`}
    >
      The email addres is already assigned to one of the account.
    </div>
    <div
      className={`password-hint ${
        mailPatterValid === false ? "wrong-password" : "hidde-element"
      }`}
    >
      Please provide teh right email address.
    </div>
    <div className="login-form-row">
      <p className="login-text">Password</p>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          className={`login-password-input-text register-input-text ${
            passwordValidation === false ? "wrong-input-val" : ""
          }          
          `}
          ref={passwordInput}
          onKeyUpCapture={props.passwordChanging}
          onKeyDown={DetectCapsLock}
          defaultValue={props.userPassword}
          autoComplete="off"
        />
        <button
          className={`btn-password-show ${showPassword ? "show-password" : ""}`}
          onMouseDown={ShowPasswordText}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <div
        className={`password-hint ${
          passwordValidation === false ? "wrong-password" : ""
        }`}
      >
        Must be 8 or more characters and contain at least 1 number, 1 special
        character, 1 uppercase letter and 1 lowercase letter
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
        onClick={(event) => {
          // On button click - > check all conditions then!!! make the action!
          const passwordVal = passwordInput.current.value;
          PasswordValidation(passwordVal);
          CheckMailStatus();
        }}
        ref={btnNext}
      >
        NEXT
      </button>
    </div>
  </section>
);
}
export default RegisterStep1;