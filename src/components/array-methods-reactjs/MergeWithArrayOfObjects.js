import React from "react";

const MergeWithArrayOfObjects = () => {
  const arrOfObj1 = [
    { id: 1, carName: "ABC", carNumber: "ABC123" },
    { id: 2, carName: "XYZ", carNumber: "XYZ789" },
    { id: 3, carName: "KLM", carNumber: "KLM456" },
  ];

  const arrOfObj2 = [
    { id: 4, carName: "2ABC", carNumber: "2ABC123" },
    { id: 5, carName: "2XYZ", carNumber: "2XYZ789" },
    { id: 6, carName: "2KLM", carNumber: "2KLM456" },
  ];

  // const arrOfObj3=arrOfObj1.concat(arrOfObj2);
  const arrOfObj3 = [...arrOfObj1, ...arrOfObj2];
  console.log(arrOfObj3);

  return (
    <div>
      <h1>MergeWithArrayOfObjects</h1>
      {arrOfObj3 &&
        arrOfObj3.map((obj) => (
          <div key={obj.id}>
            <h3>
              CarName:{obj.carName}, CarNumber:{obj.carNumber}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default MergeWithArrayOfObjects;
