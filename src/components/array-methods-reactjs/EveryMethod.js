import React from "react";

const EveryMethod = () => {
  const arr=[45,23,89,65,78,33,49];
  const arrOfObj = [
    { id: 1, carName: "ABC", carNumber: "ABC123",year:"2015" },
    { id: 2, carName: "XYZ", carNumber: "XYZ789",year:"2022" },
    { id: 3, carName: "KLM", carNumber: "KLM456",year:"2013" },
  ];

  let arrFlag=arr.every(ele=>ele>10);
  console.log("arrFlag=",arrFlag)

  let arrOfObjFlag=arrOfObj.every(obj=>obj.year<300);
  console.log("arrOfObjFlag=",arrOfObjFlag)

  return (
    <div>
      <h1>EveryMethod</h1>
    </div>
  );
};

export default EveryMethod;
