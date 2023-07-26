import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UseNavigate = () => {
  const navigate = useNavigate();
  const address = "13-2-6";

  const handleContact = (event) => {
    event.preventDefault();
    navigate("/contact");
  };

  const handleContactAddr = (event) => {
    event.preventDefault();
    navigate("/contact", { state: { addr: address } });
  };

  return (
    <nav>
      <Link to="/" onClick={handleContact} className="text-decoration-none">
        Goto contact
      </Link>
      <br />
      <Link to="/" onClick={handleContactAddr} className="text-decoration-none">
        Goto contact with addr
      </Link>
    </nav>
  );
};

export default UseNavigate;
