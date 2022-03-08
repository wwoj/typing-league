import {React,useState,useRef} from 'react';
import DefaultUserPic from '../Pictures/UserDefault.jpg'
import RegisterStep1 from './RegisterStep1';
import RegisterStep2 from './RegisterStep2';
import RegisterStep3 from './RegisterStep3';



const RegisterForm = (props)=>{
  const [registrationStep, changeRegistrationStep] = useState(0);
  const [loginPicture, changeLoginPicture] = useState({ file: DefaultUserPic });
  const [userPassword, changeUserPassword] = useState("");
  const [userMail, changeUserMail] = useState("");
  const [userLogin, changeUserLogin] = useState("");



  const fileInput = useRef(null);
  const handleClick = () => {
    fileInput.current.click();
  };

 
  var registerStep1 = "register-step ds-flex-c-c";
  var registerStep2 = "register-step ds-flex-c-c";
  var registerStep3 = "register-step ds-flex-c-c";

  switch (registrationStep) {
    case 0:
      registerStep1 = "register-step ds-flex-c-c registration-inprogress";
      registerStep2 = "register-step ds-flex-c-c";
      break;
    case 1:
      registerStep1 = "register-step ds-flex-c-c registration-completed";
      registerStep2 = "register-step ds-flex-c-c registration-inprogress";
      break;
    case 2:
      registerStep1 = "register-step ds-flex-c-c registration-completed";
      registerStep2 = "register-step ds-flex-c-c registration-completed";
      registerStep3 = "register-step ds-flex-c-c registration-inprogress";
      break;
    case 3:
      registerStep1 = "register-step ds-flex-c-c registration-completed";
      registerStep2 = "register-step ds-flex-c-c registration-completed";
      registerStep3 = "register-step ds-flex-c-c registration-completed";
      break;
    default:
      registerStep1 = "register-step ds-flex-c-c";
      break;
  }
  const updStepReg = (idName) => {    
    switch (idName) {
      case "btnRegNext":
        changeRegistrationStep(registrationStep + 1);
        break;
      case "btnRegBack":
        changeRegistrationStep(registrationStep - 1);
        break;
      default: break;
    }
    if (registrationStep >= 3) {
      changeRegistrationStep(0);
    } else if (registrationStep <= -1) {
      changeRegistrationStep(3);
    }
  };

  const onImageChange = (event) => {
    console.log("ad 1");
    if (event.target.files && event.target.files[0]) {
      changeLoginPicture({
        file: URL.createObjectURL(event.target.files[0]),
      });
      console.log("loginPicture", loginPicture);
    }
  };
  const PasswordChanging = (event)=>{
    changeUserPassword(event.target.value);
  }
  const MailChanging = (event)=>{
    changeUserMail(event.target.value);
  }
  
  return (
    <div className="container-login-form ds-flex-c-c ds-flex-dir-c">
      <div className="" style={{ width: "95%" }}>
        <div className="ds-flex-sa-c">
          <div className={registerStep1}>1</div>
          <div className="register-line"></div>
          <div className={registerStep2}>2</div>
          <div className="register-line"></div>
          <div className={registerStep3}>3</div>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {registrationStep === 0 ? <RegisterStep1 mailChanging={MailChanging} passwordChanging ={PasswordChanging} updStepReg={updStepReg} userMail={userMail} userPassword={userPassword}/> : ""}
          {registrationStep === 1 ? <RegisterStep2 onImageChange ={onImageChange} fileInput={fileInput} handleClick={handleClick} updStepReg={updStepReg} loginPicture={loginPicture} changeUserLogin={changeUserLogin} userLogin={userLogin}/> : ""}
          {registrationStep === 2 ? <RegisterStep3 userMail={userMail} userLogin={userLogin} loginPicture={loginPicture}/> : ""}

          
        </form>
      </div>
    </div>
  );
}
export default RegisterForm;