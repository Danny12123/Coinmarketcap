import React from 'react';
import { Route, Routes, useParams } from "react-router-dom";
import Home from '../Pages/Home';
import Wallet from '../Pages/Wallet';
import Profile from '../Pages/Profile';
import SignUp from './SignUp';
import SignIn from './SignIn';
import MyStories from '../Component/MyStories';

const Mainpage = () => {
  const {BasePage} = useParams();
  // console.log(BasePage)
  // if (BasePage) {
  //   return <Home />;
  // }
  
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="profile" element={<Profile />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          
        </Routes>
      </div>
    );
}

export default Mainpage
