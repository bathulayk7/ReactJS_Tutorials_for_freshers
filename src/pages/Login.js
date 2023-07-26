import React from "react";
import { useCustomAuth } from "../authContextStore/AuthProvider";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useCustomAuth();
  const [userName, setUserName] = useState("");
  const navigate=useNavigate();
  const location=useLocation();
const redirect=location.state?.path ||"/home"
  const handleLogin = () => {
    login(userName);
    setUserName("");
    navigate(redirect,{replace:true});
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="form-control"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="col-3 mt-4">
          <button className="form-control" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
