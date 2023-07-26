import React from "react";

const PopMethod = () => {
  let arr = ["ab", "cd", "kl"];
  let arrOfObj = [
    { id: 1, book: "js", price: "45" },
    { id: 2, book: "rjs", price: "68" },
    { id: 3, book: "CSS", price: "34" },
    { id: 4, book: "java", price: "534" },
  ];
  //using pop() method in react js.
  let popVal = arr.pop();
  console.log("popVal=", popVal, ", arr=", arr);
  let popObjVal = arrOfObj.pop();
  console.log("popObjVal=", popObjVal, ", arrOfObj=", arrOfObj);

  //using filter() method in react js.
  let popArrVal = arr[arr.length - 1];
  arr=arr.filter(ele=>ele!==arr[arr.length - 1])
  console.log("popArrVal=", popArrVal,",arr=",arr);

  let popArrObjVal = arrOfObj[arrOfObj.length - 1];
  arrOfObj=arrOfObj.filter(obj=>obj!==arrOfObj[arrOfObj.length - 1])
  console.log("popArrObjVal=", popArrObjVal,", arrOfObj=",arrOfObj);

  return <div>PopMethod</div>;
};

export default PopMethod;
