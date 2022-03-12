import {React,useState,useRef} from 'react';
import DefaultUserPic from '../../Pictures/UserDefault.jpg'
import RegisterStep1 from './RegisterStep1';
import RegisterStep2 from './RegisterStep2';
import RegisterStep3 from './RegisterStep3';
import RegisterStep4 from './RegisterStep4';




const RegisterForm = (props)=>{

  const [registrationStep, changeRegistrationStep] = useState(0);
  const [loginPicture, changeLoginPicture] = useState({ file: DefaultUserPic });
  const [selectedFile, setSelectedFile] = useState(DefaultUserPic);

  const [userPassword, changeUserPassword] = useState("");
  const [userMail, changeUserMail] = useState("");
  const [userLogin, changeUserLogin] = useState("");
  const [pageStatus, setLoading] = useState({'loading':false});

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
    if (registrationStep >= 4) {
      changeRegistrationStep(0);
    } else if (registrationStep <= -1) {
      changeRegistrationStep(3);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      changeLoginPicture({
        file: URL.createObjectURL(event.target.files[0]),
      });
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
          {registrationStep === 0 ? (
            <RegisterStep1
              mailChanging={MailChanging}
              passwordChanging={PasswordChanging}
              updStepReg={updStepReg}
              setLoading={setLoading}
              userMail={userMail}
              userPassword={userPassword}
              pageStatus={pageStatus}
            />
          ) : (
            ""
          )}
          {registrationStep === 1 ? (
            <RegisterStep2
              onImageChange={onImageChange}
              fileInput={fileInput}
              handleClick={handleClick}
              updStepReg={updStepReg}
              loginPicture={loginPicture}
              changeUserLogin={changeUserLogin}
              userLogin={userLogin}
              setLoading={setLoading}
              pageStatus={pageStatus}
            />
          ) : (
            ""
          )}
          {registrationStep === 2 ? (
            <RegisterStep3
              selectedFile={selectedFile}
              userMail={userMail}
              userLogin={userLogin}
              loginPicture={loginPicture}
              userPossword={userPassword}
              updStepReg={updStepReg}
              setLoading={setLoading}
              pageStatus={pageStatus}
            />
          ) : (
            ""
          )}
          {registrationStep === 3 ? (
            <RegisterStep4
              selectedFile={selectedFile}
              userMail={userMail}
              userLogin={userLogin}
              loginPicture={loginPicture}
              userPossword={userPassword}
              updStepReg={updStepReg}
              setLoading={setLoading}
              pageStatus={pageStatus}
            />
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}
export default RegisterForm;