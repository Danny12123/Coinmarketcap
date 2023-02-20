import React from 'react';
import "../Styles/verify.css";

const VerifyAc = () => {
  return (
    <div>
      <div id="ver_holder">
        <div className="verify">
          <div>
            <div className="sign_logo">
              <img src="./image/logo.jpeg" alt="image" />
              <h3>Story</h3>
            </div>
            <div className="ver_cont">
              <h6>Verify Your account</h6>
              <p>
                A verification Link has been sent to the email address you{" "}
                <br />
                provided. Please click on the link to verify your email.
              </p>
            </div>
            <div className="ver_btn">
              <button className="ver_btn_1">Log in to your account</button>
              <button className="ver_btn_2">Resend verification link</button>
            </div>
          </div>
        </div>
        <div className="verify_option">
          <div className="ver_typ">
            <div className="rad_1">
              <input type="radio" />
              
              <p><span>Smart and Secured Network</span><br />
              A social platform dedicated to charity & crypto.</p>
            </div>
            <div className="rad_1">
              <input type="radio" />
              
              <p><span>Smart and Secured Network</span><br />
              A social platform dedicated to charity & crypto.</p>
            </div>
            <div className="rad_1">
              <input type="radio" />
              
              <p><span>Smart and Secured Network</span><br />
              A social platform dedicated to charity & crypto.</p>
            </div>
            <div className="rad_1">
              <input type="radio" />
              <p>
                <span>Smart and Secured Network</span><br />A social platform
                dedicated to charity & crypto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAc
