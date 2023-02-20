import React, { useState } from "react";
import "../Styles/navBar.css";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useUserAuth } from "../Context/UseAuthContext";
import { AiOutlineScan } from "react-icons/ai";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { RxMixerHorizontal } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

import { SmBarData } from "./SideBarData";

import logo from '../Img/log.png';
import pic1 from '../Img/66.jpeg';


const NavBar = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const sidebarActive = () => {
    setActive(!active)
  }
  const onHover = () => {
    setHover(!hover);
  };
  const { user, logout } = useUserAuth();
  console.log(user);
  const handleLogOut = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div className="main-chat-nav">
        <div className="main-c-content">
          <form>
            <input type="text" className="border" placeholder="Search..." />
          </form>
          <div className="logo-profile" onMouseLeave={onHover}>
            <img src={pic1} alt="image" />
            <aside className="menu">
              <div onMouseEnter={onHover} className="menu-content">
                <h5>Danny</h5>
              </div>
              <div className="arrow-up"></div>
            </aside>
            {/* <div className="menu_items">
              <h2>hello</h2>
            </div> */}
            {hover ? (
              <div className="menu_items">
                <ul>
                  <li>Hey</li>
                  <li>
                    <Link to="/signup">SignUp</Link>
                  </li>
                  <li>SignUp</li>
                  <li>SignUp</li>
                  <li onClick={handleLogOut}>SignIn</li>
                </ul>
              </div>
            ) : (
              <FaAngleDown />
            )}

            <div className="imgpost">
              <img src={logo} alt="logo" />
              <h6>Post a Story</h6>
              {/* <BsImage /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="sm_nav_holder">
        <div className="small_screen">
          <div>
            <FaBars className="sm_fa" onClick={sidebarActive} />
          </div>
          <div>
            <AiOutlineScan className="sm_fa" />
            <MdFaceRetouchingNatural className="sm_fa" />
          </div>
        </div>
        {/*display sm nav */}
        <div className={active ? "sm_nav_link" : "disactiveat"}>
          <div className="sm_nav_btn">
            <GrClose className="sm_fa" onClick={sidebarActive} />
            <div>
              <AiOutlineScan className="sm_fa" />
              <MdFaceRetouchingNatural className="sm_fa" />
            </div>
          </div>
          <div className="sm_nav_header">
            <div className="sm_nav_email">
              <h6>Danny@mail.com</h6>
              <p>Wallet ID: sYd***y87v***uX</p>
            </div>
            <div className="sm_ver">
              <p>verified</p>
            </div>
          </div>

          <div className="sm_links">
            <div>
              {SmBarData.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    style={{ textDecoration: "none" }}
                    to={item.path}
                  >
                    <div className="sm_link_holder">
                      <div className="sm_link_tit">
                        <span>{item.icon}</span> <h6>{item.title}</h6>
                      </div>
                      <div className="sm_link_arr">{item.arrow}</div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>

        <div className="inp_search">
          <div className="sm_sear">
            <input type="search" placeholder="What are you looking for?" />
            <BsSearch className="ba_search" />
          </div>
          <div>
            <RxMixerHorizontal className="fa_mixer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
