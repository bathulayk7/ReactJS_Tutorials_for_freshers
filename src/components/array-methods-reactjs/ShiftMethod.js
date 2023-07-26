import React from "react";

const ShiftMethod = () => {
  let arr = ["ab", "cd", "xy", "az"];

  let arrOfObj = [
    { id: 1, book: "js", price: "45" },
    { id: 2, book: "rjs", price: "68" },
    { id: 3, book: "CSS", price: "34" },
    { id: 4, book: "java", price: "534" },
  ];

  //using shift() method.
  let shiftVal = arr.shift();
  console.log("shiftVal=", shiftVal, ", arr=", arr);

  let shiftObjVal = arrOfObj.shift();
  console.log("shiftObjVal=", shiftObjVal, ", arrOfObj=", arrOfObj);

  //using spread oerator and destruturing.
  let [arrVal, ...rest] = arr;
  arr = [...rest];
  console.log("arrVal=",arrVal,", arr=",arr)

  let [arrObjVal, ...restArrOfObj] = arrOfObj;
  arrOfObj = [...restArrOfObj];
  console.log("arrObjVal=",arrObjVal,", arrOfObj=",arrOfObj)

  return <div>ShiftMethod</div>;
};

export default ShiftMethod;
