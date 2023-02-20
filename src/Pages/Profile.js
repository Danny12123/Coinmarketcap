import React, {useState} from 'react';
import NavBar from '../Component/NavBar';
import "../Styles/profile.css";
import { FaAd, FaCamera, FaReceipt, FaSeedling } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ProfilRouter from '../Routers/ProfilRouter';

const Profile = () => {
  const [profileImg1, setProfileImg1] = useState("./image/profile.jpg");
  const [profileImg2, setProfileImg2] = useState("./image/thumbnail.jpg");
  const [profileNavActive, setProfileNavActive] = useState(false);
  const showActiev = () => {
    setProfileNavActive(!profileNavActive);
  }
   const imageHandler1 = (e) => {
     const reader = new FileReader();
     reader.onload = () => {
       if (reader.readyState === 2) {
         setProfileImg1(reader.result);
       }
     };
     console.log(reader)
     reader.readAsDataURL(e.target.files[0]);
   };
   const imageHandler2 = (e) => {
     const reader = new FileReader();
     reader.onload = () => {
       if (reader.readyState === 2) {
         setProfileImg2(reader.result);
       }
     };
     console.log(reader)
     reader.readAsDataURL(e.target.files[0]);
   };
  return (
    <div>
      <NavBar />

      <section id="profile_header">
        <div className="bg_wallet_header">
          <img src={profileImg2} alt="" id="im2" />
        </div>
        <input
          type="file"
          name="image-thumbnail"
          id="input"
          onChange={imageHandler2}
          accept="image/*"
        />
        <div id="edit">
          <label htmlFor="input" className="image-upload edit_profile">
            edit profile
          </label>
        </div>
        <div className="wallet_profile_img">
          <img src={profileImg1} alt="" id="im2" />
        </div>
        <input
          type="file"
          name="image-profile"
          id="input2"
          onChange={imageHandler1}
          accept="image/*"
        />
        <div className="wallet_camera">
          <label htmlFor="input2" className="image-upload">
            <FaCamera className="fa_Camera" />
          </label>
          {/* <FaCamera /> */}
        </div>
      </section>

      <section id="profile_info">
        <div className="wa_info_name">
          <h5>John Willow</h5>
          <span> verified</span>
        </div>
        <div className="wa_info_dec">
          <p>
            @martiwillow <span>Wallet ID: 0x3466***3c9fe270491af8d</span> <br />
            Father, <br /> Philantropist, <br /> building a Sustainable future
          </p>
          <div className="wa_info_btn">
            <button className="wa_btn_1">New Story</button>
            <button className="wa_btn_2">My Wallet</button>
          </div>
        </div>
      </section>

      <section id="profile_route">
        <div className="profile_nav">
          <h6
            onClick={showActiev}
            className={
              profileNavActive
                ? "profile_nav_h profile_active"
                : "profile_nav_h"
            }
          >
            My Stories
          </h6>
          <h6 className="profile_nav_h">Favourite Stories</h6>
          <h6 className="profile_nav_h">Completed </h6>
        </div>
      </section>

      <section>
        <ProfilRouter />
      </section>
    </div>
  );
}

export default Profile
