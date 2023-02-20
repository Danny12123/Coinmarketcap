import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import BasePage from './Ui/BasePage';
import SignIn from './Ui/SignIn';
import SignUp from './Ui/SignUp';
import VerifyAc from './Ui/VerifyAc';
import Router from './Routers/Router';
import { UserAuthContextProvider } from './Context/UseAuthContext';

const App = () => {
  return (
    <div className="app">
      {/* <BasePage /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <VerifyAc /> */}
      {/* <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes> */}
      <UserAuthContextProvider>
      <Router />
      </UserAuthContextProvider>
    </div>
  );
}

export default App
