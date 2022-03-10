import {React,useState,useEffect,useRef} from 'react';
import { checkLoginAvailable } from '../Services/loginCheck';
import Loader from './loader';

const RegisterStep2 = (props)=>{
  const [logingSatus,setLoginStatus]=useState({"avaliable":false,"notEmpty":true,"showTooltip":false});
  const btnNext = useRef(null);

  useEffect(() => {
    if(logingSatus.avaliable  )
    {

      let asd = btnNext.current.id;

      props.updStepReg(asd)
    }
  
}, [logingSatus.avaliable]);


return (
  <section>
    <div className="login-form-row">
      <p className="login-text">Login</p>
      <input
        type="text"
        className="login-input-format wd-input-text wd-input-text-padding"
        onChange={(e) => {
          props.changeUserLogin(e.target.value);
        }}
        defaultValue={props.userLogin}
      />
      <div
        className={`password-hint ${
          logingSatus.showTooltip ? "wrong-password" : "hidde-element"
        }`}
      >
        Login is already used, please choose another
      </div>
    </div>
    <div className="login-form-row">
      <p className="login-text">Select Icon</p>
      <input
        type="file"
        className="login-input-format "
        id="imgInp"
        onChange={props.onImageChange}
        ref={props.fileInput}
        style={{ display: "none" }}
      />
      <div className="ds-flex-sb-c">
        <button
          className="login-input-format wd-45 btn-login-action-sb wd-input-text-padding"
          onClick={() => props.handleClick()}
        >
          Select Icon
        </button>
        <img
          className="register-logo-img"
          alt="LogoPicture"
          src={props.loginPicture.file}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
    </div>
    <div className="login-form-row ds-flex-sb-c">
      <button
        id="btnRegBack"
        type="button"
        className="login-input-format  btn-login-action-sb btn-reg-step wd-45 wd-input-text-padding"
        onClick={(e) => {
          const idName = e.target.id;
          props.updStepReg(idName);
        }}
      >
        Back
      </button>
      <button
        id="btnRegNext"
        type="button"
        className="login-input-format btn-login-action-sb btn-reg-step wd-45 wd-input-text-padding"
        ref={btnNext}
        onClick={(e) => {
          props.setLoading({...props.pageStatus,
            'loading': true})
          const idName = e.target.id;
          const userObject = {
            login: props.userLogin,
          };
          checkLoginAvailable(userObject).then((result) => {
            setLoginStatus({
              avaliable: result,
              empty: false,
              showTooltip: !result,
            });
            props.setLoading({...props.pageStatus,
              'loading': false})
          });
        }}
      >
        NEXT
      </button>     
    </div>
    { props.pageStatus.loading? <Loader/>:""}
  </section>
);
}
export default RegisterStep2;