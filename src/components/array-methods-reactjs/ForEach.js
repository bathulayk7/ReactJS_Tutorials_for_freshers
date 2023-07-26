import React from "react";

const ForEach = () => {
  const arr = [3, 7, 2, 8, 10, 15];

  const arrOfObj = [{ x: 10 }, { x: 45 }, { x: 50 }];

  const callForEachArr = () => {
    console.log("forEach with an array");
    arr.forEach((ele) => console.log(ele));
  };

  const callForEachArrOfObj = () => {
    console.log("forEach with  array of objects");
    arrOfObj.forEach((obj) => console.log(obj.x));
  };


  return <div>
    {callForEachArr()}
    {callForEachArrOfObj()}
    </div>;
};

export default ForEach;
