import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";
import LandingPage from "./landing";
import InvestPage from "./invest";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";

export default function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [type, setType] = React.useState("signIn");

  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass = "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <Router>
      <div className="App">
        <h2>Welcome to our webpage</h2>
        <Routes>
          <Route path="/" element={
            <div className={containerClass} id="container">
              <SignUpForm />
              <SignInForm />
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>"Luxury Made Simple"</h1>
                    <p>Sign in to our Gold Rental Universe</p>
                    <button
                      className="ghost"
                      id="signIn"
                      onClick={() => handleOnClick("signIn")}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>"Elevate Your Lifestyle"</h1>
                    <p>Sign Up for Premium Gold Rental Access</p>
                    <button
                      className="ghost "
                      id="signUp"
                      onClick={() => handleOnClick("signUp")}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/land" element={<LandingPage />} />
          <Route path="/inve" element={<InvestPage />} />
        </Routes>

        
      </div>
    </Router>
  );
}
