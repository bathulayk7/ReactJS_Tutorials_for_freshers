import React from "react";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useCustomAuth } from "../authContextStore/AuthProvider";

const HeaderPage = () => {
  const {user}=useCustomAuth();
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img
              src={logo}
              alt="logo-img"
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            Bootstrap
          </Link>
          <nav className="d-flex gap-4 me-5 fs-5 " >
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              About
            </NavLink>
            <NavLink
              to="/vehical"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Vehival
            </NavLink>
            <NavLink
              to="/navigate"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Navigate
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Contact
            </NavLink>
           
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/carCompany"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Car-Company
            </NavLink>
         
            {
            user &&
           <NavLink
              to="/dashboard
              "
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Dashboart
            </NavLink>}
            {
            !user &&
           <NavLink
              to="/login
              "
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Login
            </NavLink>}
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none text-primary "
                  : "text-decoration-none text-secondary "
              }
            >
              Profile
            </NavLink>
           
          </nav>
        </div>
      </nav>
    </>
  );
};

export default HeaderPage;
