import React from "react";

const FilterWithArrayOfObject = () => {
  const arrOfObj = [
    { id: 1, carName: "ABC", carNumber: "ABC123" },
    { id: 2, carName: "XYZ", carNumber: "XYZ789" },
    { id: 3, carName: "KLM", carNumber: "KLM456" },
  ];

  let newArrOfObj =
    arrOfObj && arrOfObj.filter((obj) => obj.id !== 1 && obj.id !== 3);

  return (
    <div>
      <h1>FilterWithArrayOfObject</h1>
      {newArrOfObj &&
        newArrOfObj.map((obj) => {
          return (
            <div key={obj.id}>
              <h1>
                CarName:{obj.carName}, CarNumber:{obj.carNumber}
              </h1>
            </div>
          );
        })}
    </div>
  );
};

export default FilterWithArrayOfObject;
