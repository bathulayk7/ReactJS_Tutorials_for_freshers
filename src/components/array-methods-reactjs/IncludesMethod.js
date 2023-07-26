import React from "react";

const IncludesMethod = () => {
  const arr = [39, 27, 49, 60];
  let car1 = { id: 1, carName: "ABC", carNumber: "ABC123", year: "2015" };
  let car2 = { id: 2, carName: "XYZ", carNumber: "XYZ789", year: "2022" };
  let car3 = { id: 3, carName: "KLM", carNumber: "KLM456", year: "2013" };
  const arrOfObj=[car1,car2,car3]

  let arrFalg = arr.includes(90);
  console.log("arrFalg", arrFalg);

  let arrOfObjFalg = arrOfObj.includes(car1);
  console.log("arrOfObjFalg", arrOfObjFalg);



  return <div>IncludesMethod</div>;
};

export default IncludesMethod;
