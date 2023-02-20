import React, { useState } from "react";
import { ImOpt } from "react-icons/im";
import "../Styles/signIn.css";
import { Link, useNavigate  } from "react-router-dom";
import { useUserAuth } from "../Context/UseAuthContext";
import { Alert } from "bootstrap";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [err, setErr] = useState("");
    const {signUp} = useUserAuth();
    const navigate = useNavigate();

    const signUpHandler = async(e) => {
        e.preventDefault();
        try {
          await signUp(email, password)
          navigate("/signin");
        }catch (err) {
          setErr(err.message)
        }

        // console.log({email, password, idNumber})
        setEmail("");
        setPassword("");
        setIdNumber("");
        setErr("")
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
              <p>Sign up for an account</p>
              {err && <Alert variant="danger">{err }</Alert>}
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
                <input
                  type="number"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  placeholder="Enter referral ID"
                />
                <button onClick={signUpHandler}>Create your account</button>
              </form>
            </div>
            <p className="p-c">
              By clicking the "Create your account" button, you agree to <br />
              StoryToken terms of use and privacy policy
            </p>
            <p className="got_account">
              Got an Account?
              <span>
                <Link to="/signin">
                  <a> Sign in</a>
                </Link>
                  
              </span>
            </p>
          </div>
        </div>
        <div className="sign_slider">
          <div className="sign_slider_holder"></div>
        </div>
      </div>
    </div>
  );
}

export default SignUp
