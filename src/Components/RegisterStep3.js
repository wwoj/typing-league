import {React,useState,useRef} from 'react';
import { createUser } from '../Services/createUser';
import Loader from './loader';

const RegisterStep3 = (props)=>{
  const [picture,setPic]= useState();
  const initialFieldValues ={
    employeeId:0,
employeeName:'',
occupation:'',
imageName:'',
imageSrc:'',
imageFile:null
  }
  const [values,setValues] = useState(initialFieldValues)
  const btnNext = useRef(null)
return (
  <section>
    <div className="login-form-row ">
      <div className="ds-flex-c-c">
        <img
          className="register-logo-img"
          alt="LogoPicture"
          src={props.loginPicture.file}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
      <div>
        <p className="login-text">User mail:</p>
        <div className="login-input-format wd-input-text wd-input-text-padding register-text-conf">
          {props.userMail}
        </div>
      </div>
      <div>
        <p className="login-text">User Login:</p>
        <div className="login-input-format wd-input-text wd-input-text-padding register-text-conf">
          {props.userLogin}
        </div>
      </div>
      <div className="login-form-row ds-flex-sb-c">
        <button
          id="btnRegBack"
          type="button"
          className="login-input-format wd-45 btn-login-action-sb btn-reg-step wd-input-text-padding"
          onClick={(e) => {
            const idName = e.target.id;
            props.updStepReg(idName);
          }}
        >
          Back
        </button>
        <button
          type="button"
          id="btnRegNext"
          className="login-input-format wd-45 btn-login-action-sb btn-register wd-input-text-padding"
          ref={btnNext}
          onClick={(e) => {
            props.setLoading({ ...props.pageStatus, loading: true });
            var formData = new FormData();
            formData.append("login", props.userLogin);

            formData.append("mail", props.userMail);
            formData.append("password", props.userPossword);
            formData.append("formFile", props.selectedFile);
            if (typeof props.selectedFile === "string") {
              formData.append("formFile", null);
              formData.append(
                "formString",
                props.selectedFile.substring("data:image/jpeg;base64,".length)
              );
            } else {
              formData.append("formFile", props.selectedFile);
              formData.append("formString", null);
            }
            createUser(formData).then((res) => {
              props.setLoading({ ...props.pageStatus, loading: false });
              
              res ? props.updStepReg(btnNext.current.id) : alert("User not added");
            });
          }}
        >
          Register
        </button>
      </div>
    </div>
    {props.pageStatus.loading ? <Loader /> : ""}
  </section>
);
}
export default RegisterStep3;