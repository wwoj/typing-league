import {React} from 'react';

const RegisterStep3 = (props)=>{
return (
  <section>
    <div className="login-form-row ">
      <div className='ds-flex-c-c'>
        <img
          className="register-logo-img"
          alt="LogoPicture"
          src={props.loginPicture.file}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
      <div>
        <p className='login-text'>User mail:</p>
        <div className="login-input-format wd-input-text wd-input-text-padding register-text-conf">{props.userMail}</div>
      </div>
      <div>
        <p className='login-text'>User Login:</p>
        <div className="login-input-format wd-input-text wd-input-text-padding register-text-conf">{props.userLogin}</div>
      </div>
      <div className="login-form-row ds-flex-sb-c">
        <button
          id="btnRegBack"
          type="button"
          className="login-input-format wd-45 btn-login-action-sb btn-reg-step wd-input-text-padding"
          onClick={(e) => {
            const idName = e.target.id;
            // props.updStepReg(idName);
          }}
        >
          Back
        </button>
        <button
          type="button"
          className="login-input-format wd-45 btn-login-action-sb btn-register wd-input-text-padding"
        >
          Register
        </button>
      </div>
    </div>
  </section>
);
}
export default RegisterStep3;