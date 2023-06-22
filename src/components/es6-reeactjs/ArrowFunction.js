import React from "react";

const ArrowFunction = () => {
  const mul = x => x * x;
  const sub = (a, b) => a - b;
  const add = (i, j) => {
    let r=i+j;
    return r;
  };
  return (
    <div>
      <h1>
        {mul(2)}
        <br></br>
        {sub(4, 2)}
        <br></br>
        {add(4, 5)}
      </h1>
    </div>
  );
};

export default ArrowFunction;
