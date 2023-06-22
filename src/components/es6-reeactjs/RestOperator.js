import React from "react";

const RestOperator = () => {
  const restParam = (x, y, ...arr) => {
    console.log("x=", x, "y=", y);
    console.log("arr", arr);
  };

  return (
    <div>
      <h1>RestOperator</h1>
      {restParam(10, 20, 80)}
      {restParam(10, 20)}
      {restParam(1, 2, 900,200,100)}
    </div>
  );
};

export default RestOperator;
