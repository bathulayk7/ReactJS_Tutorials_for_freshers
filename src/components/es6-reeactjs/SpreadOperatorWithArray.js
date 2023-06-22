import React from "react";

const SpreadOperatorWithArray = () => {
const arr1=[100,200];
const arr2=[400,600];

const callArrFun=(a1,a2)=>{
  let newArr=[...a1,...a2,50,"welcome"];
  console.log("newArr",newArr)
}

  return (
    <div>
      <h1>SpreadOperatorWithArray</h1>
      {
        callArrFun(arr1,arr2)
      }
    </div>
  );
};

export default SpreadOperatorWithArray;
