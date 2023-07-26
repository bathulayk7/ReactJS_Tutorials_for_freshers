import React from "react";

const ForOf = () => {
  const arr = [45, 39, 68, 2, 7, 1];

  const forOfLoop = () => {
    let sum = 0;
    for (const val of arr) {
      sum += val;
    }
    console.log("sum=", sum);
  };

  const forOfMore = () => {
    for (const val of arr) {
      if(val>7)
      console.log(val);
    }
  };
  return (
    <div>
      <h1>For Of concept uses in react js</h1>
      {forOfLoop()}
      {forOfMore()}
    </div>
  );
};

export default ForOf;
