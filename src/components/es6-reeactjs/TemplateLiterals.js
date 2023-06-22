import React from "react";

const TemplateLiterals = () => {
    
  const getdetails = () => {
    let age = 20;
    const name = "Bathula";
    return `Your name ${name} is and age is ${age}`;
  };

  return (
    <div>
      <h1>TemplateLiterals</h1>
      <h2>{getdetails()}</h2>
    </div>
  );
};

export default TemplateLiterals;
