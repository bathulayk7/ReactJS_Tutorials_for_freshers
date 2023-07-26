import React from "react";

const FindIndexMethod = () => {
  const arr = [45, 67, 89, "we", 56, 67];
  const arrOfObj = [
    { id: 1, carName: "ABC", carNumber: "ABC123",year:"2015" },
    { id: 2, carName: "XYZ", carNumber: "XYZ789",year:"2022" },
    { id: 3, carName: "KLM", carNumber: "KLM456",year:"2013" },
  ];

  let foundArr = arr.findIndex((ele) => ele === 67);
let foundArrOfObj=arrOfObj.findIndex(obj=>obj.year>2020)

  return (
    <div>
      <h1>FindIndexMethod</h1>
      <h2>found Arr val:{foundArr}</h2>
      <h2>found ArrOfObj val:{foundArrOfObj}</h2>

    </div>
  );
};

export default FindIndexMethod;
