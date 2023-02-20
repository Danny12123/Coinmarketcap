import React, { useState } from "react";
import { useUserAuth } from "../Context/UseAuthContext";
import "../Styles/signIn.css";
import { Alert } from "bootstrap";
import {  useNavigate } from "react-router-dom";
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const { signIn } = useUserAuth();
    const navigate = useNavigate();

    const signInHandler =async e => {
        e.preventDefault();
        try {
          await signIn(email, password)
          navigate("/BasePage");
        }catch (err) {
          setErr(err.message)
        }
        setEmail("");
        setPassword("");
        setErr("");
    }
  return (
    <div className="sign">
      <div id="sign_input">
        <div className="sign_content">
          <div>
            <div className="sign_logo">
              <img src="./image/logo.jpeg" alt="image" />
              <h3>Story</h3>
            </div>
            <div className="sign_holder">
              <p>Sign into your account</p>
              {err && <Alert variant="danger">{err}</Alert>}
              <form>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter address"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button onClick={signInHandler}>Login into your account</button>
              </form>
              <p className="forget">
                Forgot password? <a href="#">Reset it</a>
              </p>
            </div>
          </div>
        </div>
        {/* <p>Don’t have an Account? Create Account</p> */}
        <div className="sign_slider">
          <div className="sign_slider_holder"></div>
        </div>
      </div>
    </div>
  );
}

export default SignIn
