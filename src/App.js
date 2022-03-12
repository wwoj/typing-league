
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
  const[token,setToken]=useState(false);
  const[userData,setUserData]=useState("Test signal");

  

  return (
    <div className="App">
      <Navbar />
      <HashRouter>
        <Routes>
          <Route exact path="/" element={ token? <HomePage/>: <WelcomeHome  token={token} setToken={setToken} setUserData={setUserData}/>} />
          <Route exact path="/registration" element={<Registration />} />

          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
