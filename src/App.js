
import './App.css';
import { useState } from 'react';
import LoginRegistrationForm from './Views/LoginRegistrationForm';
// const url="https://localhost:44346/api/league";
const url1="https://localhost:44346/api/aspnetuser/login";
function App() {
  const[token,setToken]=useState();

  const[loginName,setLoginName]=useState("");
  const[loginMail,setMail]=useState("");
  const[loginPassword,setPassword]=useState("");

  const testFetch = function(){
    fetch(url1)
    .then((resp) => {
      return resp.text();
    })
    .then(result=>{
      console.log(result)
    })
  }
  const testFetch1 = function(){
    console.log("First attemp");
    fetch(url1, {
      method: "post",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ Login: loginName,Mail: loginMail, Password: loginPassword }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        
        console.log("Result 2",result);
      })
      .catch(error => console.log("Wrong login or password"));
  }
  const changeLoginName=function(event){
    let objectId = event.target.id;
    let objectValue=event.target.value;
    switch (objectId) {
      case "Login":
        setLoginName(objectValue);
        break;
      case "Mail":
        setMail(objectValue);
        break;
      case "Password":
        setPassword(objectValue)
        break;
    }      
  }
  if(!token)
  {
    return (
      <LoginRegistrationForm/>
    );
  }
  return (
    <div className="App">
      <button onClick={testFetch1}>Test fetch</button>
      <div>
        <input
          type="text"
          id="Login"
          placeholder="Login"
          onKeyUp={changeLoginName}
        />
        <label htmlFor="Login">Login</label>
      </div>
      <div>
        <input
          type="text"
          id="Mail"
          placeholder="Mail"
          onKeyUp={changeLoginName}
        />
        <label htmlFor="Mail">Mail</label>
      </div>
      <div>
        <input type="text" id="Password" placeholder="Password" onKeyUp={changeLoginName}/>
        <label htmlFor="Password">Password</label>
      </div>
      <div>States:
        <p>Login: {loginName}</p>
        <p>Mail: {loginMail}</p>
        <p>Password: {loginPassword}</p>

      </div>
      
    </div>
  );
}

export default App;
