
import './App.css';
import { useState } from 'react';
import LoginRegistrationForm from './Views/LoginRegistrationForm';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './Views/Home';
import Dashboard from './Views/Dashboard';
import WelcomeHome from './Views/WelcomeHome';
import Registration from './Views/Registration/Registration';
import Navbar from './Components/Navbar/Navbar';




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
      <div>
        <Navbar />
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<WelcomeHome />} />
            <Route exact path="/registration" element={<Registration />} />
          </Routes>
        </HashRouter>
        {/* <LoginRegistrationForm/> */}
        <button
          onClick={() => {
            setToken(!token);
          }}
        >
          Change token
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
