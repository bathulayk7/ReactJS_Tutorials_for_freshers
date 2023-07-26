import React from "react";

const FindMethod = () => {
  const arr = [34, 17, 45, 90, 23, 56, 45];
  const arrOfObj = [
    { id: 1, carName: "ABC", carNumber: "ABC123",year:"2015" },
    { id: 2, carName: "XYZ", carNumber: "XYZ789",year:"2022" },
    { id: 3, carName: "KLM", carNumber: "KLM456",year:"2013" },
  ];

  let arrEle = arr.find((ele) => ele === 45);
  let objVal=arrOfObj.find(obj=>obj.year==="2013")

  return (
    <div>
      <h1>FindMethod</h1>
      <h2>{arrEle}</h2>
      <h2>id:{objVal.id},CarName:{objVal.carName}</h2>
    </div>
  );
};

export default FindMethod;
