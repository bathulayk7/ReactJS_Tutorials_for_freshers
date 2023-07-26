import React from "react";
import { useCustomAuth } from "../authContextStore/AuthProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useCustomAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <>
      <div>Welcome {user}</div>
      <div className="row">
        <div className="col-3">
          <button className="form-control" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
