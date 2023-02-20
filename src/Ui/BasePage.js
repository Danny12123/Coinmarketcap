import React from "react";
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import About from "../Pages/About";
import Wallet from "../Pages/Wallet";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { Menu } from "antd";
import { FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { AiFillSetting } from "react-icons/ai";
// import { HiOutlineInboxArrowDown } from "react-icons/hi";
import { RiDraftLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

import "./styleUi.css";
import Recent from "../Component/Recent";
import Donate from "../Pages/Donate";
import Stake from "../Pages/Stake";
import { useUserAuth } from "../Context/UseAuthContext";
import Mainpage from "./Mainpage";
import { SideBarData } from "../Component/SideBarData";

const BasePage = () => {
  const navigate = useNavigate();


  const {user} = useUserAuth();
  // console.log(user)

  // const activeLink = { backgroundColor: '#181839',
  //   borderLeft: '#f5f5f5 2px solid'}
  // const normalLink = { color: '#f5f5f5'}

  return (
    <div id="basepage">
      <div className="sidebar">
        <div className="logo">
          <img src="./image/icons/logo1.png" alt="IMAGE" />
        </div>
        <div>{SideBarData.map((item, index)=> {
          return (
            <div id="nva_holder" key={index}>
              <NavLink style={{textDecoration: "none"}} to={item.path}>
                <div className="nac_item">
                  <span className="nav_icon">{item.icon}</span>
                  <span className="nav_name">{item.title}</span>
                </div>
              </NavLink>
            </div>
          );
        })}</div>
        
      </div>
      <div className="recent">
        <Recent />
      </div>
      <div id="content" className="rec_content">
        <Mainpage />
      </div>
    </div>
  );
};

export default BasePage;
