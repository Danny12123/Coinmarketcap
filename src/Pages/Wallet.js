import React from 'react'
import { FaAd, FaCamera, FaReceipt, FaSeedling } from 'react-icons/fa';
import NavBar from '../Component/NavBar';
import "../Styles/wallet.css";

const Wallet = () => {
  return (
    <div>
      <NavBar />
      <section id="wallet_header">
        <div className="bg_wallet_header"></div>
        <div className="wallet_profile_img"></div>
        <div className="wallet_camera">
          <FaCamera />
        </div>
      </section>

      <section id="wallet_info">
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
            <button className="wa_btn_1">My Wallet</button>
            <button className="wa_btn_2">New Story</button>
          </div>
        </div>
      </section>

      <section id="wa_sec1">
        <div className="wa_sec1_logo">
          <img src="./image/logo.jpeg" alt="image_logo" />
          <div>
            <h2>Story</h2>
            <p>story Price (STORY)</p>
          </div>
          <div className="wa_sec1_graph"></div>
        </div>
        <div className="wa_sec1_amount">
          <h1>$0.0006566</h1>
          <span>52%</span>
        </div>
      </section>

      <section id="wa_sec2">
        <div className="wa_sec2_box1">
          <p>Estimated Portfolio Value</p>
          <h1>$322,800.76</h1>
          <span>6,942,000 STORY</span>
        </div>
        <div className="wa_sec2_box2">
          <div className="wa_sec2_send">
            <FaSeedling className="wa_ic" />
            <span>Send</span>
          </div>
          <div className="wa_sec2_send">
            <FaReceipt className="wa_ic" />
            <span>Receive</span>
          </div>
          <div className="wa_sec2_send">
            <FaAd className="wa_ic" />
            <span>Add</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wallet
