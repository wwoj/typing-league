
import {React} from 'react';
import LoginForm from '../Components/LoginRegistration/LoginForm'
const LoginPage =(props)=>{

    return (
      <div className="page-container login-page">
        <div className="login-1 ds-flex-c-c">      
            <LoginForm token={props.token} setToken={props.setToken} setUserData={props.setUserData}/>            
          <div className="pic-div"></div>
        </div>     
      </div>
    );
}
export default LoginPage;