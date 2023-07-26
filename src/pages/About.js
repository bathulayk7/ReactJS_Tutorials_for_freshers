import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <nav>
        <Link to="/about/about1">About1 </Link>
        <Link to="/about/about2">About2</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default About;
