import React from "react";

const JoinMethod = () => {
  const arr = [34, 57, 90, 68, 79];

  let arr1 = arr.join();
  let arr2 = arr.join("");
  let arr3 = arr.join(",");
  let arr4 = arr.join(" ");
  let arr5 = arr.join(" | ");


  return (
    <div>
      <h1>JoinMethod</h1>
      <h2>{arr1}</h2>
      <h2>{arr2}</h2>
      <h2>{arr3}</h2>
      <h2>{arr4}</h2>
      <h2>{arr5}</h2>
    </div>
  );
};

export default JoinMethod;
